import React from "react";

function About() {

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
