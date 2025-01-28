import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, MenuIcon } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  return (
    <div className="w-full bg-my-color10 font-family-Inter">
      {/* Middle navbar */}
      <div className="flex w-full items-center py-4 lg:px-[13rem] sm:px-[2rem] px-1 justify-between text-text-color">
        <div className="flex items-center space-x-2">
          <img src={logo} alt="Logo Comforty" />
          <h3 className="text-[2rem] font-bold">Comforty</h3>
        </div>
        <div className="flex items-center space-x-4 relative">
          <ShoppingCart size={35} />
          <span className="absolute -top-3 left-5 p-1 rounded-full px-3 bg-my-color3 text-my-color10">
            0
          </span>
          <div className="sm:hidden flex">
            <MenuIcon size={35}/>
          </div>
        </div>
      </div>
      {/* Link Navbar */}
      <div className="hidden sm:flex w-full items-center py-4 lg:px-[13rem] sm:px-[2rem] px-1 justify-between text-my-color4 text-xl">
        <ul className="flex items-center space-x-4">
          <li>
            <Link to="/" className=" hover:text-my-color2">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-my-color2">
              About
            </Link>
          </li>
          <li>
            <Link to="/product" className="hover:text-my-color2">
              Products
            </Link>
          </li>
          <li>
            <Link to="/faq" className="hover:text-my-color2">
              FAQ
            </Link>
          </li>
        </ul>
        <div>
          <Link to="/contact" className="hover:text-my-color2">
            Contact: <span className="text-text-color">+92 312 0306090</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;