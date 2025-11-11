import React from "react";
import hero1 from "./../../assets/hero1.jpg";
import call from "./../../assets/call.png";
import plus from "./../../assets/plus.png";
import Featur from "../../featur/Featur";
import Achievement from "../../acievement/Achievement";
import ProjectSlide from "../../ProjectSlide/ProjectSlide";
import ConsultingSection from "../../consulting/ConsultingSection";
import BlogSummerize from "../../blogSummerize/BlogSummerize";
import Footer from "../../footer/Footer";

const Home = () => {
  return (
    <div>
      <div className="w-full min-h-screen pt-20 bg-cover bg-no-repeat flex justify-end" style={{backgroundImage: "url('/static/media/hero-bg.png')", backgroundPosition: "-100px 0", backgroundSize: "120%"}}>
        <div className="w-full lg:w-[90%] flex flex-col lg:flex-row gap-5 px-4 lg:px-0 py-10 lg:py-0 lg:pt-20">
          <div className="w-full lg:w-1/2 flex flex-col justify-end mb-8 lg:mb-12">
            <div className="flex items-center mb-6 lg:mb-8">
              <hr className="w-12 border-2 border-custom-red" />
              <h1 className="text-white text-xl lg:text-2xl ml-5">Work with SW DEV</h1>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mt-6 lg:mt-8">
              Innovate Solution For Business <span className="text-custom-red">Success</span>
            </h2>
            <p className="text-base lg:text-xl text-white mt-6 lg:mt-8">
              We create stunning websites, redesign platforms, and craft unique branding to elevate your business.
            </p>
            <hr className="mt-6 lg:mt-8 border-white/20" />
            <div className="mt-6 lg:mt-8 flex flex-col md:flex-row gap-6 lg:gap-8">
              <button className="flex items-center gap-2 text-lg lg:text-xl px-6 py-2 rounded-full bg-custom-red text-white hover:opacity-90 transition">
                Work together
                <div className="w-10">
                  <img src={plus} alt="" className="w-full h-auto brightness-0 invert" />
                </div>
              </button>
              <div className="flex items-center gap-3">
                <div className="w-16 lg:w-20">
                  <img src={call} alt="" className="w-full h-auto" style={{filter: "invert(41%) sepia(94%) saturate(6868%) hue-rotate(345deg) brightness(102%) contrast(88%)"}} />
                </div>
                <div className="text-white text-lg lg:text-xl font-medium flex flex-col gap-2">
                  <span>Call Everyday</span>
                  <span>+261 34 50 557 68</span>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 flex items-center justify-center">
            <img src={hero1} alt="Hero" className="w-full h-auto max-w-md lg:max-w-full" />
          </div>
        </div>
      </div>
      <Featur/>
      <Achievement/>
      <ProjectSlide/>
      <ConsultingSection/>
      <BlogSummerize/>
      <Footer/>
    </div>
  );
};

export default Home;
