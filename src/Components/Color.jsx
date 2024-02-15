import React from 'react'
import Flex from './Flex'
import Paragraph from './Paragraph'
import { FaCircle } from "react-icons/fa";

const Color = ({text,className,ColorClass}) => {
  return (
    <div>
        <Flex className='items-center border-b border-solid border-borderTwo py-5'>
            <FaCircle className={ColorClass}/>
            <Paragraph text={text} className={`${className}text-secondaryColor text-base font-dm font-normal  pl-2 inline-block`}/>
         </Flex>
    </div>
  )
}

export default Color