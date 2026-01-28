import backgroundVideo from "@/Assets/home/animation/video.mp4";
import ParallaxColumns from "./paralaxcoolumn.jsx";
import ArtistsSection from "./ArtistsSection.jsx";

const Animation = ({ scrollY }) => {
	return (
		<section className="relative w-full sm:mt-32">
			{/* IMAGE STRIP */}
			<div className="relative w-full h-[600px]">
				<video
					className="absolute inset-0 w-full h-full object-cover z-0"
					src={backgroundVideo}
					autoPlay
					loop
					muted
					playsInline
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
