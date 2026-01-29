import React, { useRef } from "react";
import left from "../../Assets/concerts/leftwhitearrow.svg";
import right from "../../Assets/concerts/rightwhitearrow.svg";
import foodimage from "../../Assets/concerts/foodimage.svg";

const vendors = [
  {
    name: "Vendor Name",
    handle: "@vedorId",
    image: "/vendor.jpg",
  },
  {
    name: "Vendor Name",
    handle: "@vedorId",
    image: "/vendor.jpg",
  },
  {
    name: "Vendor Name",
    handle: "@vedorId",
    image: "/vendor.jpg",
  },
  {
    name: "Vendor Name",
    handle: "@vedorId",
    image: "/vendor.jpg",
  },
  {
    name: "Vendor Name",
    handle: "@vedorId",
    image: "/vendor.jpg",
  },
];

const FoodFestivalSection = () => {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({
      left: -350,
      behavior: "smooth",
    });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({
      left: 350,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative py-10 w-full bg-blue-black overflow-hidden">
      {/* CONTAINER */}
      <div className="max-w-[90%] mx-auto px-4">
        {/* Header */}
        <div className="flex items-center justify-between mb-14">
          <div className="flex md:items-end items-center gap-8 w-full">
            <h2 className="text-white text-2xl md:text-[100px] oswaldd font-medium tracking-wide whitespace-nowrap">
              FOOD FESTIVAL
            </h2>

            <div className="flex flex-col w-full">
              {/* Line */}
              <div className="h-0.5 bg-white w-full" />

              {/* Text */}
              <div className="text-white md:block hidden text-xl mt-3 whitespace-nowrap">
                Flavour, culture, and community.
              </div>
            </div>
          </div>

          {/* Arrows */}
          <div className="flex items-center gap-4 ml-10 shrink-0">
            <button
              onClick={scrollLeft}
              className="hover:opacity-70 transition"
            >
              <img src={left} alt="left" className="md:h-10 md:w-10 h-8 w-8" />
            </button>
            <button
              onClick={scrollRight}
              className="hover:opacity-70 transition"
            >
              <img
                src={right}
                alt="right"
                className="md:h-10 md:w-10 h-8 w-8"
              />
            </button>
          </div>
        </div>

        {/* Cards Row */}
        <div
          ref={scrollRef}
          className="
    flex gap-6 md:gap-10
    overflow-x-auto pb-6
    scrollbar-hide scroll-smooth
    px-1 md:px-0
  "
        >
          {vendors.map((vendor, index) => (
            <div
              key={index}
              className="
    relative
    w-[90%] sm:w-[80%] md:w-auto
    min-w-[90%] sm:min-w-[80%] md:min-w-[320px]
    bg-black border-4 border-white
    shrink-0
    mx-auto md:mx-0
  "
            >
              {/* Accent lines */}
              <span className="absolute top-0 left-0 w-full h-0.5 bg-white" />
              <span className="absolute top-0 right-0 w-0.5 h-full bg-white" />

              {/* Image */}
              <img
                src={foodimage}
                alt={vendor.name}
                className="
    w-full
    h-75 sm:h-85 md:h-90
    object-cover grayscale
  "
              />

              {/* Overlay */}
              <div className="absolute top-0 right-0 bg-[#1a0b3d] px-4 py-3">
                <p className="text-white text-lg font-semibold">
                  {vendor.name}
                </p>
                <p className="text-white/70 text-sm">{vendor.handle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodFestivalSection;
