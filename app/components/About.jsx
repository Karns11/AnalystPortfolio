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
            {/* I am currently an Associate Analyst, Advanced Analytics at The Walt
            Disney Company - Partners Federal Credit Union. I graduated from
            Michigan State University's Eli Broad College of Business with a
            Bachelor's degree in Marketing with a minor in Information
            Technology. Additionally, I am continuously learning new skills and
            you can find me working on a project each and every day. I am
            confident that there is nobody more passionate about data than me. */}
            I’m a data professional with a passion for transforming data into
            meaningful insights. I currently work as an Associate Analyst at
            Partners Federal Credit Union, part of The Walt Disney Company,
            where I support critical business decisions through data modeling
            and analytics. I earned my Bachelor’s degree in Marketing with a
            minor in Information Technology from Michigan State University’s Eli
            Broad College of Business, and I’m always learning and building new
            projects to grow my skills.
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
