import { NavLink } from "react-router-dom";
import { useState } from "react";
import { HiMenu, HiX } from "react-icons/hi";
import logo from "@/Assets/COMMON/logo.svg";

const navLinks = [
  { label: "About", path: "/about" },
  { label: "Artists", path: "/artist" },
  { label: "Community", path: "/community" },
  { label: "Media", path: "/media" },
  { label: "Concerts", path: "/concerts" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-transparent">
      <nav className="w-full px-6 md:px-28 py-4 flex items-center justify-between">
        {/* Logo */}
        <NavLink to="/" className="flex items-center">
          <img src={logo} alt="DESIFEST" className="h-8 w-auto" />
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
            to="/join"
            className="bg-neon-yellow text-black font-bold px-5 py-2 text-sm rounded hover:opacity-90 transition"
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
