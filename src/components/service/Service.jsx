import React from 'react'
import ServiceCard from '../common/ServiceCard';

// icons
import { SlUserFollowing } from "react-icons/sl";
import { IoLayersOutline } from "react-icons/io5";
import { SlCalculator } from "react-icons/sl";
import { CiStar } from "react-icons/ci";
import { IoWaterOutline } from "react-icons/io5";
import { SlMouse } from "react-icons/sl";
import { FiMonitor } from "react-icons/fi";
import { BsLightningCharge } from "react-icons/bs";
import { RxVideo } from "react-icons/rx";

const Service = () => {


    const ServiceInfo = [
        {icon: <SlUserFollowing className='text-brand text-[50px] ' /> , titile: "Customer Support" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <IoLayersOutline className='text-brand text-[50px] ' /> , titile: "Sliders" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <SlCalculator className='text-brand text-[50px] ' /> , titile: "HTML5" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <CiStar className='text-brand text-[50px] ' /> , titile: "icons" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <IoWaterOutline className='text-brand text-[50px] ' /> , titile: "colors" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <SlMouse className='text-brand text-[50px] ' /> , titile: "buttons" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <FiMonitor className='text-brand text-[50px] ' /> , titile: "Lightboxes" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <BsLightningCharge className='text-brand text-[50px] ' /> , titile: "elements" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
        {icon: <RxVideo className='text-brand text-[50px] ' /> , titile: "videos" , txt: "Lorem ipsum dolor sit amet, consectetur adipiscing metus elit. Quisque rutrum pellentesque imperdiet."},
    ]

  return (
    <div className='py-16  '>
        <div className="container">
            <div className="grid grid-cols-3 gap-10   ">
                {ServiceInfo.map((item , index)=> <ServiceCard key={index} Icon={item.icon} title={item.titile} txt={item.txt}  />)}
            </div>
        </div>
    </div>
  )
}

export default Service