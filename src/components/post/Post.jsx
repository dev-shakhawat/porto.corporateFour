import React from "react";
import Counter from "../common/Counter";

export const Post = () => {
  const posts = [
    {
      day: 15,
      month: "jan",
      title: "Lorem ipsum dolor sit amet, consectetur",
      txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      day: 15,
      month: "jan",
      title: "Lorem ipsum dolor sit amet, consectetur",
      txt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  const CounterInfo =[
    {number: 50000 , plus: true , title: "Happy Clients"},
    {number: 3500 , plus: true , title: "Answered Tickets"},
    {number: 16 , plus: false , title: "Pre-made Demos"},
    {number: 3000 , plus: true , title: "Development Hours"},
  ]
  return (
    <div className=" relative flex py-20">
      <div className=" bg-[#0b71e1] w-1/2 py-[100px] absolute h-full top-0 z-[-1] left-0 "></div>
      <div className=" bg-[#0267d7] w-1/2 py-[100px] absolute h-full top-0 z-[-1] right-0 "></div>
      <div className="container">
        <h3 className=" text-white  text-[35px] capitalize  ">
          latest post{" "}
        </h3>
        <div className="flex">
              <div className="flex   ">
            {posts.map((item, index) => (
                <div key={index}  className="flex gap-3 items-start w-[400px] ">
                  <div className="">
                    <p className="px-5 py-2 text-primary bg-white font-bold text-[20px] ">
                      {item.day}
                    </p>
                    <p className="px-5 py-2 uppercase text-brand bg-white font-medium text-base mt-[1px]  ">
                      {item.month}
                    </p>
                  </div>
                  <div className="w-[60%]">
                    <h3 className="text-[20px] text-white   ">{item.title}</h3>
                    <p className=" text-base text-white/70  ">{item.txt}</p>
                    <a
                      href="#"
                      className=" text-white font-semibold hover:underline  "
                    >
                      read more
                    </a>
                  </div>
                </div>
            ))}
              </div>
          <div className="grid grid-cols-2 grid-rows-2 gap-5">
            {CounterInfo.map((item , index)=> <Counter number={item.number} plus={item.plus} title={item.title}   />)}
          </div>
        </div>
      </div>
    </div>
  );
};
