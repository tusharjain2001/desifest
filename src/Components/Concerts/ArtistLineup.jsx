import React, { useState } from "react";
import lineup from "../../Assets/concerts/artistlineup.svg";
import lineuptwo from "../../Assets/concerts/artistlineup2.svg";

const ArtistLineup = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  // Artist data - replace image paths with your actual images
  const artists = [
    {
      id: 1,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "15%",
      left: "0%",
    },
    {
      id: 2,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "5%",
      right: "0%",
    },
    {
      id: 3,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "23%",
      right: "12%",
    },
    {
      id: 4,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "32%",
      left: "0%",
    },
    {
      id: 5,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "40%",
      right: "5%",
    },
    {
      id: 6,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineuptwo,
      top: "52%",
      left: "15%",
    },
    {
      id: 7,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "60%",
      right: "2%",
    },
    {
      id: 8,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "66%",
      left: "5%",
    },
    {
      id: 9,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "75%",
      right: "16%",
    },
    {
      id: 10,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "82%",
      left: "6%",
    },
    {
      id: 11,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "88%",
      right: "3%",
    },
    {
      id: 12,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "95%",
      left: "12%",
    },
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Checkered Background Pattern */}
      <div className="absolute inset-0 opacity-10" />

      {/* Header */}
      <section className="   px-12">
        <div className=" flex  items-center gap-6">
          {/* Left title */}
          <h2 className="whitespace-nowrap text-3xl font-medium tracking-wide text-white md:text-[100px]">
            ARTIST LINEUP
          </h2>

          {/* Divider line */}
          <div className="h-1 flex-1 bg-white" />

          {/* Right text */}
          <p className="whitespace-nowrap text-sm font-semibold tracking-widest text-white md:text-2xl">
            2026 LINEUP IS <span className="text-neon-yellow">COMING SOON</span>
          </p>
        </div>
      </section>

      {/* Artist Cards Container */}
      <div className="relative w-full h-[2800px] max-w-5xl mx-auto mb-40">
        {artists.map((artist, index) => (
          <div
            key={artist.id}
            className="absolute transition-all duration-300 ease-in-out"
            style={{
              top: artist.top,
              left: artist.left,
              right: artist.right,
            }}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex items-center gap-4">
              {/* Image Container */}
              <div
                className={`relative transition-all duration-300 ease-in-out overflow-hidden ${
                  hoveredIndex === index ? "rounded-full" : "rounded-3xl"
                }`}
              >
                <img
                  src={artist.image}
                  alt={artist.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Text on Right when not hovered */}

              <div className="text-white animate-fadeIn">
                <h3 className="font-bold text-lg">{artist.name}</h3>
                <p className="text-white text-sm">{artist.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistLineup;
