import HeroSection from "@/Components/Home/HeroSection";
import GovernmentSupport from "@/Components/Home/GovernmentSupport";
import PartnerSupport from "@/Components/Home/PartnerSupport";
import ContactForm from "@/Components/Home/ContactForm";
import backgroung1 from "@/Assets/home/background_1.png";

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
        linear-gradient(to left, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0) 55%),
        linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 60%)
      `,
					}}
				/>
			</div>

			{/* DESIGN CANVAS (1440px) */}
			<div className="relative z-20 mx-auto max-w-[1600px] px-6">
				{/* OPTIONAL: left spacing for vertical navbar */}
				<div className="lg:ml-18">
					<HeroSection />
					<GovernmentSupport />
					<PartnerSupport />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
