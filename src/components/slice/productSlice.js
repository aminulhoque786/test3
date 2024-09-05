

// 
import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

export const productSlice = createSlice({
  name: 'Product',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
     state.value += 1;
    },
    
    decrement: (state) => {
        if(state.value > 0){

            state.value -= 1;
        }
    },
    
  }
})

export const { increment, decrement } = productSlice.actions

export default productSlice.reducer
