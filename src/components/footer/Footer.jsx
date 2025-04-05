import React from "react";
import List from "../common/List";

const Footer = () => {
  const Footinfo = [
    {
      title: "Contact Details",
      lists: [
        { list: "123 Porto Blvd, Suite 100" },
        { list: "New York, NY" },
        { list: "Phone : 123-456-7890" },
        { list: "Email: mail@example.com" },
      ],
    },
    {
      title: "Page",
      lists: [
        { list: "Our Services" },
        { list: "About US" },
        { list: "Contact US" },
      ],
    },
    { title: "Links", lists: [{ list: "PAQs" }, { list: "Sitemap" }] },
    {
      title: "Latest Post",
      lists: [
        { list: "Lorem ipsum dolor sit amet." },
        { list: "12:55 AM Dec 19th" },
      ],
    },
  ];
  return (
    <div className="bg-[#212529] pt-[100px]   ">
      <div className="container">
        <div className="grid grid-cols-4   ">
          {Footinfo.map((item, index) => (
            <div key={index}>
              <h3 className=" font-semibold text-[20px] leading-[27px] tracking-[-0.88px] mb-4  text-white  ">
                {item.title}
              </h3>
              <List
                listArr={item.lists}
                listStyle={" text-[12px] leading-[24px] text-secondery py-1  "}
              />
            </div>
          ))}
        </div>
      </div>
      {/* copyright */}
      <div className="py-2 border-t border-secondery/50 mt-14    ">
        <div className="container">
          <p className=" text-[11px] leading-[26px] text-[#999999]  ">
            © Copyright 2025. All Rights Reserved.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
