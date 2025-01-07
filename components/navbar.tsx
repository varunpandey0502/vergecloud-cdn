"use client";
import { useMotionValueEvent, useScroll } from "framer-motion";
import { useState } from "react";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 50 ? true : false);
  });

  return (
    <nav
      className={`fixed top-0 z-50 w-full px-6 text-white 
      transition-all duration-300 ease-out lg:px-12
      ${
        scrolled
          ? "bg-white py-2 shadow-xl backdrop-blur-sm"
          : "bg-transparent py-4 shadow-none"
      }`}
    >
      <div className="flex max-w-screen-xl mx-auto items-center justify-between">
        <Logo scrolled={scrolled} />
        <CTAs scrolled={scrolled} />
      </div>
    </nav>
  );
};

const Logo = ({ scrolled = false }: { scrolled?: boolean }) => {
  return (
    <img
      src={
        scrolled
          ? "/images/vergecloud-logo.svg"
          : "/images/vergecloud-logo-white.svg"
      }
      alt="VergeCloud Logo"
      className="h-10 md:h-16"
    />
  );
};

const CTAs = ({ scrolled = false }: { scrolled?: boolean }) => {
  const scrollToForm = () => {
    const formElement = document.getElementById("form");
    if (formElement) {
      const offset = 100;
      const elementPosition = formElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <Button
      variant="outline"
      size="default"
      onClick={scrollToForm}
      className={cn(
        "font-bold px-2 py-4 md:px-6 md:py-6 text-sm md:text-base",
        scrolled ? "bg-primary text-white" : "bg-transparent text-white",
        scrolled
          ? "hover:bg-primary/80 hover:text-white transition-all duration-300 ease-out"
          : "hover:bg-white hover:text-primary transition-all duration-300 ease-out"
      )}
    >
      Sign Up For Free
    </Button>
  );
};

export default Navbar;
