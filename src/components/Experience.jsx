import React from "react";
import html from "../assets/html.png";
import css from "../assets/css.png";
import javascript from "../assets/javascript.png";
import reactImage from "../assets/react.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";
// import github from "../assets/github.png";
import tailwind from "../assets/tailwind.png";
import mern from "../assets/mern.webp";

const Experience = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    {
      id: 3,
      src: javascript,
      title: "Javascript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 5,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 6,
      src: mysql,
      title: "Mysql",
      style: "shadow-blue-500",
    },
    {
      id: 7,
      src: php,
      title: "PHP",
      style: "shadow-pink-400",
    },
    {
      id: 8,
      src: mern,
      title: "MERN STACK",
      style: "shadow-gray-400",
    },
  ];

  return (
    <div name="experience" className="w-full h-full py-24 bg-white">
      <div className="mx-auto max-w-screen-lg p-4 flex flex-col justify-center w-full h-full text-jet">
        <div>
          <p className="text-4xl border-b-4 border-gainsboro p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies i've worked with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                "shadow-md hover:scale-105 duration-500 py-2 rounded-lg bg-white" +
                " " +
                style
              }
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4 text-jet">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
