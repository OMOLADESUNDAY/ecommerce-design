import React from 'react'
import { createContext } from 'react'
import { useState } from 'react'
import {BsTelephone} from 'react-icons/bs'
import {FaAngleDown} from 'react-icons/fa'
import { languagesdata } from '../data/test'
import { locationdata } from "../data/test";
import './above.css'
import Languages from './Languages'
import Locations from './Locations'
export const langContext = createContext();
const Above = () => {
  const [lang ,setLang]=useState('Eng')
  const [location, setLocation] = useState("Nigeria");
  const [displayTracker,setDisplayTracker]=useState(false)
  const [displayTracker2, setDisplayTracker2] = useState(false);
  
  const locationHandler=(name)=>{
    setLocation(name)
  }
  const languageHandler=(name)=>{
    console.log(name)
    setLang(name)
  }
  const locationShowHandler=()=>{
    setDisplayTracker2(!displayTracker2);
  }
  const languageShowHandler = () => {
    setDisplayTracker(!displayTracker);
  };
  return (
    <langContext.Provider value={{languageHandler,locationHandler}}>
      <section className="above_container">
        <div className="above_inner_container">
          <div className="top">
            <BsTelephone />
            +234 706 925 8526
          </div>
          <div className="top">
            <small>Get 50% off on selected items</small>
            <div className="line"></div>
            <small>Shop Now</small>
          </div>
          <div className="top">
            <p>{lang}</p>
            <FaAngleDown className="dropdown" onClick={languageShowHandler} />
            <p>{location}</p>
            <FaAngleDown className="dropdown" onClick={locationShowHandler} />
          </div>
        </div>
        <div className="lang_con">
          {languagesdata.map((language) => {
            return(
              displayTracker?<Languages key={language.id} language={language} />:null
            ) 
          })}
        </div>
        <div className="location_con">
          {locationdata.map((location) => {
            return displayTracker2?<Locations key={location.id} location={location} />:null;
          })}
        </div>
      </section>
    </langContext.Provider>
  );
}

export default Above