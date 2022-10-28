import React from 'react';
import PropTypes from 'prop-types';
import { Box, Grid, Skeleton } from '@mui/material';

const ProductSkeleton = ({ length }) => {
   return (
      <Box>
         <Grid container>
            {new Array(length).fill(0).map((item, index) => {
               return (
                  <Grid item key={index} xl={2} lg={3} md={4} sm={6} xs={12}>
                     <Box sx={{ p: 1 }}>
                        <Skeleton variant='rectangular' width='100%' height='200px' />
                        <Box sx={{ pt: 0.5 }}>
                           <Skeleton />
                           <Skeleton width='60%' />
                        </Box>
                     </Box>
                  </Grid>
               );
            })}
         </Grid>
      </Box>
   );
};

ProductSkeleton.propTypes = {
   length: PropTypes.number,
};
ProductSkeleton.defaultProps = {
   length: 6,
};

export default ProductSkeleton;
