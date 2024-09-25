import React from "react";
import html from "../../public/html.png";
import css from "../../public/css.jpg";
import javascript from "../../public/javascript.png";
import laravel from "../../public/laravel.png";
import codeigniter from "../../public/ci-logo.png";
import django from "../../public/django.jpg";
import mysql from "../../public/mysql.png";
import vue from "../../public/vue.jpg";
import postgresql from "../../public/postgresql.jpg";
function Experiance() {
  const cardItem = [
    {
      id: 1,
      logo: laravel,
      name: "Laravel",
    },
    {
      id: 2,
      logo: css,
      name: "CSS",
    },
    {
      id: 3,
      logo: codeigniter,
      name: "Codeigniter",
    },
    {
      id: 4,
      logo: django,
      name: "Django",
    },
    {
      id: 5,
      logo: mysql,
      name: "Mysql",
    },
    {
      id: 6,
      logo: postgresql,
      name: "Postgresql",
    },
    {
      id: 6,
      logo: vue,
      name: "Vue.js",
    },
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
        <h1 className="text-3xl font-bold mb-5">Experiance</h1>
        <p className="  ">
          I've more than 2 years of experiance in below technologies.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-md p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experiance;
