import React from 'react'

import "../App.css";
import { LeftArrow } from "./LeftArrow";

export const Details = (props) => {
  return (
    
            <div className="user-label-con">
            <LeftArrow/>
              <h3>User's {props.heading} </h3>
            </div>
            
        
  )
}
