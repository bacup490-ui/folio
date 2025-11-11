import React from "react";
import ceo from "./../assets/ceo.jpg";
import quote from "./../assets/ab-shape.png"

const Achievement = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center bg-cover bg-no-repeat py-12 px-4" style={{backgroundImage: "url('/static/media/skill-bg.png')", backgroundSize: "150%", backgroundPosition: "-200px 0"}}>
      <div className="w-full md:w-4/5 flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 relative">
        <div className="flex-1 w-full lg:max-w-[50%]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-5">
            What Our CEO Says About <span className="text-custom-red">SW DEV</span>
          </h2>
          <p className="italic text-base md:text-lg text-white mt-3">
            "We help our clients transform their business operations by creating scalable mobile and web applications, enhancing UX/UI design, and building strong, recognizable brands in the digital world."
          </p>
          <p className="text-base md:text-lg text-white my-5 leading-relaxed">
            We focus on delivering high-performance web and mobile applications, intuitive UX/UI design, and strategic branding to ensure seamless user experiences and long-term business success.
          </p>
          <div className="font-bold text-gray-800 mb-5">
            <span className="text-custom-red text-2xl font-medium block">Willy JH</span>
            <span className="text-xl text-white block mt-1">CEO & Founder</span>
          </div>
        </div>
        <div className="flex-1 relative text-center lg:text-right">
          <img src={ceo} alt="CEO" className="w-80 h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px] rounded-full mx-auto lg:mx-0" />
          <div className="absolute bottom-5 left-5">
            <img src={quote} alt="" className="w-48 h-48 md:w-64 md:h-64 lg:w-[300px] lg:h-[300px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Achievement;
