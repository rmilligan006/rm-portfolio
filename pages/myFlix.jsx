import React from "react";
import Image from "next/image";
import myFlixImg from "../public/assets/myflix.png";
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
          src={myFlixImg}
          alt=""
        />
        <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
          <h2 className="py-2">myFlix</h2>
          <h3> React Js/ MongoDB / Node.js / express</h3>
        </div>
      </div>

      <div className="max-w-[1240] mx-auto p-2 grid md:grid-cols-5 gap-8 pt-8">
        <div className="col-span-4">
          <p className="uppercase">Project</p>
          <h2>Overview</h2>
          <p>
            myFlix is a single page app that uses state routing and a responsive
            UI library for a smooth experience. This app provides a list of
            movies from a dedicated API that was created in a earlier project.
            The Api's database allows users to view the information about the
            movies, Directors and Genres within the movie cards. It also allows
            users to add and remove movies from their favorite lists. It allows
            new users to register, after registering it allows users to login
            and interact with the app. It is a single page application Used
            Parcel as a build tool Written with React and React Redux to create
            State routing navigation between pages Search bar to filter movies
            according to title Styled with React Bootstrap UI library
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
            <div className="grid grid-cols-3 md:grid-cols-1">
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                React
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                MongoDB
              </p>
              <p className="text-gray-600 py-2 flex items-center">
                <RiRadioButtonFill className="pr-1" />
                Mongoose
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
