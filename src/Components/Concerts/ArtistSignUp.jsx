import React from "react";
import ArtistSignupForm from "./ArtistSignupForm";

const ArtistSignUp = () => {
  return (
    <div className=" bg-off-white-lavender  md:pl-24 mt-20 pl-4 py-10 ">
      {/* Top row: title + line */}
      <div className=" flex items-center gap-6">
        <h1 className="text-3xl md:text-9xl font-medium tracking-wide text-[#100422] whitespace-nowrap">
          ARTIST SIGN UP 2026
        </h1>

        <div className="flex-1 md:h-2 h-1 bg-[#100422]" />
      </div>

      {/* Subtitle */}
      <p className="mt-4 md:text-2xl uppercase tracking-widest text-[#100422] bg-off-white-lavender">
        Please find here the artists submissions signup for 2026 Desifest
      </p>

      <ArtistSignupForm />
    </div>
  );
};

export default ArtistSignUp;
