import React from "react";
import WhiteChair from "../assets/WhiteChair.png";
import OffWhiteChair from "../assets/OffWhiteChair.png";
import PinkChair from "../assets/PinkChair.png";
import OrangeChair from "../assets/OrangeChair.png";
import HotImg2 from "../assets/HotImage2.png";
import HotImg3 from "../assets/HotImage3.png";
import ProductImage from "../assets/ProductImage.png";
import CategoryImg1 from "../assets/CategoryImg1.png";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";

const Product = () => {
  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: WhiteChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      image: PinkChair,
      beforePrice: "$39",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: OrangeChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: OffWhiteChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: CategoryImg1,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      image: HotImg2,
      beforePrice: "$39",
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: ProductImage,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: HotImg3,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: "$20",
      image: CategoryImg1,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: "$20",
      image: OrangeChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: "$20",
      image: ProductImage,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: "$20",
      image: WhiteChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
  ];
  return (
    <div>
      {/* All Products */}
      <div className="w-full flex flex-col sm:items-start items-center justify-center py-10 xl:px-[13rem] px-3 font-family-Inter space-y-5">
        <h2 className="sm:text-4xl text-3xl text-text-color font-semibold">
          All Products
        </h2>
        <ul className="w-full flex flex-wrap items-center lg:justify-between justify-center  lg:space-y-0 space-y-5 gap-y-8">
          {products.map((product) => (
            <li
              key={product.id}
              className="lg:w-[23%] w-[90%] flex flex-col relative space-y-2"
            >
              <Link to={`/product/${product.id}`} state={{ product }}>
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full rounded-lg"
                />
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
              </Link>
            </li>
          ))}
        </ul>
      </div>
      {/* Subscribe Form */}
      <div className="w-full flex flex-col items-center justify-center py-16 xl:px-[13rem] px-3 font-family-Roboto space-y-5">
        <h2 className="sm:text-4xl text-xl text-text-color font-semibold">
          Or Subscribe To The Newsletter
        </h2>
        <form className="w-full flex justify-center space-x-4">
          <input
            type="email"
            placeholder="Email Address"
            className="sm:w-[50%] w-full py-4 rounded-sm border-b-2 border-b-my-color5 outline-0"
          />
          <button className="p-4 rounded-sm border-b-2 border-b-my-color5 text-my-color4 font-family-Sans uppercase font-semibold">
            Subscribe
          </button>
        </form>
      </div>
      {/* Follow Products */}
      <div className="w-full flex flex-col items-center justify-center py-16 xl:px-[13rem] px-3 font-family-Roboto space-y-5">
        <h2 className="sm:text-4xl text-xl text-center text-text-color font-semibold">
          Follow Products & Discounts On Instagram
        </h2>
        <div className="w-full flex flex-wrap items-center justify-center space-x-2 sm:space-y-0 space-y-2">
          <img src={HotImg2} alt="" className="md:w-[15%] w-[25%] rounded-md" />
          <img
            src={CategoryImg1}
            alt=""
            className="md:w-[15%] w-[25%] rounded-md"
          />
          <img
            src={PinkChair}
            alt=""
            className="md:w-[15%] w-[25%] rounded-md"
          />
          <img
            src={WhiteChair}
            alt=""
            className="md:w-[15%] w-[25%] rounded-md"
          />
          <img
            src={OrangeChair}
            alt=""
            className="md:w-[15%] w-[25%] rounded-md"
          />
          <img
            src={OffWhiteChair}
            alt=""
            className="md:w-[15%] w-[25%] rounded-md"
          />
        </div>
      </div>
    </div>
  );
};

export default Product;
