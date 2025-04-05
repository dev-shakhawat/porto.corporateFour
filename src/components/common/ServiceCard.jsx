import React from "react";

const ServiceCard = ({Icon , title , txt}) => {
  return (
    <div className="flex gap-4 items-start  ">
      {Icon}
      <div className="">
        <h3 className=" font-extrabold text-[22px] text-primary capitalize  ">{title}</h3>
        <p className="mt-2 w-[70%] text-[14px] leading-[26px] text-secondery   ">{txt}</p>
      </div>
    </div>
  );
};

export default ServiceCard;
