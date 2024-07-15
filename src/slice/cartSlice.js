import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        value: 0,
        amount: 0.0,
    },
    reducers: {
        increment: (state, action) => {
            state.value += action.payload
        },
        decrement: (state, action) => {
            state.value -= action.payload
        },
        incrementByAmount: (state, action) => {
            state.amount += action.payload
        },
        decrementByAmount: (state, action) => {
            state.amount -= action.payload
        },
    },
})

export const { increment, decrement, incrementByAmount, decrementByAmount } = cartSlice.actions

export default cartSlice.reducer