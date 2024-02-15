import Heading from '../../Heading'
import Container from '../../Container'
import Flex from '../../Flex'
import ShopByColor from '../Shop/ShopByColor'
import ShopByCategory from '../Shop/ShopByCategory'
import ShopByBrand from '../Shop/ShopByBrand'
import ShopByPrice from '../Shop/ShopByPrice'
import { Link } from 'react-router-dom'
import Breadcrumb from '../../Breadcrumb'
import ShopProduct from './ShopProduct'
import { FaAngleRight } from "react-icons/fa";
import { useDispatch, useSelector } from 'react-redux'
import { pageName } from '../../../Slices/breadcrumbSlice'


const ShopPage = () => {

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
    <Heading  text="Products" as="h3" className="text-5xl font-bold font-dm text-primaryColor pt-32"/>

      <Flex className="items-center pt-2.5 gap-x-1">
        <Link to={`/${link}`} onClick={()=> handleBreadcrumb(data)} className='first-letter:uppercase  text-secondaryColor text-[12px] font-dm font-normal'>{data}</Link>
        <FaAngleRight className=' text-secondaryColor text-[12px] font-dm font-normal'/>
        <Link><Breadcrumb>{bread}</Breadcrumb></Link>
      </Flex>
      
      <Flex>
      <div className='w-[372px]'>
          <ShopByCategory />
          <ShopByColor />
          <ShopByBrand />
          <ShopByPrice />
       </div>
       <div className="pt-[137px] pb-[300px]">
        <ShopProduct />
       </div>
      </Flex>
      
    </Container>
    </>
  )
}

export default ShopPage