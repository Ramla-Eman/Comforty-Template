import React from "react";
import { FaArrowRight } from "react-icons/fa";
import HeroImage from "../assets/HeroImage.png";

const Hero = () => {
  return (
    <div className="w-full flex md:flex-row flex-col items-center justify-between py-16 space-y-8 xl:px-[16rem] px-3">
      <div className="lg:w-[40%] w-full space-y-7 font-family-Inter">
        <p className=" uppercase text-text-color">welcome to chairy</p>
        <h1 className="text-text-color text-6xl font-bold">
          Best Furniture Collection for your interior.
        </h1>
        <button className="text-my-color10 flex bg-buttons-Color items-center space-x-3 border py-3 px-4 rounded-md font-semibold">
          <span>Shop Now</span>
          <FaArrowRight />
        </button>
      </div>
      <div className="md:w-[30%] relative">
        <img src={HeroImage} alt="" className="w-full" />
        <div className="absolute top-3 right-0 bg-text-color p-5 rounded-full text-center">
          <h5 className="text-3xl font-bold text-[#F05C52]">54%</h5>
          <span className="text-my-color10">Discount</span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
