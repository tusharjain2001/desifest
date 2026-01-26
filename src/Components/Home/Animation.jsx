import background2 from "@/Assets/home/background_2.png";
import ParallaxColumns from "./paralaxcoolumn.jsx";
import ArtistsSection from "./ArtistsSection.jsx";

const Animation = () => {
  return (
    <section className="relative w-full mt-32">
      {/* IMAGE STRIP */}
      <div className="relative w-full  ">
        <img
          src={background2}
          alt="background"
          className=" inset-0 w-full h-full object-cover"
        />
		<div className="absolute w-full h-[260px] bottom-0 bg-transparent  overflow-hidden">
        <ParallaxColumns />
      </div>
      </div>

      {/* PARALLAX AREA */}
      

      {/* ARTISTS SECTION (BELOW COLUMNS) */}
      <ArtistsSection />
    </section>
  );
};

export default Animation;
