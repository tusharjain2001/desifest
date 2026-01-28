import React from "react";
import group from "../../Assets/community/circlegroup.svg";

const Hero = () => {
  return (
    <div className="h-screen relative justify-center items-center flex flex-col gap-5 text-white leading-none">
      <img src={group} className="absolute top-0 right-0" />
      <div className="relative z-10 max-w-4xl px-6">
        {/* TITLE */}
        <div className="font-[Oswald] uppercase leading-none flex flex-col items-center">
          <span className="block font-medium text-[#C8B7F2] text-[48px] md:text-[100px]">
            Our
          </span>
          <span className="block font-medium text-neon-yellow text-[72px] md:text-[110px] tracking-wide">
            Community
          </span>
          <div className="mt-6 text-sm md:text-base text-white leading-relaxed font-[DMSans] font-medium uppercase flex flex-col items-center">
            <div>More than a festival. A year-round movement.</div>

            <div>But also go through our...</div>
          </div>
          <div className="mt-10 flex items-center justify-center gap-6">
            <button className="bg-neon-yellow text-black px-8 py-3 font-[Oswald] uppercase tracking-wide text-sm md:text-2xl hover:opacity-90 transition font-medium">
              Open-Mic
            </button>

            <button className="border border-neon-yellow text-neon-yellow px-8 py-3 font-[Oswald] uppercase tracking-wide text-sm md:text-2xl hover:bg-neon-yellow hover:text-black font-medium transition">
              Sofa-Sessions
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
