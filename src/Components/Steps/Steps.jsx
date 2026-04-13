import React from "react";

const Steps = () => {
  return (
    <div className="text-center container mx-auto p-30">
      <div>
        <h1 className="text-5xl font-bold mb-4">Get Started in 3 Steps</h1>
        <p className="text-[#627382]">
          Start using premium digital tools in minutes, not hours.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
        <div className="shadow-sm bg-white rounded-xl">
          <div className="flex justify-end p-6">
            <p className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              01
            </p>
          </div>
          <div className="p-10 space-y-4">
            <div className="flex justify-center">
              <img
                className="bg-purple-100 rounded-full p-5"
                src="/public/user.png"
                alt="user"
              />
            </div>
            <h3 className="text-2xl font-bold">Create Account</h3>
            <p className="text-[#627382]">
              Sign up for free in seconds. No credit card required to get
              started.
            </p>
          </div>
        </div>

        <div className="shadow-sm bg-white rounded-xl">
          <div className="flex justify-end p-6">
            <p className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              02
            </p>
          </div>
          <div className="p-10 space-y-4">
            <div className="flex justify-center">
              <img
                className="bg-purple-100 rounded-full p-5"
                src="/public/package.png"
                alt="user"
              />
            </div>
            <h3 className="text-2xl font-bold">Choose Products</h3>
            <p className="text-[#627382]">
              Browse our catalog and select the tools that fit your needs. 
            </p>
          </div>
        </div>

        <div className="shadow-sm bg-white rounded-xl">
          <div className="flex justify-end p-6">
            <p className="btn rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
              03
            </p>
          </div>
          <div className="p-10 space-y-4">
            <div className="flex justify-center">
              <img
                className="bg-purple-100 rounded-full p-5"
                src="/public/rocket.png"
                alt="user"
              />
            </div>
            <h3 className="text-2xl font-bold">Start Creating</h3>
            <p className="text-[#627382]">
              Download and start using your premium tools immediately.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Steps;
