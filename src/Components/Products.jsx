import React from "react";
import WhiteChair from "../assets/WhiteChair.png";
import OffWhiteChair from "../assets/OffWhiteChair.png";
import PinkChair from "../assets/PinkChair.png";
import OrangeChair from "../assets/OrangeChair.png";
import HotImg2 from "../assets/HotImage2.png";
import HotImg3 from "../assets/HotImage3.png";
import Image from "../assets/Product1.png";
import CategoryImg1 from "../assets/CategoryImg1.png";
import { ShoppingCart } from "lucide-react";

const Products = () => {
  const products = [
    {
      name: "Library Stool Chair",
      price: "$20",
      image: WhiteChair,
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: PinkChair,
      beforePrice: "$39",
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: OrangeChair,
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: OffWhiteChair,
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: CategoryImg1,
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: HotImg2,
      beforePrice: "$39",
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: Image,
    },
    {
      name: "Library Stool Chair",
      price: "$20",
      image: HotImg3,
    },
  ];
  return (
    <div className="w-full flex flex-col items-center justify-center py-10 xl:px-[13rem] px-3 font-family-Inter space-y-5">
      <h2 className="sm:text-4xl text-3xl text-text-color font-semibold">
        Our Products
      </h2>
      <ul className="w-full flex flex-wrap items-center lg:justify-between justify-center  lg:space-y-0 space-y-5 gap-y-8">
        {products.map((product, index) => (
          <li
            key={index}
            className="lg:w-[23%] w-[90%] flex flex-col relative space-y-2"
          >
            <img src={product.image} alt={product.name} className="w-full rounded-lg" />
            <div className="flex w-full justify-between items-center">
              <div>
                <h3 className="text-[1rem] text-text-color hover:text-my-color3">
                  {product.name}
                </h3>
                <p className="text-lg text-text-color font-semibold">
                  {product.price}{" "}
                  <span className="text-[0.8rem] text-my-color5 font-normal line-through">
                    {product.beforePrice}
                  </span>
                </p>
              </div>
              <ShoppingCart
                size={45}
                className="text-text-color p-2 rounded-md hover:bg-buttons-Color hover:text-my-color10"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
