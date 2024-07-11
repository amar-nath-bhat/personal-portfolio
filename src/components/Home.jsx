import React from "react";
import { projects } from "../constants/projects";
import { details } from "../constants/details";
import { skills } from "../constants/skills";
import { socials } from "../constants/socials";
import ProjectCard from "./ProjectCard";
const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-8 py-8 md:px-20 md:py-20 justify-around">
      <section className="md:w-1/5 flex flex-col gap-8 items-center">
        <img
          src={"/profile.jpeg" || "/person.jpg"}
          alt="Image"
          className="rounded-full shadow-2xl hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-black object-cover w-48 h-48"
        />
        <article className="flex flex-col items-center justify-center">
          <h1 className="font-bold text-4xl">Amarnath Bhat</h1>
          <h2 className="text-xl text-gray-600">
            Student | Developer | Engineer
          </h2>
          <div className="flex flex-col gap-2 mt-3">
            {details.map((detail, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-start"
              >
                <img src={detail.img} alt={detail.alt} className="w-6 h-6" />
                <p className="text-gray-600">{detail.value}</p>
              </div>
            ))}
          </div>
        </article>
        <article className="flex gap-10">
          {socials.map((social, index) => (
            <a
              key={index}
              href={social.link}
              className="hover:scale-125 transition-all duration-300 ease-in-out"
            >
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
          {skills.map((skill, index) => (
            <div
              key={index}
              className="rounded-full bg-slate-800 p-4 hover:scale-105 transition-all duration-300 ease-in-out hover:shadow-2xl shadow-black hover:bg-slate-500"
            >
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
            {projects.slice(0, 2).map((project, index) => (
              <ProjectCard project={project} key={index} />
            ))}
          </div>
        </article>
      </section>
    </div>
  );
};

export default Home;
