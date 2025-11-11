import React from "react";

const ItemService = ({ id, title, description, icon }) => {
  return (
    <div className="bg-white border border-gray-300 p-8 md:p-12 lg:p-16 text-center shadow-md transition-transform hover:scale-105">
      <div className="w-12 h-12 bg-gray-100 rounded-full flex justify-center items-center mx-auto mb-3">
        <img src={icon} alt="" className="w-8 h-auto" style={{filter: "invert(19%) sepia(98%) saturate(3652%) hue-rotate(347deg) brightness(115%) contrast(88%)"}} />
      </div>
      <h2 className="text-3xl md:text-4xl text-gray-300 font-bold">{id}</h2>
      <h3 className="text-base md:text-lg font-bold text-gray-800 my-2">{title}</h3>
      <div className="w-8 h-0.5 bg-custom-red mx-auto my-3"></div>
      <p className="text-sm text-gray-600 mb-4">{description}</p>
      <button className="mt-4 px-4 py-2 border border-gray-300 rounded-full bg-white cursor-pointer text-sm font-bold transition-colors hover:bg-gray-100">
        Read More <span className="text-custom-red">+</span>
      </button>
    </div>
  );
};

export default ItemService;
