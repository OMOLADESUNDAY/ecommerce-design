import React from 'react'
// import { useState } from 'react';
import Gruh from '../component/Gruh';
import { testdata } from "../data/test";
const simple = {
  display: "flex",
  flexDirection: "column",
  minWidth: "200px",
};

const Headphones = () => {
   
  return (
    <div>{testdata.map((item)=>{
        return (
          <div>
            <Gruh key={item.id} style={simple} {...item} />
            {console.log(item)}
          </div>
        );
    })}</div>
  )
}

export default Headphones