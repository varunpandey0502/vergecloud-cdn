"use client";
import { Button } from "./ui/button";

export const CTAButton = ({ text = "Get Started For Free" }) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      const offset = 100;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button onClick={scrollToForm} className="mt-8 px-8 py-6 text-lg font-bold">
      {text}
    </Button>
  );
};
