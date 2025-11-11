import React from "react";
import postPop from "./../assets/exemple.jpg";

const Footer = () => {
  return (
    <div className="w-full min-h-[70vh] flex flex-col items-center bg-cover bg-no-repeat py-12 px-4" style={{backgroundImage: "url('/static/media/footer-bg.png')", backgroundPosition: "-180px 0", backgroundSize: "120%"}}>
      <div className="bg-custom-red p-5 md:p-8 rounded-lg flex flex-col md:flex-row justify-center items-center mt-10 w-full md:w-4/5 lg:w-[70%] gap-6">
        <h2 className="text-white text-xl md:text-2xl font-bold text-center md:text-left">Subscribe to our Newsletter</h2>
        <div className="flex items-center bg-white rounded-full p-1 w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter Your Email"
            className="border-none px-4 py-2 flex-1 rounded-full outline-none text-base text-gray-600 min-w-[200px]"
          />
          <button className="bg-custom-red text-white border-none px-5 py-2 rounded-full text-base cursor-pointer font-bold hover:bg-custom-blue transition">Subscribe</button>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between text-white w-full md:w-4/5 mt-20 gap-8">
        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">About Us</h3>
          <div className="w-12 h-1 bg-custom-red mb-10"></div>
          <p className="text-base leading-relaxed mb-4">
            Business Consulting is optimizing standing manufactured products and
            installation synergy. Professionally predominant why professional
            business.
          </p>
          <div className="flex gap-4 mt-3">
            <i className="fa-brands fa-facebook text-2xl cursor-pointer text-blue-600"></i>
            <i className="fa-brands fa-instagram text-2xl cursor-pointer"></i>
            <i className="fa-brands fa-youtube text-2xl cursor-pointer text-red-600"></i>
          </div>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">Company</h3>
          <div className="w-12 h-1 bg-custom-red mb-10"></div>
          <ul className="list-none p-0">
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Home</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">About Us</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Contact Us</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Service</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Our Team</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">Services</h3>
          <div className="w-12 h-1 bg-custom-red mb-10"></div>
          <ul className="list-none p-0">
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Web site creation</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Web site Redesign</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">UX/UI Design</li>
            <li className="my-2 cursor-pointer hover:text-custom-red transition">Branding & Advertising</li>
          </ul>
        </div>

        <div className="flex-1">
          <h3 className="text-xl font-bold mb-3">Popular Posts</h3>
          <div className="w-12 h-1 bg-custom-red mb-10"></div>
          <div className="flex items-center mb-4">
            <img src={postPop} alt="Post 1" className="w-12 h-12 rounded mr-3" />
            <div>
              <p className="m-0 text-sm">How To Plugin Install WP server?</p>
              <span className="text-xs text-gray-400">Dec 12, 2023</span>
            </div>
          </div>
          <div className="flex items-center">
            <img src={postPop} alt="Post 2" className="w-12 h-12 rounded mr-3" />
            <div>
              <p className="m-0 text-sm">Top 10 Most Useful Google Extension</p>
              <span className="text-xs text-gray-400">Dec 15, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
