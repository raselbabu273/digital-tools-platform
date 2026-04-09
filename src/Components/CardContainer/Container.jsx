import React, { use, useState } from "react";
import Cards from "./Cards/Cards";

const Container = ({}) => {

    // const toolData = use(toolPromise);
    
  const [activeTab, setActiveTab] = useState("products");

  return (
    <div className="container mx-auto flex flex-col items-center justify-center pt-30 bg-base-200 px-4 text-center space-y-5">
      <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
        Premium Digital Tools
      </h1>

      <p className="max-w-md text-[#627382] text-sm md:text-base mb-8 leading-relaxed">
        Choose from our curated collection of premium digital products designed
        to boost your productivity and creativity.
      </p>

      <div className="inline-flex p-1 mb-15 bg-gray-50 border border-gray-100 rounded-full">
        <button
          onClick={() => setActiveTab("products")}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === "products"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Products
        </button>

        <button
          onClick={() => setActiveTab("cart")}
          className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
            activeTab === "cart"
              ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
              : "text-slate-600 hover:text-slate-900"
          }`}
        >
          Cart (2)
        </button>
      </div>

      <Cards></Cards>
    </div>
  );
};

export default Container;
