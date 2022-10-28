import React from 'react';
import PropTypes from 'prop-types';
import { TextField } from '@mui/material';
import { Controller } from 'react-hook-form';

const InputField = ({ form, label, name, disabled, ...props }) => {
   const { errors, formState } = form;
   // console.log(errors);
   // console.log(formState);
   const hasErrors = errors[name];
   return (
      <Controller
         {...props}
         disabled={disabled}
         control={form.control}
         name={name}
         label={label}
         variant='outlined' // by default
         fullWidth
         as={TextField}
         error={!!hasErrors}
         helperText={errors[name]?.message}
      >
         {/* <TextField></TextField> */}
      </Controller>
   );
};

InputField.propTypes = {
   form: PropTypes.object.isRequired,
   name: PropTypes.string.isRequired,

   label: PropTypes.string,
   disabled: PropTypes.bool,
};
InputField.defaultValue = {
   label: '',
   disabled: false,
};

export default InputField;
