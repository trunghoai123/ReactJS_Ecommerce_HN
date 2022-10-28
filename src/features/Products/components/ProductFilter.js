import React from 'react';
import PropTypes from 'prop-types';
import { Box, Paper } from '@mui/material';
import CategoryFilter from './filters/CategoryFilter';
import PricesFilter from './filters/PricesFilter';
import ServiceFilter from './filters/ServiceFilter';

const ProductFilter = ({ filters, onFilterChange }) => {
   const handleValuesChange = (values) => {
      onFilterChange &&
         onFilterChange({
            _page: 1,
            ...values,
         });
      // console.log(filters['category.id']);
   };
   return (
      <Box>
         <Paper sx={{ padding: 1.5 }} elevation={0}>
            <CategoryFilter onCategoryChange={handleValuesChange}></CategoryFilter>
            <PricesFilter onSubmitPrice={handleValuesChange}></PricesFilter>
            <ServiceFilter filters={filters} onChange={handleValuesChange}></ServiceFilter>
         </Paper>
      </Box>
   );
};

ProductFilter.propTypes = {
   onFilterChange: PropTypes.func.isRequired,
   filters: PropTypes.object.isRequired,
};

export default ProductFilter;
