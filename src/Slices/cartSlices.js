import { createSlice } from '@reduxjs/toolkit'

export const cartSlices = createSlice({
  name: 'cart',

  initialState: {

    cartItem:[],
    
  },

  reducers: {
    addToCart: (state, action) => {
      if (action.payload.length >= 0) {
        state.cartItem = action.payload;
      } else {
        state.cartItem.push(action.payload);
      }
    },

  },
})


export const { addToCart } = cartSlices.actions;

export default cartSlices.reducer;
