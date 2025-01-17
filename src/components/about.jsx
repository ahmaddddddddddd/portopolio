import React from "react";

const About = () => {
  return (
    <div id="About">
      <section
        className="bg-white p-8 my-28"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-start">
          <div className="md:w-1/2 text-left mb-8 md:mb-0">
            <h1 className="text-red-600 text-base md:text-lg font-semibold mb-4">
              Ahmad Aqiela
            </h1>
            <h2 className="text-5xl md:text-6xl font-bold leading-tight">
              About Me
            </h2>
          </div>

          <div className="md:w-1/2 text-left">
            <p className="text-xl md:text-2xl text-gray-800 mb-4">
              Driven developer with a passion for solving complex problems and
              building innovative digital solutions.
            </p>
            <p className="text-lg md:text-xl text-gray-700">
              With expertise in full-stack development, I create efficient,
              scalable, and seamless applications that push the boundaries of
              technology.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
