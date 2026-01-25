import React from "react";

const Hero = () => {
  return (
    <div className="min-h-screen mt-20 px-6 py-12 md:px-20 md:py-16 flex flex-col md:flex-row md:justify-between gap-16">
      {/* LEFT SECTION */}
      <div className="flex flex-col flex-1">
        {/* Header Navigation */}
        <div className="flex gap-4 mb-6">
          <button className="text-neon-yellow border-neon-yellow bg-midnight-purple border-2 text-sm md:text-xl px-3 py-2">
            Vendors
          </button>
          <button className="text-neon-yellow bg-midnight-purple border-neon-yellow border-2 text-sm md:text-xl px-3 py-2">
            Sponsors
          </button>
        </div>

        {/* HERO TEXT */}
        <div className="flex flex-col space-y-4">
          <div className="flex gap-3 items-end leading-none">
            <div className="text-8xl md:text-9xl font-bold text-soft-lavender leading-none">
              THE
            </div>

            <div className="text-white text-sm md:text-lg">
              <div>TWO DAYS.</div>
              <div>ONE COMMUNITY.</div>
              <div>COUNTLESS MOMENTS.</div>
            </div>
          </div>

          <div className="text-9xl sm:text-7xl md:text-[190px] font-black text-neon-yellow leading-none">
            2026
          </div>

          <div className="text-7xl sm:text-6xl md:text-[100px] font-bold text-soft-lavender leading-none">
            CONCERT
          </div>

          <p className="text-sm sm:text-lg md:text-xl text-white font-light tracking-wide max-w-xl">
            LIVE MUSIC. SHARED ENERGY. REAL CONNECTION
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-row gap-4 pt-6">
            <button className="px-6 md:px-8 py-4 bg-neon-yellow text-black font-medium text-lg md:text-3xl">
              ARTIST SIGN UP
            </button>

            <button className="px-6 md:px-8 py-4 border-2 border-neon-yellow text-neon-yellow bg-midnight-purple font-medium text-lg md:text-3xl">
              VOLUNTEER
            </button>
          </div>
        </div>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex flex-col text-white flex-1 gap-10">
        {/* Day 01 */}
        <div className="pb-10 border-b border-white">
          <p className="text-xl md:text-xl font-semibold tracking-wider mb-2">
            DAY 01
          </p>

          <h3 className="text-5xl md:text-5xl font-extrabold mb-3">JUNE 19</h3>

          <p className="text-xl md:text-lg mb-6">7:00PM – 10:00PM</p>

          <h4 className="text-2xl md:text-2xl font-medium tracking-wide mb-2">
            EVENING SHOWCASE
          </h4>

          <p className="text-white max-w-md font-thin text-xl md:text-xl">
            19+ International artist for a ticketed event
          </p>
        </div>

        {/* Day 02 */}
        <div className="pb-10 border-b border-white">
          <p className="text-xl md:text-xl font-semibold tracking-wider mb-2">
            DAY 02
          </p>

          <h3 className="text-5xl md:text-5xl font-extrabold mb-3">JUNE 20</h3>

          <p className="text-xl md:text-lg mb-6">5:00PM – 10:00PM</p>

          <h4 className="text-2xl md:text-2xl font-bold tracking-wide mb-2">
            FOOD VENDORS, BRAND ACTIVATION
          </h4>

          <p className="text-white max-w-md font-thin text-xl md:text-xl">
            8 to 10 fusion and multicultural performances, focusing on HipHop,
            Dance and Pop music
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;
