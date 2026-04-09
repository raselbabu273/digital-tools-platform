import React from "react";

const Cards = () => {
  return (
    <div className="flex items-center justify-center bg-gray-100">
      <div className="relative bg-white rounded-2xl shadow-md p-6 w-[320px] border border-gray-200">
        {/* Popular Badge */}
        <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
          Popular
        </span>

        {/* Icon */}
        <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
          <span className="text-2xl">✏️</span>
        </div>

        {/* Title */}
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          Design Templates Pack
        </h2>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4">
          2000+ premium templates for social media, presentations, and marketing
          materials.
        </p>

        {/* Price */}
        <div className="mb-4">
          <span className="text-3xl font-bold text-gray-800">$49</span>
          <span className="text-gray-500 ml-1">/One-Time</span>
        </div>

        {/* Features */}
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

        {/* Button */}
        <button className="w-full py-3 rounded-full text-white font-medium bg-gradient-to-r from-purple-500 to-pink-500 hover:opacity-90 transition">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default Cards;
