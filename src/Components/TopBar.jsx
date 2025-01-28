import React from "react";
import { FaCheck, FaExclamationCircle } from "react-icons/fa";
import flagImage from "../assets/flag.png"

const TopBar = () => {
  return (
    <div className="w-full py-3 lg:px-[13rem] px-[3rem] bg-text-color text-my-color10 sm:flex hidden items-center justify-between font-family-Inter">
      <div className="flex space-x-2 items-center">
        <FaCheck />
        <p>Free shipping on all orders over $50</p>
      </div>
      <div className="flex space-x-6 items-center">
        <div className="flex space-x-2 items-center">
          <p>Eng</p>
          <img src={flagImage} alt="" className="w-[1rem]"/>
        </div>
        <p>FAQ</p>
        <div className="flex space-x-2 items-center">
          <FaExclamationCircle />
          <p>Need Help</p>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
