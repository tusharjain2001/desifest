import VerticalNavbar from "@/Components/Layout/VerticalNavbar";
import backgroung1 from "@/Assets/community/image.png";
import Hero from "@/Components/Community/Hero";

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
				</div>
			</div>
		</div>
	);
};

export default CommunityPage;
