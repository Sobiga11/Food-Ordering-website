// import { createSlice } from "@reduxjs/toolkit";

// const productSlice = createSlice({
//     name: "products",
//     initialState: {
//         list: [], // Store all products
//         searchTerm: "" // Store search query
//     },
//     reducers: {
//         setProducts: (state, action) => {
//             state.list = action.payload;
//         },
//         setSearchTerm: (state, action) => {
//             state.searchTerm = action.payload;
//         }
//     }
// });

// export const { setProducts, setSearchTerm } = productSlice.actions;
// export default productSlice.reducer;



import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
    name: "products",
    initialState: {
        list: [], // Store all products
        searchTerm: "" // Store search query
    },
    reducers: {
        setProducts: (state, action) => {
            state.list = action.payload;
        },
        setSearchTerm: (state, action) => {
            state.searchTerm = action.payload;
        }
    }
});

export const { setProducts, setSearchTerm } = productSlice.actions;
export default productSlice.reducer;
