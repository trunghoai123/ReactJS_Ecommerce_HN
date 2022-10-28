import React from 'react';
import PropTypes from 'prop-types';
import { Box, Typography } from '@mui/material';
import { formatVND } from 'utils';
import AddToCartForm from './AddToCartForm';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/components/cartSlice';

const ProductInfor = ({ product }) => {
   const dispatch = useDispatch();
   const handleSubmitForm = ({ quantity }) => {
      const action = addToCart({
         id: product.id,
         product,
         quantity,
      });
      dispatch(action);
      console.log(quantity);
   };
   return (
      <Box>
         <Typography component='h2' variant='h3' sx={{ p: 2, fontWeight: '500' }}>
            {product?.name}
         </Typography>
         <Typography sx={{ p: 2, fontSize: '18px' }}>{product?.shortDescription}</Typography>
         <Box sx={{ p: 2, backgroundColor: 'lightGray' }}>
            <Typography sx={{ fontWeight: '500' }} variant='h4' component='span'>
               {formatVND(product?.salePrice)}
            </Typography>
            {product.isPromotion > 0 && (
               <>
                  <Typography
                     sx={{ ml: 2, textDecoration: 'line-through' }}
                     variant='h6'
                     component='span'
                  >
                     {formatVND(product?.originalPrice)}
                  </Typography>
                  <Typography variant='h6' sx={{ ml: 2 }} component='span'>
                     {'-' + product?.promotionPercent + '%'}
                  </Typography>
               </>
            )}
         </Box>
         <Box>
            <AddToCartForm onSubmit={handleSubmitForm}></AddToCartForm>
         </Box>
      </Box>
   );
};

ProductInfor.propTypes = {};

export default ProductInfor;
