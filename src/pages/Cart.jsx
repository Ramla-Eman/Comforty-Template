import React from "react";
import OrangeChair from "../assets/OrangeChair.png";
import { Heart, Trash } from "lucide-react";

const Cart = () => {
  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 w-full items-center py-4 xl:px-[13rem] px-3 justify-between font-family-Inter">
      {/* All cart */}
      <div className="lg:w-[60%] w-full space-y-6">
        <h2 className="text-4xl font-semibold text-[#111111]">Bag</h2>
        <div className="w-full sm:flex-row flex-col md:h-[15rem] flex space-x-3 border border-my-color5 rounded-xl p-2">
          <img src={OrangeChair} alt="" className="w-[14rem]"/>
          <div className="w-full flex justify-between">
            <div className="flex flex-col justify-between space-y-3">
              <h5 className="text-text-color sm:text-2xl text-lg font-semibold">Library Stool Chair</h5>
              <div className="text-[#757575] sm:text-lg">
                <p>Ashen Slate/Cobalt Bliss</p>
                <p>
                  Quantity <span>1</span>
                </p>
              </div>
              <div className="flex space-x-3 text-text-color">
                <Heart size={40}/>
                <Trash size={40}/>
              </div>
            </div>
            <p className="text-buttons-Color sm:text-xl font-semibold">MRP: $99.00</p>
          </div>
        </div>
      </div>
      {/* Check out */}
      <div className="lg:w-[35%] w-full text-[#111111] space-y-4">
        <h2 className="text-4xl font-semibold">Summary</h2>
        <div className="w-full flex items-center justify-between">
          <p className="text-xl">Subtotal</p>
          <span>$189.00</span>
        </div>
        <div className="w-full flex items-center justify-between underline">
          <p className="text-xl">Estimated Delivery & Handling</p>
          <span>Free</span>
        </div>
        <div className="w-full flex items-center justify-between underline">
          <p className="text-xl">Total</p>
          <span>$189.00</span>
        </div>
        <button
          type="submit"
          className="w-full text-center text-2xl font-semibold text-my-color10 bg-buttons-Color border-buttons-Color border py-2 rounded-full "
        >
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
