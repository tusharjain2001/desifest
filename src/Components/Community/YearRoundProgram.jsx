import React from "react";

import first from "../../Assets/community/first.svg";
import second from "../../Assets/community/second.svg";
import third from "../../Assets/community/third.svg";
import fourth from "../../Assets/community/fourth.svg";
import fifth from "../../Assets/community/fifth.svg";


const programs = [
  {
    tag: "WHY US",
    title: "MORE THAN A FESTIVAL",
    desc:
      "Beyond music, we build a vibrant community that brings people together through shared experiences.",
    image: first,
  },
  {
    tag: "MAKING MEMORIES",
    title: "A REAL MELTING POT OF CULTURES",
    desc:
      "Experience the harmony of diverse traditions, people, and music all in one place.",
    image: second,
  },
  {
    tag: "OUR EXPERIENCES",
    title: "CELEBRATE OUR DIFFERENCES",
    desc:
      "We believe diversity is our strength and celebrate what makes us unique.",
    image: third,
  },
  {
    tag: "INVESTING WORTH",
    title: "INVESTING IN MUSIC COMMUNITY",
    desc:
      "Supporting artists, creators, and fans by building platforms that last.",
    image: fourth,
  },
  {
    tag: "MAKING AN IMPACT",
    title: "SUPPORT OUR COMMUNITY DREAMS",
    desc:
      "Giving back to the community and empowering dreams through music.",
    image: fifth,
  },
];

const YearRoundProgram = () => {
  return (
    <section className="relative bg-gradient-to-b from-[#0b021a] via-[#120326] to-[#0b021a] py-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-white text-xl font-semibold mb-16 tracking-wide">
          YEAR-ROUND PROGRAM
        </h2>

        <div className="space-y-24">
          {programs.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-12`}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 flex justify-center">
                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-sm">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 text-white">
                  <p className="text-xs uppercase tracking-widest text-yellow-400 mb-3">
                    {item.tag}
                  </p>
                  <h3 className="text-2xl lg:text-3xl font-bold mb-4">
                    <span className="text-yellow-400">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-gray-300 leading-relaxed max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default YearRoundProgram;
