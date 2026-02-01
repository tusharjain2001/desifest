import TestimonialCarousel from "@/Components/About/Testimonial";
import MissionStatement from "@/Components/Media/MissionStatement";
import OfficialLogos from "@/Components/Media/OfficialLogos";
import PeopleOfContact from "@/Components/Media/PeopleOfContact";
import PopularCaseStudies from "@/Components/Media/PopularCaseStudies";

const PressKitPage = () => {
  return (
    <div>
      <MissionStatement />
      <PopularCaseStudies />
      <PeopleOfContact />
      <OfficialLogos />
      <TestimonialCarousel />
    </div>
  );
};
export default PressKitPage;