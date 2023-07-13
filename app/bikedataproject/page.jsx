import Image from "next/image";
import React from "react";
import excelbikeproj from "@public/assets/projects/excelbikeproj.png";
import excelbikeproj2 from "@public/assets/projects/excelbikeproj2.png";
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
          src={excelbikeproj2}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">EXCEL BIKE DATA DASHBOARD</h2>
          <h3> Excel </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
            This project focused on analyzing sales data from a bike shop and aimed to identify factors that could influence 
            customers' decision to purchase a bike. The dataset included information such as ID, Marital Status, Gender, Income, 
            Children, Education, Occupation, Home Owner, Cars, Commute Distance, Region, Age, and Purchased Bike. Using this data, pivot 
            tables were created to summarize and analyze the information based on different variables. The project also involved 
            designing a dashboard that provided a comprehensive view of the factors that might influence bike purchases, 
            specifically focusing on Income, Age, and Commute Distance.
          </p>
          <p className="mt-4">By examining these variables, the project aimed to gain insights into customer 
          behavior and understand how income, age, and commute distance could impact the likelihood of bike purchases. 
          The pivot tables and dashboard visualizations helped to identify any trends or patterns in the data and provided 
          a clear overview of the relationships between these factors and bike sales. <br /> <br /> Overall, the project 
          provided a valuable analysis of the bike shop's sales data, shedding light on the potential factors that 
          influence customer decisions. This project is a simple one, yet it showcases my ability to use excel to answer 
          real-world business problems. These are just a few of the capabilities 
          </p>
          <div className="flex items-center justify-center pt-8">
            <Image className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400"
            width={700}
            hright={700}
            src={excelbikeproj}
            alt="/" />
          </div>
          <a
            href="https://github.com/Karns11/ExcelBikeDataDashboard"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">Github Repo</button>
          </a>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Excel
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
