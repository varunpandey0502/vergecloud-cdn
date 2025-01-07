"use client";
import { CTAButton } from "./cta-button";
import {
  ContentCachingIcon,
  DdosProtectionIcon,
  GlobalContentDeliveryIcon,
  RealTimeOptimizationIcon,
  ScalableInfrastructureIcon,
  ValueForMoneyIcon,
} from "./icons";

const features = [
  {
    icon: <GlobalContentDeliveryIcon />,
    title: "Global Content Acceleration",
    description:
      "Be it streaming, downloads, or web content - push your content closer to your audience for ultra-fast delivery across continents.",
  },
  {
    icon: <ContentCachingIcon />,
    title: "Smart Caching",
    description:
      "Save bandwidth and reduce server load with intelligent caching. Keep content instantly accessible while cutting costs.",
  },
  {
    icon: <RealTimeOptimizationIcon />,
    title: "Real-Time Optimization",
    description:
      "Deliver the fastest experience possible with dynamic content optimization. We fine-tune performance on the fly.",
  },
  {
    icon: <DdosProtectionIcon />,
    title: "Robust Security",
    description:
      "Say hello to peace of mind with built-in DDoS protection, HTTPS encryption, and secure token authentication to protect your assets.",
  },
  {
    icon: <ScalableInfrastructureIcon />,
    title: "Scalable Infrastructure",
    description:
      "Handle traffic surges with ease. Our scalable infrastructure ensures consistent performance even during high-demand events.",
  },
  {
    icon: <ValueForMoneyIcon />,
    title: "Value for Money",
    description:
      "No hidden costs, no surprises. We offer transparent and affordable pricing plans tailored to your business needs.",
  },
];

export default function WhyChoose() {
  return (
    <section className="bg-white px-6 pb-12">
      <div className="container flex flex-col items-center">
        <div className="text-center space-y-4 mb-16">
          <span className="text-primary font-bold">Why Choose Vergecloud</span>
          <h2 className="text-2xl md:text-5xl font-bold text-black">
            Fast. Secure. Limitless.
          </h2>
          <p className="text-lg text-gray-800 max-w-3xl mx-auto">
            We are an agile, reliable, and scalable solution — everything your
            growing business needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#f4f2f2] rounded-2xl transition-all duration-300 hover:scale-[1.02] h-full"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-[#FF4D4D] opacity-0 rounded-2xl group-hover:opacity-40 blur-md transition-opacity" />

              {/* Content */}
              <div className="relative bg-[#f4f2f2] rounded-2xl p-4 md:p-8 z-[1] h-full flex flex-col">
                <div className="flex items-center gap-4 md:block">
                  <div className="w-12 h-12 md:w-16 md:h-16 p-2 rounded-full bg-primary/10 flex items-center justify-center text-primary transition-colors group-hover:bg-[#FF4D4D]/20 group-hover:text-[#FF4D4D] shrink-0 shadow-[0_4px_8px_rgba(0,0,0,0.1)] hover:shadow-[0_8px_16px_rgba(0,0,0,0.2)]">
                    {feature.icon}
                  </div>
                  <h3 className="text-lg md:text-xl font-bold text-primary group-hover:text-[#FF4D4D] transition-colors md:mt-4">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-sm md:text-base text-gray-800 mt-3 md:mt-4">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <CTAButton />
      </div>
    </section>
  );
}
