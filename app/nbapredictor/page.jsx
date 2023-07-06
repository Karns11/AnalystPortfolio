import Image from "next/image";
import React from "react";
import nbapredictor from "@public/assets/projects/NBAPredictor.png";
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
          src={nbapredictor}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NBA GAME PREDICTOR</h2>
          <h3> Python </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
          The sports data analysis application is a comprehensive tool developed using Python and several powerful libraries. 
          Its purpose is to collect, process, and analyze basketball game data sourced from an online platform, offering valuable insights and 
          predictions for basketball enthusiasts and analysts. The application utilizes the BeautifulSoup library to scrape HTML pages and retrieve game data, 
          leveraging the Requests library to make HTTP requests and extract information efficiently. The collected data is then processed and cleaned using the Pandas 
          library, ensuring consistency and removing any inconsistencies or unnecessary information. Once the data is ready, the application performs various data 
          analysis tasks using Pandas and NumPy. It employs statistical calculations, data manipulation, and aggregations to extract meaningful patterns and insights 
          from the dataset. Key performance indicators such as field goal percentages, three-point percentages, rebounds, assists, and more are calculated to provide a 
          comprehensive overview of team performance. To enhance the application's predictive capabilities, it incorporates machine learning techniques. The Scikit-learn library is utilized to 
          train and deploy machine learning models that can predict game outcomes based on historical data. By analyzing factors such as team statistics, player performance, and game context, 
          the models provide predictions with a certain level of accuracy.
          </p>
          <p className="mt-4">I developed this program in order to showcase my data analysis skills with the hope to become more familiar with 
            ML in order to make predictions based on historical data. This project required lots of data preparation and cleaning 
            in order to create the necessary dataframe for predictions. I think this project showcases that I am fully able to partake in projects like this one.
            I am happy to report that this was the first data analysis side project I've ever done and that it currently has more than a 58% success rate. I plan on improving the 
            model by gathering more data and performing other types of statistical models as well, since this model only uses NBA data from the 2023 NBA season between October and December.
          </p>
          <a
            href="https://github.com/Karns11/NBADataAnalysisProject"
            target="_blank"
            rel="noreferrer"
          >
            <button className="px-8 py-2 mt-4 mr-8">Code</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> BeautifulSoup
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Requests
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Numpy
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Scikit-learn
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
