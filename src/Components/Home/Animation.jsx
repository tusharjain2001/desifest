import background2 from "@/Assets/home/background_2.png";
import ParallaxColumns from "./paralaxcoolumn.jsx";
import ArtistsSection from "./ArtistsSection.jsx";

const Animation = () => {
  return (
    <section className="relative w-full mt-32">
      {/* IMAGE STRIP */}
      <div className="relative w-full h-[180px] ">
        <img
          src={background2}
          alt="background"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* PARALLAX AREA */}
      <div className="relative w-full h-[260px] bg-[#100422] overflow-hidden">
        <ParallaxColumns />
      </div>

      {/* ARTISTS SECTION (BELOW COLUMNS) */}
      <ArtistsSection />
    </section>
  );
};

export default Animation;
