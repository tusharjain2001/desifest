import partner1 from "@/Assets/home/partnersupp/image.png";
import partner2 from "@/Assets/home/partnersupp/image copy.png";
import partner3 from "@/Assets/home/partnersupp/image copy 2.png";
import partner4 from "@/Assets/home/partnersupp/image copy 3.png";
import partner5 from "@/Assets/home/partnersupp/image copy 4.png";
import partner6 from "@/Assets/home/partnersupp/image copy 5.png";

const partners = [
  partner1,
  partner2,
  partner3,
  partner4,
  partner5,
  partner6,
];

const PartnerSupport = () => {
  return (
    <section className="w-full py-20 bg-transparent">
      <div className="max-w-7xl mx-auto px-6">
        {/* Title */}
        <div className="flex items-center justify-center gap-6 mb-16">
          <div className="hidden md:block flex-1 h-1 rounded-full bg-white" />
          <h2 className="font-[Oswald] font-medium text-white uppercase text-[40px] md:text-[64px] leading-[50px] md:leading-[80px]">
            Partners & Sponsors
          </h2>
          <div className="hidden md:block flex-1 h-1 rounded-full bg-white" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {partners.map((logo, index) => (
            <div
            key={index}
            className="
           flex items-center justify-center
           min-h-[150px]
           px-10
           bg-[#FFFFFF1F]
           rounded-3xl
           transition-[border-radius,transform]
duration-100
ease-[cubic-bezier(0.4,0,0.2,1)]

           hover:rounded-full
           hover:scale-[1.02]
         "
          >
              <img
                src={logo}
                alt="Partner Logo"
                className="max-h-20 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnerSupport;
