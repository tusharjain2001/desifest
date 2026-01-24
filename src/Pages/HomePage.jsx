import HeroSection from "@/Components/Home/HeroSection";
import GovernmentSupport from "@/Components/Home/GovernmentSupport";
import PartnerSupport from "@/Components/Home/PartnerSupport";
import ContactForm from "@/Components/Home/ContactForm";
import backgroung1 from "@/Assets/home/background_1.png";

const HomePage = () => {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Background */}
      <img
        src={backgroung1}
        alt="background"
        className="absolute inset-0 w-full h-screen object-cover opacity-[0.16]"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(324deg, #000000 -0.34%, rgba(0, 0, 0, 0) 56.45%)",
        }}
      />

      {/* Page Content */}
      <div className="relative z-10 ml-24">
        <HeroSection />
        <GovernmentSupport />
        <PartnerSupport />
        <ContactForm />
      </div>
    </div>
  );
};

export default HomePage;
