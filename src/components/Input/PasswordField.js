import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material';
import { Controller } from 'react-hook-form';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { FormHelperText } from '@mui/material';
const PasswordField = ({ form, label, name, disabled, ...props }) => {
   const { errors } = form;
   const [showPassword, setShowPassword] = useState(false);
   const handleToggleShowPassword = () => {
      setShowPassword((prevShow) => !prevShow);
   };
   // console.log(errors);
   // console.log(formState);
   const hasErrors = !!errors[name];
   return (
      // <Controller
      //    {...props}
      //    disabled={disabled}
      //    control={form.control}
      //    name={name}
      //    label={label}
      //    margin='dense'
      //    variant='outlined' // by default
      //    fullWidth
      //    as={TextField}
      //    error={!!hasErrors}
      //    helperText={formState.touched[name] && errors[name]?.message}
      // >
      //    {/* <TextField></TextField> */}
      // </Controller>
      <FormControl error={hasErrors} sx={{ mt: 1, width: '100%' }} variant='outlined'>
         <InputLabel htmlFor={name}>{label}</InputLabel>
         <Controller
            {...props}
            disabled={disabled}
            control={form.control}
            name={name}
            label={label}
            id={name}
            fullWidth
            as={OutlinedInput}
            error={!!hasErrors}
            type={showPassword ? 'text' : 'password'}
            endAdornment={
               <InputAdornment position='end'>
                  <IconButton
                     aria-label='toggle password visibility'
                     onClick={handleToggleShowPassword}
                     // onMouseDown={handleMouseDownPassword}
                     edge='end'
                  >
                     {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
               </InputAdornment>
            }
         />
         {hasErrors && <FormHelperText>{errors[name]?.message}</FormHelperText>}
      </FormControl>
   );
};

PasswordField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disabled: PropTypes.bool,
};
PasswordField.defaultValue = {
   label: '',
   disabled: false,
};

export default PasswordField;
