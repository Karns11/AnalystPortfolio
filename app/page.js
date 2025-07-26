"use client";
import Link from "next/link";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMenu, AiOutlineMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaMoon } from "react-icons/fa";
import Experience from "./components/Experience";

export default function Home() {
  const [darkMode, setdarkMode] = useState(false);

  const handleDarkMode = () => {
    setdarkMode(!darkMode);
  };

  return (
    <div>
      <Navbar darkMode={darkMode} onDarkModeToggle={handleDarkMode} />
      <Main darkMode={darkMode} />
      <About darkMode={darkMode} />
      <Projects darkMode={darkMode} />
      <Skills darkMode={darkMode} />
      <Experience darkMode={darkMode} />
      <Contact darkMode={darkMode} />
    </div>
  );
}
