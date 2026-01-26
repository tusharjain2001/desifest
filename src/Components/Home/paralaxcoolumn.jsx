import { useEffect, useRef } from "react";

const columns = [
  { height: 300, speed: 0.35 },
  { height: 300, speed: 0.3 },
  { height: 300, speed: 0.2 },
  { height: 300, speed: 0.17 },
];

const ParallaxColumns = () => {
  const refs = useRef([]);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;

      refs.current.forEach((el, i) => {
        if (!el) return;

        const startOffset = columns[i].height;
        const translate = startOffset - y * columns[i].speed;

        el.style.transform = `translateY(${translate}px)`;
      });
    };

    onScroll(); // important for reload
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <div className="absolute bottom-0 left-0 w-full flex">
        {columns.map((col, i) => (
          <div
            key={i}
            ref={(el) => (refs.current[i] = el)}
            className="flex-1 will-change-transform"
            style={{
              height: col.height,
              background: "#453361",
            }}
          >
            YESSSSS
          </div>
        ))}
      </div>
    </div>
  );
};

export default ParallaxColumns;
