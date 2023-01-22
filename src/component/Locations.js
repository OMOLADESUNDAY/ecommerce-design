import React from 'react'
import { createContext, useContext } from "react";
import { langContext } from "./Above";
import './location.css'
const Locations = ({location}) => {
    const { id, name } = location;
    const {locationHandler} = useContext(langContext);
    return (
      <div className="location_container">
        <small className="single_location" onClick={() => locationHandler(name)}>
          {name}
        </small>
      </div>
    );
}

export default Locations