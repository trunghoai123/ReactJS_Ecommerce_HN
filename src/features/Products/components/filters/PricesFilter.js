import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Box, Button, TextField, Typography } from '@mui/material';

const PricesFilter = ({ onSubmitPrice }) => {
   const [prices, setPrices] = useState({
      salePrice_gte: 0,
      salePrice_lte: 0,
   });
   const handleChangePrice = (e) => {
      setPrices((prevPrices) => ({
         ...prevPrices,
         [e.target.name]: e.target.value,
      }));
   };
   const handleSubmitPrices = (e) => {
      e.preventDefault();
      if (onSubmitPrice) {
         onSubmitPrice(prices);
         setPrices({
            salePrice_gte: 0,
            salePrice_lte: 0,
         });
      }
   };
   // console.log(prices);
   return (
      <Box component='form' onSubmit={handleSubmitPrices} sx={{ pt: '20px' }}>
         <Typography sx={{ fontWeight: '500', fontSize: '18px' }}>NHẬP GIÁ</Typography>
         <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <TextField
               onChange={handleChangePrice}
               value={prices.salePrice_gte}
               name='salePrice_gte'
               placeholder='10000'
            />
            {'  👉  '}
            <TextField
               onChange={handleChangePrice}
               value={prices.salePrice_lte}
               name='salePrice_lte'
               placeholder='30000'
            />
         </Box>
         <Box>
            <Button sx={{ mt: 1 }} type='submit' fullWidth variant='outlined'>
               Lọc
            </Button>
         </Box>
      </Box>
   );
};

PricesFilter.propTypes = {
   onSubmitPrice: PropTypes.func.isRequired,
};

export default PricesFilter;
