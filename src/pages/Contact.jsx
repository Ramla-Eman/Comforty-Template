import { BadgeCheck, Clock, Headset, MapPin, PhoneCall } from "lucide-react";
import React from "react";
import { BsTrophy } from "react-icons/bs";

const Contact = () => {
  return (
    <div>
      <div className="md:w-[60%] w-full flex flex-col items-center justify-center text-center my-10 font-family-Poppins space-y-2 mx-auto px-5">
        <h2 className="text-4xl font-semibold">Get In Touch With Us</h2>
        <p className="text-xl text-[#9F9F9F] text-wrap">
          For More Information About Our Product & Services. Please Feel Free To
          Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not
          Hesitate!
        </p>
      </div>
      {/* form for contact */}
      <div className="w-full flex lg:flex-row flex-col items-center justify-between py-24 space-y-8 xl:px-[16rem] px-3">
        <div className="lg:w-[30%] w-full flex flex-col flex-wrap items-start justify-between space-y-8 px-3 font-family-Poppins">
          <div className="flex space-x-2">
            <MapPin size={35} />
            <div>
              <h4 className="text-[#242424] text-2xl font-semibold">
                Address
              </h4>
              <p className="text-[#898989] text-lg font-family-Inter">
              236 5th SE Avenue, New York NY10000, United States
              </p>
            </div>
          </div>
          <div className="flex space-x-2">
            <PhoneCall size={35} />
            <div>
              <h4 className="text-[#242424] text-2xl font-semibold">
                Phone
              </h4>
              <p className="text-[#898989] text-lg font-family-Inter">Mobile: +(84) 546-6789 Hotline: +(84) 456-6789</p>
            </div>
          </div>
          <div className="flex space-x-2">
            <Clock size={35} />
            <div>
              <h4 className="text-[#242424] text-2xl font-semibold">
                Working Time
              </h4>
              <p className="text-[#898989] text-lg font-family-Inter">Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00</p>
            </div>
          </div>
        </div>
        <form className="lg:w-[50%] w-full flex flex-col flex-wrap items-start justify-between space-y-4 px-3 font-family-Poppins text-lg">
          <label htmlFor="name" className="text-my-color9 font-semibold">Your name</label>
          <input type="text" name="name" required placeholder="ABC" className="border w-full py-3 px-5 border-my-color5 rounded-md"/>
          <label htmlFor="email" className="text-my-color9 font-semibold">Email address</label>
          <input type="email" name="email" required placeholder="ABC@def.com" className="border w-full py-3 px-5 border-my-color5 rounded-md"/>
          <label htmlFor="subject" className="text-my-color9 font-semibold">Subject</label>
          <input type="text" name="subject" required placeholder="This is an optional" className="border w-full py-3 px-5 border-my-color5 rounded-md"/>
          <label htmlFor="message" className="text-my-color9 font-semibold">Message</label>
          <textarea name="message" placeholder="Hi! I'd like to ask about" className="border w-full py-3 px-5 border-my-color5 rounded-md"></textarea>
          <button type="submit" className="text-my-color10 bg-buttons-Color border-buttons-Color border py-2 px-10 rounded-md">Submit</button>
        </form>
      </div>
      {/* Some badges and responsibilities */}
      <div className="w-full flex flex-wrap items-center justify-between py-16 md:space-y-0 space-y-8 xl:px-[16rem] px-3 font-family-Poppins">
        <div className="flex space-x-2">
          <BsTrophy size={45} />
          <div>
            <h4 className="text-[#242424] text-2xl font-semibold">
              High Quality
            </h4>
            <p className="text-[#898989] text-lg">Crafted from top metarials</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <BadgeCheck size={45} />
          <div>
            <h4 className="text-[#242424] text-2xl font-semibold">
              Warranty Protection
            </h4>
            <p className="text-[#898989] text-lg">Over 2 Years</p>
          </div>
        </div>
        <div className="flex space-x-2">
          <Headset size={45} />
          <div>
            <h4 className="text-[#242424] text-2xl font-semibold">
              24 / 7 Support
            </h4>
            <p className="text-[#898989] text-lg">Dedicated Support</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
