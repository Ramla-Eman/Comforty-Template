import React from "react";
import CategoryImg1 from "../assets/CategoryImg1.png";
import CategoryImg2 from "../assets/CategoryImg2.png";
import CategoryImg3 from "../assets/CategoryImg3.png";

const TopCategories = () => {
  const card = [
    {
      title: "Wing Chair",
      quantity: "3,585",
      image: CategoryImg1,
    },
    {
      title: "Wooden Chair",
      quantity: "157",
      image: CategoryImg2,
    },
    {
      title: "Desk Chair",
      quantity: "154",
      image: CategoryImg3,
    },
  ];
  return (
    <div className="w-full flex flex-col lg:items-start items-center justify-center py-4 xl:px-[13rem] px-3 font-family-Inter space-y-5">
      <h2 className="sm:text-4xl text-3xl text-text-color font-semibold">
        Top Categories
      </h2>
      <ul className="w-full flex flex-wrap items-center justify-center lg:justify-between lg:space-y-0 space-y-4">
        {card.map((item, index) => (
          <li key={index} className="lg:w-[30%] space-x-4 relative">
            <img
              src={item.image}
              alt={item.title}
              className="rounded-md w-full"
            />
            <div className="absolute bottom-0 w-full bg-my-color9 opacity-70 p-2 rounded-b-lg text-my-color10">
              <h3 className="text-lg font-semibold">
                {item.title}
              </h3>
              <p className="text-sm">
                {item.quantity} products
              </p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopCategories;
