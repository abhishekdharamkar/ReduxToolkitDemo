import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import { IceCreamordered,IceCreamrestocked } from './IceCreamSlice'
import { useState } from 'react'
export const IceCream = () => {
  const [value,SetValue]=useState()
  const noOfIcecream= useSelector((state)=>state.iceCream.noOfIceCream)
 const dispatch = useDispatch()

  return (
    <div>
    <h2>Number Of IceCream-{noOfIcecream}</h2>
    <button onClick={()=>dispatch(IceCreamordered(1))}>Order IceCream</button>
    <br/>
    <br/>
    <input type="number"
    value={value}
    onChange={(e)=>SetValue(parseInt(e.target.value))}
    />
  &nbsp;
    <button onClick={()=>dispatch(IceCreamrestocked(value))} >Restocked IceCream</button>
    <br/><br/>
     { noOfIcecream== 10 ? <video
            id="background-video"
            autoPlay
            loop
            muted
            width={680}
            height={360}
            src="http://media.w3.org/2010/05/sintel/trailer.mp4"
            type="video/mp4"
          ></video> : null}

</div>

  )
}
