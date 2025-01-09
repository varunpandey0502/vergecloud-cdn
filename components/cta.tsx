import { CTAButton } from "./cta-button";

export const Cta = () => {
  return (
    <section className="bg-white px-6 py-12 md:py-24">
      <div className="container">
        <div className="rounded-3xl bg-gradient-to-b from-primary/90 to-purple-500/80 py-24 px-6 relative overflow-hidden">
          {/* Gradient circle */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-primary/80 to-transparent blur-3xl" />

          {/* Content */}
          <div className="flex flex-col items-center text-center space-y-6 relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white">
              3 Months On Us. Sign Up and Save!
            </h2>
            <p className="text-lg text-white max-w-2xl">
              Get started in seconds. Limited Time Offer.
            </p>
            <CTAButton />
          </div>
        </div>
      </div>
    </section>
  );
};
