import Container from '../Components/Container'
import Heading from '../Components/Heading'
import Paragraph from '../Components/Paragraph'
import Flex from '../Components/Flex'
import { Link } from 'react-router-dom'
import Breadcrumb from '../Components/Breadcrumb'
import { FaAngleRight } from "react-icons/fa6";

const MyAccountPage = () => {
  let bread = window.location.pathname.replace("/", "").replace("-", " ");

  return (
    <>

    <Container>
        <Heading  text="My Account" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32 "/>

        <Flex className="items-center pt-2.5 gap-x-1 pb-36">
        <Link to="/" className='first-letter:uppercase  text-secondaryColor text-[12px] font-dm font-normal'>Home</Link>
        <FaAngleRight className=' text-secondaryColor text-[12px] font-dm font-normal'/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
        </Flex>

        <div>
          <Paragraph text="Dashboard" className="text-primaryColor text-base font-dm font-bold"/>
        <div>
          <Paragraph text="Hello admin (not admin? Log out) From your account dashboard you can view your recent orders, manage your shipping and billing addresses, and edit your password and account details."
          
           className="text-secondaryColor text-base font-dm font-normal"/>
          </div>
          
        </div>
        </Container>
    </>
  )
}

export default MyAccountPage