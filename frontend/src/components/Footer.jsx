import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10 ">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ---left section --- */}
        <div>
          {/* <img className="mb-5 w-40" src={assets.logo} alt="" /> */}
          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-orange-500 text-3xl font-sans">Book</span>

            <span className="text-orange-500 text-3xl font-sans">My</span>
            <span className="text-green-500 text-3xl font-serif ">Doc</span>
          </h1>
          <p className="w-full md:w-2/3 text-gray-600 leading-6 mt-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
            placeat voluptatibus molestias, harum ipsam ut. Voluptatum nemo
            nostrum consectetur molestias laudantium est sit ipsa rem.
          </p>
        </div>
        {/*---- center section ---  */}
        <div>
          <p className="texl-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>
        {/* ----right secion -- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>6307048900</li>
            <li>Satyamyadavansi74@gmail.com</li>
          </ul>
        </div>
      </div>
      {/* -------------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">
          Copyright 2025@ Bookmydoc - All Right Reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;
