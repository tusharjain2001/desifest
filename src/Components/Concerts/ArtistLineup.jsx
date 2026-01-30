import React from "react";
import lineup from "../../Assets/concerts/artistlineupwb.svg";
import lineuptwo from "../../Assets/concerts/artistlineup2.svg";
import lineupbg from "../../Assets/concerts/artistlineupbg.svg";
import { useEffect, useRef } from "react";
const ArtistLineup = ({ scrollY }) => {
  const cardRefs = useRef([]);
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
      right: "5%",
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
      top: "89%",
      right: "3%",
    },
    {
      id: 12,
      name: "MUSE BOX",
      handle: "@musebox.photographer",
      image: lineup,
      top: "96%",
      left: "12%",
    },
  ];
  useEffect(() => {
    const y = scrollY ?? 0;
  
    cardRefs.current.forEach((el, i) => {
      if (!el) return;
  
      // subtle different speeds for depth
      const speed = 0.1 ;
  
      const translate = y * speed;
  
      el.style.transform = `translateY(-${translate}px)`;
    });
  }, [scrollY]);
  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Checkered Background Pattern */}
      <div className="absolute inset-0 opacity-10" />

      {/* Header */}
      <section className="px-12">
        <div className="flex items-center gap-6">
          {/* Left title */}
          <h2 className="whitespace-nowrap oswaldd text-3xl font-medium tracking-wide text-white md:text-[100px]">
            ARTIST LINEUP
          </h2>

          {/* Divider line */}
          <div className="h-1 flex-1 bg-white" />

          {/* Right text */}
          <p className="whitespace-nowrap oswald-500 text-sm  tracking-widest text-white md:text-2xl">
            2026 LINEUP IS <span className="text-neon-yellow">COMING SOON</span>
          </p>
        </div>
        <div className="oswald-300 uppercase text-2xl my-4 text-white text-start">our 2025 lineUp was.....</div>
      </section>

      {/* MOBILE – vertical list */}
      <div className="block md:hidden px-4 mt-12 space-y-10">
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="flex flex-col items-center text-center gap-4"
          >
            <img
              src={artist.image}
              alt={artist.name}
              className="w-[260px] h-[260px] object-cover rounded-3xl"
            />

            <div>
              <h3 className="text-white font-bold text-xl">{artist.name}</h3>
              <p className="text-white text-base opacity-80">{artist.handle}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Artist Cards Container */}
      <div className="hidden md:block relative w-full h-[2800px] max-w-5xl mx-auto mb-48">
        <img
          src={lineupbg}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover z-0"
        />
        {artists.map((artist, i) => (
          <div
  key={artist.id}
  ref={(el) => (cardRefs.current[i] = el)}
  className="absolute will-change-transform"
  style={{
    top: artist.top,
    left: artist.left,
    right: artist.right,
  }}
>
   <div className="flex items-center gap-4 group">
  {/* IMAGE WRAPPER */}
  <div
    className="
      relative
      rounded-[28px]
      transition-[border-radius,box-shadow]
      duration-700
      ease-[cubic-bezier(0.4,0,0.2,1)]
      group-hover:rounded-[140px]
      shadow-none
      group-hover:shadow-xl
    "
  >
    {/* IMAGE */}
    <div
      className="
        relative
        border-4 border-white
        overflow-hidden
        rounded-[75px]
        transition-[border-radius]
        duration-700
        ease-[cubic-bezier(0.4,0,0.2,1)]
        group-hover:rounded-[150px]
      "
    >
      <img
        src={artist.image}
        alt={artist.name}
        className="
          w-[280px] h-[280px] object-cover
          transition-transform
          duration-700
          ease-[cubic-bezier(0.4,0,0.2,1)]
          group-hover:scale-105
        "
      />

      {/* TEXT INSIDE IMAGE */}

    </div>
    <div
        className="
          absolute bottom-4 -right-8
          text-left z-10 flex flex-col
          opacity-0 translate-y-4
          transition-[opacity,transform]
          duration-700
          ease-[cubic-bezier(0.4,0,0.2,1)]
          group-hover:opacity-100
          group-hover:translate-y-0
          group-hover:delay-150
          overflow-visible
          bg-[#10042299]
        "
      >
        <div className="text-neon-yellow dm-sans-600  text-2xl leading-tight drop-shadow-lg">
          {artist.name}
        </div>
        <div className="text-white dm-sans-400 text-lg drop-shadow-lg">
          {artist.handle}
        </div>
      </div>
  </div>

  {/* RIGHT TEXT */}
  <div
    className="
      text-white
      px-2 border-l-2 border-[#D9D9D9]
      transition-[opacity,transform]
      duration-700
      ease-[cubic-bezier(0.4,0,0.2,1)]
      opacity-100 translate-x-0
      group-hover:opacity-0
      group-hover:translate-x-4
    "
  >
    <h3 className="font-bold dm-sans-400 text-2xl">{artist.name}</h3>
    <p className="text-lg dm-sans-400">{artist.handle}</p>
  </div>
</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistLineup;
