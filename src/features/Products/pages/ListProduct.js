import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Container, Grid, Pagination, Paper, Tab, Tabs } from '@mui/material';
import productApi from 'api/productApi';
import ProductSkeleton from '../components/ProductSkeleton';
import ProductList from '../components/ProductList';
import ProductSort from '../components/ProductSort';
import ProductFilter from '../components/ProductFilter';
import FilterViewer from '../components/FilterViewer';
import { parse, stringify } from 'query-string';
import { useHistory, useLocation } from 'react-router-dom';

const ListProduct = (props) => {
   const history = useHistory();
   // or use useLocation() to get search params;
   // const location = useLocation();
   console.log(history.location);
   // console.log('location: ', location);
   // const queryParams = parse(history.location.search);
   const queryParams = useMemo(() => {
      const params = parse(history.location.search);
      return {
         ...params,
         _limit: Number.parseInt(params._limit) || 12,
         _page: Number.parseInt(params._page) || 1,
         _sort: params._sort || 'salePrice:asc',
         isPromotion: params.isPromotion === 'true',
         isFreeShip: params.isFreeShip === 'true',
         // salePrice_gte: ;
         // salePrice_lte: ;
      };
   }, [history.location.search]);

   const [isLoading, setIsLoading] = useState(true);
   const [products, setProducts] = useState([]);
   // const [filters, setFilters] = useState(queryParams);
   // const [filters, setFilters] = useState(() => ({
   //    ...queryParams,
   //    _limit: Number.parseInt(queryParams._limit) || 12,
   //    _page: Number.parseInt(queryParams._page) || 1,
   //    _sort: queryParams._sort || 'salePrice:asc',
   // }));

   // const [filters, setFilters] = useState({
   //    _limit: 12,
   //    _page: 1,
   //    _sort: 'salePrice:asc',
   // });

   const [pagination, setPagination] = useState({
      limit: 12,
      page: 1,
      total: 12,
   });

   // useEffect(() => {
   //    history.push({
   //       pathname: history.location.pathname,
   //       search: stringify(filters),
   //    });
   // }, [history, filters]);

   useEffect(() => {
      // const fetch = async () => {
      //    const response = await productApi.getAll({ _page: 1, _limit: 10 });
      //    console.log({ response });
      // };
      // fetch();
      // or
      (async () => {
         try {
            const response = await productApi.getAll(queryParams);
            setProducts(response.data);
            setIsLoading(false);
            setPagination(response.pagination);
         } catch (error) {
            console.log(error);
         }
      })();
   }, [queryParams]);

   const handlePageChange = (event, page) => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
      // setFilters((prevFilters) => ({
      //    ...prevFilters,
      //    _page: page,
      // }));
      history.push({
         pathname: history.location.pathname,
         search: stringify({ ...queryParams, _page: page }),
      });
   };
   const handleSortChange = (event, value) => {
      // setFilters((prevFilters) => ({
      //    ...prevFilters,
      //    _sort: value,
      //    _page: 1,
      // }));
      history.push({
         pathname: history.location.pathname,
         search: stringify({ ...queryParams, _sort: value, _page: 1 }),
      });
   };
   const handleFilterChange = (newFilters) => {
      // setFilters((prevFilters) => ({
      //    ...prevFilters,
      //    ...filters,
      // }));
      history.push({
         pathname: history.location.pathname,
         search: stringify({ ...queryParams, ...newFilters }),
      });
   };
   const handleChangeFilterViewer = (newFilters) => {
      // setFilters(filters);
      history.push({
         pathname: history.location.pathname,
         search: stringify(newFilters),
      });
   };
   return (
      <div>
         <Box sx={{ pt: '30px' }}>
            <Container maxWidth='lg'>
               <Grid container spacing={1}>
                  <Grid sx={{ width: '300px' }} item>
                     <ProductFilter
                        filters={queryParams}
                        onFilterChange={handleFilterChange}
                     ></ProductFilter>
                  </Grid>
                  <Grid sx={{ flex: '1 1 0' }} item>
                     <Paper elevation={0}>
                        <FilterViewer
                           filters={queryParams}
                           onChange={handleChangeFilterViewer}
                        ></FilterViewer>
                        <ProductSort
                           sortValue={queryParams._sort || ''}
                           onChange={handleSortChange}
                        ></ProductSort>
                        {isLoading ? (
                           <Box>
                              <ProductSkeleton length={12}></ProductSkeleton>
                           </Box>
                        ) : (
                           <ProductList products={products}></ProductList>
                        )}
                        <Pagination
                           sx={{
                              display: 'flex',
                              justifyContent: 'center',
                              padding: '40px 0 40px 0',
                           }}
                           onChange={handlePageChange}
                           page={pagination.page}
                           count={Math.ceil(pagination.total / pagination.limit)}
                           color='primary'
                        />
                     </Paper>
                  </Grid>
               </Grid>
            </Container>
         </Box>
      </div>
   );
};

ListProduct.propTypes = {};

export default ListProduct;
