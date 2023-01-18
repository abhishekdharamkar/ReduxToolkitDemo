
import { createSlice } from '@reduxjs/toolkit'

import { ordered, restocked } from '../cake/CakeSlice';
const initialState={
    noOfIceCream:20,
  }
  const icecreamSlice=createSlice({
    name:'icecream',
    initialState,
    reducers:{
        IceCreamordered:(state,action)=>{
        state.noOfIceCream -=action.payload
      },
      IceCreamrestocked:(state,action)=>{
        state.noOfIceCream +=action.payload
      },
    },
    // extraReducers:{
    //   ['cake/ordered']:(state)=>{
    //     state.noOfIceCream--;
    //   }
    // }
    
    // extraReducers:(builder)=>{
    //   builder.addCase(ordered,(state)=>{
    //     state.noOfIceCream--
    //   })
    // }
  })
// module.exports = cakeSlice.reducer
// module.exports.cakeActions=cakeSlice.actions;
export const { IceCreamordered, IceCreamrestocked } = icecreamSlice.actions

export default icecreamSlice.reducer