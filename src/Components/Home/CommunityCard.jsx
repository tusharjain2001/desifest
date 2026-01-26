import arrow from "@/Assets/home/Community/ARROW.png";
const CommunityCard = ({ image, title, description }) => {
	return (
		<div
			className="
          group relative w-[320px] h-[460px] p-6 cursor-pointer
          transition-all duration-500 ease-out
          bg-[#26193A]
          origin-top
          hover:scale-130
          hover:bg-[#3A2B51]
        "
		>
			{/* Image */}
			<div className="relative w-full  overflow-hidden border border-white/30">
				<img
					src={image}
					alt={title}
					className="w-full  object-cover grayscale"
				/>
			</div>

			{/* Content */}
			<div className="mt-6 text-white">
				<h3 className="text-4xl dm-sans-400 uppercase leading-tight">
					{title}
				</h3>

				{/* Description → ONLY on hover */}
				{description && (
					<p
						className="
              mt-4 text-sm text-white/80 leading-relaxed
              opacity-0 translate-y-2
              transition-all duration-300
              group-hover:opacity-100
              group-hover:translate-y-0
              w-[200px]
            "
					>
						{description}
					</p>
				)}
			</div>

			{/* Arrow */}
			<div
				className="
    absolute bottom-0 right-6
    transition-all duration-300
    group-hover:translate-x-3
  "
			>
				<img
					src={arrow}
					alt=""
					className="
      h-16 mb-6
      transition-all duration-300 ease-out
      rotate-45
      group-hover:rotate-0
    "
				/>
			</div>
		</div>
	);
};

export default CommunityCard;
