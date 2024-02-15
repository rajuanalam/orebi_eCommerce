import Flex from "../../Flex"
import Paragraph from "../../Paragraph"
import { Link } from "react-router-dom"
import { FaCaretDown } from "react-icons/fa";
import { useRef } from "react";
import PriceCategory from "../../PriceCategory";

const ShopByPrice = ({className}) => {
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
         <Flex className="items-center justify-between" >
           <Paragraph text="Shop by Price" className="text-primaryColor text-lg font-dm font-bold"/>
           <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
             <FaCaretDown onClick={handleCategory} className='rotate-0 duration-300'/>
           </Link>
         </Flex>
         <div ref={categoryRef} className='w-full hidden pl-2'>          
            <ul>
                <PriceCategory text="$0.00 - $9.99" className=""/>
                <PriceCategory text="$10.00 - $19.99"/>
                <PriceCategory text="$20.00 - $29.99"/>
                <PriceCategory text="$30.00 - $39.99"/>
                <PriceCategory text="$40.00 - $69.99"/>
            </ul>
         </div>
       </div>
   </>
  )
}

export default ShopByPrice