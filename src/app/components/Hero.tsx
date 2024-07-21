import React from "react";
import MaxWidthWrapper from "./shared/max-width-wrapper";

const Hero = () => {
  return (
    <MaxWidthWrapper className="flex-1 z-0">
      <div className="flex flex-col justify-center items-center h-full gap-20">
        <div className="flex flex-col gap-6">
          <p className="text-6xl text-balance leading-[60px]">
            Empowering Lives Through Innovative{" "}
            <span className="relative">
              AI
              <span className=" absolute bg-[#6A35FF] h-2 w-full inset-x-0 bottom-0"></span>
            </span>
            Technologies.
          </p>
          <p className="text-[#C0C2CC] text-2xl">
            Finding new horizons for visionaries to accelerate their innovation
            and progress.
          </p>
          <div className="flex gap-4">
            <div className=" rounded-xl bg-[#6A35FF] px-9 py-4">
              Explore Our Service
            </div>
            <div className="rounded-xl border border-[#6881FF] px-9 py-4">
              Learn More
            </div>
          </div>
        </div>
        <div className="flex justify-start w-full text-2xl	font-normal leading-7 text-gradiant ">
          From Ideas to Software Solutions
          <span className="masked-text">💡✨</span> From Ideas to Software
          Solutions <span className="masked-text">🌟✨</span> From Ideas to
        </div>
      </div>
    </MaxWidthWrapper>
  );
};

export default Hero;
