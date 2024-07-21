import React from "react";
import Image from "next/image";
import Logo from "@/assets/logo.png";
import MaxWidthWrapper from "./shared/max-width-wrapper";

import Background from "@/assets/back.svg";

const QuickAcess = ["About", "Services", "Process", "Work", "Pricing", "FAQs"];

const Navbar = () => {
  return (
    <div className="w-full header-background flex justify-center">
      <div className="flex justify-between items-center h-16 max-w-6xl w-full">
        {/* <Image
          src={Background}
          alt="back"
          className="absolute top-0 -right-0"
        />

        <Image src={Background} alt="back" className="absolute top-0 left-0" /> */}
        <Image src={Logo} alt="logo" />
        <div className="flex gap-7 text-[#E4E6F2] z-0">
          {QuickAcess.map((item) => (
            <a href="#" key={item}>
              {item}{" "}
            </a>
          ))}
        </div>
        <div className="z-0">
          <p className="rounded-xl border border-[#6881FF] px-9 py-4 z-0">
            Book a call
          </p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
