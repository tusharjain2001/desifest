import { useEffect, useRef } from "react";

const columns = [
	{ height: 300, speed: 0.35, text: "56M+", text2: "Subscribers" },
	{ height: 300, speed: 0.3, text: "300k+ ", text2: "Followers" },
	{ height: 300, speed: 0.2, text: "2k+ ", text2: "Views" },
	{ height: 300, speed: 0.17, text: "1k+", text2: "Likes" },
];

const ParallaxColumns = () => {
	const refs = useRef([]);

	useEffect(() => {
		const onScroll = () => {
			const y = window.scrollY;

			refs.current.forEach((el, i) => {
				if (!el) return;

				const startOffset = columns[i].height;
				const translate = startOffset - y * columns[i].speed;

				el.style.transform = `translateY(${translate}px)`;
			});
		};

		onScroll(); // important for reload
		window.addEventListener("scroll", onScroll, { passive: true });

		return () => window.removeEventListener("scroll", onScroll);
	}, []);

	return (
		<div className="relative w-full h-full overflow-hidden">
			<div className="absolute bottom-0 left-0 w-full flex">
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
						<div className="h-full flex flex-col justify-center items-center">
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
