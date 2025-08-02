import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addItem: (state, action) => {
        const existingPlant = state.items.find(({ name }) => name === action.payload.name);

        if (existingPlant?.quantity) existingPlant.quantity++;
        else state.items.push({...action.payload, quantity: 1});
    },
    removeItem: (state, action) => {
        state.items = state.items.filter(({ name }) => name !== action.payload);
    },
    updateQuantity: (state, action) => {
        const { quantity } = action.payload;
        const existingPlant = state.items.find(({ name }) => name === action.payload.name);

        if (existingPlant?.quantity) existingPlant.quantity = quantity;
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
