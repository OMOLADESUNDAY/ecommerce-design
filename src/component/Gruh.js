import React from 'react'
import { useReducer } from 'react';
import { useState } from 'react';
import { reducer } from './reducer';

const defaultState={
  price:50,
  name:'gruh',
  show:false
}
const Gruh = () => {
  const changeName=()=>{
    const newName='sunday stephen'
    dispatch({type:"CHANGING NAME",payload:newName})
   
  }
  const [state,dispatch]=useReducer(reducer,defaultState)
  return (
    <div >
      {state.price}
      {state.name}
      <button onClick={changeName}>change name</button>   
    </div>
  );
}

export default Gruh