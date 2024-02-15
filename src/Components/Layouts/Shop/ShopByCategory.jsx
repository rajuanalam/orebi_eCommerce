import Flex from "../../Flex"
import Paragraph from "../../Paragraph"
import { Link } from "react-router-dom"
import CategoryList from "../../CategoryList"
import { FaCaretDown } from "react-icons/fa";
import { useRef } from "react";

const ShopByCategory = ({className}) => {
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
       <div className={`${className} pt-10`}>
          <Flex className="items-center justify-between" >
            <Paragraph text="Shop by Category" className="text-primaryColor text-lg font-dm font-bold"/>
            <Link ref={iconRef} onClick={() => {handleClickIcon()}}>
              <FaCaretDown onClick={handleCategory} className='rotate-0 duration-300'/>
            </Link>
          </Flex>
          <div ref={categoryRef} className='w-full hidden pl-2'>
            <CategoryList text="Category 1" />
            <CategoryList text="Category 2" />
            <CategoryList text="Category 3" />
            <CategoryList text="Category 4" />
            <CategoryList text="Category 5" />
          </div>
        </div>
  )
}

export default ShopByCategory