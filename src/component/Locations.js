import React from 'react'
import { createContext, useContext } from "react";
import { langContext } from "./Above";
const Locations = ({location}) => {
    const { id, name } = location;
    const languageHandler = useContext(langContext);
    return (
      <div className="location_container">
        <small className="single_location" onClick={() => languageHandler(name)}>
          {name}
        </small>
      </div>
    );
}

export default Locations