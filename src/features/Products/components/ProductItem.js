import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import { useHistory } from 'react-router-dom';
import { formatVND } from 'utils';
// import { makeStyles } from '@mui/styles';
// const useStyles = makeStyles({
//    pagination: {
//       justifyContent: 'center',
//    },
// });
// const classes = useStyles();

const ProductItem = ({ product = {} }) => {
   const history = useHistory();
   const imageUrl = product.thumbnail
      ? `${STATIC_HOST}${product.thumbnail.url}`
      : 'https://api.ezfrontend.com/uploads/e2c1e692c76e5aeb99baa2dcef13cdcb_d1f6440e7e.jpg';
   //or
   // : `${THUMBNAIL_PLACEHOLDER}/444`;
   const handleNavigate = () => {
      history.push(`/products/${product?.id}`);
   };
   return (
      <Box onClick={handleNavigate} sx={{ p: 1 }}>
         {/* <Skeleton variant='rectangular' width='100%' height={118} /> */}
         <Box sx={{ minHeight: '190px' }}>
            <img width='100%' src={imageUrl} alt={product.name} />
         </Box>
         <Box sx={{ pt: 0.5 }}>
            <Typography>{product.name}</Typography>
            <Typography>
               <Box component='span' sx={{ fontWeight: '500' }}>
                  {formatVND(product.salePrice)}
               </Box>
               <Box component='span' sx={{ fontSize: '14px' }}>
                  {product.promotionPercent > 0 ? ` - ${product.promotionPercent}%` : '❤😍🎉'}
               </Box>
            </Typography>
         </Box>
      </Box>
   );
};

ProductItem.propTypes = {
   product: PropTypes.object,
};

export default ProductItem;
