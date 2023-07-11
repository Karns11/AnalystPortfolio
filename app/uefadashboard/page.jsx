import Image from "next/image";
import React from "react";
import SoccerViz from "@public/assets/projects/SoccerViz.png";
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
          src={SoccerViz}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">UEFA CHAMPIONS LEAGUE DASHBOARD</h2>
          <h3> Tableau </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
          The UEFA CHampions Leage Data Analysis Dashboard is a powerful Tableau tool designed to collect, visualize, and analyze various data from the leagues history. This project was undertaken out of my strong 
          passion for sports and my desire to pursue a career in data analysis. Using Tableau's robust features, the dashboard provides multiple visualizations to gain insights into UEFA stats.
          The data comes from Kaggle.com. The dashboard offers a range of visualizations and metrics to analyze the stats. It includes a map, butterfly charts, horizontal bar charts, and radial bar chart that 
          display key performance indicators such as Top Clubs By Games Played, Top Clubs By Goals Scored, Top Coaches By Total Appearance, Top Players By Total Appearance, and more. These visualizations enable 
          users to identify patterns, trends, and insights to help win arguments or become more familiar with the league. These visualizations include to use of calculated fields and data joins in order to provide more accurate
          statistics and satisfy my needs for the project. This project can easily be translated into real-world scenarios and I am happy to be able to show off this passion project.
          </p>
          <p className="mt-4">In summary, the UEFA CHampions Leage Data Analysis Dashboard in Tableau is a comprehensive tool that combines data collection, visualization, and advanced analytics techniques. 
          It provides sports entuhsiasts with a powerful resource to analyze stats, gain actionable insights, and make data-driven decisions to satisfy needs.
          </p>
          <div className="flex items-center justify-center pt-8">
            <Image className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400"
            width={700}
            hright={700}
            src={SoccerViz}
            alt="/" />
          </div>
          <a
            href="https://www.kaggle.com/datasets/basharalkuwaiti/champions-league-era-stats?resource=download"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">Data</button>
          </a>
          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Tableau
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
