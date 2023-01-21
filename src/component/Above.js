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
  const [location, setLocation] = useState("");
  const [displayTracker,setDisplayTracker]=useState(false)
  
  const locationHandler=()=>{
    setDisplayTracker(!displayTracker)
  }
  const languageHandler=(name)=>{
    console.log(name)
    setLang(name)
  }
  
  return (
    <langContext.Provider value={languageHandler}>
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
            <FaAngleDown className="dropdown" onClick={languageHandler} />
            <p>Location</p>
            <p>{location}</p>
            <FaAngleDown className="dropdown" onClick={locationHandler} />
          </div>
        </div>
        <div className="lang_con">
          {languagesdata.map((language) => {
            const { id, name } = language;
            return <Languages key={language.id} language={language} />;
          })}
        </div>
        <div className="location_con">
          {locationdata.map((location) => {
            const { id, name } = location;
            return <Locations key={location.id} location={location} />;
          })}
        </div>
      </section>
    </langContext.Provider>
  );
}

export default Above