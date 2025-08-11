import { createSlice } from "@reduxjs/toolkit";

const cartFromStorage = JSON.parse(localStorage.getItem('cart')) || [];

const initialState = {
    item: cartFromStorage
}

export const slice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
        add(state, action) {
            state.item.push(action.payload);
            localStorage.setItem('cart', JSON.stringify(state.item));
        },
        removeCart(state, action) {
            state.item = state.item.filter((item) => item.productId !== action.payload)
            localStorage.setItem('cart', JSON.stringify(state.item))
        }
    }
})
export const { add, removeCart } = slice.actions;
export default slice.reducer;