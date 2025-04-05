import React from 'react'
import List from '../common/List'
import { IoIosSearch } from "react-icons/io";
import { BiShoppingBag } from "react-icons/bi";


const Navbar = () => {

    const NavItem = [
        {list: "Home"},
        {list: "Properties"},
        {list: "Who We Are"},
        {list: "Contact"},
        {list: "Elements"},
        {list: "" , icon: <IoIosSearch className=' text-secondery text-xl hover:text-brand duration-[.4s] border-l-1 border-secondery/20 '/>},
        {list: "" , icon: <BiShoppingBag className=' text-secondery text-xl hover:text-brand duration-[.4s]  '/>},
    ]
    

  return (
    <div className=''>
        <div className="container">
            <div className="flex justify-between items-center  ">
                <img src="/images/logo.png" alt="logo" className=' w-[123px] '/>
                <div className="">
                    <List listArr={NavItem} boxStyle={"flex gap-6  items-center   "} icon={true} link={"#"} listStyle={"flex items-center py-[26px] border-t-4 border-transparent hover:border-brand   font-semibold text-base leading-[24px] text-primary hover:text-brand duration-[.4s] cursor-pointer  "}/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar