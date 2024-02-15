import React from 'react'
import Previous from './Icons/Previous';

const PrevArrow = (props) => {
    const { className, onClick } = props;
  return (
    <div
    className={`${className}bg-borderColor inline-block absolute top-1/2 -translate-y-1/2 left-4 z-10 `}
    // style={{ ...style, display: "inline-block", background: "red", }}
    onClick={onClick}><Previous /></div>
  )
}

export default PrevArrow