import React from "react";
import mobilDesign from './../assets/d-mobile.jpeg';
import dDesktop from './../assets/d-desktop.jpeg';
import dWeb from './../assets/project-blog.jpg';
import plus from './../assets/plus.png'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const data = [
  {
    id: 1,
    date: "08 September 2024",
    category: "Design UX/UI",
    title: "Spice & Turmeric E-commerce UI/UX",
    description:
      "This UX/UI design is for CURCUS, an e-commerce platform dedicated to turmeric and spices. It blends a clean, modern aesthetic with a user-friendly interface, offering easy navigation, product exploration. ",
    image: dDesktop,
  },
  {
    id: 2,
    date: "10 December 2024",
    category: "WEB Site",
    title: "Stylish Sofas & Home Furniture",
    description:
      "HouseNiture is an eCommerce platform offering stylish sofas and home furniture. It features an elegant design, seamless navigation, and high-quality products to enhance interior comfort and aesthetics. Shop effortlessly with intuitive browsing.",
    image: dWeb,
  },
  {
    id: 3,
    date: "08 January 2025",
    category: "Design UX/UI",
    title: "TANA BUS – Smart Transport App UI/UX",
    description:
      "This UX/UI design concept is for TANA BUS, a transport app that helps users find bus stops, avoid wrong routes, and improve punctuality through account-based personalized experiences and seamless login options. ",
    image: mobilDesign,
  },
];

const ProjectSlide = () => {
  return (
    <div className="w-full min-h-screen flex flex-col justify-center items-center bg-cover bg-no-repeat py-12 px-4" style={{backgroundImage: "url('/static/media/ceo-bg.png')", backgroundPosition: "-200px 0"}}>
      <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="w-full md:w-4/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Our last <span className="text-custom-red">Project</span>
          </h1>
        </div>
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <button className="flex items-center justify-between gap-2 h-16 md:h-20 w-full md:w-60 px-6 text-lg md:text-xl bg-custom-blue text-white rounded-full hover:opacity-90 transition">
            All Projects
            <div className="w-10">
              <img src={plus} alt="" className="w-full h-auto brightness-0 invert" />
            </div>
          </button>
        </div>
      </div>
      <div className="w-full md:w-4/5 mt-5">
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className="bg-gray-900 text-white rounded-lg overflow-hidden text-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <p className="text-xs text-gray-400">{item.date}</p>
                  <p className="text-xs text-gray-400">{item.category}</p>
                  <h3 className="text-lg font-bold my-2">{item.title}</h3>
                  <p className="text-sm my-3">{item.description}</p>
                  <button className="bg-blue-500 text-white border-none px-4 py-2 cursor-pointer rounded hover:bg-blue-600 transition">Read More</button>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default ProjectSlide;
