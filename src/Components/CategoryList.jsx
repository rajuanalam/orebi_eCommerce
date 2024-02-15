import { useRef } from "react";
import Flex from "./Flex";
import { FaPlus } from "react-icons/fa6";
import Heading from "./Heading";
import Paragraph from "./Paragraph";

const CategoryList = ({text,className}) => {

    const categoryRef = useRef(null);
    const iconRef = useRef(null);
  
    const handleClick = () => {
        categoryRef.current.classList.toggle("h-20");
        categoryRef.current.classList.toggle("left-s0");
        iconRef.current.classList.toggle("rotate-45");
    };

  return (
    <>
      <div onClick={() => {handleClick()}} className="border-b border-solid border-borderTwo py-5">

      <Flex className="justify-between cursor-pointer items-center">
        <Heading text={text} as="h3" className={`${className} text-secondaryColor text-base font-dm font-normal py-2 inline-block`}/>
        <span ref={iconRef} className="rotate-0 duration-300 p-2 rounded-full hover:bg-secondaryColor text-secondaryColor hover:text-white">
          <FaPlus className=" text-11" />
        </span>
      </Flex>

      <div ref={categoryRef} className="h-0 overflow-hidden duration-300">
        <Paragraph text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis,
          beatae!" className="text-secondaryColor font-DM text-base pt-2 font-bold"/>
      </div>
    </div>
    </>
  )
}

export default CategoryList