
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items: [], 
    totalQuantity: 0,
    totalAmount: 0,
};

const cartSlice = createSlice({
    name: 'features',
    initialState,
    reducers: {
        addItem(state, action) {
            const newItem = action.payload;
            const existingItem = state.items.find(item => item.id === newItem.id);
            if (existingItem) {
                existingItem.quantity++;
                existingItem.totalPrice += newItem.price;
            } else {
                state.items.push({
                    ...newItem,
                    quantity: 1,
                    totalPrice: newItem.price,
                });
            }
            state.totalQuantity++;
            state.totalAmount += newItem.price;
        },
        removeItem(state, action) {
            const id = action.payload;
            const existingItem = state.items.find(item => item.id === id);
            if (existingItem) {
                state.totalQuantity -= existingItem.quantity;
                state.totalAmount -= existingItem.totalPrice;
                state.items = state.items.filter(item => item.id !== id);
            }
        },
        increaseQuantity(state, action) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            item.quantity++;
            item.totalPrice += item.price;
            state.totalQuantity++;
            state.totalAmount += item.price;
        },
        decreaseQuantity(state, action) {
            const id = action.payload;
            const item = state.items.find(item => item.id === id);
            if (item.quantity > 1) {
                item.quantity--;
                item.totalPrice -= item.price;
                state.totalQuantity--;
                state.totalAmount -= item.price;
            }
        }
    }
});

export const { addItem, removeItem, increaseQuantity, decreaseQuantity } = cartSlice.actions;
export default cartSlice.reducer;
