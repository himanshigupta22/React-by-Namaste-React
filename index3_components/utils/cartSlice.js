import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        items: ["burger", "pizza"]
    },
    reducers: {
        // mutating the state over here
        addItem: (state, action) => {
           state.items.push(action.payload);
        },
        removeItems: (state) => {
            state.items.pop();
        },
        clearCart: (state) => {
           state.items.length = 0;
        }
     }
})

export const { addItem, removeItems, clearCart} = cartSlice.actions;

export default cartSlice.reducer;