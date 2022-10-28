import React from 'react';
import PropTypes from 'prop-types';
import SignUpForm from '../SignUpForm';
import { Avatar, Button, Typography } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { makeStyles, ThemeProvider } from '@mui/styles';
import { createTheme } from '@mui/system';
import { useDispatch } from 'react-redux';
import { register } from 'features/Auth/userSlice';
import { unwrapResult } from '@reduxjs/toolkit';
import { useSnackbar } from 'notistack';

const useStyles = makeStyles((theme) => ({
   root: {},
   icon: {},
}));

const SignUp = ({ onClose }) => {
   const classes = useStyles();
   const theme = createTheme();
   const dispatch = useDispatch();
   const { enqueueSnackbar } = useSnackbar();

   const handleSubmit = async (values) => {
      try {
         values.username = values.email;
         const action = register(values);
         const resAction = await dispatch(action);
         const user = unwrapResult(resAction); // use unwrap to take payload from created action
         console.log('user:', user);
         onClose && onClose();
         enqueueSnackbar('Sign Up successfully', { variant: 'success' });
      } catch (error) {
         enqueueSnackbar(error?.message || 'invalid message', { variant: 'error' });
      }
   };
   return (
      <ThemeProvider theme={theme}>
         <Avatar className={classes.icon} sx={{ bgcolor: 'secondary.main', marginX: 'auto', mb: 2 }}>
            <LockOutlinedIcon />
         </Avatar>
         <Typography
            sx={{ mb: '12px' }}
            className={classes.title}
            textAlign='center'
            component='h3'
            variant='h5'
         >
            Sign up
         </Typography>
         <SignUpForm onSubmit={handleSubmit}></SignUpForm>
      </ThemeProvider>
   );
};

SignUp.propTypes = {
   onClose: PropTypes.func,
};

SignUp.defaultProps = {
   onClose: () => {
      console.log('function has not passed');
   },
};
export default SignUp;
