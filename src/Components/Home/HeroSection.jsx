import arrow from "@/Assets/home/image.png";
import artist from "@/Assets/home/artist.png";

const HeroSection = () => {
	return (
		<>
			<section className="hidden lg:flex relative items-start justify-center h-screen">
				{/* RIGHT ARTIST IMAGE */}
				<img
					src={artist}
					alt="Artist"
					className="absolute left-86 bottom-1 max-h-[75vh] object-contain [mask-image:linear-gradient(to_top,transparent_0%,black_25%,black_100%)]  [-webkit-mask-image:linear-gradient(to_top,transparent_0%,black_25%,black_100%)]
  "
				/>

				{/* LEFT TEXT */}
				<div className="w-full h-screen lg:w-2/3 px-6 pt-24 text-white">
					<h1 className="font-[oswald] font-medium uppercase leading-tight">
						<span className="block text-neon-yellow text-[56px] md:text-[72px]">
							Where South
						</span>
						<span className="block text-neon-yellow text-[64px] md:text-[84px]">
							Asian Culture
						</span>
						<span className="inline-block bg-white text-black px-2 w-[660px] 	 py-2 mt-4 text-[44px] md:text-[72px]">
							Meets the World.
						</span>
					</h1>

					<p className="mt-2 text-sm md:text-xl text-gray-300">
						Canada’s largest South Asian music and arts festival—{" "}
						<br />
						uniting generations, genres, and voices on one iconic
						stage.
					</p>
					{/* Anniversary watermark */}
					<div className=" font-[oswald] mt-4 text-white/10 text-[64px] md:text-[246px] leading-40 uppercase">
						20th
					</div>
					<div className=" font-[oswald] text-white/10 text-[64px] md:text-[96px] leading-56 uppercase">
						Anniversary
					</div>
				</div>
				{/* BOTTOM DECORATIVE ELEMENTS */}
				<div className="w-full h-screen lg:w-1/3 px-6 pt-32 text-white">
					<div className="absolute top-18 right-16 text-white text-right">
						{/* Background year */}
						<div className=" text-white/10 font-[Oswald] font-medium text-[100px] leading-16 select-none">
							2026
						</div>

						{/* Foreground content */}
						<div className="relative z-10">
							{/* JUNE 19 – 20 */}
							<h3
								className="
      font-['Special_Gothic_Expanded_One']
      font-normal
      uppercase
      text-[56px]
      leading-[1]
      tracking-normal
      text-white
    "
							>
								June 19 – 20
							</h3>

							{/* LOCATION */}
							<p
								className="
      mt-1
      font-['DM_Sans']
      font-semibold
      uppercase
      text-[32px]
      leading-[1]
      tracking-[-0.04em]
      text-white/90
    "
							>
								Sankofa Square, Canada
							</p>
						</div>
					</div>
					<div className="absolute bottom-0 right-0 w-[480px] h-[480px] flex items-center justify-center">
						{/* Concentric rings (inner → outer, opacity decreases) */}
						<div className="absolute inset-[99px] rounded-full border border-white/40" />
						<div className="absolute inset-[66px] rounded-full border border-white/30" />
						<div className="absolute inset-[33px] rounded-full border border-white/20" />
						<div className="absolute inset-0 rounded-full border border-white/10" />

						{/* Center content */}
						<div className="relative z-10 flex items-center gap-6">
							{/* Arrow */}
							<div className="relative w-[108px] h-[108px]">
								<img src={arrow} alt="Arrow" />
							</div>

							{/* Text */}
							<div className="text-white text-[0.95rem] uppercase leading-tight tracking-wide">
								<div>Explore</div>
								<div>Join</div>
								<div>Enjoy</div>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* MOBILE HERO */}
			<section className="lg:hidden relative min-h-screen flex flex-col items-center text-center px-6 pt-24 text-white">
				{/* DATE BLOCK */}
				<div className="mb-6">
					<div className="text-white/10 font-[Oswald] text-[72px] leading-none">
						2026
					</div>
					<h3 className="font-['Special_Gothic_Expanded_One'] uppercase text-[32px] leading-[1]">
						June 19 – 20
					</h3>
					<p className="mt-1 font-['DM_Sans'] uppercase text-[16px] tracking-[-0.04em] text-white/90">
						Sankofa Square, Canada
					</p>
				</div>

				{/* HEADLINE */}
				<h1 className="font-[oswald] uppercase leading-tight mb-4">
					<span className="block text-neon-yellow text-[36px]">
						Where South
					</span>
					<span className="block text-neon-yellow text-[44px]">
						Asian Culture
					</span>
					<span className="block bg-white text-black px-3 py-2 mt-3 text-[28px]">
						Meets the World.
					</span>
				</h1>

				{/* DESCRIPTION */}
				<p className="text-sm text-gray-300 max-w-md mb-8">
					Canada’s largest South Asian music and arts
					festival—unifying generations, genres, and voices on one
					iconic stage.
				</p>

				{/* ARTIST IMAGE */}
				<img
					src={artist}
					alt="Artist"
					className="
      w-[220px]
      object-contain
      mb-8
      [mask-image:linear-gradient(to_top,black_0%,black_90%,transparent_100%)]
      [-webkit-mask-image:linear-gradient(to_top,black_0%,black_90%,transparent_100%)]
    "
				/>

				{/* ARROW + RINGS */}
				<div className="relative w-[260px] h-[260px] flex items-center justify-center">
					<div className="absolute inset-[78px] rounded-full border border-white/40" />
					<div className="absolute inset-[52px] rounded-full border border-white/30" />
					<div className="absolute inset-[26px] rounded-full border border-white/20" />
					<div className="absolute inset-0 rounded-full border border-white/10" />

					<div className="relative z-10 flex items-center gap-4">
						<img src={arrow} alt="Arrow" className="w-[64px]" />
						<div className="text-white text-xs uppercase leading-tight">
							<div>Explore</div>
							<div>Join</div>
							<div>Enjoy</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroSection;
