import { useState } from "react";
import contactusimg from "@/Assets/home/Contact_us_bg.png";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    consent: false,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      alert("Please fill all required fields");
      return;
    }

    try {
      setLoading(true);

      const res = await fetch(
        "https://desifest-backend.vercel.app/api/send-contact-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.error || "Something went wrong");
      }

      alert("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
        consent: false,
      });
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative w-full min-h-screen flex flex-col md:flex-row bg-transparent overflow-hidden"
    >
      {/* IMAGE SECTION */}
      <div className="relative w-full h-70 md:h-auto md:basis-[40%]">
        <img
          src={contactusimg}
          alt="Crowd"
          className="absolute inset-0 sm:w-full sm:h-full object-cover"
        />

        {/* Mobile Gradient */}
        <div className="absolute inset-0 md:hidden -bottom-10 pointer-events-none bg-gradient-to-b from-[#100422]/90 via-[#100422]/40 to-[#100422]/90" />

        {/* Desktop Gradient */}
        <div className="absolute inset-0 hidden md:block pointer-events-none bg-gradient-to-r from-[#100422]/30 to-[#100422]" />
      </div>

      {/* FORM SECTION */}
      <div className="relative w-full md:basis-[60%] flex items-center px-6 md:px-16 py-12 md:py-0">
        <div className="w-full max-w-xl text-white">
          <h2 className="text-6xl md:text-5xl font-[Oswald] font-bold uppercase">
            Contact Us
          </h2>

          <p className="mt-2 text-md text-gray-300 uppercase">
            Have an inquiry? We’ll be happy to assist you
          </p>

          <div className="w-24 h-[2px] bg-white my-6 hidden md:block" />

          <form className="space-y-6 md:mt-0 mt-5" onSubmit={handleSubmit}>
            <div>
              <label className="text-md">Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-md">Work Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none focus:border-white"
              />
            </div>

            <div>
              <label className="text-md">Message*</label>
              <textarea
                rows={3}
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Type your message here"
                className="w-full bg-transparent border-b border-white/40 py-2 outline-none resize-none"
              />
            </div>

            <div className="flex items-start gap-3 text-md text-gray-300">
              <input
                type="checkbox"
                name="consent"
                checked={formData.consent}
                onChange={handleChange}
                className="mt-1"
              />
              <span>
                I agree to be contacted about sponsorship opportunities
              </span>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="bg-neon-yellow text-black oswaldd text-[28px] font-medium px-8 py-3 mt-4 hover:opacity-90 transition disabled:opacity-50"
            >
              {loading ? "SENDING..." : "SUBMIT"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
