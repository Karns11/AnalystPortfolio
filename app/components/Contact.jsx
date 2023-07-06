"use client";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import emailjs from "@emailjs/browser";

const Contact = ({ darkMode }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_965e8b9",
        "template_r4ybnou",
        form.current,
        "o-y_5neqNasZHuGbk"
      )
      .then(
        (result) => {
          toast.success("Message Sent!");
          e.target.reset();
        },
        (error) => {
          toast.error(error.text);
        }
      );
  };
  return (
    <div
      id="contact"
      className={darkMode ? "w-full py-16 bg-black" : "w-full py-16"}
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#379237]">
          Contact
        </p>
        <h2 className={darkMode ? "py-4 text-[#fff]" : "py-4"}>Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* left */}
          {/* <div className="hidden lg:block col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div>
                <img
                  className="rounded-xl hover:scale-103 ease-in duration-300"
                  src="https://images.unsplash.com/photo-1512486130939-2c4f79935e4f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80"
                  alt="contact"
                />
              </div>
              <div>
                <h2 className="py-3">Nate Karns</h2>
              </div>
              <div>
                <p className="uppercase pt-8">Connect With Me</p>
                <div className="flex items-center justify-between py-4">
                  <Link href="https://www.linkedin.com/in/nathan-karns-63820a216/">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaLinkedinIn />
                    </div>
                  </Link>
                  <Link href="https://github.com/Karns11">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <FaGithub />
                    </div>
                  </Link>
                  <Link href="mailto:karnsnat@msu.edu">
                    <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                      <AiOutlineMail />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div> */}

          {/* right */}

          <div
            className={
              darkMode
                ? "col-span-5 w-full h-auto shadow-xl  rounded-xl lg:p-4 bg-[#ecf0f3]"
                : "col-span-5 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4"
            }
          >
            <div className="p-4">
              <form ref={form} onSubmit={sendEmail}>
                <div className="flex flex-col">
                  <label htmlFor="name" className="uppercase text-sm py-2">
                    Name
                  </label>
                  <input
                    name="user_name"
                    id="name"
                    type="text"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>

                <div className="flex flex-col py-2">
                  <label htmlFor="email" className="uppercase text-sm py-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    id="email"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="subject" className="uppercase text-sm py-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    id="subject"
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label htmlFor="message" className="uppercase text-sm py-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="border-2 rounded-lg p-3 border-gray-300"
                    rows="10"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full p-4 text-gray-100 mt-4 shadow-xl shadow-gray-400 rounded-xl uppercase bg-gradient-to-r from-[#379237] to-[#54B435]"
                >
                  SEND MESSAGE
                </button>
              </form>
              <ToastContainer />
              <div className="flex items-center justify-around py-8">
                <Link href="https://www.linkedin.com/in/nathan-karns-63820a216/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link href="https://github.com/Karns11">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                    <FaGithub />
                  </div>
                </Link>
                <Link href="mailto:karnsnat@msu.edu">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-[#379237]">
                    <AiOutlineMail />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <Link href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300 bg-black">
              <HiOutlineChevronDoubleUp sixe={30} className="text-[#379237]" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
