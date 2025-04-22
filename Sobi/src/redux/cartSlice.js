// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice = createSlice({
//     name: "cart",
//     initialState: {
//         items: [],
//         totalItems: 0,
//         totalAmount: 0,
//     },
//     reducers: {
//         additem: (state, action) => {
//             const existingItem = state.items.find(item => item.id === action.payload.id);
//             if (existingItem) {
//                 existingItem.quantity += 1;
//             } else {
//                 state.items.push({ ...action.payload, quantity: 1 });
//             }
//             state.totalItems += 1;
//             state.totalAmount += action.payload.price;
//         },
//         incrementItem: (state, action) => {
//             state.items = state.items.map((item) => {
//                 if (item.id === action.payload.id) {
//                     return { ...item, quantity: item.quantity + 1 };
//                 } else {
//                     return item;
//                 }
//             });
//             const incrementedItem = state.items.find(item => item.id === action.payload.id);
//             state.totalAmount += incrementedItem.price;
//         },
//         decrementItem: (state, action) => {
//             state.items = state.items.map((item) => {
//                 if (item.id === action.payload.id && item.quantity > 1) {
//                     return { ...item, quantity: item.quantity - 1 };
//                 } else {
//                     return item;
//                 }
//             }).filter(item => item.quantity > 0);
//             const decrementedItem = state.items.find(item => item.id === action.payload.id);
//             if (decrementedItem) {
//                 state.totalAmount -= decrementedItem.price;
//             }
//         },
//         removeFromCart: (state, action) => {
//             const item = state.items.find((item) => item.id === action.payload);
//             if (item) {
//                 state.items = state.items.filter((item) => item.id !== action.payload);
//                 state.totalItems -= item.quantity;
//                 state.totalAmount -= item.price * item.quantity;
//             }
//         }
//     }
// });

// export const { additem, incrementItem, decrementItem, removeFromCart } = cartSlice.actions;
// export default cartSlice.reducer;




import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        items: [],
        totalItems: 0,
        totalAmount: 0,
    },
    reducers: {
        additem: (state, action) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += 1;
            } else {
                state.items.push({ ...action.payload, quantity: 1 });
            }
            state.totalItems += 1;
            state.totalAmount += action.payload.price;
        },
        incrementItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id) {
                    return { ...item, quantity: item.quantity + 1 };
                } else {
                    return item;
                }
            });
            const incrementedItem = state.items.find(item => item.id === action.payload.id);
            state.totalAmount += incrementedItem.price;
        },
        decrementItem: (state, action) => {
            state.items = state.items.map((item) => {
                if (item.id === action.payload.id && item.quantity > 1) {
                    return { ...item, quantity: item.quantity - 1 };
                } else {
                    return item;
                }
            }).filter(item => item.quantity > 0);
            const decrementedItem = state.items.find(item => item.id === action.payload.id);
            if (decrementedItem) {
                state.totalAmount -= decrementedItem.price;
            }
        },
        removeFromCart: (state, action) => {
            const item = state.items.find((item) => item.id === action.payload);
            if (item) {
                state.items = state.items.filter((item) => item.id !== action.payload);
                state.totalItems -= item.quantity;
                state.totalAmount -= item.price * item.quantity;
            }
        }
    }
});

export const { additem, incrementItem, decrementItem, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
