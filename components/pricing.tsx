"use client";
import { useState } from "react";
import { CTAButton } from "./cta-button";

type PlanFeature = {
  name: string;
  growth: string | number;
  professional: string | number;
  enterprise: string | number;
};

const features: PlanFeature[] = [
  {
    name: "Monthly Data Transfer",
    growth: "500GB",
    professional: "5 TB",
    enterprise: "20 TB",
  },
  {
    name: "Monthly Request",
    growth: "500,000",
    professional: "5,000,000",
    enterprise: "50,000,000",
  },
  {
    name: "DNS Management",
    growth: "Included",
    professional: "Included",
    enterprise: "Included",
  },
  {
    name: "Caching Features",
    growth: "Basic",
    professional: "Advanced",
    enterprise: "Premium",
  },
  {
    name: "Connection Security",
    growth: "Free SSL",
    professional: "Custom SSL",
    enterprise: "Advanced SSL",
  },
  {
    name: "DDoS Protection",
    growth: "Standard",
    professional: "Enhanced",
    enterprise: "Comprehensive",
  },
  {
    name: "Firewall Rules",
    growth: "10 Rules",
    professional: "100 Rules",
    enterprise: "500 Rules",
  },
  {
    name: "Rate Limiting",
    growth: "2 Rules",
    professional: "5 Rules",
    enterprise: "100 Rules",
  },
  {
    name: "WAF Protection",
    growth: "Basic",
    professional: "Advanced",
    enterprise: "Premium",
  },
  {
    name: "Page Rules",
    growth: "20 Rules",
    professional: "50 Rules",
    enterprise: "150 Rules",
  },
  {
    name: "Performance Acceleration",
    growth: "Standard",
    professional: "Enhanced",
    enterprise: "Premium",
  },
];

export default function Pricing() {
  const [selectedPlan, setSelectedPlan] = useState<
    "growth" | "professional" | "enterprise"
  >("growth");

  return (
    <section className="bg-white px-6 py-12 md:py-24">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold text-black mb-4">
            Premium Performance, Priced for Growth
          </h2>
        </div>

        {/* Desktop View */}
        <div className="hidden lg:block overflow rounded-3xl">
          <div className="relative">
            {/* Two horizontal gradients */}
            <div className="absolute inset-0 z-0">
              {/* Left gradient */}
              <div className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[800px] h-[800px]  mix-blend-screen filter blur-[80px] opacity-100 bg-gradient-to-b from-primary/10 to-[#FFB6C1]/60" />
              {/* Right gradient */}
              <div className="absolute right-[20%] top-1/2 -translate-y-1/2 w-[600px] h-[600px]  mix-blend-screen filter blur-[80px] opacity-100 bg-gradient-to-b from-primary/10 to-[#FFB6C1]/60" />

              <div className="absolute right-[0%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] mix-blend-screen filter blur-[80px] opacity-100 bg-gradient-to-b from-primary/10 to-[#FFB6C1]/60" />
            </div>

            <div className="flex flex-col relative z-10 w-full p-4 rounded-3xl bg-primary/40 backdrop-blur-lg backdrop-filter items-center justify-center">
              <table className="border-separate border-spacing-x-1 p-4 border-spacing-y-0 rounded-3xl w-full">
                <thead>
                  <tr>
                    <th className="text-left p-4 text-lg font-medium text-black rounded-t-3xl w-1/4">
                      Features
                    </th>
                    <th className="p-4 w-1/4 bg-[#1F1F47]/10 rounded-3xl relative border-b-2 border-white/80">
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-black text-center">
                          Growth
                          <span className="block text-sm text-black/60 mt-1">
                            ₹1679/month
                          </span>
                        </h3>
                      </div>
                    </th>{" "}
                    <th className="p-4 w-1/4 bg-[#1F1F47]/10 rounded-3xl relative border-b-2 border-white/80">
                      {" "}
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-black text-center">
                          Professional
                          <span className="block text-sm text-black/60 mt-1">
                            ₹16790/month
                          </span>
                        </h3>
                      </div>
                    </th>
                    <th className="p-4 w-1/4 bg-[#1F1F47]/10 rounded-3xl relative border-b-2 border-white/80">
                      <div className="relative z-10">
                        <h3 className="text-xl font-bold text-black text-center">
                          Enterprise
                          <span className="block text-sm text-black/60 mt-1">
                            ₹167900/month
                          </span>
                        </h3>
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {features.map((feature, index) => (
                    <tr key={index}>
                      <td className="p-4 text-black border-t border-black/[0.08]">
                        {feature.name}
                      </td>
                      <td
                        className={`p-4 text-center text-black bg-[#1F1F47]/10 border-t border-black/[0.08] ${
                          index === 0 ? "rounded-t-3xl" : ""
                        } ${
                          index === features.length - 1 ? "rounded-b-3xl" : ""
                        }`}
                      >
                        {feature.growth}
                      </td>
                      <td
                        className={`p-4 text-center text-black bg-[#1F1F47]/10 border-t border-black/[0.08] ${
                          index === 0 ? "rounded-t-3xl" : ""
                        } ${
                          index === features.length - 1 ? "rounded-b-3xl" : ""
                        }`}
                      >
                        {feature.professional}
                      </td>
                      <td
                        className={`p-4 text-center text-black bg-[#1F1F47]/10 border-t border-black/[0.08] ${
                          index === 0 ? "rounded-t-3xl" : ""
                        } ${
                          index === features.length - 1 ? "rounded-b-3xl" : ""
                        }`}
                      >
                        {feature.enterprise}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Get Started Button */}
              <div className="relative z-10 p-4">
                <CTAButton />
              </div>
            </div>
          </div>
        </div>

        {/* Mobile View */}
        <div className="block lg:hidden space-y-6">
          {/* Plan Tabs */}
          <div className="flex rounded-xl bg-[#1A1A3A] p-1">
            <button
              onClick={() => setSelectedPlan("growth")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "growth"
                  ? "bg-primary text-white"
                  : "text-white/60"
              }`}
            >
              Growth
            </button>
            <button
              onClick={() => setSelectedPlan("professional")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "professional"
                  ? "bg-primary text-white"
                  : "text-white/60"
              }`}
            >
              Professional
            </button>
            <button
              onClick={() => setSelectedPlan("enterprise")}
              className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                selectedPlan === "enterprise"
                  ? "bg-primary text-white"
                  : "text-white/60"
              }`}
            >
              Enterprise
            </button>
          </div>

          {/* Selected Plan Features */}
          <div className="rounded-3xl bg-[#1A1A3A]/90 backdrop-blur-sm overflow-hidden">
            <div className="relative">
              {/* Gradient Effect */}
              <div
                className={`absolute inset-0 ${
                  selectedPlan === "growth"
                    ? "bg-[#8B5CF6]"
                    : selectedPlan === "professional"
                    ? "bg-[#818CF8]"
                    : "bg-[#F472B6]"
                } rounded-full mix-blend-plus-lighter filter blur-[100px] opacity-40 pointer-events-none`}
              />

              {/* Plan Header */}
              <div className="relative z-10 p-6 text-center border-b border-white/[0.08]">
                <h3 className="text-xl font-bold text-white">
                  {selectedPlan === "growth"
                    ? "Growth"
                    : selectedPlan === "professional"
                    ? "Professional"
                    : "Enterprise"}
                  <span className="block text-sm text-white/60 mt-1">
                    {selectedPlan === "growth"
                      ? "₹1679"
                      : selectedPlan === "professional"
                      ? "₹16790"
                      : "₹167900"}
                    /month
                  </span>
                </h3>
              </div>

              {/* Features List */}
              <div className="relative z-10">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between p-4 border-b border-white/[0.08]"
                  >
                    <span className="text-white">{feature.name}</span>
                    <span className="text-white ml-4">
                      {feature[selectedPlan]}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Get Started Button */}
          <div className="flex justify-center mt-8">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
}
