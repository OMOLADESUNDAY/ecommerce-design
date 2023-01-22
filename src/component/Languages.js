import React from 'react'
import {createContext, useContext } from 'react'
import './language.css'
import { langContext } from './Above'
const Languages = ({language}) => {
    const {id,name}=language
    const {languageHandler} = useContext(langContext);
  return (
    <div className="language_container">
      <small className='single_lang' onClick={()=>languageHandler(name)}>{name}</small>
    </div>
  );
}

export default Languages