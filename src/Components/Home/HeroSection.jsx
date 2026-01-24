import artist from "@/Assets/home/artist.png";

const HeroSection = () => {
	return (
		<section className="relative items-center justify-center h-screen flex ">
			{/* RIGHT ARTIST IMAGE */}
			<img
				src={artist}
				alt="Artist"
				className="absolute right-4  max-h-[85vh] object-contain"
			/>

			{/* LEFT TEXT */}
			<div className="w-full lg:w-1/2 px-6 pt-32 text-white">
				<h1 className="font-[oswald] font-medium uppercase leading-tight">
					<span className="block text-neon-yellow text-[48px] md:text-[64px]">
						Where South
					</span>
					<span className="block text-neon-yellow text-[56px] md:text-[72px]">
						Asian Culture
					</span>
					<span className="inline-block bg-white text-black px-4 py-2 mt-4 text-[36px] md:text-[48px]">
						Meets the World.
					</span>
				</h1>

				<p className="mt-6 max-w-lg text-sm md:text-base text-gray-300">
					Canada’s largest South Asian music and arts
					festival—unifying generations, genres, and voices on one
					iconic stage.
				</p>

				{/* Anniversary watermark */}
				<div className="mt-16 font-[oswald] text-white/10 text-[64px] md:text-[96px] uppercase">
					20th Anniversary
				</div>
			</div>
      {/* BOTTOM DECORATIVE ELEMENTS */}
			<div className="w-full lg:w-1/2 px-6 pt-32 text-white">

      </div>
		</section>
	);
};

export default HeroSection;
