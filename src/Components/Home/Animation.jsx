import background2 from "@/Assets/home/background_2.png";
import ParallaxColumns from "./paralaxcoolumn.jsx";
import ArtistsSection from "./ArtistsSection.jsx";

const Animation = ({ scrollY }) => {
	return (
		<section className="relative w-full sm:mt-32">
			{/* IMAGE STRIP */}
			<div className="relative w-full h-[600px]">
				<img
					src={background2}
					alt="background"
					className="absolute inset-0 w-full h-full object-cover z-0"
				/>

				{/* PARALLAX COLUMNS */}
				<div className="absolute bottom-0 w-full h-full  z-10">
					<ParallaxColumns scrollY={scrollY} />
				</div>
			</div>

			{/* ARTISTS SECTION */}
			<ArtistsSection />
		</section>
	);
};

export default Animation;
