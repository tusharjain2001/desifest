import { useEffect, useRef } from "react";

const columns = [
	{ height: 600, speed: 0.26, text: "56M+", text2: "Subscribers" },
	{ height: 600, speed: 0.21, text: "300K+", text2: "Followers" },
	{ height: 600, speed: 0.16, text: "2K+", text2: "Views" },
	{ height: 600, speed: 0.23, text: "1K+", text2: "Likes" },
];

const ParallaxColumns = ({ scrollY }) => {
	const refs = useRef([]);

	useEffect(() => {
		const y = scrollY ?? 0;

		refs.current.forEach((el, i) => {
			if (!el) return;

			const startOffset = columns[i].height;
			const translate = startOffset - y * columns[i].speed;

			el.style.transform = `translateY(${translate}px)`;
		});
	}, [scrollY]); // 👈 react to parent scroll

	return (
		<div className="relative w-full h-full overflow-hidden">
			<div className="absolute bottom-0 left-0 flex items-end w-full">
				{columns.map((col, i) => (
					<div
						key={i}
						ref={(el) => (refs.current[i] = el)}
						className="flex-1 will-change-transform"
						style={{
							height: col.height,
							background: "#453361",
						}}
					>
						<div className="h-full flex flex-col justify-start pt-4 items-center">
							<h2 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold dm-sans-700">
								{col.text}
							</h2>
							<p className="text-white text-lg md:text-xl lg:text-2xl mt-2 dm-sans-400">
								{col.text2}
							</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default ParallaxColumns;
