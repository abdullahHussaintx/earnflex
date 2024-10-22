import React from "react";
import { twMerge } from "tailwind-merge";

export const Button = ({ title, className, type, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={twMerge(
        `bg-blue-600 h-12 w-full md:w-40 lg:w-60 rounded-lg shadow-md hover:bg-blue-800 text-white text-lg font-semibold`,
        className
      )}
    >
      {title}
    </button>
  );
};
