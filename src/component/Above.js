import React from 'react'
import { useState } from 'react'
import Headphones from '../categories/Headphones'

const Above = () => {
    const [show,setShow]=useState(false)
    const showHandler=()=>{
        setShow(!show)
    }
  return (
    <div>
        <div className="display">{show?<Headphones/>:''}</div>

        <button onClick={showHandler}>{show?'hide':'show'}</button>
    </div>
  )
}

export default Above