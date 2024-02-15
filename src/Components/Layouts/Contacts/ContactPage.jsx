import Container from '../../Container'
import Heading from '../../Heading'
import Label from '../../Label'
import Input from '../../Input'
import Button from '../../Button'
import Flex from '../../Flex'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Breadcrumb'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../../../Slices/breadcrumbSlice'

const ContactPage = () => {
  
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
        <Heading  text="Contacts" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>

      <Flex className="items-center pt-2.5 gap-x-1">
        <Link to={`/${link}`} onClick={()=> handleBreadcrumb(data)} className='first-letter:uppercase  text-secondaryColor text-[12px] font-dm font-normal'>{data}</Link>
        <FaAngleRight className=' text-secondaryColor text-[12px] font-dm font-normal'/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
      </Flex>

        <Heading text="Fill up a Form" as="h4" className="text-4xl font-bold font-dm text-primaryColor pt-36 pb-10"/>
    
    <div>
           <Label labelName="Name" className="pb-2.5"/>
           <Input inType="text" inPh="Your Name here" className="pb-4"/>
        </div>
        <div>
           <Label labelName="Email" className=" pt-6 pb-2.5"/>
           <Input inType="text" inPh="Your email here" className=" pb-4"/>
        </div>
        <div>
           <Label labelName="Message" className="pt-6 pb-2.5 "/>
           <textarea type="text" placeholder="Your message here"  className="w-1/2 font-dm text-base text-secondaryColor pb-20 focus:outline-none border-b-2 border-[#F0F0F0]"/>
        </div>
            <Button text="Post" className=" bg-primaryColor text-center py-4 px-20 text-white text-sm font-dm font-bold mt-8 mb-32"/>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d137545.74079047484!2d89.98247415631225!3d25.053452923523977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757d0c623aa02cf%3A0xac610521513a6cd2!2sSherpur%20District!5e0!3m2!1sen!2sbd!4v1706452092316!5m2!1sen!2sbd"  width="100%" height="572"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" className='mb-36'></iframe>
        </Container>
    </>
  )
}

export default ContactPage