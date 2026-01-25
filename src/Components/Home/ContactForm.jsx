import contactusimg from "@/Assets/home/Contact_us_bg.png";

const ContactForm = () => {
  return (
    <section className="relative w-full min-h-screen flex flex-col md:flex-row bg-transparent overflow-hidden">
      {/* IMAGE SECTION */}
      <div className="relative w-full h-[280px] md:h-auto md:basis-[40%]">
        <img
          src={contactusimg}
          alt="Crowd"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Gradient Overlay */}
        {/* Mobile Gradient — Bottom → Top */}
        {/* Mobile Vignette Overlay */}
        <div className="absolute inset-0 md:hidden pointer-events-none bg-gradient-to-b from-[#100422]/90 via-[#100422]/40 to-[#100422]/90" />

        {/* Desktop Gradient — Right → Left */}
        <div className="absolute inset-0 hidden md:block pointer-events-none bg-gradient-to-r from-[#100422]/30 to-[#100422]" />
      </div>

      {/* FORM SECTION */}
      <div className="relative w-full md:basis-[60%] flex items-center px-6 md:px-16 py-12 md:py-0">
        <div className="w-full max-w-xl text-white">
          <h2 className="text-6xl md:text-5xl font-[Oswald] font-medium uppercase">
            Contact Us
          </h2>

          <p className="mt-2 text-md text-gray-300 uppercase">
            Have an inquiry? We’ll be happy to assist you
          </p>

          <div className="w-24 h-[2px] bg-white my-6 hidden md:block" />

          <form className="space-y-6 md:mt-0 mt-5">
            <div>
              <label className="text-md">Name*</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-md">Work Email*</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-md">Message*</label>
              <textarea
                rows={3}
                placeholder="Type your message here"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none resize-none"
              />
            </div>

            <div className="flex items-start gap-3 text-md text-gray-300">
              <input type="checkbox" className="mt-1" />
              <span>
                I agree to be contacted about sponsorship opportunities
              </span>
            </div>

            <button
              type="submit"
              className="bg-neon-yellow text-black font-bold px-8 py-3 mt-4 hover:opacity-90 transition"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
