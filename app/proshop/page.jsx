import Image from "next/image";
import React from "react";
import proshopImg2 from "@public/assets/projects/proshop.jpg";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const property = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[50vh] relative">
        <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
        <Image
          className="absolute z-1"
          fill
          style={{ objectFit: "cover" }}
          src={proshopImg2}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">PROSHOP ECOMMERECE SITE</h2>
          <h3> MongoDB / Express / React JS / Node JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
            I spearheaded the design and development of a sophisticated
            eCommerce website, the Pro Shop, leveraging the power of the MERN
            stack. This project allowed me to showcase my proficiency in
            creating a seamless online shopping experience. By incorporating
            user authentication and authorization through JWT, I ensured that
            access to protected routes remained secure and exclusive. Moreover,
            I integrated a reliable payment gateway, PayPal, enabling customers
            to make secure and convenient online transactions. My skills in
            Node, Express, MongoDB, React, Redux, Bootstrap, and JWT were
            instrumental in delivering a feature-rich eCommerce platform that
            streamlined the buying process while maintaining the highest
            standards of security. The biggest challenge I faced while building
            this application was figuring out suthentication with JWT. This was
            something that I had never done before so it was very challenging
            but super rewarding to see it working properly.
          </p>
          <a
            href="https://github.com/Karns11/ProShopV2"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://proshop-7ryx.onrender.com/"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4">Demo</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bootstrap
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Javascript
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Node
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MONGODB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MaterialUI
              </p>
            </div>
          </div>
        </div>
        <Link href="/#projects">
          <p className="underline cursor-pointer">Back</p>
        </Link>
      </div>
    </div>
  );
};

export default property;
