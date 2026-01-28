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
    desc: "DESIFEST is more than just a music festival. Our goal is to bring together young talent with experienced professionals to help them grow and succeed. At DESIFEST, you’ll have the chance to connect with industry leaders, learn from their experiences, and get advice on how to take your talent to the next level.",
    image: first,
  },
  {
    tag: "Audience Breakdown    ",
    title: "A REAL MELTING POT OF CULTURES",
    desc: "DESIFEST is not just for South Asians, it’s for everyone! Our closing festival at Yonge-Dundas Square is a melting pot of cultures and generations, where people from all backgrounds come together to enjoy the music and celebrate diversity.",
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
    <section className="relative bg-gradient-to-b from-[#0b021a] via-[#120326] to-[#0b021a] py-20">
      <div className=" pl-4">
        {/* Section Title */}
        <div className=" flex items-center gap-6 w-full mt-6">
          <div className="text-3xl md:text-7xl font-medium tracking-wide text-white whitespace-nowrap">
            YEAR-ROUND PROGRAM
          </div>

          <div className="flex-1 md:h-2 h-1 bg-white" />
        </div>

        <div className="space-y-24 mt-20">
          {programs.map((item, index) => {
            const isReverse = index % 2 !== 0;

            return (
              <div
                key={index}
                className={`flex flex-col ${
                  isReverse ? "lg:flex-row-reverse" : "lg:flex-row"
                } items-center `}
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
                <div className="text-white max-w-2xl flex flex-col">
                  <span className="text-md w-fit p-2 uppercase font-[DMSans] tracking-widest text-neon-yellow bg-[#2C223C] mb-3">
                    {item.tag}
                  </span>
                  <h3 className="text-2xl md:text-5xl font-[DMSans] lg:text-5xl mb-4">
                    <span className="text-neon-yellow">
                      {item.title.split(" ")[0]}
                    </span>{" "}
                    {item.title.split(" ").slice(1).join(" ")}
                  </h3>
                  <p className="text-gray-300 font-[DMSans] leading-relaxed max-w-md">
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
