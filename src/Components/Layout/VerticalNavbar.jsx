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
      className="hidden md:flex bg-glass-white z-40 fixed top-0 left-0 h-28 origin-top-left"
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
          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={facebook} alt="Facebook" className="" />
          </a>

          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={insta} alt="Instagram" className="" />
          </a>

          <a
            href="#"
            className="hover:opacity-100 opacity-70 transition rotate-90"
          >
            <img src={youtube} alt="YouTube" className="" />
          </a>
        </div>
      </div>
    </aside>
  );
}
