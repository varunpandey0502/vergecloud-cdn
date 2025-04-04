"use client";

import checkAnimation from "@/lottie/check.json";
import dynamic from "next/dynamic";
import { CTAButton } from "./cta-button";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function SubscriptionSavings() {
  return (
    <section className="bg-background py-12 px-8 md:py-12 md:px-6">
      <div className="max-w-screen-xl mx-auto rounded-2xl md:rounded-3xl bg-gradient-to-br from-[#1A1A1A] to-[#0D0D0D] p-6 md:p-16">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-6">
          <h2 className="text-2xl md:text-5xl font-bold text-white">
            Save 30% On The Annual Plan
          </h2>
          <p className="text-base md:text-lg text-gray-400 max-w-2xl">
            Maximize value and minimize costs
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-6xl mt-6 md:mt-8">
            <div className="flex items-center gap-3 md:gap-4 bg-[#ffffff0a] rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <Lottie
                  animationData={checkAnimation}
                  loop
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <p className="text-sm md:text-base text-white">
                Personalized onboarding for a seamless setup.
              </p>
            </div>

            <div className="flex items-center gap-3 md:gap-4 bg-[#ffffff0a] rounded-lg md:rounded-xl p-4 md:p-6">
              <div className="w-6 h-6 md:w-8 md:h-8">
                <Lottie
                  animationData={checkAnimation}
                  loop
                  className="w-6 h-6 md:w-8 md:h-8"
                />
              </div>
              <p className="text-sm md:text-base text-white">
                Dedicated post-sales support to ensure you&apos;re always
                optimized.
              </p>
            </div>
          </div>

          <CTAButton />
        </div>
      </div>
    </section>
  );
}
