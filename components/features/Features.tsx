"use client";

import { useState } from "react";
import { CTAButton } from "../cta-button";
import { data } from "./data";
import { FeatureDisplay } from "./FeatureDisplay";
import { ToggleButton } from "./ToggleButton";

export const Features = () => {
  const [selected, setSelected] = useState(1);

  const el = data.find((d) => d.id === selected);

  return (
    <section className="px-6 py-12 bg-[#F8F8F8]">
      <div className="container">
        <div className="text-center space-y-4 mb-8 md:mb-16">
          <span className="text-white/60">Use Cases</span>
          <h2 className="text-2xl md:text-5xl font-bold text-black">
            Solutions That Speak Your Industry Language
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            Tailored strategies to boost efficiency, security, and performance
            for every vertical.
          </p>
        </div>

        <div className="mb-8 flex flex-row gap-4 overflow-x-auto md:justify-center">
          {data.map((d) => (
            <ToggleButton
              key={d.id}
              id={d.id}
              selected={selected}
              setSelected={setSelected}
            >
              {d.title}
            </ToggleButton>
          ))}
        </div>

        <div className="w-full flex flex-col items-center">
          <div className="w-full">
            <FeatureDisplay
              selected={selected}
              cardSubtitle={el!.cardSubtitle}
              Component={el!.Component}
            />
          </div>

          <div className="mt-12">
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};
