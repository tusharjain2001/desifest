import TestimonialCarousel from "@/Components/About/Testimonial";
import MissionStatement from "@/Components/Media/MissionStatement";
import OfficialLogos from "@/Components/Media/OfficialLogos";
import PeopleOfContact from "@/Components/Media/PeopleOfContact";

const MediaPage = () => {
  return (
    <div>
      <MissionStatement />
      <PeopleOfContact />
      <OfficialLogos />
      <TestimonialCarousel />
    </div>
  );
};

export default MediaPage;