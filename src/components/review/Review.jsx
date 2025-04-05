import React from 'react'

import profile from "../../assets/client-1.jpg"

const Review = () => {
  return (
    <div className=' bg-[#f4f4f4] py-20   '>
        <div className="container">


            {/* slider */}
            <div className="relative overflow-hidden  ">
                <div className="flex    ">
                    <div className="w-full flex justify-center flex-col   ">
                        <img src={profile} alt="profile"  className=' rounded-full w-[100px] mx-auto  '/>
                        <p className="mt-5 mx-[200px] text-center text-base text-secondery   ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint necessitatibus maiores fugiat laudantium assumenda repudi sa. Amet reprehenderit nulla obcaecati consequatur atque fugit porro? Quas temporibus ratione illum mollitia porro!</p>
                        <h5 className=" font-bold text-base text-primary mt-5 text-center  ">-john smith. olker</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Review