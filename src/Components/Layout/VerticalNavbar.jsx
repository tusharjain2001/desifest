import { NavLink } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const navItems = [
  { label: "The 2026 Concert", path: "/concerts" },
  { label: "About", path: "/about" },
  { label: "Artists", path: "/artist" },
  { label: "Community", path: "/community" },
  { label: "Media", path: "/media" },
];

export default function VerticalNavbar() {
  return (
    <aside
      className="
        hidden md:flex
        fixed left-0 top-0
        h-screen
        w-24
        bg-glass-white
        
        z-40
      "
    >
      <div className="flex flex-col items-center w-full">
        {/* Navigation */}
        <div className="flex flex-col items-center space-y-16 mt-24">
          {navItems.map((item) => (
            <NavLink
              key={item.label}
              to={item.path}
              className={({ isActive }) =>
                `
                rotate-[-90deg]
                whitespace-nowrap
                px-5 py-2
                rounded-full
                text-xs
                tracking-wide
                border
                transition
                ${
                  isActive
                    ? "border-neon-yellow text-neon-yellow"
                    : "border-soft-lavender/40 text-soft-lavender hover:border-pureWhite hover:text-pureWhite"
                }
                `
              }
            >
              {item.label}
            </NavLink>
          ))}
        </div>

        {/* Social Icons (below nav) */}
        <div className="flex flex-col items-center gap-4 text-soft-lavender mt-10">
          <a href="#" className="hover:text-pureWhite transition">
            <FaFacebookF size={14} />
          </a>
          <a href="#" className="hover:text-pureWhite transition">
            <FaInstagram size={14} />
          </a>
          <a href="#" className="hover:text-pureWhite transition">
            <FaYoutube size={14} />
          </a>
        </div>
      </div>
    </aside>
  );
}
