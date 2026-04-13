// import React, { useState } from "react";

const AvailableCards = ({ cards }) => {
  console.log(cards);

  //   const [activeTab, setActiveTab] = useState("products");

  return (
    <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
      {cards.map((card) => {
        return (
          <div key={card.id} className="px-12 flex items-center">
            <div className="relative bg-white rounded-2xl shadow-md p-6 text-left border border-gray-200">
              <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
                {card.tag}
              </span>

              <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
                <span className="text-2xl">✏️{card.icon}</span>
              </div>

              <h2 className="text-xl font-semibold text-gray-800 mb-2">
                {card.name}
              </h2>

              <p className="text-gray-500 text-sm mb-4">
                2000+ premium templates for social media, presentations, and
                marketing materials.
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
      })}
    </section>

    // <div className="container mx-auto flex flex-col items-center justify-center pt-30 bg-base-200 px-4 text-center space-y-5">
    //   <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
    //     Premium Digital Tools
    //   </h1>

    //   <p className="max-w-md text-[#627382] text-sm md:text-base mb-8 leading-relaxed">
    //     Choose from our curated collection of premium digital products designed
    //     to boost your productivity and creativity.
    //   </p>

    //   <div className="inline-flex p-1 mb-15 bg-gray-50 border border-gray-100 rounded-full">
    //     <button
    //       onClick={() => setActiveTab("products")}
    //       className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
    //         activeTab === "products"
    //           ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
    //           : "text-slate-600 hover:text-slate-900"
    //       }`}
    //     >
    //       Products
    //     </button>

    //     <button
    //       onClick={() => setActiveTab("cart")}
    //       className={`px-8 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
    //         activeTab === "cart"
    //           ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white shadow-lg shadow-purple-200"
    //           : "text-slate-600 hover:text-slate-900"
    //       }`}
    //     >
    //       Cart (0)
    //     </button>
    //   </div>
    // </div>
  );
};

export default AvailableCards;
