import { useState } from "react";
import React from "react";
import { Link } from "react-router-dom";
import { ShoppingCart, MenuIcon, X } from "lucide-react";
import logo from "../assets/Logo.png";

const Navbar = () => {
  const [rightToggle, setRightToggle] = useState(true);
  const handleToggle = () => {
    setRightToggle(!rightToggle);
  };
  const closeMenu = () => {
    setRightToggle(!rightToggle);
  };
  return (
    <div className="w-full bg-my-color10 font-family-Inter">
      {/* Middle navbar */}
      <div className="flex w-full items-center py-4 xl:px-[13rem] px-3 justify-between text-text-color">
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo Comforty" />
          <h3 className="text-[2rem] font-bold">Comforty</h3>
        </Link>
        <div className="flex items-center space-x-4 relative">
          <Link to="/cart">
            <ShoppingCart size={35} />
          </Link>
          <span className="absolute -top-3 left-5 p-1 rounded-full px-3 bg-my-color3 text-my-color10">
            0
          </span>
          {/* Menu and close icon for mobile menu */}
          <div className="sm:hidden flex" onClick={handleToggle}>
            {rightToggle ? <MenuIcon size={35} /> : <X size={35} />}
          </div>
        </div>
      </div>
      {/* Link Navbar */}
      <div
        className={`flex sm:flex-row flex-col w-full items-center py-4  xl:px-[13rem] px-3 z-50 sm:justify-between sm:static absolute ${
          rightToggle ? "right-full" : "right-0"
        } text-my-color4 text-xl sm:bg-none bg-my-color10 sm:h-auto h-screen transition-all ease-in duration-300`}
      >
        <ul className="flex sm:flex-row flex-col items-center sm:space-x-4 sm:space-y-0 space-y-5">
          <li>
            <Link
              to="/"
              className=" hover:text-buttons-Color active:text-buttons-Color"
              onClick={closeMenu}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="hover:text-buttons-Color active:text-buttons-Color"
              onClick={closeMenu}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              to="/product"
              className="hover:text-buttons-Color active:text-buttons-Color"
              onClick={closeMenu}
            >
              Products
            </Link>
          </li>
          <li>
            <Link
              to="/faq"
              className="hover:text-buttons-Color active:text-buttons-Color"
              onClick={closeMenu}
            >
              FAQ
            </Link>
          </li>
        </ul>
        <div>
          <Link
            to="/contact"
            className="hover:text-buttons-Color active:text-buttons-Color"
            onClick={closeMenu}
          >
            Contact: <span className="text-text-color">+92 312 0306090</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
