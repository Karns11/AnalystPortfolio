import Image from "next/image";
import React from "react";

import powerbi from "@public/assets/skills/powerbi.png";
import airflow from "@public/assets/skills/airflow.png";
import mage from "@public/assets/skills/mage.png";
import excel2 from "@public/assets/skills/excel.png";
import tableau2 from "@public/assets/skills/tableau.svg";
import sql from "@public/assets/skills/sql.png";
import alteryx from "@public/assets/skills/alteryx.png";
import git from "@public/assets/skills/git.png";
import python from "@public/assets/skills/python.png";
import loading from "@public/assets/skills/loading.png";
import r from "@public/assets/skills/r.png";

const Skills = ({ darkMode }) => {
  return (
    <div
      id="skills"
      className={
        darkMode ? "w-full lg:h-auto p-2 bg-black" : "w-full lg:h-auto p-2"
      }
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Skills
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>
          What I Can Do
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={python} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PYTHON</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>Several data pipelines built using python</li>
              <li>Extensive course work utilizing python</li>
              <li>Dozens of projects built using python</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={r} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>R</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>Maintain several critical business processes built with R</li>
              <li>
                Leverage R for preprocessing data across numerous critical
                business reports.
              </li>
              {/* <li>Received datacamp certification</li> */}
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={airflow} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Airflow</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Used Airflow to orchestrate NFL data pipeline used for NFL
                fantasy points predictions
              </li>
              {/* <li></li> */}
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={mage} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MAGE</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Leveraged Mage to orchestrate NFL data pipelines, which are used
                for NFL fantasy points predictions
              </li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={sql} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Use SQL daily during current and previous work experiences
              </li>
              <li>Extensive coursework utilizing SQL</li>
              <li>Received datacamp certification</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={alteryx} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>ALTERYX</h3>
                <li>Certified</li>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Utilized Alteryx daily during market data analytics internship
              </li>
              <li>Passed desginer core certification exam</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={excel2} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>EXCEL</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Use Excel daily during current and previous work experiences
              </li>
              <li>Extensive coursework utilizing Excel</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={tableau2} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>TABLEAU</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>Extensive coursework utilizing Tableau</li>
              <li>Used Tableau daily during curent and previous experiences</li>
              <li>Completed multiple side projects with tableau</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={powerbi} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Power BI</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Developed several business intelligence reports using Power BI
              </li>
              <li>
                Utilized Power BI daily during current and previous experiences
              </li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 bg-[#fff] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={git} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>GIT</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>
                Managed source code versions and collaborated on projects using
                Git for effective code tracking and version control.
              </li>
              <li> Integrated Git with CI/CD pipelines</li>
            </div>
          </div>

          <div
            className={
              darkMode
                ? "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 md:col-span-2 bg-[#ecf0f3] shadow-gray-400"
                : "p-6 shadow-lg rounded-xl hover:scale-105 ease-in duration-300 md:col-span-2 shadow-gray-400"
            }
          >
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image alt="/" src={loading} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MORE SKILLS</h3>
              </div>
            </div>
            <div className="text-start mt-2">
              <li>Constantly am working on projects and learning new skills</li>
              <li>Always working on sharpening my skills</li>
              <li>I like to consider myself a continued learner</li>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
