import { NavLink } from "react-router-dom";
import insta from "../../Assets/COMMON/insta.svg";
import facebook from "../../Assets/COMMON/facebook.svg";
import youtube from "../../Assets/COMMON/youtube.svg";

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
      className="hidden md:flex bg-[#2C223C] z-60 absolute w-[99999px]  top-0 left-0 h-24 origin-top-left"
      style={{  transform: "rotate(-90deg) translateX(-100%)" }}
    >
      <div className="flex flex-row-reverse items-center gap-4 w-full h-full px-2">
        {/* Navigation */}
        <div className="flex flex-row-reverse items-center gap-2">
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
    px-4 py-2
    rounded-full
    text-xs
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
          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={facebook} alt="Facebook" className="h-8" />
          </a>

          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={insta} alt="Instagram" className="h-8" />
          </a>

          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={youtube} alt="YouTube" className="h-8" />
          </a>
        </div>
      </div>
    </aside>
  );
}
