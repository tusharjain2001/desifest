import HeroSection from "@/Components/Home/HeroSection";
import GovernmentSupport from "@/Components/Home/GovernmentSupport";
import PartnerSupport from "@/Components/Home/PartnerSupport";
import ContactForm from "@/Components/Home/ContactForm";
import backgroung1 from "@/Assets/home/background_1.png";
import Animation from "@/Components/Home/Animation";
import Shop from "@/Components/Home/Shop.jsx";
import BlogsAndMedia from "@/Components/Home/BlogandMedia";
import Community from "@/Components/Home/Community";

const HomePage = () => {
	return (
		<div className="relative min-h-screen w-full overflow-hidden">
			{/* BACKGROUND (FULL WIDTH) */}
			<div className="absolute inset-0 h-220">
				{/* BACKGROUND IMAGE */}
				<img
					src={backgroung1}
					alt="background"
					className="absolute inset-0 w-full h-full object-cover opacity-[0.16]"
				/>

				{/* COMBINED GRADIENT (RIGHT → LEFT + BOTTOM → TOP) */}
				<div
					className="absolute inset-0 pointer-events-none"
					style={{
						background: `
      linear-gradient(
        to left,
        rgba(16, 4, 34, 0.8) 0%,
        rgba(16, 4, 34, 0) 55%
      ),
      linear-gradient(
        to top,
        rgba(16, 4, 34, 0.9) 0%,
        rgba(16, 4, 34, 0) 60%
      )
    `,
					}}
				/>
			</div>

			{/* DESIGN CANVAS (1440px) */}
			<div className=" z-20 mx-auto  px-6 flex flex-col items-center">
				{/* OPTIONAL: left spacing for vertical navbar */}
				<div className="">
					<HeroSection />
					<Animation />
					<Community />
					<GovernmentSupport />
					<PartnerSupport />
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

					<BlogsAndMedia />
					<Shop />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
