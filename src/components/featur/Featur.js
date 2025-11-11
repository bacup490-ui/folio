import React from "react";
import plus from "./../assets/plus.png";
import web from './../assets/web.png'
import construct from './../assets/construct.png'
import ux from './../assets/ux.png'
import brand from './../assets/brand.png'

import ItemService from "../ItemsService/ItemService";

const services = [
  {
    id: "01",
    title: "Website Creation",
    description:
      "We build custom, responsive, high-performance websites tailored to your business.",
    icon: web,
  },
  {
    id: "02",
    title: "Website Redesign",
    description:
      "Modernizing websites with better design, speed, functionality, and user experience.",
    icon: construct,
  },
  {
    id: "03",
    title: "UX/UI Design",
    description:
      "Intuitive, engaging, and user-friendly designs that enhance customer experience",
    icon: ux,
  },
  {
    id: "04",
    title: "Branding & Advertising",
    description:
      "Creating logos, visuals, and marketing assets for strong brand identity.",
    icon: brand,
  },
];

const Featur = () => {
  return (
    <div className="w-full min-h-screen bg-cover bg-no-repeat flex flex-col justify-center items-center py-12 px-4" style={{backgroundImage: "url('/static/media/feature-bg.jpg')", backgroundPosition: "-120px 0"}}>
      <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="w-full md:w-4/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            We Run All Kinds Of Services From <span className="text-custom-red">Technologies</span>
          </h1>
        </div>
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <button className="flex items-center justify-between gap-2 h-16 md:h-20 w-full md:w-60 px-6 text-lg md:text-xl bg-custom-blue text-white rounded-full hover:opacity-90 transition">
            All Services
            <div className="w-10">
              <img src={plus} alt="" className="w-full h-auto brightness-0 invert" />
            </div>
          </button>
        </div>
      </div>

      <div className="w-full flex justify-center mt-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 w-full md:w-4/5">
          {services.map((service) => (
            <ItemService key={service.id} {...service} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Featur;
