import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { ordered,restocked } from './CakeSlice'
export const Cakeview = () => {
  const noOfCake=useSelector((state)=>state.cake.noOfCakes)
  const dispatch = useDispatch()
  return (
    <div>
    <h2>Number Of cakes- {noOfCake}</h2>
    <button onClick={()=>dispatch(ordered())}>Order Cake</button>
    <button  onClick={()=>dispatch(restocked(5))}>Restocked cakes</button>
</div>
  )
}
