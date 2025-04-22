import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counterSlice";
import cartSlice from "./cartSlice";
import productSlice from "./ProductSlice"; // Import the new slice

const store = configureStore({
    reducer: {
        counter: counterSlice,
        cart: cartSlice,
        products: productSlice, // Add it to the store
    },
});

export default store;