import React from 'react';
import PropTypes from 'prop-types';
import { IconButton, TextField, Typography } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Box } from '@mui/system';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

const QuantityField = ({ form, label, name, disabled, ...props }) => {
   const { errors, formState, setValue, getValues } = form;
   const hasErrors = errors[name];
   return (
      <Controller
         {...props}
         disabled={disabled}
         control={form.control}
         name={name}
         // label={label}
         variant='outlined' // by default
         fullWidth
         render={({ onChange, onBlur, name, value }) => (
            <Box>
               <Typography>{label}</Typography>
               <Box
                  sx={{
                     width: '200px',
                     display: 'flex',
                     justifyContent: 'flex-start',
                     alignItems: 'center',
                  }}
               >
                  <IconButton
                     onClick={() => {
                        setValue(name, Number.parseInt(value) ? Number.parseInt(value) - 1 : 1);
                     }}
                  >
                     <RemoveCircleOutlineIcon></RemoveCircleOutlineIcon>
                  </IconButton>
                  <TextField
                     onBlur={onBlur}
                     onChange={(e) => onChange(e.target.value)}
                     value={value}
                     size='small'
                     id='outlined-number'
                     type='number'
                     InputLabelProps={{
                        shrink: true,
                     }}
                  />
                  <IconButton
                     onClick={() => {
                        setValue(name, Number.parseInt(value) ? Number.parseInt(value) + 1 : 1);
                     }}
                  >
                     <AddCircleOutlineIcon></AddCircleOutlineIcon>
                  </IconButton>
               </Box>
               <Box sx={{ mb: 1 }}>
                  {hasErrors && (
                     <Typography sx={{ color: 'red' }} variant='div'>
                        {errors[name]?.message}
                     </Typography>
                  )}
               </Box>
            </Box>
         )}
         error={!!hasErrors}
         helperText={errors[name]?.message}
      ></Controller>
   );
};

QuantityField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disabled: PropTypes.bool,
};
QuantityField.defaultValue = {
   label: '',
   disabled: false,
};

export default QuantityField;
