import React from 'react'
import Label from './Label'
import Input from './Input'
import Flex from './Flex'
import Heading from './Heading'

const ReturningCustomer = () => {
  return (
    <>
    <div>
    <Heading text="Returning Customer" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px] pb-10"/>
    <Flex>
        <div className='w-[508px]'>
           <Label labelName="Email address" className="pb-2.5"/>
           <Input inType="email" inPh="company@domain.com" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Password" className="pb-2.5"/>
           <Input inType="password" inPh="Password" className="pb-4"/>
        </div>
        </Flex>
    </div>
    </>
  )
}

export default ReturningCustomer