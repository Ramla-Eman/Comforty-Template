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
import SofaProduct1 from "../assets/SofaProduct1.webp"
import SofaProduct2 from "../assets/SofaProduct2.webp"
import SofaProduct3 from "../assets/SofaProduct3.webp"
import SofaProduct4 from "../assets/SofaProduct4.webp"
import SofaProduct5 from "../assets/SofaProduct5.webp"
import SofaProduct6 from "../assets/SofaProduct6.webp"

const Product = () => {
  const products = [
    // Sofa's
    {
      id: 1,
      name: "Caroline Sofa",
      price: 205,
      image: SofaProduct1,
      discription:
        "Upholstered in soft fabric, the sofa embraces rolled arms, a sheltering back and a bench seat cushion snuggled into its rounded and well-padded frame. The solid wood legs rise up to provide a warm contrast to the lustrous upholstery.",
    },
    {
      id: 2,
      name: "Lara Sofa - 3 Seater",
      price: 360,
      image: SofaProduct2,
      beforePrice: "$390",
      discription:
        "The Lara Sofa, a timeless blend of design and comfort. Its spacious seating and plush cushions make it perfect for everyday living. Crafted with quality fabric upholstery and oak detailed frame, it's both durable and easy to maintain. Lara's classic tapered arms, legs, and subtle tones effortlessly complement any interior. Elevate your space with a touch of mid-century modern chic from our Lara collection",
    },
    {
      id: 3,
      name: "Aria Sofa - 3 Seater",
      price: 470,
      image: SofaProduct3,
      discription:
        "The fabulous Aria Sofa, upholstered in luxurious white bouclé fabric, exudes a touch of decadence. With its distinctive silhouette featuring soft curves and long horizontal lines, it adds elegance to any space. Cushioned with high-quality foam and built on a durable commercial plywood and solid wood structure, this sofa includes two square cushions for added comfort and style.",
    },
    {
      id: 4,
      name: "Aria Single Sofa",
      price: 390,
      image: SofaProduct4,
      discription:
        "The fabulous Aria Sofa, upholstered in luxurious white bouclé fabric, exudes a touch of decadence. With its distinctive silhouette featuring soft curves and long horizontal lines, it adds elegance to any space. Cushioned with high-quality foam and built on a durable commercial plywood and solid wood structure, this sofa includes two square cushions for added comfort and style.",
    },
    {
      id: 5,
      name: "Clayton Saddle Sofa",
      price: 780,
      image: SofaProduct5,
      discription:
        "Clayton Saddle sofa hand-upholstered in leatherette, has a slim, distinct & edgy profile. The gold accent legs squarely braces the supremely plush seat.",
    },
    {
      id: 6,
      name: "Gaia Sofa Bed",
      price: 200,
      image: SofaProduct6,
      discription:
        "The Gaia sofa bed is a novel addition to compact rooms. Comfortable and multifunctional, the sofa cum bed has dense padding upholstered with premium fabric, with a side pocket and a supportive armrest making it an ideal choice for guests' rooms and home library.",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: 20,
      image: ProductImage,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: 20,
      image: HotImg3,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 9,
      name: "Library Stool Chair",
      price: 20,
      image: CategoryImg1,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 10,
      name: "Library Stool Chair",
      price: 20,
      image: OrangeChair,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 11,
      name: "Library Stool Chair",
      price: 20,
      image: ProductImage,
      discription:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipiscing",
    },
    {
      id: 12,
      name: "Library Stool Chair",
      price: 20,
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
                      ${product.price}{" "}
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
