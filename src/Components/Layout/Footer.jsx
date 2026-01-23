import React from "react";
import logo from "../../Assets/COMMON/completelogo.svg";
import insta from "../../Assets/COMMON/insta.svg";
import facebook from "../../Assets/COMMON/facebook.svg";
import youtube from "../../Assets/COMMON/youtube.svg";

const Footer = () => {
  const socials = [
  { name: "instagram", icon: insta },
  { name: "facebook", icon: facebook },
  { name: "youtube", icon: youtube },
];
  return (
    <footer className="bg-midnight-purple text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* TOP */}
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
          {/* LOGO */}
          <div>
            <img src={logo} alt="DesiFest" className="h-14" />
          </div>

          {/* NEWSLETTER */}
          <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto">
            <input
              type="text"
              placeholder="Enter Name"
              className="bg-transparent border border-white/30 px-4 py-2 text-sm outline-none w-full sm:w-52 placeholder:text-white/60"
            />
            <input
              type="email"
              placeholder="Enter Email"
              className="bg-transparent border border-white/30 px-4 py-2 text-sm outline-none w-full sm:w-52 placeholder:text-white/60"
            />
            <button className="bg-yellow-400 text-black px-5 py-2 text-sm font-bold uppercase whitespace-nowrap">
              Subscribe to our Newsletter
            </button>
          </div>

          {/* SOCIALS */}
          <div className="flex gap-3">
      {socials.map(({ name, icon }) => (
        <a
          key={name}
          href="#"
          className="w-9 h-9 border border-white/40 rounded-full flex items-center justify-center hover:bg-white hover:text-black transition"
        >
          <img
            src={icon}
            alt={name}
            width={16}
            height={16}
          />
        </a>
      ))}
    </div>
        </div>

        {/* NAV */}
        <nav className="mt-10 flex flex-wrap gap-x-8 gap-y-4 text-sm uppercase opacity-80">
          {[
            "Home",
            "The 2026 Concert",
            "About",
            "Artists",
            "Community",
            "Media",
            "Shop",
            "Contact Us",
          ].map((item) => (
            <a key={item} href="#" className="hover:opacity-100">
              {item}
            </a>
          ))}
        </nav>

        {/* SPONSORS */}
        <div className="mt-12 flex flex-wrap items-center justify-center gap-10">
          {[
            "ontario-trillium.png",
            "mississauga.png",
            "factor.png",
            "ontario.png",
            "ontario-arts.png",
            "canada-council.png",
            "canadian-heritage.png",
          ].map((logo) => (
            <img
              key={logo}
              src={`/logos/${logo}`}
              alt="Sponsor"
              className="h-10 object-contain opacity-90"
            />
          ))}
        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/20 mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs opacity-70">
          <p>Desifest© 2025. All rights reserved with the owner.</p>

          <div className="flex gap-6 mt-4 md:mt-0">
            {[
              "Trademark Guidelines",
              "Privacy Policy",
              "Copyright Notice",
              "Terms of Use",
            ].map((item) => (
              <a key={item} href="#" className="hover:opacity-100">
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
