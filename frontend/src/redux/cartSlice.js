import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  subTotal: 0,
  tax: 0,
  shipping: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { product, quantity } = action.payload;
      const isItemExist = state.cartItems.find((i) => i._id === product._id);

      if (isItemExist) {
        state.cartItems.forEach((i) => {
          if (i._id === product._id) {
            i.quantity += quantity;
          }
        });
      } else {
        state.cartItems.push({ ...product, quantity });
      }
    },

    decrement: (state, action) => {
      const item = state.cartItems.find((i) => i._id === action.payload);
      console.log(item);
      
      if (item.quantity > 1) {
        item.quantity -= 1;
      }
    },
    
    deleteItem: (state, action) => {
      const id = action.payload;
      state.cartItems = state.cartItems.filter((i) => i._id !== id);
    },
    
    calculateTotals: (state) => {
      let sum = 0;

      state.cartItems.forEach((i) => {
        sum += i.price * i.quantity;
      });
      state.subTotal = sum;
      state.tax = Math.ceil(sum * 0.18);
      state.shipping = sum > 100 || sum === 0 ? 0 : 200;
      state.total = state.subTotal + state.tax + state.shipping;
    },
  },
});

export const { addToCart, decrement, deleteItem, calculateTotals } = cartSlice.actions;
export default cartSlice.reducer;