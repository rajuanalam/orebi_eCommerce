import React from 'react'

const Price = ({text,className}) => {
  return (
    <p className={`${className} text-secondaryColor text-base font-dm font-normal pt-1 `}>{text}</p>
  )
}

export default Price