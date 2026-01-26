import ontarioTrillium from "@/Assets/home/govtsupp/image.png";
import ontarioCreates from "@/Assets/home/govtsupp/image copy.png";
import factor from "@/Assets/home/govtsupp/image copy 2.png";
import torontoArts from "@/Assets/home/govtsupp/image copy 3.png";
import cityToronto from "@/Assets/home/govtsupp/image copy 4.png";
import canada from "@/Assets/home/govtsupp/image copy 5.png";

const sponsors = [
	ontarioTrillium,
	ontarioCreates,
	factor,
	torontoArts,
	cityToronto,
	canada,
];

const GovernmentSupport = () => {
	return (
		<section className="w-full py-14 md:py-20 bg-transparent">
			<div className="max-w-7xl mx-auto px-4 sm:px-6">
				{/* Title */}
				<div className="flex items-center justify-center gap-4 md:gap-6 mb-10 md:mb-16">
					<div className="hidden sm:block flex-1 max-w-[120px] md:max-w-none h-[2px] rounded-full bg-white" />

					<h2
						className="font-[Oswald] font-medium text-white uppercase
        text-[28px] sm:text-[40px] md:text-[64px]
        leading-[36px] sm:leading-[50px] md:leading-[80px]
        text-center whitespace-nowrap"
					>
						Government Support
					</h2>

					<div className="hidden sm:block flex-1 max-w-[120px] md:max-w-none h-[2px] rounded-full bg-white" />
				</div>

				{/* Cards */}
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
					{sponsors.map((logo, index) => (
						<div
							key={index}
							className="
						  flex items-center justify-center
						  min-h-[110px] sm:min-h-[140px]
						  px-6 sm:px-10
						  bg-[#FFFFFF1F]
						  rounded-2xl sm:rounded-3xl
					  
						  transition-[border-radius]
						  duration-500
						  ease-in-out
					   delay-0
						  hover:rounded-[999px]
						"
						>
							<img
								src={logo}
								alt="Government Support Logo"
								className="max-h-12 sm:max-h-16 md:max-h-20 object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GovernmentSupport;
