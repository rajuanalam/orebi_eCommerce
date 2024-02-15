import Container from '../../Container'
import Flex from '../../Flex'
import Heading from '../../Heading'
import Image from '../../Image'
import List from '../../List'
import Paragraph from '../../Paragraph'
import Logo from "../../../assets/logo.png"
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <section className='bg-categoryBgColor py-[60px]'>
        <Container>
            <Flex>
                <div className='w-[945px]'>
                    <Flex className='justify-between'>
                        <div>
                            <Heading text="MENU" className="text-primaryColor text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul className='text-textColor'>
                                <List to="/" text="Home" className="pb-[6px] inline-block"/>
                                <List to="#" text="Shop" className="pb-[6px] inline-block"/>
                                <List to="about" text="About" className="pb-[6px] inline-block"/>
                                <List to="contacts" text="Contact" className="pb-[6px] inline-block"/>
                                <List to="#" text="Journal" className=" inline-block"/>
                            </ul>
                        </div>
                        <div>
                            <Heading text="SHOP" className="text-primaryColor text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul className='text-textColor'>
                                <List to="#" text="Category 1" className="pb-[6px] inline-block" />
                                <List to="#" text="Category 2" className="pb-[6px] inline-block"/>
                                <List to="#" text="Category 3" className="pb-[6px] inline-block"/>
                                <List to="#" text="Category 4" className="pb-[6px] inline-block"/>
                                <List to="#" text="Category 5" className=" inline-block"/>
                            </ul>
                        </div>
                        <div>
                            <Heading text="HELP" className="text-primaryColor text-base font-dm font-bold pb-[17px]" as="h4"/>
                            <ul className='text-textColor'>
                                <List to="#" text="Privacy Policy" className="pb-[6px] inline-block" />
                                <List to="#" text="Terms & Conditions" className="pb-[6px] inline-block"/>
                                <List to="#" text="Special E-shop" className="pb-[6px] inline-block"/>
                                <List to="#" text="Shipping" className=" pb-[6px] inline-block"/>
                                <List to="#" text="Secure Payments" className=" inline-block"/>
                            </ul>
                        </div>
                        <div className='w-[264px]'>
                            <Paragraph text="(052) 611-5711 company@domain.com" className="text-primaryColor text-base font-bold pb-[17px]"/>
                            <Paragraph text="575 Crescent Ave. Quakertown, PA 18951" className="text-textColor  text-sm  leading-[24px]"/>
                        </div>
                    </Flex>
                </div>
                <div>
                    <Image className='pl-[256px]' src={Logo}/>
                </div>
            </Flex>
            <Flex className="justify-between pt-[65px]">
                <div>
                 <Flex className="items-center gap-4 text-xl">
                    <FaFacebookF />
                    <FaLinkedinIn />
                    <FaInstagram />
                 </Flex>
                </div>
                <div>
                    <Paragraph text="2020 Orebi Minimal eCommerce Figma Template by Adveits" className="text-textColorr text-sm  leading-[24px] "/>
                </div>
            </Flex>
        </Container>
    </section>
  )
}

export default Footer