import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/COMMON/completelogo.svg";
import insta from "../../Assets/COMMON/insta.svg";
import facebook from "../../Assets/COMMON/facebook.svg";
import youtube from "../../Assets/COMMON/youtube.svg";
import ontariologo from "../../Assets/COMPANIES/ontariologo.svg";
import mississaugalogo from "../../Assets/COMPANIES/mississaugalogo.svg";
import factorlogo from "../../Assets/COMPANIES/factorlogo.svg";
import ontariowhitelogo from "../../Assets/COMPANIES/ontariowhitelogo.svg";
import ontarioartslogo from "../../Assets/COMPANIES/ontarioartslogo.svg";
import canadalogo from "../../Assets/COMPANIES/canadalogo.svg";
import canadianheritagelogo from "../../Assets/COMPANIES/canadianheritagelogo.svg";

const Footer = () => {
  const socials = [
    { name: "instagram", icon: insta },
    { name: "facebook", icon: facebook },
    { name: "youtube", icon: youtube },
  ];

  const navLinks = [
    { label: "Home", path: "/" },
    { label: "The 2026 Concert", path: "/concerts" },
    { label: "About", path: "/about" },
    { label: "Artists", path: "/artist" },
    { label: "Community", path: "/community" },
    { label: "Media", path: "/media" },
    { label: "Shop", path: "/shop" },
    { label: "Contact Us", scrollTo: "contact" },
  ];

  const handleScroll = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <footer className="bg-midnight-purple w-full text-white flex flex-col md:px-20 md:py-10 p-8 z-70">
      {/* TOP */}
      <div className="flex items-center justify-between gap-4">
        <img src={logo} alt="DesiFest" className="h-14" />

        <div className="flex gap-3">
          {socials.map(({ name, icon }) => (
            <a key={name} href="#" className="flex items-center justify-center">
              <img src={icon} alt={name} />
            </a>
          ))}
        </div>
      </div>

      {/* NEWSLETTER */}
      <div className="flex flex-col md:flex-row gap-4 py-10">
        <input
          type="text"
          placeholder="Enter Name"
          className="bg-[#FFFFFF0D] border border-white px-4 py-4 text-sm outline-none flex-1 placeholder:text-[#F5F5F580] placeholder:text-xl"
        />

        <input
          type="email"
          placeholder="Enter Email"
          className="bg-[#FFFFFF0D] border border-white px-4 py-4 text-sm outline-none flex-1 placeholder:text-[#F5F5F580] placeholder:text-xl"
        />

        <button className="bg-neon-yellow text-black px-6 py-2 text-lg font-bold uppercase whitespace-nowrap">
          Subscribe to our Newsletter
        </button>
      </div>

      {/* NAV */}
      <nav className="mt-10 flex md:flex-wrap md:flex-row flex-col justify-between gap-x-8 gap-y-4 text-sm uppercase opacity-80">
        {navLinks.map((item) =>
          item.scrollTo ? (
            <button
              key={item.label}
              onClick={() => handleScroll(item.scrollTo)}
              className="text-left hover:opacity-100 transition-opacity"
            >
              {item.label}
            </button>
          ) : (
            <Link
              key={item.label}
              to={item.path}
              className="hover:opacity-100 transition-opacity"
            >
              {item.label}
            </Link>
          )
        )}
      </nav>

      {/* SPONSORS */}
      <div className="py-10 flex flex-wrap items-center justify-between">
        {[
          ontariologo,
          mississaugalogo,
          factorlogo,
          ontariowhitelogo,
          ontarioartslogo,
          canadalogo,
          canadianheritagelogo,
        ].map((logo, index) => (
          <img key={index} src={logo} alt="Sponsor" className="object-contain" />
        ))}
      </div>

      {/* BOTTOM */}
      <div className="border-t border-[#FEFDFD] mt-12 pt-6 flex flex-col md:flex-row justify-between text-xs opacity-70">
        <p className="text-[#FEFDFD]">
          Desifest© 2025. All rights reserved with the owner.
        </p>

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
    </footer>
  );
};

export default Footer;
