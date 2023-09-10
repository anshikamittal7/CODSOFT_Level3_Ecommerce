import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";
import productReducer from "./productSlice";
import cartReducer from "./cartSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        product: productReducer,
        cart: cartReducer,
    },

});

export default store;
