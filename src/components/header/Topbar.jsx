import React from "react";
import List from "../common/List";

import { RiArrowRightSLine } from "react-icons/ri";
import { IoCallOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";

const TopBar = () => {
  const headerContact = [
    {
      list: "about us",
      icon: <RiArrowRightSLine className=" text-brand text-lg mr-2  " />,
    },
    {
      list: "contact",
      icon: <RiArrowRightSLine className=" text-brand text-lg mr-2  " />,
    },
    {
      list: "(123) 456-789",
      icon: <IoCallOutline className=" text-brand text-lg mr-2  " />,
    },
  ];

  const HeaderSocial = [
    { list: <FaFacebookF /> },
    { list: <FaXTwitter /> },
    { list: <FaInstagram /> },
  ];
  return (
    <div className="border border-secondery/20 border-opacity-10 py-4">
      <div className="container">
        <div className="flex justify-between items-center  w-full ">
          {/* header contact */}
          <List
            listArr={headerContact}
            icon={true}
            link={"#"}
            boxStyle={"flex  gap-4 max-sm:hidden  "}
            listStyle={
              "flex items-center font-medium text-[12.6px] leading-[24px] text-secondery  "
            }
          />

          <div className="flex gap-7 items-center max-sm:ml-auto">
          <List listArr={HeaderSocial} boxStyle={"flex gap-6  items-center   "} icon={true} link={"#"} listStyle={"flex items-center  font-semibold text-base leading-[24px] text-primary hover:text-brand duration-[.4s] cursor-pointer  "}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
