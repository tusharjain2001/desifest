import Hero from "@/Components/About/Hero";
import OurTeam from "@/Components/About/OurTeam";
import Testimonial from "@/Components/About/Testimonial";
import ContactForm from "@/Components/Home/ContactForm";

const AbooutPage = () => {
  return (
    <div className="md:ml-24">
      <Hero />
      <OurTeam />
      <Testimonial />
      <ContactForm />
    </div>
  );
};

export default AbooutPage;