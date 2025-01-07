"use client";
import { Button } from "../ui/button";
import { SectionHeading } from "../ui/section-heading";
import StatCard from "./stat-card";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const stats = [
  {
    title: "25%",
    description: "Reduction in time spent on performance reviews",
    iconUrl: "/images/stats/time.svg",
  },
  {
    title: "30%",
    description: "Increase in goal completion rates",
    iconUrl: "/images/stats/goal.svg",
  },
  {
    title: "40%",
    description: "Improvement in employee feedback frequency and engagement",
    iconUrl: "/images/stats/feedback.svg",
  },
  {
    title: "20%",
    description: "Boost in identifying and addressing skill gaps",
    iconUrl: "/images/stats/skill.svg",
  },
];

export default function Stats() {
  const handleBookDemo = () => {
    const formElement = document.getElementById("hubspot-form-wrapper");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="my-16">
      <div className="container bg-secondary py-12 px-6 rounded-3xl max-w-screen-xl mx-auto">
        <SectionHeading>With Peoplebox, You Get</SectionHeading>
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12 mt-12 px-8">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>

        <ScrollArea className="w-full mb-12 md:hidden">
          <div className="flex md:grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
            {stats.map((stat, index) => (
              <StatCard key={index} {...stat} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        <div className="flex justify-center">
          <Button
            variant="accent"
            size="lg"
            className="text-lg"
            onClick={handleBookDemo}
          >
            Book a Demo
          </Button>
        </div>
      </div>
    </div>
  );
}
