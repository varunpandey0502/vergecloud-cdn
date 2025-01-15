import { Cta } from "@/components/cta";
import { Features } from "@/components/features/Features";
import GetStarted from "@/components/get-started";
import GlobalNetwork from "@/components/global-network";
import Hero from "@/components/hero";
import Navbar from "@/components/navbar";
import Pricing from "@/components/pricing";
import SubscriptionSavings from "@/components/subscription-savings";
import Walkthrough from "@/components/walkthrough";
import WhyChoose from "@/components/why-choose";

export default function Page() {
  return (
    <main>
      <Navbar />
      <Hero />
      <SubscriptionSavings />
      <Walkthrough />
      <GlobalNetwork />
      <WhyChoose />
      <GetStarted />
      <Pricing />
      <Features />
      <Cta />
    </main>
  );
}
