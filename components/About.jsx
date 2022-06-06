import React from "react";

const About = () => {
  return (
    <div id="about" className=" w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-[#A97155]">
            About
          </p>
          <h2 className="py-4">Who I am</h2>
          <p className="py-2 text-gray-600">
            I have spent the last fifteen years working in different jobs. from
            being a tire technician, custodian, mold remediator, and landscaper.
            I have always been in interested with web development, and working
            with computers. In 2021 I started dabbling with web development
            during the pandemic. What I thought would be something that I would
            do during the pandemic turned into a love for programming.
          </p>
          <br />
          <p className="py-2 text-gray-600">
            Fascinated with just how intricate programming can be I was quickly
            drawn to learn more. I started learning Javascript, and was even
            more enthused with making websites interactive. I then started
            taking part-time courses to get more experience under my belt. I am
            now spending my time building projects with React, Angular, and
            Firebase, and learning new technologies.
          </p>
          <br />
          <p className="py-2 text-gray-600 underline cursor-pointer">
            Check out my latest projects.
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <img
            className=" rounded-3xl"
            src="https://images.unsplash.com/photo-1628841220664-fbc764500e3d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
            alt="/"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
