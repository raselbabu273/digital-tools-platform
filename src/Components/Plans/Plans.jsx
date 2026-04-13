import React, { use } from "react";

const fetchPlans = async () => {
  const res = await fetch("/plans.json");
  return res.json();
};

const plansPromise = fetchPlans();

const Plans = () => {
  const plans = use(plansPromise);

  return (
      <div className="bg-gray-100 py-15 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800">
            Simple, Transparent Pricing
          </h2>
          <p className="text-gray-500 mt-2">
            Choose the plan that fits your needs. Upgrade or downgrade anytime.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10 text-left relative">
            {plans.map((plan) => (
              <div
                key={plan.id}
                className={`rounded-xl p-6 shadow-sm ${
                  plan.highlight
                    ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white scale-105"
                    : "bg-white"
                }`}
              >
                {plan.highlight && (
                  <span className="hidden lg:flex absolute mb-3 px-3 py-1 text-xs bg-yellow-200 text-black rounded-full ml-29 -mt-9">
                    Most Popular
                  </span>
                )}

                <h3 className="text-xl font-semibold">{plan.name}</h3>
                <p
                  className={`text-sm mt-1 ${
                    plan.highlight ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  {plan.description}
                </p>

                <div className="mt-4">
                  <span className="text-3xl font-bold">{plan.price}</span>
                  <span
                    className={`ml-1 ${
                      plan.highlight ? "text-gray-200" : "text-gray-500"
                    }`}
                  >
                    {plan.period}
                  </span>
                </div>

                <ul className="mt-6 space-y-2 text-left">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="text-green-500">✔</span>
                      <span
                        className={`text-sm ${
                          plan.highlight ? "text-gray-100" : "text-gray-600"
                        }`}
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  className={`btn mt-6 w-full py-2 rounded-full font-medium ${
                    plan.highlight
                      ? "bg-white text-purple-600"
                      : "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                  }`}
                >
                  {plan.buttonText}
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
  );
};

export default Plans;
