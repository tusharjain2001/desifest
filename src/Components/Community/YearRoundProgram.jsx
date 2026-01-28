import React from "react";

import first from "../../Assets/community/first.svg";
import second from "../../Assets/community/second.svg";
import third from "../../Assets/community/third.svg";
import fourth from "../../Assets/community/fourth.svg";
import fifth from "../../Assets/community/fifth.svg";
import group from "../../Assets/community/circlegroup.svg";
import bottombg from "../../Assets/community/bottombg.svg";

const programs = [
  {
    tag: "WHY US",
    title: "MORE THAN A FESTIVAL",
    desc: "DESIFEST is more than just a music festival. Our goal is to bring together young talent with experienced professionals to help them grow and succeed. At DESIFEST, you'll have the chance to connect with industry leaders, learn from their experiences, and get advice on how to take your talent to the next level.",
    image: first,
  },
  {
    tag: "Audience Breakdown    ",
    title: "A REAL MELTING POT OF CULTURES",
    desc: "DESIFEST is not just for South Asians, it's for everyone! Our closing festival at Yonge-Dundas Square is a melting pot of cultures and generations, where people from all backgrounds come together to enjoy the music and celebrate diversity.",
    image: second,
  },
  {
    tag: "ONE EVENT",
    title: "CELEBRATE OUR DIFFERENCES",
    desc: "DESIFEST is dedicated to supporting new ideas in arts and music. Since 2006, we have distributed over two million dollars to support key roles in the industry, including performance fees, production crews, volunteers, creatives, DJs, dancers, and more.",
    image: third,
  },
  {
    tag: "MONETARY WORTH",
    title: "INVESTING IN MUSIC COMMUNITY",
    desc: "At DESIFEST, we believe in the dreams of artists and support their aspirations. Throughout the year, we provide funding and showcase opportunities for creators in partnership with our venue partners. Despite the challenges posed by COVID-19, we have continued to grow and evolve, returning stronger and with even better ideas.",
    image: fourth,
  },
  {
    tag: "MAKING AN IMPACT",
    title: "SUPPORT OUR COMMUNITY DREAMS",
    desc: "At DESIFEST, we believe in the dreams of artists and support their aspirations. Throughout the year, we provide funding and showcase opportunities for creators in partnership with our venue partners. Despite the challenges posed by COVID-19, we have continued to grow and evolve, returning stronger and with even better ideas.",
    image: fifth,
  },
];

const YearRoundProgram = () => {
  return (
    <section className="relative py-20">
      <div className=" pl-4">
        {/* Section Title */}
        <div className=" flex items-center relative gap-6 w-full mt-6">
          <div className="text-3xl md:text-7xl font-medium tracking-wide font-[OSWALD] text-white whitespace-nowrap">
            YEAR-ROUND PROGRAM
          </div>

          <div className="flex-1 md:h-2 h-1 bg-white" />
        </div>
        <img src={group} className="absolute top-0 left-0 w-125 h-125" />

        <div className="space-y-24 mt-20 relative">
          {programs.map((item, index) => {
            const isReverse = index % 2 !== 0;
            const isYellowFirst = index % 2 === 0; // Even index = first word yellow, Odd index = last word yellow
            const titleWords = item.title.split(" ");

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center gap-8 lg:gap-12 justify-center`}
              >
                {/* Image */}
                <div className="w-full lg:w-auto flex justify-center lg:justify-end">
                  <div className="rounded-3xl overflow-hidden shadow-lg max-w-sm lg:max-w-xs border-2 border-white/30 p-4">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-2xl"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className="text-white max-w-2xl lg:max-w-md flex flex-col">
                  <span className="text-md w-fit p-2 uppercase font-[DMSans] tracking-widest text-neon-yellow bg-[#2C223C] mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-[DMSans] lg:text-4xl mb-4">
                    {isYellowFirst ? (
                      <>
                        <span className="text-neon-yellow font-bold">
                          {titleWords[0]}
                        </span>{" "}
                        {titleWords.slice(1).join(" ")}
                      </>
                    ) : (
                      <>
                        {titleWords.slice(0, -1).join(" ")}{" "}
                        <span className="text-neon-yellow font-bold">
                          {titleWords[titleWords.length - 1]}
                        </span>
                      </>
                    )}
                  </h3>
                  <p className="text-gray-300 font-[DMSans] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
          <img
        src={bottombg}
        alt="Bottom Background"
        className="absolute top-0 w-full pointer-events-none"
      />
        </div>
      </div>
      
    </section>
  );
};

export default YearRoundProgram;
