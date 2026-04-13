import React from "react";

const Workflow = () => {
  return (
    <div className="w-full py-30 bg-linear-to-r from-[#4F39F5] to-[#9514FA] space-y-5 text-center">
      <h2 className="text-5xl font-bold text-white">Ready to Transform Your Workflow?</h2>
      <p className="text-[#ffffffa7]">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
      <div className="flex justify-center gap-4">
        <button className="btn rounded-full py-5 text-[#9287eb]">Explore Products</button>
        <button className="btn rounded-full py-5 text-white bg-transparent">View Pricing</button>
      </div>
      <p className="text-[#ffffffa7]">14-day free trial • No credit card required • Cancel anytime</p>
    </div>
  );
};

export default Workflow;
