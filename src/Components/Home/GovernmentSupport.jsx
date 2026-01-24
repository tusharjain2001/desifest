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
		<section className="w-full py-20 bg-transparent">
			<div className="max-w-7xl mx-auto px-6">
				{/* Title */}
				<div className="flex items-center justify-center gap-6 mb-16">
					<div className="hidden md:block flex-1  h-1 rounded-full bg-white" />
					<h2 className="font-[Oswald] font-medium text-white uppercase text-[40px] md:text-[64px] leading-[50px] md:leading-[80px]">
						Government Support
					</h2>
					<div className="hidden md:block flex-1  h-1 rounded-full bg-white" />
				</div>

				{/* Cards */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
					{sponsors.map((logo, index) => (
						<div
							key={index}
							className="
             flex items-center justify-center
             min-h-[150px]
             px-10
             bg-[#FFFFFF1F]
             rounded-3xl
             transition-[border-radius,transform]
duration-100
ease-[cubic-bezier(0.4,0,0.2,1)]

             hover:rounded-full
             hover:scale-[1.02]
           "
						>
							<img
								src={logo}
								alt="Government Support Logo"
								className="max-h-20 object-contain"
							/>
						</div>
					))}
				</div>
			</div>
		</section>
	);
};

export default GovernmentSupport;
