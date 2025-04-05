import React from "react";

// images
import bnr from "../../assets/bnrone.jpg";
import bnrshap from "../../assets/bnrshap.png";


// icons
import { IoArrowForwardSharp } from "react-icons/io5";

const Banner = () => {
  return (
    <section className={"relative   "}>
      <div className="absolute top-0 left-0 w-full h-full bg-secondery/70   "></div>
      <img src={bnr} alt="bnr" className="w-full object-fit-cover  " />
      <div className="absolute top-0 left-0 w-full h-full grid place-items-center ">
        <div className=" text-center text-primary ">
          <h4 className="flex font-medium text-[25px ] text-white leading-[31px ] justify-center uppercase h-[15px] items-center gap-5   ">
            <img src={bnrshap} alt="bnrshap" /> get the meet simply{" "}
            <img src={bnrshap} alt="bnrshap" />
          </h4>

          <h1 className=" py-2 font-extrabold text-[92px ] leading-[68px ] text-white  uppercase    ">
            the best html template
          </h1>
          <p className=" font-medium text-base leading-[26px] opacity-70  ">Trusted by over 40,000 satisfyied users</p>

          <div className="flex justify-center gap-3 mt-6  ">
            <button type="button" className=" text-white font-semibold uppercase border-2 border-white rounded-[30px] py-2 px-6"> <span>get started now!</span>   </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;