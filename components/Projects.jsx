import React from "react";
import ProjectItem from "../components/ProjectItem";
import travelImg from "../public/assets/travel.png";
import myFlixImg from "../public/assets/myflix.png";
import meetImg from "../public/assets/meet.png";
import Netflix from "../public/assets/Netflix.png";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#A97155]">
          Projects
        </p>
        <h2 className="py-4">What I've built</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title="Travel Page"
            backgroundImg={travelImg}
            projectUrl="/travel"
          />
          <ProjectItem
            title="MyFlix"
            backgroundImg={myFlixImg}
            projectUrl="/myFlix"
          />
          <ProjectItem
            title="Meet App"
            backgroundImg={meetImg}
            projectUrl="/meet"
          />
          <ProjectItem
            title="Netflix"
            backgroundImg={Netflix}
            projectUrl="/netflix"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
