import React from "react";

const ProjectCard = ({ project, index }) => {
  return (
    <a
      href={project.cardLink || project.link}
      key={index}
      className="bg-white p-6 rounded-xl flex flex-col gap-2 w-auto h-auto mx-auto border-solid border-black border-2 shadow-lg shadow-black hover:bg-gray-200 hover:scale-105 transition-all duration-300 ease-in-out"
    >
      <img
        src={project.img}
        alt="image"
        className="w-full h-fit object-cover border-solid border-black border-2 mb-4 mx-auto"
      />
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold">{project.title}</h2>
        <div className="flex gap-8 items-center">
          <a href={project.link}>
            <img src="paper.png" alt="Link" className="w-5 h-5" />
          </a>
          <a href={project.github}>
            <img src="github.png" alt="GitHub" className="w-5 h-5" />
          </a>
        </div>
      </div>
      <p>{project.description}</p>
    </a>
  );
};

export default ProjectCard;
