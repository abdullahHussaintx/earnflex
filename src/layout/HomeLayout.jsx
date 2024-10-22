import React from "react";
import { NavBar } from "../components/NavBar";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { MobileNav } from "../components/MobileNav";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const HomeLayout = () => {
  return (
    <main className="grid  min-h-[100dvh]  grid-rows-[auto_1fr_auto]">
      <NavBar />
      <MobileNav />
      <div
        // style={{ height: "calc(100dvh - 224px)" }}
        className=" overflow-y-auto   container mx-auto   p-5 lg:px-40 "
      >
        <Outlet />
        <ToastContainer />
      </div>
      <Footer />
    </main>
  );
};
