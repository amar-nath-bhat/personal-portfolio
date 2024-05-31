import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description:
        "A Full-Stack App that mimics a retail E-Commerce Dashboard, built using MERN Stack and facilitates CRUD operations.",
      link: "https://youtu.be/tH8FHd-s5dM",
      github: "https://github.com/amar-nath-bhat/e-commerce-dashboard",
      img: "project1.png",
    },
    {
      id: 2,
      title: "Meme Generator",
      description:
        "A simple website that renders memes fetched by an API from various sub-reddits from Reddit.com, built using HTML, Tailwind CSS, and JavaScript.",
      link: "https://amar-nath-bhat.github.io/webdev_course/Meme%20Generator/index.html",
      github:
        "https://github.com/amar-nath-bhat/webdev_course/tree/main/Meme%20Generator",
      img: "project2.png",
    },
    {
      id: 3,
      title: "Weather App",
      description:
        "The Weather App is a web application that allows users to fetch real-time weather details for various cities around the world. This project leverages the RapidAPI platform to access a vast repository of weather data, providing users with accurate and up-to-date information.",
      link: "https://weather-app-livid-one.vercel.app/",
      github: "https://github.com/amar-nath-bhat/weather-app",
      img: "project3.png",
    },
    {
      id: 4,
      title: "Git-ACP",
      description:
        "This is a small rust code to automate the github workflow. It includes the following git commands to add files/changes to a GitHub Repository, commit the changes, and push the changes to the remote repository.",
      link: "https://github.com/amar-nath-bhat/git-acp",
      github: "https://github.com/amar-nath-bhat/git-acp",
      img: "project4.png",
    },
    {
      id: 5,
      title: "Microsoft Clone",
      description:
        "A simple, responsive Microsoft website home page clone made using HTML & Tailwind CSS.",
      link: "https://amar-nath-bhat.github.io/webdev_course/MicrosoftClone/index.html",
      github:
        "https://github.com/amar-nath-bhat/webdev_course/tree/main/MicrosoftClone",
      img: "project5.png",
    },
    {
      id: 6,
      title: "Movie House",
      description:
        "A simple React.js Application that fetches data from OMDb and displays based on search results.",
      link: "https://react-movie-app-orpin-five.vercel.app/",
      github: "https://github.com/amar-nath-bhat/react-movie-app",
      img: "project6.png",
    },
    // project data
  ];

  return (
    <>
      <div className="px-10 py-10 md:px-20 md:py-20">
        <h1 className="text-6xl font-bold text-gray-900">Projects</h1>
        <p className="mt-4 text-gray-600 text-2xl">
          Check out some of my projects.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 pt-10 w-fit h-fit ">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.id}
              className="bg-white p-6 shadow-md rounded-md flex flex-col gap-2 w-auto h-auto mx-auto border-solid border-black border-2 shadow-black"
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
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
