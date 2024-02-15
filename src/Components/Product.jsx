import React from "react";
import Badge from "./Badge";
import Image from "./Image";
import { Link } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { FaArrowsRotate } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Slices/cartSlices";
import Flex from "./Flex";
import Paragraph from "./Paragraph";
import Price from "./Price";
import { increment, decrement } from '../Slices/counterSlice'

const Product = ({ imgSrc, badge, para, price, carInfo ,className,alt,href}) => {
  const dispatch = useDispatch();
  let cardItem = useSelector((data) => data.addCart.cartItem);

  let handleCart = () => {
    console.log("someone", carInfo);
    if (cardItem.find((el) => el.title === carInfo.title)) {
      let arr = cardItem.map((el) => {
        if (el.title === carInfo.title) {
          return {
            ...el,
            count: el.count + 1,
          };
        }
        return el;
      });

      dispatch(addToCart(arr));
    } else {
      dispatch(
        addToCart({
          ...carInfo,
          count: 1,
        })
      );
    }
  };

let disPatch =useDispatch()
  return (
    
      <div className=" group">
      <div className="relative overflow-hidden">
        <Link to={href}><Image src={imgSrc} alt={alt} className={`${className}`}/></Link>
        <Badge text={badge} className='absolute top-[20px] left-[26px] py-2 px-7'/>

       

          <div className='w-full bg-white absolute bottom-[-175px] group-hover:bottom-0 duration-500'>
            <div>
              <Flex className="items-center justify-end pr-5 gap-x-4 py-4 hover:bg-gray-200 hover:text-xl hover:font-bold">
                <Paragraph text="add to Wish List" className="text-secondaryColor text-base"/>
                <FaHeart />
              </Flex>
            </div>
            <div className=' hover:bg-red-100'>
              <Flex className="items-center justify-end pr-5 gap-x-4 py-4 hover:bg-gray-200 hover:text-xl hover:font-bold">
                <Paragraph text="Compare" className="text-secondaryColor text-base"/>
                <FaArrowsRotate />
              </Flex>
            </div>
            <div onClick={()=>disPatch(increment())}>
            <div onClick={handleCart}>
              <Flex className="items-center justify-end pr-5 gap-x-4 py-4 hover:bg-gray-200 hover:text-xl hover:font-bold" >
                <Paragraph text="Add to Cart" className="text-secondaryColor text-base"/>
                <FaShoppingCart />
              </Flex>
            </div>
            </div>
            
        </div>
      </div>
      <Flex className='justify-between pt-[18px]'>
          <Paragraph text={para}  className="text-primaryColor text-[20px] font-dm font-bold"/>
          <Price text={`$ ${price}`} className="text-secondaryColor font-normal text-base pr-2"/>
        </Flex> 
      </div>

    
    
  );
};

export default Product;
