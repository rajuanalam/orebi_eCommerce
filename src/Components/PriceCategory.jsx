import React from 'react'

const PriceCategory = ({text,className}) => {
  return (
    <li className={`${className} text-secondaryColor text-base font-dm font-normal  border-b border-solid border-borderTwo py-5 `}>{text}</li>
  )
}

export default PriceCategory