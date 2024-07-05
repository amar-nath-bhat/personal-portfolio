import React from "react";
import { projects } from "../constants/projects";
import ProjectCard from "./ProjectCard";
const Projects = () => {
  return (
    <>
      <div className="px-10 py-10 md:px-20 md:py-20">
        <h1 className="text-6xl font-bold text-gray-900 poetsen-one-regular">
          Projects
        </h1>
        <p className="mt-4 text-gray-600 text-2xl poetsen-one-regular">
          Check out some of my projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 w-fit h-fit ">
          {projects.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
