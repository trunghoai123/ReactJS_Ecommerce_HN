import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import InputField from 'components/Input/InputField';
import { Button } from '@mui/material';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import QuantityField from 'components/Input/QuantityField';

const schema = yup
   .object()
   .shape({
      quantity: yup
         .number()
         .required('please enter Quantity')
         .positive('Please enter an positive quantity')
         .integer('quantity must be an integer')
         .typeError('Please enter a number'),
   })
   .required();
const AddToCartForm = ({ onSubmit }) => {
   const handleSubmit = async (values) => {
      if (onSubmit) {
         await onSubmit(values);
      }
   };
   const form = useForm({
      defaultValues: {
         quantity: '1',
      },
      mode: 'onSubmit',
      resolver: yupResolver(schema),
   });
   return (
      <Box autoComplete='off' component='form' onSubmit={form.handleSubmit(handleSubmit)}>
         <QuantityField
            margin='dense'
            name='quantity'
            disabled={false}
            label='Quantity'
            form={form}
            autoFocus
         ></QuantityField>
         <Button fullWidth variant='contained' color='primary' type='submit'>
            Buy
         </Button>
      </Box>
   );
};

AddToCartForm.propTypes = {};

export default AddToCartForm;
