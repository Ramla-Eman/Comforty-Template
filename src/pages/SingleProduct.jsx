import React from "react";
import FeauteredProducts from "../Components/FeauteredProducts";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state?.product;

  if (!product) return <h2 className="text-center">Product not found!</h2>;
  return (
    <div>
      <div className="flex sm:flex-row flex-col lg:space-y-0 space-y-5 space-x-5 w-full items-center py-4 xl:px-[13rem] px-3 my-16 justify-center font-family-Inter">
        <img src={product.image} alt={product.name} />
        <div className="sm:w-[30%] w-full space-y-5 text-text-color">
          <h2 className="text-3xl font-bold">{product.name}</h2>
          <div className="space-x-2">
            <button className=" text-xl font-semibold text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-5 rounded-full ">
              {product.price}
            </button>
            <span className="text-2xl text-my-color5 font-normal line-through">
              {product.beforePrice}
            </span>
          </div>
          <hr className="border border-[#D9D9D9]" />
          <p>{product.discription}</p>
          <button
            type="submit"
            className="flex text-xl font-semibold text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-6 rounded-md "
          >
            <ShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
      <FeauteredProducts />
      <div className="w-full py-4 xl:px-[13rem] px-3 flex justify-center text-text-color font-family-Roboto">
        <Link to="/product" className="hover:underline text-2xl">
          View All
        </Link>
      </div>
    </div>
  );
};

export default SingleProduct;
