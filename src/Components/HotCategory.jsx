import React from "react";
import HotImg1 from "../assets/HotImage1.png";
import WhiteChair from "../assets/WhiteChair.png";
import OffWhiteChair from "../assets/OffWhiteChair.png";
import HotImg2 from "../assets/HotImage2.png";
import HotImg3 from "../assets/HotImage3.png";

const HotCategory = () => {
  return (
    <div className="w-full flex md:flex-row flex-col gap-4 md:gap-0 items-center justify-center py-10 xl:px-[13rem] px-3">
      <div className="md:w-[5%] flex justify-center">
        <h2 className="xl:text-4xl sm:text-2xl uppercase font-semibold md:rotate-90 text-nowrap text-center">
          Explore new and popular styles
        </h2>
      </div>
      <div className="grid grid-cols-12 md:w-[90%] sm:gap-6 gap-2">
        <img
          src={HotImg1}
          alt=""
          className="col-span-6 row-span-2 rounded-md"
        />
        <img src={OffWhiteChair} alt="" className="col-span-3 row-span-1" />
        <img src={WhiteChair} alt="" className="col-span-3 row-span-1" />
        <img
          src={HotImg2}
          alt=""
          className="col-span-3 row-span-1 rounded-sm"
        />
        <img
          src={HotImg3}
          alt=""
          className="col-span-3 row-span-1 rounded-sm"
        />
      </div>
    </div>
  );
};

export default HotCategory;
