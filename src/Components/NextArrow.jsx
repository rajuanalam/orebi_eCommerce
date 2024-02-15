import React from 'react'
import Next from "../Components/Icons/Next"

const NextArrow = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`${className}bg-borderColor inline-block absolute top-1/2 -translate-y-1/2 right-4 z-10 `}
    // style={{ ...style, display: "inline-block", background: "red", }}
    onClick={onClick}><Next /></div>
  )
}

export default NextArrow