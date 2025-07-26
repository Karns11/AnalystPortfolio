"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaMoon } from "react-icons/fa";

const Navbar = ({ darkMode, onDarkModeToggle }) => {
  const [nav, setnav] = useState(false);
  const [shadow, setShadow] = useState(false);

  const handleNav = () => {
    setnav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={darkMode ? { backgroundColor: "black" } : {}}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3] ease-in duration-300"
          : "fixed w-full h-20 z-[100] ease-in duration-300"
      }
    >
      <div className="flex justify-between items-center w-full h-full px-4 2xl:px-16">
        <Link href="/">
          <h1 className="text-[#379237]">
            N<span className="tilted"></span>
          </h1>
        </Link>
        <div>
          <ul className="hidden md:flex">
            <li onClick={onDarkModeToggle}>
              <FaMoon className="mx-3" color={darkMode ? "white" : ""} />
            </li>
            <Link href="/#about">
              <li
                className={
                  darkMode
                    ? "ml-10 text-sm uppercase hover:border-b text-[#fff]"
                    : "ml-10 text-sm uppercase hover:border-b"
                }
              >
                About
              </li>
            </Link>
            <Link href="/#projects">
              <li
                className={
                  darkMode
                    ? "ml-10 text-sm uppercase hover:border-b text-[#fff]"
                    : "ml-10 text-sm uppercase hover:border-b"
                }
              >
                Projects
              </li>
            </Link>
            <Link href="/#skills">
              <li
                className={
                  darkMode
                    ? "ml-10 text-sm uppercase hover:border-b text-[#fff]"
                    : "ml-10 text-sm uppercase hover:border-b"
                }
              >
                Skills
              </li>
            </Link>
            <Link href="/#experience">
              <li
                className={
                  darkMode
                    ? "ml-10 text-sm uppercase hover:border-b text-[#fff]"
                    : "ml-10 text-sm uppercase hover:border-b"
                }
              >
                Experience
              </li>
            </Link>
            <Link href="/#contact">
              <li
                className={
                  darkMode
                    ? "ml-10 text-sm uppercase hover:border-b text-[#fff]"
                    : "ml-10 text-sm uppercase hover:border-b"
                }
              >
                Contact
              </li>
            </Link>
          </ul>
          <div className="md:hidden flex items-center">
            <div onClick={onDarkModeToggle} className="cursor-pointer px-4">
              <FaMoon color={darkMode ? "white" : ""} />
            </div>
            <div className="cursor-pointer px-4" onClick={handleNav}>
              <AiOutlineMenu
                style={darkMode ? { color: "white" } : {}}
                size={25}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {nav && (
        <div
          onClick={handleNav}
          className="md:hidden fixed left-0 top-0 w-full h-screen bg-black/70 z-[200]"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className={
              darkMode
                ? "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen p-10 ease-in duration-500 bg-black z-[201]"
                : "fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500 z-[201]"
            }
          >
            <div>
              <div
                className={
                  darkMode
                    ? "flex w-full items-center justify-between text-[#fff]"
                    : "flex w-full items-center justify-between"
                }
              >
                <Link href="/">
                  <h1>
                    N<span className="tilted"></span>
                  </h1>
                </Link>
                <div
                  className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer bg-[#ecf0f3]"
                  onClick={handleNav}
                >
                  <AiOutlineClose
                    style={darkMode ? { color: "black" } : { color: "black" }}
                  />
                </div>
              </div>
              <div className="border-b border-gray-300 my-4">
                <p
                  className={
                    darkMode
                      ? "w-[85%] md:w-[90%] py-4 text-[#fff]"
                      : "w-[85%] md:w-[90%] py-4"
                  }
                >
                  Transforming data into actionable intelligence
                </p>
              </div>
            </div>
            <div className="py-4 flex flex-col">
              <ul className={darkMode ? "uppercase text-[#fff]" : "uppercase"}>
                <Link href="/">
                  <li className="py-4 text-sm">Home</li>
                </Link>
                <Link href="/#about">
                  <li className="py-4 text-sm">About</li>
                </Link>
                <Link href="/#projects">
                  <li className="py-4 text-sm">Projects</li>
                </Link>
                <Link href="/#skills">
                  <li className="py-4 text-sm">Skills</li>
                </Link>
                <Link href="/#experience">
                  <li className="py-4 text-sm">Experience</li>
                </Link>
                <Link href="/#contact">
                  <li className="py-4 text-sm">Contact</li>
                </Link>
              </ul>
              <div className="pt-30">
                <p className="uppercase tracking-widest text-[#379237]">
                  Let's Connect
                </p>
                <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                  <Link href="https://www.linkedin.com/in/nathan-karns-63820a216/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                      <FaLinkedinIn color={darkMode ? "white" : ""} />
                    </div>
                  </Link>
                  <Link href="https://github.com/Karns11">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                      <FaGithub color={darkMode ? "white" : ""} />
                    </div>
                  </Link>
                  <Link href="mailto:karnsnat@msu.edu">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                      <AiOutlineMail color={darkMode ? "white" : ""} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
