import arrow from "@/Assets/home/Community/ARROW.png";

const CommunityCard = ({ image, title, description }) => {
	return (
		<>
			{/* DESKTOP CARD */}
			<div className="hidden md:block">
				<div
					className="
      group relative
      w-full max-w-[320px]
      md:w-[320px]
      md:h-[460px]
      p-4 md:p-6
      cursor-pointer
      transition-all duration-500 ease-out
      bg-[#26193A]
      md:origin-top
      md:hover:scale-[1.3]
      md:hover:bg-[#3A2B51]
    "
				>
					{/* Image */}
					<div className="relative w-full overflow-hidden border border-white/30">
						<img
							src={image}
							alt={title}
							className="w-full object-cover grayscale"
						/>
					</div>

					{/* Content */}
					<div className="mt-6 text-white">
						<h3 className="text-4xl dm-sans-400 uppercase leading-tight">
							{title}
						</h3>

						{description && (
							<p
								className="
            mt-4 text-sm text-white/80 leading-relaxed
            w-[200px]
            opacity-0 translate-y-2
            transition-all duration-300
            group-hover:opacity-100
            group-hover:translate-y-0
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
          rotate-45
          transition-all duration-300 ease-out
          group-hover:rotate-0
        "
						/>
					</div>
				</div>
			</div>
			{/* MOBILE CARD */}
			<div className="md:hidden w-full">
				<div
					className=" relative
      flex items-start gap-4
      bg-[#26193A]
      p-4
      border 
    "
				>
					{/* Image */}
					<div className="w-1/2  overflow-hidden flex-shrink-0">
						<img
							src={image}
							alt={title}
							className="w-full h-full object-cover grayscale"
						/>
					</div>

					{/* Content */}
					<div className="flex-1 h-full text-white">
						<h3 className="text-3xl dm-sans-400 uppercase leading-tight">
							{title}
						</h3>
						<div
							className="  w-full flex justify-end
        transition-all duration-300
        group-hover:translate-x-3
      "
						>
							<img
								src={arrow}
								alt=""
								className="
          h-10 
          rotate-45
          transition-all duration-300 ease-out
          group-hover:rotate-0
        "
							/>
						</div>
					</div>

					{/* Arrow */}
				</div>
			</div>
		</>
	);
};

export default CommunityCard;
