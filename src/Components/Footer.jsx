import React from "react";
import FooterLogos from "../assets/FooterLogos.png";
import logo from "../assets/Logo.png";
import { BsGithub, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex flex-col w-full py-6 mt-24 border-t-2 border-my-color5 space-y-8 xl:px-[13rem] px-3">
      <div className="w-full flex flex-wrap md:flex-row flex-col md:items-start md:space-y-0 space-y-6 items-center justify-between md:text-start text-center font-family-Inter">
        <div className="md:w-[20%] flex flex-col md:items-start items-center space-y-6">
          <div className="flex items-center space-x-2">
            <img src={logo} alt="Logo Comforty" />
            <h3 className="text-[2rem] font-bold">Comforty</h3>
          </div>
          <p className="text-text-color">
            Vivamus tristique odio sit amet velit semper, eu posuere turpis
            interdum. Cras egestas purus{" "}
          </p>
          <div className="flex space-x-1 text-xl text-my-color4">
            <a href="https://www.instagram.com/ramlaeman19/" className="p-3 rounded-full hover:text-buttons-Color hover:border hover:border-buttons-Color"><BsInstagram /></a>
            <a href="https://www.facebook.com/profile.php?id=61570544409433" className="p-3 rounded-full hover:text-buttons-Color hover:border hover:border-buttons-Color"><FaFacebook /></a>
            <a href="https://github.com/Ramla-Eman" className="p-3 rounded-full hover:text-buttons-Color hover:border hover:border-buttons-Color"><BsGithub /></a>
            <a href="https://www.linkedin.com/in/ramla-eman/" className="p-3 rounded-full hover:text-buttons-Color hover:border hover:border-buttons-Color"><BsLinkedin /></a>
          </div>
        </div>
        <ul className="space-y-2 md:w-[20%] w-full text-text-color">
          <li className="uppercase text-xl text-my-color5">Category</li>
          <li><a href="#">Sofa</a></li>
          <li><a href="#">Armchair</a></li>
          <li><a href="#">Wing Chair</a></li>
          <li><a href="#">Desk Chair</a></li>
          <li><a href="#">Wooden Chair</a></li>
          <li><a href="#">Park Bench</a></li>
        </ul>
        <ul className="space-y-2 md:w-[20%] w-full text-text-color">
          <li className="uppercase text-xl text-my-color5">Support</li>
          <li>Help & Support</li>
          <li>Terms & Conditions</li>
          <li>Privacy Policy</li>
          <li>Help</li>
        </ul>
        <div className="space-y-4 text-text-color md:w-[25%]">
          <label htmlFor="" className="uppercase text-xl text-my-color5">NewsLetter</label>
          <form>
            <input type="email" placeholder="Enter your email" className="border py-2 border-my-color5 rounded-l-md pl-2"/>
            <button type="submit" className="text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-4 rounded-r-md">Subscribe</button>
          </form>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.</p>
        </div>
      </div>
      <div className="w-full flex lg:flex-row flex-col items-center justify-between font-family-Poppins">
        <p className="text-my-color5">
          @2021 - Blogy - Designed & Develop by{" "}
          <span className="text-text-color font-semibold">Ramla Eman</span>
        </p>
        <img src={FooterLogos} alt="" />
      </div>
    </footer>
  );
};

export default Footer;
