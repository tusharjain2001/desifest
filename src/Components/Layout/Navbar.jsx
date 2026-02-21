import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/Assets/COMMON/logon.png";

const navLinks = [
  { label: "The 2026 Concert", path: "/concerts" },
  { label: "About", path: "/about" },
  { label: "Artists", path: "/our-artists" },
  { label: "Community", path: "/community" },
  { label: "Media", path: "/media" },
  
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 w-full z-80 bg-[#2C223C80]">
      <nav className="w-full px-6 md:px-28 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="DESIFEST" className="h-16 w-auto" />
        </NavLink>

        {/* Right Section */}
        <div className="flex items-center gap-4">
          {/* Hamburger (mobile only) */}
          <button
            className="md:hidden text-white"
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
          >
            {open ? <HiX size={26} /> : <HiMenu size={26} />}
          </button>

          {/* JOIN IN (always visible) */}
          <NavLink
            to="/concerts"
            className="bg-neon-yellow text-black font-medium px-3 md:px-5 py-2 md:text-2xl oswaldd hover:opacity-90 transition hover:bg-lime-300"
          >
            JOIN IN
          </NavLink>
        </div>
      </nav>

      {/* Mobile Navigation Menu */}
      {open && (
        <div className="md:hidden bg-midnight-purple/95 backdrop-blur-md px-6 py-6 space-y-4">
          {navLinks.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              onClick={() => setOpen(false)}
              className="block text-white text-lg"
            >
              {item.label}
            </NavLink>
          ))}
        </div>
      )}
    </header>
  );
}
