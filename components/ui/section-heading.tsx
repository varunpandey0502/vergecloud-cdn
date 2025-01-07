import React, { ReactNode } from "react";

export const SectionHeading = ({ children }: { children: ReactNode }) => {
  return (
    <h2 className="mb-4 text-center text-2xl font-normal leading-[1.15] md:text-3xl md:leading-[1.15] text-primary">
      {children}
    </h2>
  );
};
