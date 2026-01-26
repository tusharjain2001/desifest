import CommunityCard from "./CommunityCard";

import img1 from "@/Assets/home/Community/image.png";
import img2 from "@/Assets/home/Community/image.png";
import img3 from "@/Assets/home/Community/image.png";

const Community = () => {
  return (
    <section className="w-full py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-white text-5xl uppercase flex flex-row items-center  oswald-heading gap-4 mb-4">
          Community
          <div className="hidden sm:block flex-1 max-w-[120px] md:max-w-none h-[3px]  rounded-full bg-white" />
        </div>
        

        <div className="flex justify-center items-center gap-20">
          <CommunityCard
            image={img1}
            title="Year-Round Program"
          />

          <CommunityCard
            image={img2}
            title="Open Mic"
            description="Canada’s largest South Asian music and arts festival—uniting generations, genres, and voices on one iconic stage."
          />

          <CommunityCard
            image={img3}
            title="Sofa Sessions"
          />
        </div>
      </div>
    </section>
  );
};

export default Community;
