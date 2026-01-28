import VerticalNavbar from "@/Components/Layout/VerticalNavbar";
import backgroung1 from "@/Assets/community/image.png";
import Hero from "@/Components/Community/Hero";
import ContactForm from "@/Components/Home/ContactForm";
import YearRoundProgram from "@/Components/Community/YearRoundProgram";
import bgimg from "@/Assets/about/background.png";

const CommunityPage = () => {
	return (
		<div className="relative min-h-screen h-full overflow-clip w-full">
			<VerticalNavbar />
			{/* BACKGROUND */}
			<div className="absolute inset-0 h-220">
				<img
					src={backgroung1}
					alt="background"
					className="absolute inset-0 w-full h-full object-cover "
				/>
			</div>

			<div className="z-20 mx-auto px-2 flex flex-col w-full items-center">
				<div className="w-full sm:pl-22">
					<Hero />
					<YearRoundProgram />
					<div className="relative w-full py-20 krona-one-regular ">
						<style>
							{`
      @keyframes marquee-ltr {
        0% { transform: translateX(-25%); }
        100% { transform: translateX(25%); }
      }

      @keyframes marquee-rtl {
        0% { transform: translateX(25%); }
        100% { transform: translateX(-25%); }
      }
    `}
						</style>

						{/* FRONT RIBBON — LEFT ➜ RIGHT */}
						<div className="absolute w-full h-12 bg-[#C6B7DD] -rotate-3 z-10 overflow-hidden flex items-center">
							<div
								className="flex w-max"
								style={{
									animation:
										"marquee-ltr 18s linear infinite",
								}}
							>
								{Array.from({ length: 8 }).map((_, i) => (
									<span
										key={i}
										className="whitespace-nowrap px-6 text-xl  text-[#1A102A]"
									>
										Canada’s #1 South Asian music festival
										Toronto’s iconic Sankofa Square ·
									</span>
								))}
							</div>
						</div>

						{/* BACK RIBBON — RIGHT ➜ LEFT */}
						<div className="absolute w-full h-12 bg-[#453361] rotate-3 z-0 overflow-hidden flex items-center">
							<div
								className="flex w-max"
								style={{
									animation:
										"marquee-rtl 18s linear infinite",
								}}
							>
								{Array.from({ length: 8 }).map((_, i) => (
									<span
										key={i}
										className="whitespace-nowrap px-6 text-xl text-white"
									>
										Toronto’s iconic Sankofa Square ·
										Canada’s #1 South Asian music festival ·
									</span>
								))}
							</div>
						</div>
					</div>
					<img src={bgimg} alt="" className="my-12"/>

					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default CommunityPage;
