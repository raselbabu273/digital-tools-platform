import React, { useState } from "react";

const AvailableCards = ({card}) => {
  
  const [isClicked, setIsClicked] = useState(false);

  const handleBuyNow = () => {
    setIsClicked(true);
  }
  return (
        <div className="card flex items-center">
          <div className="relative bg-white rounded-2xl shadow-md p-10 text-left border border-gray-200">
            <span className="absolute top-4 right-4 bg-purple-100 text-purple-600 text-sm px-3 py-1 rounded-full">
              {card.tag}
            </span>

            <div className="w-14 h-14 flex items-center justify-center bg-gray-100 rounded-full mb-4">
              {/* <span className="text-2xl">✏️{card.icon}</span> */}
              <img src={card.iconImg} alt="" />
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              {card.name}
            </h2>

            <p className="text-gray-500 text-sm mb-4">{card.description}</p>

            <div className="mb-4">
              <span className="text-3xl font-bold text-gray-800">
                ${card.price}
              </span>
              <span className="text-gray-500 ml-1">/{card.period}</span>
            </div>

            <ul className="mb-6 space-y-2 text-sm text-gray-600">
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {card.features[0]}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {card.features[1]}
              </li>
              <li className="flex items-center gap-2">
                <span className="text-green-500">✔</span> {card.features[2]}
              </li>
            </ul>

            <button
              onClick={() => handleBuyNow()}
              className="btn w-full py-3 rounded-full text-white font-medium bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition"
            >
              {isClicked ? "Added To The Cart" : "Buy Now"}
            </button>
          </div>
        </div>
  );
};

export default AvailableCards;
