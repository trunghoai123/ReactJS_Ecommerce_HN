import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
   name: 'cart',
   initialState: {
      showMiniCart: false,
      cartItems: [],
   },
   reducers: {
      showMiniCart(state) {
         state.showMiniCart = true;
      },
      hideMiniCart(state) {
         state.showMiniCart = false;
      },
      addToCart(state, action) {
         const item = action.payload;
         const index = state.cartItems.findIndex((currItem) => currItem.id === item.id);
         if (index >= 0) {
            state.cartItems[index].quantity += item.quantity;
         } else {
            state.cartItems.push(item);
         }
      },
      removeFromCart(state, action) {
         const id = action.payload;
         state.cartItems = state.cartItems.filter((item) => item.id !== id);
      },
      setQuantity(state, action) {
         const { id, quantity } = action.payload;
         const index = state.cartItems.findIndex((item) => item.id === id);
         if (index >= 0) {
            state.cartItems[index].quantity = quantity;
         }
      },
   },
});

export const { showMiniCart, hideMiniCart, addToCart } = cartSlice.actions;
export default cartSlice.reducer;
