import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Label from '../Components/Label'
import Input from '../Components/Input'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { useEffect, useState } from 'react'
import axios from 'axios'
import Breadcrumb from '../Components/Breadcrumb'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { pageName } from '../Slices/breadcrumbSlice'

// import { FaRegSquare } from "react-icons/fa";


const SignUpPage = () => {
   let [all, setAll] = useState([])
 useEffect(()=>{
   async function all(){
      let data = await axios.get("https://restcountries.com/v3.1/all");
      setAll(data.data)
      }
      all()
    },[]);


    let bread = window.location.pathname.replace("/", "").replace("-", " ");
    let data = useSelector((state) => state.breadcrumb.currentname)
  
    let link = data.toLowerCase();
    if (link === "home") {
      link = link.replace("home", "");
    } else if(link === "sing up") {
      link = link.replace("sing up", "signup")
    }
    let dispatch = useDispatch()
    let handleBreadcrumb=(name)=>{
      dispatch(pageName(name))
    }

return (
    <>
    <Container>
        <Heading  text="Sign up" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>
        <Flex className="items-center pt-2.5 gap-x-1">
          <Link to={`/${link}`} onClick={()=> handleBreadcrumb(data)} className='first-letter:uppercase  text-secondaryColor text-[12px] font-dm font-normal'>{data}</Link>
          <FaAngleRight className=' text-secondaryColor text-[12px] font-dm font-normal'/>
          <Link><Breadcrumb>{bread}</Breadcrumb></Link>
        </Flex>
        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-secondaryColor text-base font-dm font-normal pt-[130px] pr-[950px] border-b border-borderBotColor pb-16"/>
        <Heading text="Your Personal Details" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px] pb-10"/>
    
       
       <Flex>
        <div className='w-[508px]'>
           <Label labelName="First Name" className="pb-2.5"/>
           <Input inType="text" inPh="First Name" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Last Name" className="  pb-2.5"/>
           <Input inType="text" inPh="Last Name" className=" pb-4"/>
        </div>
        </Flex>
        <Flex className='border-b border-borderBotColor pb-16 pt-6'>
        <div className='w-[508px]'>
           <Label labelName="Email address" className="pb-2.5"/>
           <Input inType="email" inPh="company@domain.com" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Telephone" className=" pb-2.5"/>
           <Input inType="number" inPh="Your phone number" className=" pb-4"/>
        </div>
        </Flex>

        <Heading text="New Customer" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px] pb-10"/>
        <Flex>
        <div className='w-[508px]'>
           <Label labelName="Address 1" className="pb-2.5"/>
           <Input inType="text" inPh="4279 Zboncak Port Suite 6212" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Address 2" className="  pb-2.5"/>
           <Input inType="text" inPh="—" className=" pb-4"/>
        </div>
        </Flex>
        <Flex className='pt-6'>
        <div className='w-[508px]'>
           <Label labelName="City" className="pb-2.5"/>
           <Input inType="text" inPh="Your city" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Post Code" className="  pb-2.5"/>
           <Input inType="text" inPh="05228" className=" pb-4"/>
        </div>
        </Flex>
        <Flex className='border-b border-borderBotColor pb-16 pt-6'>
        <div className='w-[508px]'>
           <Label labelName="Country" className=""/>
           <select className='border-b border-borderBotColor py-5 outline-none pr-[130px]'>
               {all.map(item=><option>{item.name.common}</option>)}
               
            </select>
        </div>
        <div className='w-[508px]'>
        <Label labelName="Region/State" className=""/>
           <select className='border-b border-borderBotColor py-5 outline-none pr-[390px]'>
               {all.map(item=><option>{item.region}</option>)}
               
            </select>
        </div>
        </Flex>

        <Heading text="Your Password" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px] pb-10"/>
        <Flex className='border-b border-borderBotColor pb-16 pt-6 mb-10'>
        <div className='w-[508px]'>
           <Label labelName="Password" className="pb-2.5"/>
           <Input inType="password" inPh="Password" className="pb-4"/>
        </div>
        <div className='w-[508px]'>
           <Label labelName="Repeat Password" className="  pb-2.5"/>
           <Input inType="password" inPh="Repeat password" className=" pb-4"/>
        </div>
        </Flex>

        <div >
         <Flex>
         <Input inType="checkbox" className="mr-3 " inValue='yes' />
     

         <Paragraph text='I have read and agree to the Privacy Policy' className='text-secondaryColor text-sm font-dm font-normal '/>
         </Flex>

         <Flex className='items-center pt-5  gap-x-3'>
         
         <Paragraph text='Subscribe Newsletter' className='text-secondaryColor text-sm font-dm font-normal pr-4'/>
        <div className='sub'>
        <Input inType="radio"  id="yes" inName="subscribe" className="appearance-none"/>
         <Label labelName='Yes' idfor="yes" className='text-secondaryColor text-sm font-dm font-normal pr-6 inline-block pl-2'/>
        </div>
         <div className="sub">
         <Input inType="radio" id="no" inName="subscribe" className="appearance-none"/>
         <Label labelName='No' idfor="no" className='text-secondaryColor text-sm font-dm font-normal inline-block pl-2'/>
         </div>
         </Flex>
         <Button text="Log in" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>
        </div>

    </Container>
    </>
  )
}

export default SignUpPage