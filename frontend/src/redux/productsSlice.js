import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
    name: "products",
    initialState: {
        data: [],
        loading: false,
    },
    reducers: {
        setProducts: (state, action) => {
            state.data = action.payload;
            state.loading = false;
        },
        setLoading: (state, action) => {
            state.loading = action.payload;
        },
    },
});

export const { setProducts, setLoading } = productsSlice.actions;
export default productsSlice.reducer;
