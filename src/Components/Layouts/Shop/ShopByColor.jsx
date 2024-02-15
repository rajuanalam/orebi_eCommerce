import { useRef } from "react";
import Flex from "../../Flex";
import Paragraph from "../../Paragraph";
import { Link } from "react-router-dom";
import { FaCaretDown } from "react-icons/fa";
import Color from "../../Color";

const ShopByColor = ({className}) => {

    const iconRef = useRef(null);
    const handleClickIcon = () => {
      iconRef.current.classList.toggle("rotate-180");
     
    };
  
    let categoryRef = useRef(0);
  
    let handleCategory = () => {
  
      if (categoryRef.current.style.display == "block") {
        categoryRef.current.style.display = "none"
      }
      else{
        categoryRef.current.style.display = "block"
      }
    };

  return (
    <>
       <div className={`${className} pt-10`}>
          <Flex className="items-center justify-between">
          <Paragraph text="Shop by Color" className="text-primaryColor text-lg font-dm font-bold pt-1"/>
         <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
         <FaCaretDown onClick={handleCategory}/>
         </Link>
          </Flex>
          <div ref={categoryRef} className='w-full hidden pl-2'>

          <Color text="Color 1" />
          <Color text="Color 2" ColorClass="text-red-400"/>
          <Color text="Color 3" ColorClass="text-green-400"/>
          <Color text="Color 4" ColorClass="text-blue-400"/>
          <Color text="Color 5" ColorClass="text-yellow-400"/>
          </div>
        </div>
    </>
  )
}

export default ShopByColor