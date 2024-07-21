import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";

const page = () => {
  return (
    <div className="flex flex-col items-center h-screen ">
      <div className="absolute blur-3xl opacity-20 magicpattern -top-80" />
      <Navbar />
      <Hero />
    </div>
  );
};

export default page;
