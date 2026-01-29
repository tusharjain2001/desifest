import { useEffect, useRef } from "react";
import quote from "../../Assets/about/quote.svg";

export default function TestimonialCarousel() {
  const scrollRef = useRef(null);

  // ✅ TESTIMONIAL DATA (same file)
  const testimonials = [
    {
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      name: "John Doe",
      role: "CEO, Company",
    },
    {
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      name: "John Doe",
      role: "CEO, Company",
    },
    {
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      name: "John Doe",
      role: "CEO, Company",
    },
    {
      quote:
        "Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
      name: "John Doe",
      role: "CEO, Company",
    },
  ];

  // ✅ SMOOTH AUTO SCROLL (NO LAG / NO REVERSE)
  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const speed = 1; // smoother & visible
    let intervalId;

    intervalId = setInterval(() => {
      container.scrollLeft += speed;

      if (container.scrollLeft >= container.scrollWidth / 2) {
        container.scrollLeft = 0;
      }
    }, 16); // ~60fps

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="w-full bg-[#120822] py-16 gap-5 overflow-hidden">
      <h2 className="text-center font-[OSWALD] text-white text-4xl font-medium mb-10">
        WHAT PEOPLE SAY ABOUT US...
      </h2>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-scroll px-10 no-scrollbar"
      >
        {[...testimonials, ...testimonials].map((item, index) => (
          <div
            key={index}
            className="min-w-[320px] max-w-[320px] bg-[#1c1033] text-white rounded-xl p-6 flex flex-col justify-between shadow-lg"
          >
            <div className="">
              <img src={quote} className="mb-3" />
              <p className="text-sm leading-relaxed text-gray-300">
                {item.quote}
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-neon-yellow flex items-center gap-4">
              <div className="w-10 h-10 bg-purple-300 rounded-md" />
              <div className="font-[DmSans]">
                <p className="text-sm ">{item.name}</p>
                <p className="text-xs">{item.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/* Add this once in your global CSS file
.no-scrollbar::-webkit-scrollbar {
  display: none;
}
.no-scrollbar {
  -ms-overflow-style: none;
  scrollbar-width: none;
}
*/
