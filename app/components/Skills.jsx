import Image from "next/image";
import React from "react";

import html from "@public/assets/skills/html.png";
import css from "@public/assets/skills/css.png";
import javascript from "@public/assets/skills/javascript.png";
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
        darkMode ? "w-full lg:h-screen p-2 bg-black" : "w-full lg:h-screen p-2"
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
                <p>*Certified</p>
              </div>
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
                <Image alt="/" src={html} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>HTML</h3>
              </div>
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
                <Image alt="/" src={css} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>CSS</h3>
              </div>
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
                <Image alt="/" src={javascript} width={64} height={64} />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>JAVASCRIPT</h3>
              </div>
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
