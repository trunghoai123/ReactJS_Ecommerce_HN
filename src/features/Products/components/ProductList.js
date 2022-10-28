import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';
import ProductItem from './ProductItem';

const ProductList = ({ products = [] }) => {
   return (
      <Box>
         <Grid container>
            {products.map((product, index) => {
               return (
                  <Grid item key={index} xl={2} lg={3} md={4} sm={6} xs={12}>
                     <ProductItem product={product}></ProductItem>
                  </Grid>
               );
            })}
         </Grid>
      </Box>
   );
};

ProductList.propTypes = {
   products: PropTypes.array,
};

export default ProductList;
