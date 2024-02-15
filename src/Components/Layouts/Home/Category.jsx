import { useEffect, useRef} from 'react'
import Container from '../../Container'
import Flex from '../../Flex'
import Bars from '../../Icons/Bars'
import Paragraph from '../../Paragraph'
import List from '../../List'
import { FaUser, FaCaretDown, FaShoppingCart, FaSearch ,  FaTimes} from "react-icons/fa"
import Image from '../../Image'
import Button from '../../Button'
import { Link } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { BsPlusLg } from "react-icons/bs";
import Heading from '../../Heading'


const Category = ({img}) => {

  const data = useSelector((state)=>state.alamin.value);

  const dropRef = useRef(null);
  const btnRef = useRef(null);
  const dropRefOne = useRef(null);
  const btnRefOne = useRef(null);
  const dropRefTwo = useRef(null);
  const btnRefTwo = useRef(null);

  let handleClick = (dropRefCmn, btnRefCmn) => {
    const dropStyle = dropRefCmn.current.style;

    if (dropStyle.display === "block") {
      dropStyle.display = "none";
    } else {
      dropStyle.display = "block";
    }
  };

  let handleClickOutSite = (event, dropRefCmn, btnRefCmn) => {
    if (
      dropRefCmn.current &&
      !dropRefCmn.current.contains(event.target) &&
      !btnRefCmn.current.contains(event.target)
    ) {
      dropRefCmn.current.style.display = "none";
    }
  };

  useEffect(() => {
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRef, btnRef);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefOne, btnRefOne);
    });
    document.addEventListener("click", (event) => {
      handleClickOutSite(event, dropRefTwo, btnRefTwo);
    });
    return () => {
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRef, btnRef);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefOne, btnRefOne);
      });
      document.removeEventListener("click", (event) => {
        handleClickOutSite(event, dropRefTwo, btnRefTwo);
      });
    };
  }, []);

  let dispatch = useDispatch();
  let cardItem = useSelector((data) => data.addCart.cartItem);

  let productPrice = cardItem.map((item) => {
    return parseFloat(item.price* item.count);
  });

  let subtotal = productPrice.reduce((sum, item) => {
    return (sum += item);
  }, 0);



  return (
    <section className='py-6 bg-categoryBgColor border-y border-borderColor relative'>
        <Container>
            <Flex className='items-center'>
                {/* Catagory Left Bar part start */}
                <div className='w-1/4'>
                    <Flex className='items-center'>
                      <div onClick={() => {
                  handleClick(dropRef, btnRef);
                }}
                ref={btnRef}>
                      <Link to="#"><Bars className="cursor-pointer"/></Link>
                      </div>
                        
                        <div ref={dropRef} className="bg-primaryColor w-64 text-sm font-dm absolute top-20 left-40 hidden z-50">
                               
                            <ul className='text-catagoryMenuText'>
                                <List to="#" text="Accesories" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Furniture" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Electronics" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Clothes" className="border-b border-catagoryMenuBorder block py-4 pl-5  hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Bags" className="border-b border-catagoryMenuBorder block py-4 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                                <List to="#" text="Home appliances" className="border-b border-catagoryMenuBorder block py-5 pl-5 hover:text-white hover:pl-8 hover:font-bold cursor-pointer duration-500"/>
                            </ul>
                        </div>
                       <Link to='#'> <Paragraph text='Shop by Category' className='pl-3 text-primaryColor text-sm'/></Link>
                    </Flex>
                </div>
                {/* Catagory Left Bar part end */}

                {/* Searchbox part start */}
                <div className='w-1/2'>
                    <Flex className='items-center text-center justify-center'>
                    <input type='text' placeholder='Search Products' className='w-[600px] py-4 pl-5 outline-transparent placeholder:text-placeholderColor placeholder:text-sm placeholder:font-dm placeholder:font-normal'/>
                    <Link to="#"><FaSearch className='ml-[-30px]'/></Link>
                    </Flex>
                </div>
                 {/* Searchbox part end */}

                 {/* Catagory right-side Icon part start */}
                <div className='w-1/4'>
                     <Flex className='justify-end items-center'>
                        <div  onClick={() => {
                    handleClick(dropRefOne, btnRefOne);
                  }}
                  ref={btnRefOne}>
                        <FaUser className="cursor-pointer"/>
                        </div>
                        <Link to="#"><FaCaretDown className="cursor-pointer"/></Link>
                        <div ref={dropRefOne} className="bg-white w-48 text-primaryColor text-sm font-dm text-center absolute top-20 right-52 hidden z-50">
                               
                            <ul className='text-black'>
                            <List to="/login" text="Login" className="border border-solid border-borderTwo block py-4 hover:bg-userHoverBg hover:text-white  hover:font-bold cursor-pointer duration-500"/>

                            <List to="/sign-up" text="Sign up" className="border border-solid border-borderTwo block py-4
                                hover:bg-userHoverBg   hover:text-white hover:font-bold  cursor-pointer duration-500"/> 
                            </ul>
                            
                        </div>
             
                        <div onClick={() =>  { handleClick(dropRefTwo, btnRefTwo);}} ref={btnRefTwo} className='relative'>
                          <FaShoppingCart className='cursor-pointer ml-10' onClick={() => setOpen(true)}/> 
                          <div className='bg-black  rounded-full p-[2px]  absolute top-[-12px] right-[-13px]'>
                            <Paragraph text={data} className="text-white leading-none text-[12px] font-dm font-normal"/>
                          </div>
                        </div>
                        <div ref={dropRefTwo} className="bg-categoryBgColor w-[360px]  border border-solid border-borderTwo absolute top-20 right-36 hidden z-50">
                          <div>
                          {cardItem.map((data, index) => (
                                <div>
                                  <Flex className="" key={index}>
                                  <Image src={data.img} alt={img} className='w-[25%] p-2'/>
                                  <div className='w-[60%]'>
                                  <Flex className="items-center pl-4 pt-2">
                                  <div className='text-primaryColor text-base font-dm font-bold leading-[36px] '>{data.title}</div>
                                  
                                  <div className='text-primaryColor text-lg font-dm font-bold leading-[36px] pl-10'>
                                  {data.count}
                                  </div>
                                  </Flex>
                                  <div className='text-primaryColor text-base font-dm font-bold leading-[36px] pl-4'>${data.count * data.price}</div>
                                  </div>
                                  
                                  <div  className='w-[40px] h-[40px] hover:bg-gray-200 rounded-full mt-6'>
                                  <BsPlusLg  className=' rotate-45  ml-2.5 mt-2.5 text-xl '/>
                                  </div>
                  
                                  </Flex>
                                
                                </div>
                              ))}
                          </div>
                          <div className='bg-white py-4'>
                         
                          <Flex className="items-center gap-x-1">
                            <Paragraph text="Subtotal:" className="text-secondaryColor font-DM text-base font-normal pl-4 pr-1"/>
                            <Heading text={`$${subtotal}.00`} as="h3" className="text-primaryColor font-DM text-base font-bold"/>
                          </Flex>
                          <Flex className='px-5 justify-between pt-4'>
                                <Button text="View Cart" className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primaryColor text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                                <Button text="Checkout" className="bg-white py-4 px-10 border border-solid border-userHoverBg text-primaryColor text-sm font-dm font-bold hover:bg-primaryColor hover:text-white"/>
                              </Flex>
                          </div>                        
                        </div>
                    </Flex> 
                </div>
                 {/* Catagory right-side Icon part end */}
            </Flex>
        </Container>
    </section>
  )
}

export default Category