import React from 'react'

export const LeftArrow = () => {
  return (
    <div
    style={{width: "40px",
    height: "40px",
    backgroundColor: `hsl(` + Math.random() * 360 + `, 87%, 76%)`,
    clipPath:"polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
    }}></div>
  )
}
