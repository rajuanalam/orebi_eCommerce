
import Pot from "../../../assets/pot.png"
import Bagone from "../../../assets/bagone.png"
import Itemone from "../../../assets/itemone.png"
import Bagtwo from "../../../assets/bagtwo.png"
import Sunglass from "../../../assets/sunglass.png"
import Hat from "../../../assets/hat.png"
import Clock from "../../../assets/clock.png"
import Toy from "../../../assets/toy.png"

import React, { useState } from "react";
import Flex from "../../Flex";
import Product from "../../Product";

const ShopProduct = () => {
  const [product, setProduct] = useState([
    {
      title: "Title One",
      price: 500,
      img:Hat
    },
    {
      title: "Title Two",
      price: 300,
      img:Bagtwo
    },
    {
      title: "Title Three",
      price: 200,
      img:Itemone
    },
    // {
    //   title: "Title Four",
    //   price: 100,
    //   img:Bagone
    // },
    // {
    //   title: "Title One",
    //   price: 500,
    //   img:Pot
    // },
    // {
    //   title: "Title Two",
    //   price: 300,
    //   img:Sunglass
    // },
    // {
    //   title: "Title Three",
    //   price: 200,
    //   img:Clock
    // },
    // {
    //   title: "Title Four",
    //   price: 100,
    //   img:Toy
    // },
  ]);
  return (
    <>
    <div>
    <Flex >
      
        <div className='w-[1228px] pl-5'>
        <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
           <Flex className="justify-between">
          {product.map((el, index) => (
            <div className="" key={index}>
              <Product
                imgSrc={el.img}
                badge="New"
                para={el.title}
                price={el.price}
                carInfo={el}
                
              />
            </div>
          ))}
           </Flex>
        </div>
      </Flex>
    </div>
    </>
  )
}

export default ShopProduct