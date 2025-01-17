import React from "react";
import Vincitore from "../Asset/portopolio/Vincitore.png";
import cms from "../Asset/portopolio/hero temlate 2.png";
import Wedding from "../Asset/portopolio/Screenshot 2024-11-26 144051.png";

const Porto = () => {
  const portfolioItems = [
    {
      title: "Website Cms",
      description: "Website Dinamis Company Profile.",
      image: cms,
      link: "#",
    },
    {
      title: "Vincitore Course",
      description: "Website Course Bahasa.",
      image: Vincitore,
      link: "#",
    },
    {
      title: "Web Invitation Wedding",
      description: "Website Wedding Invitation.",
      image: Wedding,
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen py-16" id="portfolio">
      <div className="container mx-auto px-4">
        <div
          className="text-center mb-12"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <h1 className="text-4xl font-bold text-red-500 mb-4">Portofolio</h1>
          <h2 className="text-lg text-gray-600">
            RECOGNITIONS & ACCOMPLISHMENT
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-8">
          {portfolioItems.map((item, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row items-center mb-8"
              data-aos="fade-up"
              data-aos-delay={`${index * 300}`} 
            >
              {index % 2 === 0 ? (
                <>
                  <div className="w-full md:w-1/2 pr-0 md:pr-8 mb-6 md:mb-0">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-start">
                      <a
                        href={item.link}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="w-full md:w-1/2 mb-6 md:mb-0">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-md"
                    />
                  </div>
                  <div className="w-full md:w-1/2 pl-0 md:pl-8">
                    <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-4">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mb-4">{item.description}</p>
                    <div className="flex justify-start">
                      <a
                        href={item.link}
                        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus-shadow-outline"
                      >
                        Read more
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Porto;
