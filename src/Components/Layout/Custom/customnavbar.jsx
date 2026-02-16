import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";

import logo from "@/Assets/COMMON/logo.svg";
import logoinvert from "@/Assets/COMMON/logoinvert.svg";

const navLinks = [
  { label: "The 2026 Concert", path: "/concerts" },
  { label: "About", path: "/about" },
  { label: "Artists", path: "/artist" },
  { label: "Community", path: "/community" },
  { label: "Media", path: "/media" },
];

export default function Navbar({ textcolour }) {
  const [open, setOpen] = useState(false);

  const finalColor = textcolour || "white";
  const useInvert = !!textcolour;

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 bg-transparent"
      style={{ color: finalColor }}
    >
      <nav className="w-full px-6 md:px-28 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img
            src={useInvert ? logoinvert : logo}
            alt="DESIFEST"
            className="h-8 w-auto"
          />
        </NavLink>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden"
            style={{ color: finalColor }}
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>

          {/* JOIN IN */}
          <NavLink
            to="/join"
            className="bg-neon-yellow text-black font-medium px-3 md:px-5 py-2 md:text-2xl oswaldd hover:opacity-90 transition hover:bg-lime-300"
          >
            JOIN IN
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {open && (
        <div
          className="md:hidden backdrop-blur-md px-6 py-6 space-y-4"
          style={{
            backgroundColor: "rgba(16, 4, 34, 0.95)",
          }}
        >
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-lg"
              style={{ color: finalColor }}
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
