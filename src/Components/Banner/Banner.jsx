import React from "react";
import Hero from "../../assets/banner.png";
import { FaPlay } from "react-icons/fa";

const Banner = () => {
  return (
    <section className="bg-base-200 py-21 flex items-center">
      <div className="container mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="inline-flex items-center px-4 py-1 text-sm font-semibold bg-purple-100 text-purple-600 rounded-full mb-6">
            <span className="w-2 h-2 bg-purple-600 rounded-full mr-2"></span>
            New: AI-Powered Tools Available
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#101727] leading-tight mb-6">
            Supercharge Your <br /> Digital Workflow
          </h1>

          <p className="text-gray-500 text-lg mb-4">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
          </p>

          <p className="text-gray-500 text-lg mb-6">Explore Products</p>

          <div className="flex flex-wrap gap-4">
            <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-6 py-6 rounded-full font-semibold shadow-md hover:opacity-90 transition">
              Explore Products
            </button>

            <button className="btn flex items-center gap-2 px-6 py-6 rounded-full border border-purple-500 text-purple-600 hover:bg-purple-50 transition">
              <FaPlay /> Watch Demo
            </button>
          </div>
        </div>

        <div className="relative flex justify-center">
          <img
            src={Hero}
            alt="Hero-Banner"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
