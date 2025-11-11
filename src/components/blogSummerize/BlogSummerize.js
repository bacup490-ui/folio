import React from "react";
import portrait from "./../assets/project-blog.jpg";
import plus from "./../assets/plus.png";

const customCards = [
  {
    category: "GRAPHIC",
    image: portrait,
    date: "August 25, 2023",
    title: "Popular Consultants are big Meetup 2023",
    author: "Alex Collins",
  },
  {
    category: "DEVELOPMENT",
    image: portrait,
    date: "August 21, 2023",
    title: "How to Increase Business Products Sales",
    author: "Julia Moris",
  },
  {
    category: "DESIGN",
    image: portrait,
    date: "August 20, 2023",
    title: "Top 10 Most Popular Google Chrome app",
    author: "Amantha",
  },
];

const BlogSummerize = () => {
  return (
    <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-cover bg-no-repeat py-12 px-4" style={{backgroundImage: "url('/static/media/blog-bg.png')", backgroundSize: "120%", backgroundPosition: "-200px 0"}}>
      <div className="w-full md:w-4/5 flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div className="w-full md:w-4/5">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            We're here to share story from <span className="text-custom-red">Latest News</span>
          </h1>
        </div>
        <div className="w-full md:w-auto flex justify-start md:justify-end">
          <button className="flex items-center justify-between gap-2 h-16 md:h-20 w-full md:w-60 px-6 text-lg md:text-xl bg-custom-blue text-white rounded-full hover:opacity-90 transition">
            View all blogs
            <div className="w-10">
              <img src={plus} alt="" className="w-full h-auto brightness-0 invert" />
            </div>
          </button>
        </div>
      </div>
      <div className="mt-5 flex flex-col md:flex-row w-full md:w-4/5 gap-6 justify-between">
        {customCards.map((card, index) => (
          <div className="w-full md:w-[300px] bg-white border border-gray-600 rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105" key={index}>
            <div className="relative">
              <img src={card.image} alt={card.category} className="w-full h-48 object-cover" />
              <span className="absolute top-2 left-2 bg-custom-red text-white px-3 py-1 text-xs font-bold rounded">{card.category}</span>
            </div>
            <div className="p-4">
              <p className="text-gray-500 text-sm">📅 {card.date}</p>
              <h3 className="text-lg font-bold my-3">{card.title}</h3>
              <div className="flex justify-between items-center text-sm">
                <span className="text-gray-700">👤 {card.author}</span>
                <a href="#" className="text-custom-red no-underline font-bold hover:underline">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogSummerize;
