import React from "react";
import { Link } from "react-router-dom";
import { mediaData } from "../utils/data";

export const Footer = () => {
  return (
    <footer className=" bg-blue-600 flex items-center h-40 text-white">
      <div className=" container mx-auto px-5 lg:px-40 w-full flex items-center justify-center flex-col">
        <Link to="/" className=" font-semibold text-3xl ">
          <img src={mediaData.logo} className="w-[200px]" />
        </Link>
        <span className=" text-xs font-semibold">
          Test for Mid-Level Frontend Developer
        </span>
      </div>
    </footer>
  );
};
