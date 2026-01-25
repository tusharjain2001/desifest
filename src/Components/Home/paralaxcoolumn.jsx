import { useEffect, useRef } from "react";

const columns = [
  { left: "0%",    width: 140, height: 220, speed: 0.12 },
  { left: "140px", width: 160, height: 260, speed: 0.18 },
  { left: "300px", width: 150, height: 240, speed: 0.15 },
  { left: "460px", width: 170, height: 280, speed: 0.22 },
  { left: "630px", width: 180, height: 230, speed: 0.14 },
];

const ParallaxColumns = () => {
  const refs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      refs.current.forEach((el, i) => {
        if (!el) return;
        el.style.transform = `translateY(${-y * columns[i].speed}px)`;
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full h-full">
      {columns.map((col, i) => (
        <div
          key={i}
          ref={(el) => (refs.current[i] = el)}
          className="absolute bottom-0 will-change-transform"
          style={{
            left: col.left,
            width: col.width,
            height: col.height,
            background:
              "linear-gradient(to top, rgba(255,255,255,0.9), rgba(255,255,255,0))",
          }}
        />
      ))}
    </div>
  );
};

export default ParallaxColumns;
