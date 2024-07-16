import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        amount: 0.0,
        checkoutItems: [],
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload;
        },
        decrement: (state, action) => {
            state.value -= action.payload;
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.amount -= action.payload;
        },
        updateItemQuantity: (state, action) => {
            const { itemId, updateAction } = action.payload;
            const selectedItem = state.checkoutItems.find(item => item.itemId === itemId);

            if (selectedItem) {
                if (updateAction === 'increase') {
                    selectedItem.quantity += 1;
                } else if (updateAction === 'decrease' && selectedItem.quantity > 0) {
                    selectedItem.quantity -= 1;
                }

                selectedItem.totalPrice = selectedItem.singlePrice * selectedItem.quantity;
            }
        },

        addItem: (state, action) => {
            const { itemId, image, title, description, singlePrice, totalPrice, quantity } = action.payload;
            const existingItem = state.checkoutItems.find(item => item.itemId === itemId);

            if (existingItem) {
                existingItem.quantity += quantity;
                existingItem.totalPrice += totalPrice;
            } else {
                state.checkoutItems.push({ itemId, image, title, description, singlePrice, totalPrice, quantity });
            }

            state.value += quantity;
            state.amount += totalPrice;
        },
        removeItem: (state, action) => {
            const { itemId } = action.payload;
            const itemIndex = state.checkoutItems.findIndex(item => item.itemId === itemId);

            if (itemIndex !== -1) {
                const item = state.checkoutItems[itemIndex];
                state.value -= item.quantity;
                state.amount -= item.totalPrice;

                state.checkoutItems.splice(itemIndex, 1);
            }
        },
    },
});

export const { increment, decrement, incrementByAmount, decrementByAmount, addItem, removeItem, updateItemQuantity } = cartSlice.actions;

export default cartSlice.reducer;
