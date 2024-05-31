import React from "react";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row gap-10 px-10 py-10 md:px-20 md:py-20 md:gap-32">
      <div className="flex flex-col gap-10 md:w-1/2">
        <h1 className="text-6xl font-bold">Amarnath B Bhat</h1>
        <h2 className="text-3xl font-bold">
          "Transforming ideas into impactful digital experiences."
        </h2>

        <div className="description items-center">
          <p className="text-2xl text-gray-600">
            I am an engineering undergraduate with a strong passion for web
            development and an insatiable curiosity for learning new
            technologies. My technical expertise spans a variety of programming
            languages and frameworks, including Java, C, C++, Python,
            JavaScript, and Rust. I have hands-on experience with modern web
            development technologies like React.js and Node.js, and I am
            proficient in database management using Oracle SQL and MongoDB.
            Whether it's building dynamic web applications or exploring the
            latest in tech, I am dedicated to creating innovative and efficient
            solutions.
          </p>
        </div>
      </div>
      <div className="image items-center md:w-1/2">
        <img src="person.jpg" alt="Image" />
      </div>
    </div>
  );
};

export default Home;
