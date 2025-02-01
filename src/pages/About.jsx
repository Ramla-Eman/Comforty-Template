import React from "react";
import AboutImag1 from "../assets/AboutImage1.png";
import AboutImag2 from "../assets/AboutImage2.jpg";
import AboutImag3 from "../assets/AboutImage3.png";
import AboutImag4 from "../assets/AboutImage4.png";
import { CiDeliveryTruck } from "react-icons/ci";
import { CheckCircle, CreditCard, Sprout } from "lucide-react";

const About = () => {
  return (
    <div>
      <div className="w-full flex md:flex-row flex-col items-center justify-center py-10 xl:px-[13rem] px-3 md:space-y-0 space-y-5 space-x-2">
        <div className="md:w-[45%] w-full h-[32rem] bg-my-color3 text-my-color10 p-8 rounded-md space-y-4">
          <h2 className="font-semibold md:text-3xl text-2xl">
            About Us - Comforty
          </h2>
          <p className="text-xl">
            At Comforty, we believe that the right chair can transform your
            space and elevate your comfort. Specializing in ergonomic design,
            premium materials, and modern aesthetics, we craft chairs that
            seamlessly blend style with functionality.
          </p>
          <button
            type="submit"
            className="bg-[#258992] border-my-color3 border py-2 px-8 text-lg"
          >
            View collection
          </button>
        </div>
        <img
          src={AboutImag1}
          alt=""
          className="md:w-[45%] md:h-[32rem] rounded-md"
        />
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 xl:px-[13rem] px-3 space-y-10">
        <h2 className="sm:text-4xl text-2xl font-semibold text-text-color">
          What makes our Brand Different
        </h2>
        <div className="w-full flex justify-between items-center flex-wrap text-my-color3 lg:space-y-0 space-y-3">
          <div className="space-y-2 lg:w-[20%] border border-my-color3 rounded-lg p-2">
            <CiDeliveryTruck size={30} className="text-text-color" />
            <h5 className="text-xl font-semibold">Next day as standard</h5>
            <p>Order before 3pm and get your order the next day as standard</p>
          </div>
          <div className="space-y-2 lg:w-[20%] border border-my-color3 rounded-lg p-2">
            <CheckCircle size={30} className="text-text-color" />
            <h5 className="text-xl font-semibold">Made by true artisans</h5>
            <p>
              Handmade crafted goods made with real passion and craftmanship
            </p>
          </div>
          <div className="space-y-2 lg:w-[20%] border border-my-color3 rounded-lg p-2">
            <CreditCard size={30} className="text-text-color" />
            <h5 className="text-xl font-semibold">Unbeatable prices</h5>
            <p>
              For our materials and quality you won’t find better prices
              anywhere
            </p>
          </div>
          <div className="space-y-2 lg:w-[20%] border border-my-color3 rounded-lg p-2">
            <Sprout size={30} className="text-text-color" />
            <h5 className="text-xl font-semibold">Recycled packaging</h5>
            <p>
              We use 100% recycled to ensure our footprint is more manageable
            </p>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col items-center justify-center py-10 xl:px-[13rem] px-3 space-y-10">
        <h2 className="sm:text-4xl text-2xl font-semibold text-text-color">
          Our Popular Products
        </h2>
        <div className="text-[#2A254B] grid grid-cols-12 space-x-2 sm:space-y-0 space-y-4">
          <div className="sm:col-span-6 col-span-12">
            <img src={AboutImag2} alt="" className="rounded-md"/>
            <p className="font-semibold text-xl">The Poplar suede sofa</p>
            <span>$99.00</span>
          </div>
          <div className="sm:col-span-3 col-span-12">
            <img src={AboutImag3} alt="" className="rounded-md"/>
            <p className="font-semibold text-xl">The Dandy chair</p>
            <span>$99.00</span>
          </div>
          <div className="sm:col-span-3 col-span-12">
            <img src={AboutImag4} alt="" className="rounded-md"/>
            <p className="font-semibold text-xl">The Dandy chair</p>
            <span>$99.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
