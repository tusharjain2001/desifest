import React, { useState } from "react";

const Hero = () => {
  const [activeTab, setActiveTab] = useState("vendors");
  return (
    <div className="min-h-screen bg-gradient-to-br mt-20 pl-16 py-10 ml-28 from-indigo-950 via-purple-950 to-indigo-900 text-white p-8 font-sans">
      <div className="">
        {/* Header Navigation */}
        <div className="flex gap-4 mb-12">
          <button
            onClick={() => setActiveTab("vendors")}
            className={`px-6 py-2 border-2 transition-all duration-300 ${
              activeTab === "vendors"
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            }`}
          >
            Vendors
          </button>
          <button
            onClick={() => setActiveTab("sponsors")}
            className={`px-6 py-2 border-2 transition-all duration-300 ${
              activeTab === "sponsors"
                ? "border-yellow-400 bg-yellow-400 text-black"
                : "border-yellow-400 text-yellow-400 hover:bg-yellow-400/10"
            }`}
          >
            Sponsors
          </button>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column - Main Title */}
          <div className="space-y-6">
            <div className="space-y-2">
              <h1 className="text-6xl md:text-7xl font-bold text-purple-200 leading-tight">
                THE
              </h1>
              <h2 className="text-7xl md:text-8xl font-black text-yellow-400 leading-none animate-pulse">
                2026
              </h2>
              <h1 className="text-6xl md:text-7xl font-bold text-purple-200 leading-tight">
                CONCERT
              </h1>
            </div>

            <div className="space-y-1 text-purple-200">
              <p className="text-lg">TWO DAYS.</p>
              <p className="text-lg">ONE COMMUNITY.</p>
              <p className="text-lg">COUNTLESS MOMENTS.</p>
            </div>

            <p className="text-xl text-purple-300 font-light tracking-wide">
              LIVE MUSIC. SHARED ENERGY. REAL CONNECTION
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-6">
              <button className="px-8 py-4 bg-yellow-400 text-black font-bold text-lg hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 shadow-lg shadow-yellow-400/50">
                ARTIST SIGN UP
              </button>
              <button className="px-8 py-4 border-2 border-yellow-400 text-yellow-400 font-bold text-lg hover:bg-yellow-400 hover:text-black transition-all duration-300 transform hover:scale-105">
                VOLUNTEER
              </button>
            </div>
          </div>

          {/* Right Column - Event Details */}
          <div className="space-y-8">
            {/* Day 01 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-purple-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <p className="text-purple-300 text-sm font-semibold mb-1">
                DAY 01
              </p>
              <h3 className="text-5xl font-bold mb-2">JUNE 19</h3>
              <p className="text-xl text-purple-200 mb-6">7:00PM - 10:00PM</p>

              <div className="border-t border-purple-400/30 pt-4">
                <h4 className="text-xl font-bold mb-2 tracking-wide">
                  EVENING SHOWCASE
                </h4>
                <p className="text-purple-300">
                  19+ International artist for a ticketed event
                </p>
              </div>
            </div>

            {/* Day 02 */}
            <div className="bg-white/5 backdrop-blur-sm p-8 rounded-lg border border-purple-400/30 hover:border-yellow-400/50 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/20">
              <p className="text-purple-300 text-sm font-semibold mb-1">
                DAY 02
              </p>
              <h3 className="text-5xl font-bold mb-2">JUNE 20</h3>
              <p className="text-xl text-purple-200 mb-6">5:00PM - 10:00PM</p>

              <div className="border-t border-purple-400/30 pt-4">
                <h4 className="text-xl font-bold mb-2 tracking-wide">
                  FOOD VENDORS, BRAND ACTIVATION
                </h4>
                <p className="text-purple-300">
                  8 to 10 fusion and multicultural performances, focusing on
                  HipHop, Dance and Pop music
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="mt-16 flex justify-center gap-8 opacity-20">
          <div className="w-16 h-16 border-4 border-yellow-400 rotate-45"></div>
          <div className="w-16 h-16 bg-purple-400 rounded-full"></div>
          <div className="w-16 h-16 border-4 border-purple-400"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
