import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../SignUpForm';
import { Avatar, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import { login } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';
import SignInForm from '../SignInForm';

const SignIn = ({ onClose }) => {
   const theme = createTheme();
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();

   const handleSubmit = async (values) => {
      try {
         const action = login(values);
         const resAction = await dispatch(action);
         const user = unwrapResult(resAction); // use unwrap to take payload from created action
         console.log('user:', user);
         onClose && onClose();
         enqueueSnackbar('Sign Ip successfully', { variant: 'success' });
      } catch (error) {
         enqueueSnackbar(error?.message || 'invalid message', { variant: 'error' });
      }
   };
   return (
      <ThemeProvider theme={theme}>
         <Avatar sx={{ bgcolor: 'secondary.main', marginX: 'auto', mb: 2 }}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography sx={{ mb: '12px' }} textAlign='center' component='h3' variant='h5'>
            Sign in
         </Typography>
         <SignInForm onSubmit={handleSubmit}></SignInForm>
      </ThemeProvider>
   );
};

SignIn.propTypes = {
   onClose: PropTypes.func,
};

SignIn.defaultProps = {
   onClose: () => {
      console.log('function has not passed');
   },
};
export default SignIn;
