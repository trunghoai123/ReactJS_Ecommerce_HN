import React from 'react';
import PropTypes from 'prop-types';
import InputField from 'components/Input/InputField';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Box, Button, LinearProgress, Stack } from '@mui/material';
import PasswordField from 'components/Input/PasswordField';
const SignUpForm = ({ onSubmit }) => {
   const schema = yup
      .object()
      .shape({
         fullname: yup
            .string()
            .required('please enter Your full name')
            .min(5, 'title too short')
            .test('at lest two words', 'please enter at least two words', (text) => {
               if (!text || text.trim().split(' ').length >= 2) return true;
            }),
         email: yup.string().required('please enter Email').email('Please enter a valid email'),
         password: yup
            .string()
            .required('please enter password')
            .min(8, 'Please enter at least 8 characters'),
         retypepsw: yup
            .string()
            .required('please enter password')
            .oneOf([yup.ref('password')], "password doesn't match"),
         // retypepsw: yup.string().required('please enter title'),
      })
      .required();
   const form = useForm({
      defaultValues: {
         fullname: '',
         email: '',
         password: '',
         retypepsw: '',
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
            margin='dense'
            autoFocus
            name='fullname'
            disabled={false}
            label='Full Name'
            form={form}
         ></InputField>
         <InputField
            // type='email'
            margin='dense'
            name='email'
            disabled={false}
            label='Email'
            form={form}
         ></InputField>
         {/* <InputField margin='dense' name='password' disabled={false} label='Password' form={form}></InputField> */}
         {/* <InputField name='retypepsw' disabled={false} label='Re-Type Password' form={form}></InputField> */}
         <PasswordField
            margin='dense'
            name='password'
            disabled={false}
            label='Password'
            form={form}
         ></PasswordField>
         <PasswordField
            margin='dense'
            name='retypepsw'
            disabled={false}
            label='Re-Type Password'
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
            Sign Up
         </Button>
      </Box>
   );
};

SignUpForm.propTypes = {
   onSubmit: PropTypes.func,
};

export default SignUpForm;
