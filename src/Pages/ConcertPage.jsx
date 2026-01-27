import ArtistSignUp from "@/Components/Concerts/ArtistSignUp";
import Hero from "@/Components/Concerts/Hero";
import Volunteer2026 from "@/Components/Concerts/Volunteer2026";
import backgroung1 from "@/Assets/home/background_1.png";
import React from "react";
import FoodFestival from "@/Components/Concerts/FoodFestival";
import ContactForm from "@/Components/Home/ContactForm";
import ArtistLineup from "@/Components/Concerts/ArtistLineup";

const ConcertPage = () => {
  return (
    <div className="relative min-h-screen">
      <img
        src={backgroung1}
        alt="background"
        className="absolute inset-0 w-full h-screen object-cover opacity-[0.16]"
      />
      <div
        className="absolute z-10 inset-0"
        style={{
          background:
            "linear-gradient(270deg , #000000 -0.34%, rgba(0, 0, 0, 0) 56.45%)",
        }}
      />

      <div className="relative z-10 md:ml-24">
        <Hero />
        <ArtistLineup />
        <FoodFestival />
        {/* <ArtistSignUp />
				<Volunteer2026 /> */}
        <ContactForm />
      </div>
    </div>
  );
};

export default ConcertPage;
