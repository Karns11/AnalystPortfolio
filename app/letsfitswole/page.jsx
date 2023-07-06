import Image from "next/image";
import React from "react";
import lfs2Img from "@public/assets/projects/lfs.jpg";
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
          src={lfs2Img}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">LET'S FIT SWOLE</h2>
          <h3> MongoDB / Express / React JS / Node JS</h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
            I am proud to present "Let's Fit Swole," a fitness application that
            I had envisioned for years and finally brought to life after
            acquiring the necessary skills. This project showcases my expertise
            in the MERN stack, as I designed, developed, and successfully
            launched the application. Utilizing React, along with tailwind,
            bootstrap, and MUI, I crafted an intuitive and visually appealing
            frontend. To ensure secure access to the application's features, I
            implemented user authentication and authorization using JWT.
            Additionally, I created robust RESTful APIs using Express.js for
            efficient server-side logic and data management. The deployment of
            this project was a very big milestone for me since I had envisoned
            this application for years. The biggest problem I faced was with the
            exercise of the day card. The exercise of the day makes a call to an
            exercise list api and return a random exercise each day. This was
            really hard to accomplish but after lots of hard work and
            determination I was able to solve this issue by getting the day of
            the month, setting a random muscle index equal to the day of the
            month, and then making an api call to all of the exercises and
            assigning the exercise of the day to the random muscle index. This
            will prove to be random each month since each time the api is called
            a new random muscle group is called as well.
          </p>
          <a
            href="https://github.com/Karns11/NewWorkoutApp"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
          <a
            href="https://letsfitswole.onrender.com/"
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
