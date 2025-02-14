import React from "react";

const BootcampCard = ({ title, startDate, duration }) => {
  return (
    <div className="bg-white shadow-lg rounded-xl p-4 border w-80">
      <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-md">Bestseller</span>
      <h3 className="text-lg font-semibold mt-2 text-gray-800">{title}</h3>
      <p className="text-sm text-gray-600 mt-1">
        <span className="font-semibold">Start Date:</span> 
        <span className="text-red-500 ml-1">{startDate}</span>
      </p>
      <p className="text-sm text-gray-600">
        <span className="font-semibold">Duration:</span> 
        <span className="text-red-500 ml-1">{duration}</span>
      </p>
      <button className="w-full bg-red-500 text-white mt-3 py-2 rounded-lg text-sm font-semibold hover:bg-red-600 transition">
        View Program
      </button>
    </div>
  );
};

export default BootcampCard;
