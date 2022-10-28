import { createSelector } from '@reduxjs/toolkit';

const cartItems = (state) => state.cart.cartItems;

export const selectTotalQquant = createSelector(cartItems, (items) =>
   items.reduce((totalQuant, curItem) => totalQuant + curItem.quantity, 0)
);

export const selectTotalPrice = createSelector(cartItems, (items) =>
   items.reduce((totalPrice, curItem) => totalPrice + curItem.quantity * curItem.product.salePrice, 0)
);
