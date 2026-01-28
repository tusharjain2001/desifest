import { useOutletContext } from "react-router-dom";

import HeroSection from "@/Components/Home/HeroSection";
import GovernmentSupport from "@/Components/Home/GovernmentSupport";
import PartnerSupport from "@/Components/Home/PartnerSupport";
import ContactForm from "@/Components/Home/ContactForm";
import backgroung1 from "@/Assets/home/background_1.png";
import Animation from "@/Components/Home/Animation";
import Shop from "@/Components/Home/Shop.jsx";
import BlogsAndMedia from "@/Components/Home/BlogandMedia";
import Community from "@/Components/Home/Community";
import VerticalNavbar from "@/Components/Layout/VerticalNavbar";

const HomePage = () => {
	// 👇 GET SCROLL FROM MAINLAYOUT
	const { scrollRef, scrollY } = useOutletContext();

	return (
		<div className="relative min-h-screen h-full overflow-clip w-full">
			<VerticalNavbar />
			{/* BACKGROUND */}
			<div className="absolute inset-0 h-220">
				<img
					src={backgroung1}
					alt="background"
					className="absolute inset-0 w-full h-full object-cover opacity-[0.16]"
				/>

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

			<div className="z-20 mx-auto px-2 flex flex-col w-full items-center">
				<div className="w-full sm:pl-22">
					<HeroSection />

					{/* 👇 PASS SCROLL TO ANIMATION */}
					<Animation scrollY={scrollY} scrollRef={scrollRef} />

					<Community />
					<GovernmentSupport />
					<PartnerSupport />
					<BlogsAndMedia />
					<Shop />
					<ContactForm />
				</div>
			</div>
		</div>
	);
};

export default HomePage;
