import React from 'react'
import Paragraph from './Paragraph'

const Brand = ({text,className}) => {
  return (
    <>
    <li className={`${className} border-b border-solid border-borderTwo pb-5 pt-5 text-secondaryColor text-base font-dm font-normal py-2`}>{text}</li>
    </>
  )
}

export default Brand