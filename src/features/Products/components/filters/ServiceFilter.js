import React from 'react';
import PropTypes from 'prop-types';
import { Box, Checkbox, FormControlLabel, Typography } from '@mui/material';

const services = [
   {
      value: 'isPromotion',
      title: 'Discounting',
   },
   {
      value: 'isFreeShip',
      title: 'Free Shipping',
   },
];

const ServiceFilter = ({ filters, onChange }) => {
   const handleServiceChange = (e) => {
      onChange({ [e.target.name]: e.target.checked });
   };
   return (
      <Box component='form' onSubmit={onChange} sx={{ pt: '20px' }}>
         <Typography sx={{ fontWeight: '500', fontSize: '18px' }}>DỊCH VỤ</Typography>
         {/* <Box sx={{ display: 'flex', alignItems: 'center' }}></Box> */}
         {services.map((item) => {
            return (
               <FormControlLabel
                  key={item.value}
                  control={
                     <Checkbox
                        checked={Boolean(filters[item.value])}
                        onChange={handleServiceChange}
                        name={item.value}
                     />
                  }
                  label={item.title}
               />
            );
         })}

         <Box></Box>
      </Box>
   );
};

ServiceFilter.propTypes = {
   filters: PropTypes.object.isRequired,
   onChange: PropTypes.func.isRequired,
};

export default ServiceFilter;
