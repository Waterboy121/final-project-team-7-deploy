'use client';

import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    value: 0
}

export const counterSlice = createSlice({
    'name': "counter",
    initialState,
    reducers: {
        increment: (state) => { state.value += 1},
        decrement: (state) => {state.value -= 1},
        incrementByAmount: (state, amount) => {
            state.value += amount
        }
    }
})

export default counterSlice.reducer