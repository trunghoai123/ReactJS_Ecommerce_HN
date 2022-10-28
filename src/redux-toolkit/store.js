import {} from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import counterSlice from './Counter/counterSlice';
import userSlice from 'features/Auth/userSlice';
import cartSlice from 'features/Cart/components/cartSlice';
import photoSlice from 'features/Photo/components/photoSlice';

const rootReducer = {
   count: counterSlice,
   user: userSlice,
   cart: cartSlice,
   photo: photoSlice,
};

const store = configureStore({
   reducer: rootReducer,
});

export default store;
