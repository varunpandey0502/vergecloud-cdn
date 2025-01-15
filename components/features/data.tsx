import { getAssetPath } from "@/lib/utils";

const MediaComponent = () => {
  return (
    <img
      src={getAssetPath("/images/features/media/image.png")}
      alt="Media & Entertainment"
      className="w-full h-auto rounded-2xl"
    />
  );
};

const GamingComponent = () => {
  return (
    <img
      src={getAssetPath("/images/features/gaming/image.png")}
      alt="Gaming"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const ElearningComponent = () => {
  return (
    <img
      src={getAssetPath("/images/features/elearning/image.png")}
      alt="E-Learning"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

const EcommerceComponent = () => {
  return (
    <img
      src={getAssetPath("/images/features/ecommerce/image.png")}
      alt="E-Commerce"
      className="h-full w-full object-cover rounded-2xl"
    />
  );
};

export const data = [
  {
    id: 1,
    title: "Media & Entertainment",
    Component: MediaComponent,
    cardSubtitle: [
      {
        icon: "/images/features/media/global-content-delivery.svg",
        title: "Global Content Delivery",
        description:
          "Ensure fast access to media content for audiences worldwide.",
      },
      {
        icon: "/images/features/media/content-caching.svg",
        title: "Content Caching",
        description:
          "Cache popular content to handle high traffic spikes during new releases or live events.",
      },
      {
        icon: "/images/features/media/ad-delivery.svg",
        title: "Ad Delivery Optimization",
        description:
          "Efficiently serve ad content, enhancing ad load times and viewer experience.",
      },
      {
        icon: "/images/features/media/security.svg",
        title: "Robust Data Security",
        description:
          "Secure your site with our DDoS protection, bot management, and SSL encryption.",
      },
    ],
  },
  {
    id: 2,
    title: "Gaming",
    Component: GamingComponent,
    cardSubtitle: [
      {
        icon: "/images/features/gaming/latency.svg",
        title: "Latency Reduction",
        description:
          "Minimize lag for real-time multiplayer games by delivering content from edge servers close to players",
      },
      {
        icon: "/images/features/gaming/traffic.svg",
        title: "Traffic management",
        description:
          "Scale Up for Traffic Surges During Game Launches and Events.",
      },
      {
        icon: "/images/features/gaming/ddos.svg",
        title: "DDoS Protection",
        description:
          "Protect game servers from DDoS attacks to ensure a stable gaming experience.",
      },
      {
        icon: "/images/features/gaming/streaming.svg",
        title: "High-Quality Streaming",
        description:
          "Enable smooth live streaming of eSports events and in-game footage for better engagement",
      },
    ],
  },
  {
    id: 3,
    title: "E-Learning",
    Component: ElearningComponent,
    cardSubtitle: [
      {
        icon: "/images/features/elearning/live-class.svg",
        title: "Live Class Streaming",
        description:
          "Stream live classes seamlessly to support virtual learning environments.",
      },
      {
        icon: "/images/features/elearning/content-caching.svg",
        title: "Content Caching",
        description:
          "Deliver educational materials (videos, documents) efficiently across regions",
      },
      {
        icon: "/images/features/elearning/access-control.svg",
        title: "Access Control",
        description:
          "Secure educational content access, ensuring only enrolled users can view materials.",
      },
      {
        icon: "/images/features/elearning/latency.svg",
        title: "Latency Reduction",
        description:
          "Reduce latency for interactive learning tools, quizzes, and assessments.",
      },
    ],
  },
  {
    id: 4,
    title: "E-Commerce",
    Component: EcommerceComponent,
    cardSubtitle: [
      {
        icon: "/images/features/ecommerce/speed.svg",
        title: "Page Load Speed",
        description:
          "Speed up loading times, especially during peak sales, to reduce cart abandonment rates.",
      },
      {
        icon: "/images/features/ecommerce/fraud.svg",
        title: "Fraud Protection",
        description:
          "Block malicious traffic, reducing potential fraud during online transactions.",
      },
      {
        icon: "/images/features/ecommerce/image.svg",
        title: "Image Optimization",
        description:
          "Optimize and deliver product images quickly for a smooth shopping experience.",
      },
      {
        icon: "/images/features/ecommerce/cost.svg",
        title: "Lower operational cost",
        description:
          "Improve developer productivity and reduce infrastructure costs.",
      },
    ],
  },
];
