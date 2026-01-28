import arrow from "@/Assets/home/animation/image.png";
import background2 from "@/Assets/home/background_2.png";
// IMAGES
import img1 from "@/Assets/home/animation/image copy.png";
import img2 from "@/Assets/home/animation/image copy.png";
import img3 from "@/Assets/home/animation/image copy.png";

const ArtistCard = ({ image, title }) => {
	return (
		<div
			className="
        group relative
       sm:h-130 sm:w-92
        bg-white
        transition-all  duration-500 ease-out
        hover:bg-neon-yellow
        flex sm:flex-col
flex-row        justify-between
        p-6
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

			{/* BOTTOM CONTENT */}
			<div className="flex items-start flex-col justify-between">
				{/* TITLE */}
				<h3 className="text-black uppercase text-2xl dm-sans-400 leading-tight max-w-[140px]">
					{title}
				</h3>

				{/* ARROW */}
				<div className="w-full flex justify-end">
					<img
						src={arrow}
						alt=""
						className="
            w-8
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

const ArtistsSection = () => {
	return (
		<section className="relative py-32 bg-[#453361] w-full">
			{/* BACKGROUND IMAGE */}
			<img
				src={background2}
				alt="background"
				className="absolute inset-0 w-full h-full object-cover z-0"
				style={{
					WebkitMaskImage: `
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0.74) -2%,
        rgba(0, 0, 0, 0) 77%
      ),
      linear-gradient(
        to top,
        rgba(16, 4, 34, 1) 0%,
        rgba(16, 4, 34, 0) 35%
      )
    `,
					WebkitMaskComposite: "destination-in",
					maskImage: `
      linear-gradient(
        to top,
        rgba(0, 0, 0, 0.74) -2%,
        rgba(0, 0, 0, 0) 77%
      ),
      linear-gradient(
        to top,
        rgba(16, 4, 34, 1) 0%,
        rgba(16, 4, 34, 0) 35%
      )
    `,
					maskComposite: "intersect",
				}}
			/>

			{/* CONTENT — FORCE ABOVE */}
			<div className="relative z-10 flex flex-col sm:flex-row sm:items-start px-2 w-full gap-2 sm:justify-around">
			<img
					src={img1}
					className="flex sm:hidden border-4 object-cover border-white h-90  w-1/2   mb-36"
					alt=""
			/>
				<ArtistCard image={img1} title="Featured Artists" />

				<div className="sm:mt-32">
					<ArtistCard image={img2} title="Community Artists" />
				</div>

				<img
					src={img1}
					className="hidden sm:flex border-4 border-white sm:h-130 sm:w-92 sm:mt-48"
					alt=""
				/>
			</div>
		</section>
	);
};

export default ArtistsSection;
