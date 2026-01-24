import contactusimg from "@/Assets/home/Contact_us_bg.png";

const ContactForm = () => {
  return (
    <section className="relative w-full min-h-screen flex bg-transparent overflow-hidden">
      {/* LEFT IMAGE – 40% */}
      <div className="relative hidden md:block basis-[40%]">
        <img
          src={contactusimg}
          alt="Crowd"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(90deg, rgb(16 4 34 / 32%) 13.64%, rgb(16, 4, 34) 99.85%)",
          }}
        />
      </div>

      {/* RIGHT FORM – 60% */}
      <div className="relative w-full md:basis-[60%] flex items-center px-6 md:px-16">
        <div className="w-full max-w-xl text-white">
          <h2 className="text-5xl md:text-4xl font-[Oswald] font-medium uppercase">
            Contact Us
          </h2>
          <p className="mt-2 text-sm text-gray-300 uppercase">
            Have an inquiry? We’ll be happy to assist you
          </p>

          <div className="w-24 h-[2px] bg-white my-6" />

          <form className="space-y-6">
            <div>
              <label className="text-sm">Name*</label>
              <input
                type="text"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-sm">Work Email*</label>
              <input
                type="email"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-sm">Message*</label>
              <textarea
                rows={3}
                placeholder="Type your message here"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none resize-none"
              />
            </div>

            <div className="flex items-start gap-3 text-sm text-gray-300">
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
