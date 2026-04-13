import React from "react";
import { LuShoppingCart } from "react-icons/lu";

const NavBar = () => {
  return (
    <nav className="bg-base-200">
      <div className="container mx-auto px-6 lg:px-12 flex items-center justify-between h-16">
        <h1 className="text-3xl font-bold bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">
          DigiTools
        </h1>

        <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <a href="" className="hover:text-purple-600 transition">
            Products
          </a>
          <a href="" className="hover:text-purple-600 transition">
            Features
          </a>
          <a href="" className="hover:text-purple-600 transition">
            Pricing
          </a>
          <a href="" className="hover:text-purple-600 transition">
            Testimonials
          </a>
          <a href="" className="hover:text-purple-600 transition">
            FAQ
          </a>
        </nav>

        <div className="flex items-center gap-6">
          <span>
            <LuShoppingCart />
          </span>
          <a
            href=""
            className="text-gray-600 hover:text-purple-600 font-medium"
          >
            Login
          </a>

          <button className="btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white px-5 py-3 rounded-full font-semibold shadow hover:opacity-90 transition">
            Get Started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
