import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen mt-20 py-16 px-20 flex justify-between">
      {/* Header Navigation */}
      <div className="flex flex-col flex-1">
        <div className="flex gap-4 mb-6">
          <button className="text-neon-yellow border-neon-yellow bg-midnight-purple border-2 text-xl px-3 py-2">
            Vendors
          </button>
          <button className="text-neon-yellow bg-midnight-purple border-neon-yellow border-2 text-xl px-3 py-2">
            Sponsors
          </button>
        </div>

        {/* MAIN FLEX CONTAINER */}

        {/* LEFT SECTION */}
        <div className="flex flex-col space-y-3">
          <div className="">
            <div className="flex gap-3 items-end leading-none">
              <div className="text-6xl md:text-9xl font-bold text-soft-lavender leading-none">
                THE
              </div>
              <div className="text-white">
                <div className="text-lg">TWO DAYS.</div>
                <div className="text-lg">ONE COMMUNITY.</div>
                <div className="text-lg">COUNTLESS MOMENTS.</div>
              </div>
            </div>
            <div className="text-7xl md:text-[190px] font-black text-neon-yellow leading-none">
              2026
            </div>
            <div className="text-6xl md:text-[100px] font-bold text-soft-lavender leading-none">
              CONCERT
            </div>
          </div>

          <p className="text-xl text-white font-light tracking-wide">
            LIVE MUSIC. SHARED ENERGY. REAL CONNECTION
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 pt-6">
            <button className="px-8 py-4 bg-neon-yellow text-black font-medium text-3xl  transition-all duration-300">
              ARTIST SIGN UP
            </button>
            <button className="px-8 py-4 border-2 border-neon-yellow text-neon-yellow bg-midnight-purple font-medium text-3xl  transition-all duration-300">
              VOLUNTEER
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col text-white flex-1">
        {/* Day 01 */}
        <div className="pb-10  border-b border-white">
          <p className="text-xl  font-semibold tracking-wider mb-2">
            DAY 01
          </p>

          <h3 className="text-5xl font-extrabold mb-3">JUNE 19</h3>

          <p className="text-lg mb-6">7:00PM – 10:00PM</p>

          <h4 className="text-2xl font-medium tracking-wide mb-2">
            EVENING SHOWCASE
          </h4>

          <p className="text-white/60 max-w-md font-extralight text-xl">
            19+ International artist for a ticketed event
          </p>
        </div>

        {/* Day 02 */}
        <div className="py-8 border-b border-white">
          <p className="text-xl font-semibold tracking-wider mb-2">
            DAY 02
          </p>

          <h3 className="text-5xl font-extrabold mb-3">JUNE 20</h3>

          <p className="text-lg mb-6">5:00PM – 10:00PM</p>

          <h4 className="text-2xl font-bold tracking-wide mb-2">
            FOOD VENDORS, BRAND ACTIVATION
          </h4>

          <p className="text-white/60 max-w-md font-extralight text-xl">
            8 to 10 fusion and multicultural performances, focusing on HipHop,
            Dance and Pop music
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
