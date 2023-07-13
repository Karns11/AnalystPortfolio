import Image from "next/image";
import React from "react";
import nbapredictor from "@public/assets/projects/NBAPredictor.png";
import nabImport from "@public/assets/projects/nbaimport.png";
import initalize from "@public/assets/projects/initalize.png";
import urlandmore from "@public/assets/projects/urlandmore.png";
import headers from "@public/assets/projects/headers.png";
import datesandoct from "@public/assets/projects/datesandoct.png";
import novanddec from "@public/assets/projects/novanddec.png";
import df1 from "@public/assets/projects/1df.png";
import heatMap from "@public/assets/projects/heatMap.png";
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
          In this passion project I scraped data from <a target='_blank' className="underline" href='https://www.basketball-reference.com/'>basketball-reference.com</a> in order to train a model to predict the results 
          of various NBA games. This project required lots of data cleaning and preparing, showcasing my ability to 
          work with messy data and my proficiency with the python language. This was the first model I've ever created. I will walk you through my process of 
          creating it. <br /> <br /> First, let's start by importing the required libraries.
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={nabImport}
            alt="/" />
          <p className="mt-4">
            Next, I will just initialize some contants that will be helpful for later on in the process. The year will be plugged 
            into the url so that the url can be dynamic, and then the total_stats and dates varibles will be empty lists that 
            we will be adding data into once we make our requests.
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={initalize}
            alt="/" />

          <p className="mt-4">
            Next, I want to initalize the first url that we will be scraping. I am going to use data from the 2022-2023 season 
            from October to December. However, it will be set up so that I can add more months to this process in the future 
            if I want to. <br /> <br /> Also, here we will initalize our response and soup variables. At this moment, 
            if we were to print the soup variable, we will get back the entire html code for the webpage, so we are right 
            on track.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={urlandmore}
            alt="/" />

          <p className="mt-4">
            Now, Let's grab the headers from the table. I am using soup.find_all('tr') in order to 
            get all tr tags and then I loop through those in order to get the th tags which is where the 
            headers are going to be. Then we assign that list to a variable called the_headers. 
            I will rename some for consitency.
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={headers}
            alt="/" />

          <p className="mt-4">
            Okay, now we will start getting a little more messy. First we will use some advanced list comprehension 
            methods in order to get the dates of each game. <br /> <br /> The code is iterating over each table row (tr tag) in the_tr_tags 
            and finding all the links (a tags) within each row. It then collects the text content of each link and stores 
            it in a nested list called date, with each inner list representing the links found within a specific table row. <br /> <br />
            Next, the code is looping through all the tr tags once again but is skipping the 0 index which contains the headers. 
            This is an attempt to get all of the necessary data that is stored in td tags. This block of code does pretty much the 
            same thing as above, but gets the data and stores that in a variable called oct_results.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={datesandoct}
            alt="/" />

          <p className="mt-4">
            I am now going to repeat this process for both November and December. Both times I am going to append that months 
            stats to the total_stats variable.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={novanddec}
            alt="/" />  

          <p className="mt-4">
            Now I have pretty much everything I need to create the first df that will contain the raw scores. I will assign
            the columns to be the the_headers variable I created earlier and also add the date variable at the start of 
            the df. Additionally, I really only need the headers to be 'Date', 'Visitor/N', 'Visitor PTS', 'Home/N', and 'Home PTS' 
            so I will restrict the df to only show that data. Then lastly, I will rename the column headers to clean it up a bit.
            This is exactly what it should look like.
            
          </p>
          <Image 
            className="hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400 mt-4"
            width={800}
            height={500}
            src={df1}
            alt="/" />  

          <p className="mt-4">
            I am currently working on updating this blog post. Please refer to my github repo if you wish to see 
            the remainder of the code.
          </p>


          <div className="flex justify-center">

          <a
            href="https://www.basketball-reference.com/"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">Data</button>
          </a>
          <a
            href="https://github.com/Karns11/NBADataAnalysisProject"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">GitHub Repo</button>
          </a>
          </div>

          
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-80">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Pandas
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Seaborn
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> matplotlib.pyplot
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
