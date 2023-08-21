import React from 'react'
import "../App.css";

export const UserData = (props) => {
  return (
    <span className="data-row">
            <label className="data-label">{props.label}</label>
            <span className="data">{props.det}</span>
          </span>
         
  )
}
