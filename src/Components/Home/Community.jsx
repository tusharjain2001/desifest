import CommunityCard from "./CommunityCard";

import img1 from "@/Assets/home/Community/image.png";
import img2 from "@/Assets/home/Community/image.png";
import img3 from "@/Assets/home/Community/image.png";

const Community = () => {
	return (
		<section className="w-screen py-24 bg-transparent">
			<div className="w-full">
				<div
					className="
  text-white
  uppercase
  oswald
  flex items-center gap-3 sm:gap-4
  mb-4
w-full
  text-3xl
  sm:text-4xl
  md:text-5xl
"
				>
					<span className="whitespace-nowrap">Community</span>

					<div
						className="
      
      flex-1
      h-[2px]
      sm:h-[3px]
      rounded-full
      bg-white
    "
					/>
				</div>

				<div
					className="
    flex gap-16
    p-4
    pr-8
    overflow-x-auto
    snap-x snap-mandatory
    sm:overflow-visible
    sm:snap-none
    sm:flex-row
    flex-col
    justify-start
    sm:justify-center
    items-center
  "
				>
					<CommunityCard image={img1} title="Year-Round Program" />

					<CommunityCard
						image={img2}
						title="Open - Mic"
						description="Canada’s largest South Asian music and arts festival—uniting generations, genres, and voices on one iconic stage."
					/>

					<CommunityCard image={img3} title="Sofa Sessions" />
				</div>
			</div>
		</section>
	);
};

export default Community;
