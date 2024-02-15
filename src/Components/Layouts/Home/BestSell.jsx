import React, { useState } from "react";
import Container from "../../Container";
import Heading from "../../Heading";
import Product from "../../Product";
import Bagone from "../../../assets/bagone.png"
import Bagtwo from "../../../assets/bagtwo.png"
import Hat from "../../../assets/hat.png"
import Clock from "../../../assets/clock.png"
import Watch from "../../../assets/watch.png"
import Busket from "../../../assets/busket.png"
import Toy from "../../../assets/toy.png"
import Table from "../../../assets/table.png"
import Headphone from "../../../assets/headphone.png"
import Sunglass from "../../../assets/sunglass.png"
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import PrevArrow from "../../PrevArrow";
import NextArrow from "../../NextArrow";


const BestSell = () => {
  var settings = {
    dots: false,
    infinite: true,
    autoplay:true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />

  };
  const [product, setProduct] = useState([
    {
      title: "White Cap",
      price: 44.00,
      img:Hat
    },
    {
      title: "Black Bag",
      price: 44.00,
      img:Bagtwo
    },
    
    {
      title: "Gray Bag",
      price: 44.00,
      img:Bagone
    },
    {
      title: "Table Clock",
      price: 44.00,
      img:Clock
    },
    {
      title: "Digital Watch",
      price: 44.00,
      img:Watch
    },
    {
      title: "Busket",
      price: 44.00,
      img:Busket
    },
    {
      title: "Toy Rat",
      price: 44.00,
      img:Toy
    },
    {
      title: "Small Table",
      price: 44.00,
      img:Table
    },
    {
      title: "Headphone",
      price: 44.00,
      img:Headphone
    },
    {
      title: "Sunglass for Women",
      price: 44.00,
      img:Sunglass
    },
  ]);
  return (
    <section className='pb-[130px]'>
    <Container>
        <Heading text="Our Bestsellers" className="text-[39px] text-primaryColor font-dm font-bold pb-[48px]" as="h2"/>
      
        <Slider {...settings}>
      {product.map((el, index) => (
            <div className="w-1/4" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                className="w-full"
                
              />
            </div>
          ))}
    </Slider>
    </Container>
    </section>
  )
}

export default BestSell