import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cartItemCount: 0,
        totalAmount: 0.0,
        checkoutItems: [],
    },
    reducers: {
        increaseCartItem: (state, action) => {
            state.cartItemCount += action.payload;
        },
        decreaseCartItem: (state, action) => {
            if (action.payload > 0) {
                state.cartItemCount -= action.payload;
            }
        },
        increaseTotal: (state, action) => {
            state.totalAmount += action.payload;
        },
        decrementByAmount: (state, action) => {
            state.totalAmount -= action.payload;
        },
        updateItemQuantity: (state, action) => {
            const { itemId, updateAction } = action.payload;
            const selectedItem = state.checkoutItems.find(item => item.itemId === itemId);

            var tempAmt = state.totalAmount - selectedItem.totalPrice

            if (selectedItem) {
                if (updateAction === 'increase') {
                    selectedItem.quantity += 1;
                    state.cartItemCount += 1;
                } else if (updateAction === 'decrease' && selectedItem.quantity > 0) {
                    selectedItem.quantity -= 1;
                    state.cartItemCount -= 1;
                }

                selectedItem.totalPrice = selectedItem.singlePrice * selectedItem.quantity;
                state.totalAmount = (tempAmt + selectedItem.totalPrice).toFixed(2)
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
            state.totalAmount += totalPrice;
        },
        removeItem: (state, action) => {
            const { itemId } = action.payload;
            const itemIndex = state.checkoutItems.findIndex(item => item.itemId === itemId);

            if (itemIndex !== -1) {
                const item = state.checkoutItems[itemIndex];
                state.value -= item.quantity;
                state.totalAmount -= item.totalPrice;

                state.checkoutItems.splice(itemIndex, 1);
            }
        },
    },
});

export const {
    increaseCartItem,
    decreaseCartItem,
    increaseTotal,
    addItem,
    removeItem,
    updateItemQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
