import React from "react";
import lineup from "../../Assets/concerts/artistlineupwb.svg";
import lineuptwo from "../../Assets/concerts/artistlineup2.svg";
import lineupbg from "../../Assets/concerts/artistlineupbg.svg";

const ArtistLineup = () => {
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

  return (
    <div className="relative w-full min-h-screen overflow-hidden">
      {/* Checkered Background Pattern */}
      <div className="absolute inset-0 opacity-10" />

      {/* Header */}
      <section className="px-12">
        <div className="flex items-center gap-6">
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
        {artists.map((artist) => (
          <div
            key={artist.id}
            className="absolute"
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
        rounded-3xl
        transition-all duration-500 ease-in-out
        group-hover:rounded-full
        ring-0 ring-white
        group-hover:ring-4
        shadow-none
        group-hover:shadow-xl
      "
              >
                {/* IMAGE */}
                <div className="relative border-4 border-white overflow-hidden rounded-3xl transition-all duration-500 ease-in-out group-hover:rounded-full">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="
            w-[280px] h-[280px] object-cover
            scale-100
            transition-all duration-500 ease-in-out
            group-hover:scale-105 
          "
                  />

                  {/* TEXT INSIDE IMAGE (SAFE ZONE) */}
                  <div
                    className="
            absolute bottom-8 right-8
            text-right
            z-10
            opacity-0 translate-y-4
            transition-all duration-500 ease-in-out
            group-hover:opacity-100 group-hover:translate-y-0 
            group-hover:delay-150
            flex flex-col
          "
                  >
                    <div className="text-neon-yellow font-extrabold text-2xl leading-tight drop-shadow-lg">
                      {artist.name}
                    </div>
                    <div className="text-white text-lg drop-shadow-lg">
                      {artist.handle}
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT TEXT (HIDES SMOOTHLY) */}
              <div
                className="
        text-white
        opacity-100 translate-x-0
        transition-all duration-500 ease-in-out
        group-hover:opacity-0 group-hover:translate-x-4 
        px-2 border-l-2 border-[#D9D9D9]
      "
              >
                <h3 className="font-bold text-2xl">{artist.name}</h3>
                <p className="text-lg">{artist.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtistLineup;
