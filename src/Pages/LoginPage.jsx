import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Button from '../Components/Button'
import Paragraph from '../Components/Paragraph'
import { useEffect, useState } from 'react'
import axios from 'axios'
// import { FaRegSquare } from "react-icons/fa";
import Flex from '../Components/Flex'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import ReturningCustomer from '../Components/ReturningCustomer'
import { pageName } from '../Slices/breadcrumbslice'

const LoginPage = () => {
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
        <Heading  text="Login" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>

      <Flex className="items-center pt-2.5 gap-x-1">
        <Link to={`/${link}`} onClick={()=> handleBreadcrumb(data)} className='first-letter:uppercase  text-secondaryColor text-[12px] font-dm font-normal'>{data}</Link>
        <FaAngleRight className=' text-secondaryColor text-[12px] font-dm font-normal'/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
      </Flex>

        <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-secondaryColor text-base font-dm font-normal pt-[130px] pr-[950px] border-b border-borderBotColor pb-16"/>
       <form action='#'>
        <div>
            <ReturningCustomer />
        </div>
        <div>
            <Button text="Log in" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>

            <Heading text="New Customer" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-[57px]"/>

            <Paragraph text="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the." className="text-secondaryColor text-base font-dm font-normal pt-7 pr-[950px] border-b border-borderBotColor pb-16"/>

            <Button text="Continue" className=" bg-white text-center py-4 px-20 text-primaryColortext-sm font-dm font-bold border border-black hover:bg-primaryColor hover:text-white mt-12 mb-32"/>
        </div>
       </form>
    
       
       
       
    </Container>
    </>
  )
}

export default LoginPage