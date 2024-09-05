import React, { useState } from 'react'
import "./banner.css"

import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from '../slice/productSlice'

const Banner = () => {
  let dispatch = useDispatch();
  let data = useSelector((state) => state.product.value);
  console.log(data);
  

  let handleIncrement = () => {
    dispatch(increment());
    
  }
  return (
  
      <div className="banner">

        <h2>Increment</h2>
        {/* <button onClick={handleIncrement}>+</button> */}
        <button onClick={()=> dispatch(increment())}>+</button>
        <div className="one">{data}</div>
        <button onClick={()=> dispatch(decrement())}>-</button>
        <h2>Decrement</h2>
      </div>
    
  )
}

export default Banner