const Hero = () => {
	return (
		<section className="relative w-full flex items-center justify-center text-center text-white py-32">
			<div className="relative z-10 max-w-4xl px-6">
				{/* TITLE */}
				<h2 className="font-[Oswald] uppercase leading-none">
					<span className="block text-[#C8B7F2] text-[48px] md:text-[64px]">
						Our
					</span>
					<span className="block text-neon-yellow text-[72px] md:text-[110px] tracking-wide">
						Community
					</span>
				</h2>

				{/* DESCRIPTION */}
				<p className="mt-6 text-sm md:text-base text-white/80 max-w-2xl mx-auto leading-relaxed uppercase">
					More than a festival. A year-round movement.
					<br />
					But also go through our...
				</p>

				{/* CTA BUTTONS */}
				<div className="mt-10 flex items-center justify-center gap-6 flex-wrap">
					<button className="bg-neon-yellow text-black px-8 py-3 font-[Oswald] uppercase tracking-wide text-sm hover:opacity-90 transition">
						Open-Mic
					</button>

					<button className="border border-neon-yellow text-neon-yellow px-8 py-3 font-[Oswald] uppercase tracking-wide text-sm hover:bg-neon-yellow hover:text-black transition">
						Sofa-Sessions
					</button>
				</div>
			</div>
		</section>
	);
};

export default Hero;
