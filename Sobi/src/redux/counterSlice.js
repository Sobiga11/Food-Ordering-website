// import { createSlice } from "@reduxjs/toolkit"

// const counterSlice=createSlice({
//     name:"counter",
//     initialState:{
//         count:0,
//     },
//     reducers:{
//          increment:(state,action)=>{
//             state.count+=action.payload;
//          },
//          decrement:()=>{},
//     },
// });


// export const {increment,decrement}=counterSlice.actions;
// export default counterSlice.reducer;


import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "order",
    initialState: {
        itemCount: 0,
    },
    reducers: {
        increment: (state, action) => {
            state.itemCount += action.payload;
        },
        decrement: (state, action) => {
            state.itemCount -= action.payload;
        },
        reset: (state) => {
            state.itemCount = 0;
        },
    },
});

export const { increment, decrement, reset } = counterSlice.actions;
export default counterSlice.reducer;
