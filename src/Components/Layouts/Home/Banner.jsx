import React from 'react'
import Image from '../../Image'
import Bannerimg from '../../../assets/bannerimg.jpg'
import Container from '../../Container'
import Flex from '../../Flex'
import Two from '../../Icons/Two'
import Paragraph from '../../Paragraph'
import { MdLocalShipping } from "react-icons/md";
import { FaUndoAlt } from "react-icons/fa";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { Link } from 'react-router-dom'

const Banner = () => {
  
    // Slider part Setting Start
    const settings = {
        
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true
      };
      // Slider part Setting End
  return (

    <section>
        {/* Banner Image Slider part Start */}
        <Slider {...settings}>
           
              <Link to="#"><Image src={Bannerimg} className='w-full'/></Link>
              {/* <a href="#"><Image src={Bannertwo} className='w-full'/></a> */}
           
        </Slider>
        {/* Banner Image Slider part End */}

        {/* Banner bottom part start */}
        <div  className='border border-borderTwo'>
        <Container> 
            <Flex className='py-6 justify-between'>
                {/* Banner bottom left part start */}
                <Flex className='gap-[17px]'>
                    <Two />
                    <Paragraph text='Two years warranty' className='text-textColor text-base'/>
                </Flex>
                {/* Banner bottom left part end */}

                {/* Banner bottom center part start */}
                <Flex className='gap-[17px] items-center'>
                    <MdLocalShipping className=' text-[28px]'/>
                    <Paragraph text='Free shipping' className='text-textColor text-base'/>
                </Flex>
                {/* Banner bottom center part end */}

                {/* Banner bottom right part start */}
                <Flex className='gap-[17px]'>
                    <FaUndoAlt className=' text-[20px] items-center' />
                    <Paragraph text='Return policy in 30 days' className='text-textColor text-base'/>
                </Flex>
                {/* Banner bottom right part end */}
            </Flex>
        </Container>
        </div>
        {/* Banner bottom part End */}
    </section>
  )
}

export default Banner