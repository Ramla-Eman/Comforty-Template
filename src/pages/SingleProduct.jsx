import React from "react";
import FeauteredProducts from "../Components/FeauteredProducts";
import PinkChair from "../assets/PinkChair.png";
import { ShoppingCart } from "lucide-react";

const SingleProduct = () => {
  return (
    <div>
      <div className="flex sm:flex-row flex-col lg:space-y-0 space-y-5 space-x-5 w-full items-center py-4 xl:px-[13rem] px-3 my-16 justify-center font-family-Inter">
        <img src={PinkChair} alt="" />
        <div className="sm:w-[30%] w-full space-y-5 text-text-color">
          <h2 className="text-3xl font-bold">Library Stool Chair</h2>
          <button
            type="submit"
            className=" text-xl font-semibold text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-5 rounded-full "
          >
            $40.00
          </button>
          <hr className="border border-[#D9D9D9]"/>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur
            adipiscing
          </p>
          <button
            type="submit"
            className="flex text-xl font-semibold text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-6 rounded-md "
          ><ShoppingCart/>
            Add to cart
          </button>
        </div>
      </div>
      <FeauteredProducts />
    </div>
  );
};

export default SingleProduct;
