import React, { Dispatch, SetStateAction } from "react";

export const ToggleButton = ({
  children,
  selected,
  setSelected,
  id,
}: {
  children: string;
  selected: number;
  setSelected: Dispatch<SetStateAction<number>>;
  id: number;
}) => {
  return (
    <button
      onClick={() => setSelected(id)}
      className={`rounded-full px-8 py-4 text-base font-medium min-w-fit transition-all ${
        selected === id
          ? "bg-primary text-white border-2 border-primary/50"
          : "bg-transparent text-black/60 hover:text-black border-2 border-black/10 hover:border-black/20"
      }`}
    >
      {children}
    </button>
  );
};
