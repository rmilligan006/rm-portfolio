import React from "react";
import Link from "next/link";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm tracking-widest text-gray-600">
            Let's build something amazing together
          </p>
          <h1 className="py-4 text-gray-700">
            Hi, I'm <span className="text-[#A97155]">Ryan</span>
          </h1>
          <h1 className="py-4 text-gray-700">I'm a Front end web developer</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            I'm a front end web developer specializing in building (and
            occasionally designing) exceptional digital experiences. Currently
            I'm focused on building responsive front-end web applications while
            continuing learning back-end technologies
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link
                href={"https://www.linkedin.com/in/ryan-milligan-18815820b/"}
              >
                <FaLinkedinIn />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href={"https://github.com/rmilligan006"}>
                <FaGithub />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
            <Link href={"/#contact"}>
                <AiOutlineMail />
              </Link>
            </div>
            <div className="rounded-full shadow-lg shadow-gray-600 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <Link href="/resume">
                <BsFillPersonLinesFill />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
