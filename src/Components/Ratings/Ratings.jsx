import React from "react";

const Ratings = () => {
  return (
    <div className="w-full py-15 bg-linear-to-r from-[#4F39F5] to-[#9514FA]">
      <div className="max-w-5xl mx-auto flex items-center justify-between text-center text-white">
       
        <div className="flex-1">
          <h1 className="text-5xl font-bold">50K+</h1>
          <p className="text-lg font-medium mt-2 text-gray-200">Active Users</p>
        </div>

        {/* Divider */}
        <div className="h-13 w-px bg-white/40"></div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold">200+</h1>
          <p className="text-lg font-medium mt-2 text-gray-200">Premium Tools</p>
        </div>

        {/* Divider */}
        <div className="h-13 w-px bg-white/40"></div>

        <div className="flex-1">
          <h1 className="text-5xl font-bold">4.9</h1>
          <p className="text-lg font-medium mt-2 text-gray-200">Rating</p>
        </div>
      </div>
    </div>
  );
};

export default Ratings;
