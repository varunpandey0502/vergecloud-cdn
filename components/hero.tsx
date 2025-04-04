"use client";
import { useEffect, useRef } from "react";
import Form from "./form";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      // Ensure video is muted before attempting to play (crucial for iOS)
      videoRef.current.muted = true;
      videoRef.current.load();

      // set the video to autoplay
      videoRef.current.play();
    }
  }, []);

  return (
    <section className="relative bg-primary/60 pt-28 md:pt-32 px-6 pb-10 md:pb-40 overflow-hidden">
      <video
        ref={videoRef}
        muted
        playsInline
        loop
        preload="none"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source src="/videos/hero-video.webm" type="video/webm" />
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="flex flex-col md:flex-row md:items-center justify-between max-w-screen-xl mx-auto items-center relative z-10 md:gap-32 gap-10">
        <div className="space-y-6 md:space-y-12 flex flex-col items-start">
          <h1 className="md:text-5xl text-3xl leading-relaxed font-extrabold text-white">
            <span className="md:hidden">
              Blazing-fast Content Delivery. Everywhere, Every Time.
            </span>
            <span className="hidden md:flex flex-col gap-4">
              <span>Blazing-fast Content Delivery.</span>
              <span>Everywhere, Every Time.</span>
            </span>
          </h1>
          <p className="md:text-xl text-md text-white">
            Faster, Smarter, and Safer Content for Every User.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 pt-2 sm:pt-2 self-center w-full">
            <div className="bg-[#ffffff1a] rounded-lg px-4 sm:px-6 py-4 sm:py-8 border border-white/[0.08] w-full">
              <h3 className="text-4xl font-bold text-white">&lt; 30 ms</h3>
              <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2">
                Latency in India
              </p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg px-4 sm:px-6 py-4 sm:py-8 border border-white/[0.08] backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-white">99.999%</h3>
              <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2">
                Uptime Reliability
              </p>
            </div>
            <div className="bg-[#ffffff1a] rounded-lg px-4 sm:px-6 py-4 sm:py-8 border border-white/[0.08] backdrop-blur-sm">
              <h3 className="text-4xl font-bold text-white">80%</h3>
              <p className="text-xs sm:text-sm text-white mt-1 sm:mt-2">
                Reduced Bandwidth Cost
              </p>
            </div>
          </div>
        </div>

        <Form />
      </div>
    </section>
  );
}
