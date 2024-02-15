import React from 'react'

const Badge = ({text,className}) => {
  return (
    <div className={`${className} py-2 px-7 bg-primaryColor text-white font-dm font-bold text-sm`}>{text}</div>
  )
}

export default Badge