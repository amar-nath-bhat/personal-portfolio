import React from "react";

function About() {
  const sec1 = [
    {
      id: 1,
      title: "Name",
      value: "Amarnath B Bhat",
    },
    {
      id: 2,
      title: "Age",
      value: "19",
    },
    {
      id: 3,
      title: "Location",
      value: "Udupi, Karnataka, India",
    },
    {
      id: 4,
      title: "Occupation",
      value: "Student",
    },
  ];
  const sec2 = [
    {
      id: 1,
      title: "College",
      value: "Manipal Institute of Technology, Manipal",
    },
    {
      id: 2,
      title: "Course",
      value: "Bachelor of Technology in Computer and Communication Engineering",
    },
  ];
  const sec3 = [
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
      img: "Javascript.png",
    },
    {
      id: 4,
      title: "React.js",
      img: "React.png",
    },
    {
      id: 5,
      title: "Node.js",
      img: "Node.png",
    },
    {
      id: 6,
      title: "MongoDB",
      img: "MongoDB.png",
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
      title: "tailwindcss",
      img: "tailwind.png",
    },
    {
      id: 15,
      title: "bootstrap",
      img: "bootstrap.png",
    },
  ];
  const sec4 = [
    {
      id: 1,
      title: "CodeCraft- Coding Hackathon 2024",
      description:
        "A hackathon event organized by T. A. Pai Management Institute (TAPMI), Manipal as a part of Calypso '23 event, where my team and I participated and were selected among the top 9 teams for the final coding round, out of over 160 teams that registered for the event.",
    },
    {
      id: 2,
      title: "Web Development Intern at XYZ Technologies",
      description:
        "I worked as a web development intern at XYZ Technologies for a period of 2 months, where I developed a web application for managing employee data using React.js and Node.js.",
    },
    {
      id: 3,
      title: "Software Development Intern at ABC Solutions",
      description:
        "I worked as a software development intern at ABC Solutions for a period of 3 months, where I developed a full-stack web application for managing customer data using React.js, Node.js, and MongoDB.",
    },
  ];
  return (
    <>
      <div className="px-10 py-10 md:px-20 md:py-20">
        <h1 className="text-6xl font-bold text-gray-900">About</h1>
        <p className="mt-4 text-gray-600 text-2xl">
          Learn more about me and my journey!
        </p>
        <div className="mt-5 flex flex-col ">
          <section>
            <h2 className="text-3xl font-bold text-gray-900">Personal Info</h2>
            <p className="mt-4 text-gray-600 text-xl">
              <div className="flex flex-col gap-3">
                {sec1.map((item) => (
                  <span key={item.id}>
                    <span className="font-bold">{item.title}:</span>{" "}
                    {item.value}
                  </span>
                ))}
              </div>
            </p>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900">
              Educational Info
            </h2>
            <p className="mt-4 text-gray-600 text-xl">
              <div className="flex flex-col gap-3">
                {sec2.map((item) => (
                  <span key={item.id}>
                    <span className="font-bold">{item.title}:</span>{" "}
                    {item.value}
                  </span>
                ))}
              </div>
            </p>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900">Skills</h2>
            <p className="mt-4 text-gray-600 text-xl">
              <div className="flex gap-14 flex-wrap md:w-2/6">
                {sec3.map((item) => (
                  <img key={item.id} src={item.img} className="w-16 h-16"></img>
                ))}
              </div>
            </p>
          </section>
          <section className="mt-8">
            <h2 className="text-3xl font-bold text-gray-900">Experience</h2>
            <p className="mt-4 text-gray-600 text-xl">
              <div className="flex flex-col gap-3">
                {sec4.map((item) => (
                  <span key={item.id}>
                    <span className="font-bold">
                      {item.id}
                      {". "}
                      {item.title}:
                    </span>{" "}
                    {item.description}
                  </span>
                ))}
              </div>
            </p>
          </section>
        </div>
      </div>
    </>
  );
}

export default About;
