import Image from "next/image";
import React from "react";
import excelbikeproj from "@public/assets/projects/excelbikeproj.png";
import magedatapipeline from "@public/assets/projects/Mage pipeline structure SS2.png";
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
          src={magedatapipeline}
          alt="/"
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">NFL Data Pipeline</h2>
          <h3> Python, GCP, MAGE, R, Biquery </h3>
        </div>
      </div>

      <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
        <div className="col-span-4">
          <div className="w-[55px] mb-4">
            <Link href="/#projects">
              <p className="underline cursor-pointer">Back</p>
            </Link>
          </div>
          <p className="text-[#379237]">Project</p>
          <h2>Overview</h2>
          <p>
            This project focused on building a data engineering pipeline for
            predicting weekly NFL fantasy points for players. The pipeline
            begins by scraping NFL data using the nfl-data-py library. The data
            is then orchestrated using Mage, which automates the extraction,
            transformation, and loading (ETL) processes. The raw data is stored
            in Google Cloud Platform (GCP), acting as the data lake for the
            project. From there, the data is processed and stored in BigQuery,
            which serves as the data warehouse. Finally, R is used to query the
            data from BigQuery and apply machine learning models to predict
            weekly NFL fantasy points for each player. This project integrates
            multiple technologies to streamline data management, storage, and
            analysis, ultimately providing predictions that can aid fantasy
            football players in making informed decisions.
          </p>
          <p className="mt-4">
            Check out my blog post that goes more into detail on how I was able
            to create this amazing project!
          </p>

          <a
            href="https://medium.com/@nathankarns28/lets-build-an-nfl-data-pipeline-using-mage-ai-d408063a0cd9"
            target="_blank"
            rel="noreferrer"
            className="flex items-center justify-center pt-4"
          >
            <button className="px-8 py-2 mt-4 mr-8">Medium</button>
          </a>
        </div>
        <div className="col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 md:h-[300px]">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Python
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> GCP
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> MAGE
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> R
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" /> Bigquery
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default property;
