import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import userApi from 'api/userApi';
import StorageKeys from 'constants/storage-keys';

export const register = createAsyncThunk('user/register', async (user) => {
   const response = await userApi.register(user);

   localStorage.setItem(StorageKeys.TOKEN, response.jwt);
   localStorage.setItem('user', JSON.stringify(response.user));

   return response.user;
});

export const login = createAsyncThunk('user/login', async (user) => {
   const response = await userApi.login(user);

   localStorage.setItem(StorageKeys.TOKEN, response.jwt);
   localStorage.setItem('user', JSON.stringify(response.user));

   return response.user;
});

const userSlice = createSlice({
   name: 'user',
   initialState: {
      current: JSON.parse(localStorage.getItem(StorageKeys.USER)) || {},
      settings: {},
   },
   reducers: {
      logout: (state) => {
         localStorage.removeItem(StorageKeys.USER);
         localStorage.removeItem(StorageKeys.TOKEN);
         state.current = {};
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(register.fulfilled, (state, action) => {
            state.current = action.payload;
         })
         .addCase(login.fulfilled, (state, action) => {
            state.current = action.payload;
         });
   },
});

export const { logout } = userSlice.actions;

export default userSlice.reducer;
