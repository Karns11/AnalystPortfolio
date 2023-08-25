import Image from "next/image";
import Link from "next/link";
import React from "react";
import showcaseImg from "@public/assets/showcase.jpg";

const About = ({ darkMode }) => {
  return (
    <div
      id="about"
      className={
        darkMode
          ? "w-full md:h-screen px-4 flex items-center py-4 bg-black"
          : "w-full md:h-screen px-4 flex items-center py-4"
      }
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#379237]">
            About
          </p>
          <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>Who I Am</h2>
          <p className={darkMode ? "py-2 text-[#fff]" : "py-2 text-gray-600"}>
            My ultimate career goal is to make a significant impact in the field
            of data analytics. I will be graduating from Michigan State
            University's Eli Broad College of Business in August of 2023 with a
            B.A. in Marketing and a minor in Information Technology.
            Additionally, I am continuously learning new skills and you can find
            me working on a project each and every day. I am confident that
            there is nobody more passionate about data analytics than me.
          </p>
          <Link href="/#projects">
            <p
              className={
                darkMode
                  ? "py-2 text-[#fff] underline cursor-pointer"
                  : "py-2 text-gray-600 underline cursor-pointer"
              }
            >
              Check out some of my latest projects
            </p>
          </Link>
        </div>
        <div className="m-auto shaddow-xl shadow-gray-400 flex items-center justify-center p-4">
          <Image
            className="rounded-3xl hover:scale-105 ease-in duration-300 shadow-lg shadow-gray-400"
            src={showcaseImg}
            alt="me"
            width={300}
            height={300}
          />
        </div>
      </div>
    </div>
  );
};

export default About;
