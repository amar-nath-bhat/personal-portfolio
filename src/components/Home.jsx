import React from "react";

const Home = () => {
  const details = [
    {
      id: 1,
      value: "Manipal Institute of Technology, Manipal",
      img: "college.png",
      alt: "College: ",
    },
    {
      id: 2,
      value: "Udupi, Karnataka, India",
      img: "location.png",
      alt: "Location: ",
    },
    {
      id: 3,
      value: "bhatamar8@gmailcom",
      img: "mail.svg",
      alt: "Email: ",
    },
  ];

  const socials = [
    {
      id: 1,
      value: "LinkedIn",
      img: "linkedin.png",
      alt: "LinkedIn",
      link: "https://www.linkedin.com/in/amarnath-bhat/",
    },
    {
      id: 2,
      value: "GitHub",
      img: "github.png",
      alt: "GitHub",
      link: "https://github.com/amar-nath-bhat",
    },
    {
      id: 3,
      value: "Twitter",
      img: "twitter.png",
      alt: "Twitter",
      link: "https://x.com/BhatAmarnath",
    },
    {
      id: 4,
      value: "Instagram",
      img: "instagram.png",
      alt: "Instagram",
      link: "https://www.instagram.com/amarbhat_20/",
    },
  ];

  const skills = [
    {
      id: 1,
      title: "C",
      img: "C.png",
    },
    {
      id: 2,
      title: "C++",
      img: "Cpp.png",
    },
    {
      id: 3,
      title: "JavaScript",
      img: "javascript.svg",
    },
    {
      id: 4,
      title: "React.js",
      img: "react.svg",
    },
    {
      id: 5,
      title: "Node.js",
      img: "nodedotjs.svg",
    },
    {
      id: 6,
      title: "MongoDB",
      img: "mongodb.svg",
    },
    {
      id: 7,
      title: "Python",
      img: "Python.png",
    },
    {
      id: 8,
      title: "Rust",
      img: "Rust.png",
    },
    {
      id: 9,
      title: "C#",
      img: "Cs.png",
    },
    {
      id: 10,
      title: "Java",
      img: "Java.png",
    },
    {
      id: 11,
      title: "MySQL",
      img: "MySQL.png",
    },
    {
      id: 12,
      title: "Linux/Ubuntu",
      img: "Ubuntu.png",
    },
    {
      id: 13,
      title: "Git",
      img: "Git.png",
    },
    {
      id: 14,
      title: "TailwindCSS",
      img: "tailwind.png",
    },
    {
      id: 15,
      title: "Bootstrap",
      img: "bootstrap.png",
    },
  ];
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
      title: "Weather App",
      description:
        "The Weather App is a web application that allows users to fetch real-time weather details for various cities around the world. This project leverages the RapidAPI platform to access a vast repository of weather data, providing users with accurate and up-to-date information.",
      link: "https://weather-app-livid-one.vercel.app/",
      github: "https://github.com/amar-nath-bhat/weather-app",
      img: "project3.png",
    },
  ];
  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 py-8 md:px-20 md:py-20 justify-around">
      <section className="md:w-1/5 flex flex-col gap-8 items-center">
        <img src="person.jpg" alt="Image" className="rounded-full shadow-2xl" />
        <article className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Amarnath Bhat</h1>
          <h2 className="text-xl text-gray-600">
            Student | Developer | Engineer
          </h2>
          <div className="flex flex-col gap-2 mt-3">
            {details.map((detail) => (
              <div
                key={detail.id}
                className="flex gap-2 items-center justify-start"
              >
                <img src={detail.img} alt={detail.alt} className="w-6 h-6" />
                <p className="text-gray-600">{detail.value}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="flex gap-10">
          {socials.map((social) => (
            <a key={social.id} href={social.link}>
              <img src={social.img} alt={social.alt} className="w-8 h-8" />
            </a>
          ))}
        </article>
      </section>

      <section className="flex flex-col gap-10 md:w-1/2">
        <article className="flex flex-col gap-5 justify-center items-start">
          <h1 className="text-4xl poetsen-one-regular">
            Hey there! I'm Amarnath, a student and an aspiring Software
            Engineer.
          </h1>
          <span className="text-2xl poetsen-one-regular text-gray-600">
            Checkout my work and contact me if you'd wish to work together.
          </span>
        </article>
        <article className="flex gap-5 flex-wrap justify-center items-center">
          {skills.map((skill) => (
            <div key={skill.id} className="rounded-full bg-gray-700 p-4">
              <img
                src={skill.img}
                alt={skill.title}
                className="w-12 h-12 object-contain mx-auto my-auto"
                title={skill.title}
              />
            </div>
          ))}
        </article>
        <article className="flex gap-5 flex-wrap justify-start items-center">
          <h1 className="text-4xl poetsen-one-regular">My Latest Projects</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
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
                    <a
                      href={project.github}
                      className="bg-gray-700 text-white px-2 py-1 rounded-md"
                    >
                      GitHub
                    </a>
                  </div>
                </div>
                <p className="text-gray-600 text-md">{project.description}</p>
              </a>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
