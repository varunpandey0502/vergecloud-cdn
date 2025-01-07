import { AnimatePresence, motion } from "framer-motion";

export const FeatureDisplay = ({
  selected,
  cardSubtitle,
  Component,
}: {
  selected: number;
  cardSubtitle: Array<{
    title: string;
    icon: string;
    description: string;
  }>;
  Component: () => JSX.Element;
}) => {
  return (
    <div className="grid h-fit w-full grid-cols-1 lg:grid-cols-2 gap-6 md:gap-24">
      {/* Image shown above content on mobile */}
      <div className="lg:hidden mb-8 relative">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            key={selected}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="space-y-8">
        {cardSubtitle.map((feature, index) => (
          <div key={index} className="flex items-start gap-6">
            <div className="flex-shrink-0 w-16 h-16 rounded-full bg-[#573FE7]/10 flex items-center justify-center shadow-md shadow-[#573FE7]/20 backdrop-blur-md">
              <img src={feature.icon} alt={feature.title} className="w-8 h-8" />
            </div>
            <div className="space-y-2">
              <h3 className="text-primary text-xl font-semibold">
                {feature.title}
              </h3>
              <p className="text-black text-base leading-relaxed">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Image hidden on mobile, shown on desktop */}
      <div className="relative hidden lg:block">
        <AnimatePresence mode="popLayout">
          <motion.div
            initial={{ opacity: 0, y: 50, x: 50 }}
            animate={{ opacity: 1, y: 0, x: 0 }}
            exit={{ opacity: 0, y: 50, x: 50 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            key={selected}
          >
            <Component />
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
