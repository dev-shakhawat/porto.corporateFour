import React from 'react'
import Marquee from "react-fast-marquee";

// brands images
import brand1 from "../../assets/logo-1.png"
import brand2 from "../../assets/logo-2.png"
import brand3 from "../../assets/logo-3.png"
import brand4 from "../../assets/logo-4.png"
import brand5 from "../../assets/logo-5.png"
import brand6 from "../../assets/logo-6.png"

const Brands = () => {
    const brandSImages = [brand1 , brand2 , brand3 , brand4 , brand5 , brand6]
  return (
    <div className=' py-[70px]  '>
        <div className="container">
            <Marquee>
                {brandSImages.map((item , index)=> <img key={index} src={item} alt={item} className=' opacity-25 hover:opacity-100 duration-[.4s]  '  />)}
            </Marquee>
        </div>
    </div>
  )
}

export default Brands