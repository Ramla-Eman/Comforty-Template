import React from "react";
import { useState, useEffect } from "react";
import { Heart, Trash } from "lucide-react";
import { useCart } from "../CartContext.jsx";

const Cart = () => {
  const { cart, updateQuantity, removeFromCart } = useCart(); // Get cart functions from context
  const [total, setTotal] = useState(0);

  // Calculate total price
  useEffect(() => {
    const newTotal = cart.reduce(
      (acc, item) => acc + item.price * item.quantity,
      0
    );
    setTotal(newTotal);
  }, [cart]);

  return (
    <div className="flex lg:flex-row flex-col lg:space-y-0 space-y-5 w-full items-center py-4 xl:px-[13rem] px-3 justify-between">
      {/* All cart items */}
      <div className="lg:w-[60%] w-full space-y-6">
        <h2 className="text-4xl font-semibold">Bag</h2>

        {cart.length === 0 ? (
          <p className="text-xl text-gray-500">Your cart is empty.</p>
        ) : (
          cart.map((item) => (
            <div
              key={item.id}
              className="w-full sm:flex-row flex-col flex border p-2 rounded-xl space-x-4"
            >
              <img src={item.image} alt={item.name} className="w-[14rem]" />
              <div className="w-full flex justify-between">
                <div className="flex flex-col justify-between space-y-3">
                  <h5 className="text-2xl font-semibold">{item.name}</h5>
                  <div className="text-gray-600">
                    <p>
                      Quantity:
                      <button
                        className="px-2 mx-1 bg-gray-200"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="px-2 mx-1 bg-gray-200"
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                      >
                        +
                      </button>
                    </p>
                  </div>
                  <div className="flex space-x-3">
                    <Heart size={25} className="text-red-500 cursor-pointer" />
                    <Trash
                      size={25}
                      className="text-gray-500 cursor-pointer"
                      onClick={() => removeFromCart(item.id)}
                    />
                  </div>
                </div>
                <p className="text-xl font-semibold">
                  ${item.price * item.quantity}
                </p>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Checkout Summary */}
      <div className="lg:w-[35%] w-full text-gray-900 space-y-4">
        <h2 className="text-4xl font-semibold">Summary</h2>
        <div className="flex justify-between text-xl">
          <p>Subtotal</p>
          <span>${total.toFixed(2)}</span>
        </div>
        <div className="flex justify-between underline text-xl">
          <p>Estimated Delivery & Handling</p>
          <span>Free</span>
        </div>
        <div className="flex justify-between underline text-xl font-semibold">
          <p>Total</p>
          <span>${total.toFixed(2)}</span>
        </div>
        <button className="w-full bg-buttons-Color text-white py-2 rounded-full text-xl">
          Check Out
        </button>
      </div>
    </div>
  );
};

export default Cart;
