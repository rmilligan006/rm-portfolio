import React from "react";
import Image from "next/image";
import meetImg from "../public/assets/meet.png";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";

const myFlix = () => {
  return (
    <div className="w-full">
      <div className="w-screen h-[30vh] lg:h-[40vh] relative">
        <div className="absolute top-0 left-0 w-full h-[30vh] lg:h-[40vh] bg-black/80 z-10" />
        <Image
          className="absolute z-1"
          layout="fill"
          objectFit="cover"
          src={meetImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">Meet App</h2>
          <h3> React Js/ Jest / Aws/ Google Calendar API</h3>
        </div>
      </div>

      <div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase">Project</p>
          <h2>Overview</h2>
          <p>
            Meet is a serverless, progressive web application(PWA) built with
            React using a test-driven development(TDD) technique. The
            application uses the Google Calendar API to fetch upcoming events.
          </p>
          <Link href={"https://rmilligans-movie-app.netlify.app/"}>
            <button className="px-8 py-2 mt-4 mr-8 text-gray-600">
              <a target="_blank">Demo</a>
            </button>
          </Link>
          <Link href={"https://github.com/rmilligan006/myFlix-client"}>
            <button className="px-8 py-2 mt-4 mr-8 text-gray-600">
              <a target="_blank">Code</a>
            </button>
          </Link>
        </div>
        <div className="col-span 4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl p-4">
          <div className="p-2">
            <p className="text-center font-bold pb-2">Technologies</p>
            <div className="grid grid-cols-2 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Firebase
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Aws
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Google Calendar API
              </p>
            </div>
          </div>
        </div>
      </div>
      <Link href="/#projects">
        <p className="underline p-2 cursor-pointer">Back</p>
      </Link>
    </div>
  );
};

export default myFlix;
