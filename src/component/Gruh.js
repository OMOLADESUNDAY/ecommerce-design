import React from 'react'
import { useState } from 'react';
const Gruh = ({name,description}) => {
    const [more, setMore] = useState(5);
    const [see, seeMore] = useState(true);
    
    const showMore = (description) => {
      seeMore(!see);
      if (see === true) {
        setMore(description.length);
        console.log(description);
      } else {
        setMore(5);
      }
    };
  return (
    <div >
      <div>{name}</div>
      <div>
        {description.slice(0, more)}
        <span
          style={{ cursor: "pointer" }}
          onClick={() => showMore(description)}
        >
          {see ? " see more" : " see less"}
        </span>
      </div>
    </div>
  );
}

export default Gruh