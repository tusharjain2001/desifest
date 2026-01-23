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
      className="hidden md:flex bg-glass-white z-40 fixed top-0 left-0 h-22 origin-top-left"
      style={{ width: "100vh", transform: "rotate(-90deg) translateX(-100%)" }}
    >
      <div className="flex flex-row-reverse items-center gap-4 w-full h-full px-4">
        {/* Navigation */}
        <div className="flex flex-row-reverse items-center gap-4">
          {navItems.map((item) => (
            <div
              key={item.label}
              className="h-28 flex items-center justify-center shrink-0"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `
    text-center
    px-5 py-2
    rounded-full
    text-xm
    tracking-wide
    border
    transition
    ${
      isActive
        ? "border-neon-yellow text-neon-yellow "
        : "border-white text-white "
    }
    `
                }
              >
                {item.label}
              </NavLink>
            </div>
          ))}
        </div>

        {/* Social Icons (below nav) */}
        <div className="flex flex-row-reverse items-center gap-4 text-soft-lavender">
          <a href="#" className="hover:text-white transition rotate-90">
            <FaFacebookF size={20} />
          </a>
          <a href="#" className="hover:text-white transition rotate-90">
            <FaInstagram size={20} />
          </a>
          <a href="#" className="hover:text-white transition rotate-90">
            <FaYoutube size={20} />
          </a>
        </div>
      </div>
    </aside>
  );
}
