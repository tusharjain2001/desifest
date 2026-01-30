import partner1 from "@/Assets/home/partnersupp/image.png";
import partner2 from "@/Assets/home/partnersupp/image copy.png";
import partner3 from "@/Assets/home/partnersupp/image copy 2.png";
import partner4 from "@/Assets/home/partnersupp/image copy 3.png";
import partner5 from "@/Assets/home/partnersupp/image copy 4.png";
import partner6 from "@/Assets/home/partnersupp/image copy 5.png";

const partners = [partner1, partner2, partner3, partner4, partner5, partner6];

const PartnerSupport = () => {
	return (
		<section className="w-full py-20 md:px-4 bg-transparent">
			
				{/* Title */}
				<div className="flex items-center justify-center gap-1 mb-10 md:mb-16">
					<div className=" flex-1  h-[3px] rounded-full bg-white" />

					<h2
						className="font-[Oswald] font-medium text-white uppercase
        text-[24px] sm:text-[40px] md:text-[64px]
        leading-[36px] sm:leading-[50px] md:leading-[80px]
        text-center whitespace-nowrap"
					>
						Partners & Sponsors
					</h2>

					<div className=" flex-1 h-[3px] rounded-full bg-white" />
				</div>

				{/* Cards */}
				<div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-10">
					{partners.map((logo, index) => (
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
            hover:rounded-[80px]
          "
						>
							<img
								src={logo}
								alt="Partner Logo"
								className="max-h-20 object-contain"
							/>
						</div>
					))}
				</div>
			
		</section>
	);
};

export default PartnerSupport;
