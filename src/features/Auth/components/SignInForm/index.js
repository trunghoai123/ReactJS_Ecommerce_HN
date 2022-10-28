import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/Input/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, LinearProgress, Stack } from '@mui/material';
import PasswordField from 'components/Input/PasswordField';
const SignInForm = ({ onSubmit }) => {
   const schema = yup
      .object()
      .shape({
         identifier: yup
            .string()
            .required('please enter Email(identifier)')
            .email('Please enter a valid email'),
         password: yup
            .string()
            .required('please enter password')
            .min(8, 'Please enter at least 8 characters'),
         // retypepsw: yup.string().required('please enter title'),
      })
      .required();
   const form = useForm({
      defaultValues: {
         identifier: '',
         password: '',
      },
      mode: 'onChange',
      resolver: yupResolver(schema),
   });
   const { isSubmitting } = form.formState;

   const handleSubmit = async (values) => {
      if (onSubmit) {
         await onSubmit(values);
      }
   };
   return (
      <Box autoComplete='off' component='form' onSubmit={form.handleSubmit(handleSubmit)}>
         <InputField
            // type='email'
            margin='dense'
            name='identifier'
            disabled={false}
            label='Identifier/Email'
            form={form}
            autoFocus
         ></InputField>
         <PasswordField
            margin='dense'
            name='password'
            disabled={false}
            label='Password'
            form={form}
         ></PasswordField>
         <Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
            {isSubmitting && <LinearProgress sx={{ mt: '12px' }} color='secondary' />}
         </Stack>
         <Button
            disabled={isSubmitting}
            type='submit'
            sx={{ padding: 1.2, mt: 2 }}
            variant='contained'
            fullWidth
         >
            Sign In
         </Button>
      </Box>
   );
};

SignInForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default SignInForm;
