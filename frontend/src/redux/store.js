import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./productsSlice";

const store = configureStore({
    reducer: {
        products: productsReducer,
        // Add other reducers if needed
    },
});

export default store;