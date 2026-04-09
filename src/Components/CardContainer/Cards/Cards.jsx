import React from "react";

const Cards = () => {
  return (
    <div className="flex items-center justify-center bg-base-200">
      <div className="relative bg-white rounded-2xl shadow-md p-6 w-[320px] text-left border border-gray-200">
        
        <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
          Popular
        </span>

        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
          <span className="text-2xl">✏️</span>
        </div>

        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Design Templates Pack
        </h2>

        <p className="text-gray-500 text-sm mb-4">
          2000+ premium templates for social media, presentations, and marketing
          materials.
        </p>

        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-800">$49</span>
          <span className="text-gray-500 ml-1">/One-Time</span>
        </div>

        <ul className="mb-6 space-y-2 text-sm text-gray-600">
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> 2000+ templates
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Monthly updates
          </li>
          <li className="flex items-center gap-2">
            <span className="text-green-500">✔</span> Commercial license
          </li>
        </ul>

        <button className="btn w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
