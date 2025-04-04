"use client";

import { CTAButton } from "./cta-button";
import { Button } from "./ui/button";

const steps = [
  {
    number: "1",
    title: "Create your Account",
    titleColor: "text-[#6366F1]",
    description: "Sign up using your email",
  },
  {
    number: "2",
    title: "Configure and Launch",
    titleColor: "text-[#6366F1]",
    description:
      "Configure VergeCloud in just a few clicks and start delivering blazing-fast content globally!",
  },
];

export default function GetStarted() {
  return (
    <section className="bg-[#F8F8F8] px-6 sm:px-6 py-8 sm:py-12">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-16 space-y-3 sm:space-y-4">
          <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold text-black">
            Get Started in less than 5 Minutes
          </h2>
          <p className="text-base sm:text-lg text-gray-800">
            Launch your content delivery network quickly with our simple 2-step
            process.
          </p>
        </div>

        {/* Image shown above grid on mobile */}
        <div className="lg:hidden mb-8">
          <img
            src="/images/get-started/illustration.png"
            alt="Get Started Illustration"
            className="w-full h-auto"
          />
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-20 items-center">
          <div className="space-y-8 sm:space-y-12">
            <div className="space-y-6 sm:space-y-8">
              {steps.map((step) => (
                <div key={step.number} className="flex gap-4 sm:gap-6">
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <div className="absolute inset-0 bg-[#6366F1] opacity-20 blur-lg sm:blur-xl rounded-xl sm:rounded-2xl" />

                      <div className="relative w-12 h-12 sm:w-16 sm:h-16 rounded-xl sm:rounded-2xl bg-white flex items-center justify-center text-[#6366F1] text-2xl sm:text-4xl font-bold">
                        {step.number}
                      </div>
                    </div>
                  </div>
                  <div className="space-y-1 sm:space-y-2">
                    <h3
                      className={`text-lg sm:text-xl font-bold ${step.titleColor}`}
                    >
                      {step.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-800">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 sm:mt-12 ml-16 sm:ml-24">
              <CTAButton />
            </div>
          </div>

          {/* Image hidden on mobile, shown on desktop */}
          <div className="relative hidden lg:block">
            <img
              src="/images/get-started/illustration.png"
              alt="Get Started Illustration"
              className="w-full h-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
