import missionImg from "@/Assets/about/image.png";
import visionImg from "@/Assets/about/image.png";
import cultureImg from "@/Assets/about/image.png";
import supportImg from "@/Assets/about/image.png";
import arrow from "@/Assets/home/animation/image.png";
import col2img from "@/Assets/about/col2img.png";
import col3img from "@/Assets/about/col3img.png";

const artistCardsData = [
	{
		title: "Our Mission",
		image: missionImg,
		description:
			"To celebrate and promote South Asian Arts & Culture on a global stage, dismantling stereotypes, eradicating bias and combating discrimination to empower individuals in their pursuit of passion.",
	},
	{
		title: "Our Vision",
		image: visionImg,
		description:
			"To become the leading global platform for South Asian Arts & Culture. We aim to connect artists, creators and audiences from the diverse South Asian diaspora, fostering a profound sense of belonging and mutual appreciation.",
	},
	{
		title: "Our Culture",
		image: cultureImg,
		description:
			"We’re passionate about music and art and create new opportunities for artists and influencers to showcase their talent. With the support of our partners, we’re dedicated to promoting and supporting the next generation.",
	},
	{
		title: "Our Support",
		image: supportImg,
		description:
			"Since our 2006 launch, we are dedicated to supporting talent in Canada and helping them reach new audiences. We’ve accomplished this by pooling our resources with a variety of partners, including leading brands and government organisations.",
	},
];

const ArtistCard = ({ image, title, description }) => {
	return (
		<div
			className="
        group relative
        my-8
        mx-4 sm:mx-0
       sm:h-180 sm:max-w-160
        bg-white
        transition-all  duration-500 ease-out
        hover:bg-neon-yellow
        flex flex-col
     justify-between
        p-8
        cursor-pointer
      "
		>
			{/* IMAGE */}
			<div className=" overflow-hidden">
				<img
					src={image}
					alt={title}
					className="w-1/2 h-full object-cover grayscale"
				/>
			</div>
			<h3 className="text-black uppercase mt-8  text-4xl sm:text-5xl dm-sans-400  text-nowrap overflow-visible text-start">
				{title}
			</h3>
			{/* DESCRIPTION */}
			<div className="text-black dm-sans-400  w-full text-start text-xl sm:text-3xl mt-4 max-w-sm">
				{description}
			</div>

			{/* BOTTOM CONTENT */}
			<div className="flex my-3 items-start flex-col justify-between">
				{/* TITLE */}

				{/* ARROW */}
				<div className="w-full flex justify-end">
					<img
						src={arrow}
						alt=""
						className="
            w-10
            rotate-0
            transition-transform duration-500 ease-out
            group-hover:-rotate-45
          "
					/>
				</div>
			</div>
		</div>
	);
};
import { useEffect, useRef } from "react";

const columns = [
	{ height: 1800, speed: 0.06 },
	{ height: 1800, speed: 0.0 },
	{ height: 2000, speed: 0.22 },
];

const AnimatedCols = ({ scrollY }) => {
	const refs = useRef([]);

	useEffect(() => {
		const y = scrollY ?? 0;

		refs.current.forEach((el, i) => {
			if (!el) return;

			const startOffset = columns[i].height;
			const translate = y * columns[i].speed;

			el.style.transform = `translateY(${-translate}px)`;
		});
	}, [scrollY]);

	return (
		<div className="relative w-full  flex justify-start items-start">
			<div className=" w-full hidden sm:flex">
				{columns.map((col, i) => (
					<div
						key={i}
						ref={(el) => (refs.current[i] = el)}
						className="flex-1 flex items-start pt-32 justify-center overflow-visible will-change-transform px-4 bg-transparent pointer-events-none"
						style={{ height: col.height }}
					>
						<div className="pointer-events-auto">
							{artistCardsData[0] && i === 0 && (
								<div className="w-full overflow-visible">
									<ArtistCard
										image={artistCardsData[0].image}
										title={artistCardsData[0].title}
										description={
											artistCardsData[0].description
										}
									/>
									<div className="flex flex-row gap-2 items-start">
										<img
											src={col2img}
											alt=""
											className="w-30"
										/>
										<img
											src={col2img}
											alt=""
											className="w-80"
										/>
									</div>
									<div className="w-full border-l-2 border-amber-50 pl-4 mt-60 translate-x-24 text-start">
										<p className="uppercase text-2xl tracking-wide dm-sans-500 text-white/80">
											Facebook Fans
										</p>
										<h3 className="text-neon-yellow text-5xl special-gothic-one-regular">
											13K+
										</h3>
									</div>
									{/* INSTAGRAM FANS */}
									<div className="w-full border-l-2 border-amber-50 pl-4 mt-16  translate-x-80 text-start">
										<p className="uppercase text-2xl tracking-wide dm-sans-500 text-white/80">
											Instagram Fans
										</p>
										<h3 className="text-neon-yellow text-5xl special-gothic-one-regular">
											28K+
										</h3>
									</div>
								</div>
							)}
							{artistCardsData[1] && i === 1 && (
								<div className="w-full">
									<ArtistCard
										image={artistCardsData[1].image}
										title={artistCardsData[1].title}
										description={
											artistCardsData[1].description
										}
									/>
									<div className="flex flex-row gap-2 items-start">
										<img
											src={col2img}
											alt=""
											className="w-full"
										/>
									</div>
									<div className="w-full border-l-2 border-amber-50 pl-4 translate-x-24 mt-36 text-start">
										<p className="uppercase text-2xl tracking-wide dm-sans-500 text-white/80">
											Total Impressions
										</p>
										<h3 className="text-neon-yellow text-5xl  special-gothic-one-regular">
											45M+
										</h3>
									</div>
								</div>
							)}
							{artistCardsData[2] &&
								artistCardsData[3] &&
								i === 2 && (
									<div className="w-full">
										<ArtistCard
											image={artistCardsData[2].image}
											title={artistCardsData[2].title}
											description={
												artistCardsData[2].description
											}
										/>
										<ArtistCard
											image={artistCardsData[3].image}
											title={artistCardsData[3].title}
											description={
												artistCardsData[3].description
											}
										/>
										<img src={col3img} alt="" />
										<div className="flex items-start gap-4 mb-10">
											<div className="w-px h-14 bg-white/60" />
										</div>
										<div className="w-full border-l-2 border-amber-50 pl-4 mt-72 text-start">
											<p className="uppercase text-2xl tracking-wide dm-sans-500 text-white/80">
												Festival Attendance
											</p>
											<h3 className="text-neon-yellow text-5xl special-gothic-one-regular">
												65K+
											</h3>
										</div>
									</div>
								)}
						</div>
					</div>
				))}
			</div>
			<div className="flex sm:hidden flex-col">
				{artistCardsData.map((card, index) => (
					<ArtistCard
						key={index}
						image={card.image}
						title={card.title}
						description={card.description}
					/>
				))}
				<div className="flex flex-row gap-4 mx-4 items-start">
					<img src={col2img} alt="" className="w-16" />
					<img src={col2img} alt="" className="w-30" />
					<img src={col2img} alt="" className="w-44" />
				</div>
				<div className="flex flex-col items-start -translate-y-16 justify-start gap-12">
					{/* FACEBOOK FANS */}
					<div className="w-full border-l-2 border-amber-50 pl-4 translate-x-4   text-start">
						<p className="uppercase text-lg tracking-wide  dm-sans-500 text-white/80">
							Facebook Fans
						</p>
						<h3 className="text-neon-yellow text-4xl special-gothic-one-regular">
							13K+
						</h3>
					</div>

					{/* INSTAGRAM FANS */}
					<div className="w-full border-l-2 border-amber-50 pl-4 translate-x-18 text-start">
						<p className="uppercase text-lg tracking-wide dm-sans-500 text-white/80">
							Instagram Fans
						</p>
						<h3 className="text-neon-yellow text-4xl special-gothic-one-regular">
							28K+
						</h3>
					</div>

					{/* TOTAL IMPRESSIONS */}
					<div className="w-full border-l-2 border-amber-50 pl-4 translate-x-28 text-start">
						<p className="uppercase text-lg tracking-wide dm-sans-500 text-white/80">
							Total Impressions
						</p>
						<h3 className="text-neon-yellow text-4xl special-gothic-one-regular">
							45M+
						</h3>
					</div>

					{/* FESTIVAL ATTENDANCE */}
					<div className="w-full border-l-2 border-amber-50 pl-4 translate-x-48 text-start">
						<p className="uppercase text-lg tracking-wide dm-sans-500 text-white/80">
							Festival Attendance
						</p>
						<h3 className="text-neon-yellow text-4xl special-gothic-one-regular">
							65K+
						</h3>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AnimatedCols;
