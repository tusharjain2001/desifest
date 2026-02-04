import { Outlet } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import EventNavbar from "@/Components/Layout/Custom/CustomNavbar";
import EventFooter from "@/Components/Layout/Custom/CustomFooter";
import CustomVerticalNav from "@/Components/Layout/Custom/customverticalnavbar";
import ScrollToTop from "./ScrollToTop";

export default function EventLayout({
  navColor,
  footerColor,
  verticalNavColor,
  bgColor,
}) {
  const scrollRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onScroll = () => setScrollY(el.scrollTop);
    el.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full h-screen overflow-y-auto scrollbar-hide"
      style={{ backgroundColor: bgColor }}
    >
      {/* Same as MainLayout */}
      <ScrollToTop scrollRef={scrollRef} />

      {/* Custom Vertical Navbar */}
      <CustomVerticalNav bgColor={verticalNavColor} />
      <div className="flex min-h-full flex-col">
        
        {/* Custom Navbar */}
        <EventNavbar navColor={navColor} />

        <main className="flex-1 w-full">
          <Outlet context={{ scrollRef, scrollY }} />
        </main>

        {/* Custom Footer */}
        <EventFooter footerColor={footerColor} />
      </div>
    </div>
  );
}