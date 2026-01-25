import ArtistSignUp from "@/Components/Concerts/ArtistSignUp";
import Hero from "@/Components/Concerts/Hero";
import Volunteer2026 from "@/Components/Concerts/Volunteer2026";
import React from "react";

const ConcertPage = () => {
  return (
    <div className="ml-24">
      <Hero />
      <ArtistSignUp />
      <Volunteer2026 />
    </div>
  );
};

export default ConcertPage;
