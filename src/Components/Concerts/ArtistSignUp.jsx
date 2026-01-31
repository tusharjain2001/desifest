import React from "react";
import ArtistSignupForm from "./ArtistSignupForm";
import VerticalNavbar from "../Layout/VerticalNavbar";
import bg from "@/Assets/artist/image copy.png";

const ArtistSignUp = () => {
  return (
    <div className="relative min-h-screen h-full overflow-clip w-full ">
			<VerticalNavbar />
      <div className=" bg-[#F5F1FB] md:pl-32  pl-4 py-10 ">
      {/* Top row: title + line */}
      <div className=" flex items-center gap-6 w-full mt-6">
        <h1 className="text-3xl md:text-9xl font-medium tracking-wide text-[#100422] whitespace-nowrap">
          ARTIST SIGN UP 2026
        </h1>

        <div className="flex-1 md:h-2 h-1 bg-[#100422]" />
      </div>

      {/* Subtitle */}
      <p className="mt-4 md:text-2xl uppercase tracking-widest text-[#100422] bg-off-white-lavender">
        Please find here the artists submissions signup for 2026 Desifest
      </p>
      <img src={bg} alt="" className="my-4" />

      <ArtistSignupForm />
    </div>
    </div>
  );
};

export default ArtistSignUp;
