import { useState } from "react";

export default function ArtistSignupForm() {
  const events = [
    "Hip Hop Showcase",
    "DJ Showcase",
    "Desifest 2026",
    "She Rocks EP4",
  ];
  const genres = [
    "BOLLYWOOD",
    "HIP-HOP",
    "ROCK",
    "BHANGRA",
    "RnB",
    "PUNJABI",
    "TAMIL FUSION",
    "CARNATIC FUSION",
    "CLASSICAL (HINDUSTANI/CARNATIC)",
    "SUFI / FOLK",
    "OTHER",
  ];
  const [selected, setSelected] = useState(events[0]);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [email, setEmail] = useState("");
  const emailError =
    email.length > 0 && !email.includes("@") ? "Not a valid mailID" : "";

  return (
    <div className="w-full mx-auto bg-[#F6F3FA] p-6 md:p-10 text-[#100422]">
      {/* CHOOSE EVENT */}
      <div className="mb-8 flex flex-col md:flex-row gap-10 justify-start items-center">
        <div className="text-2xl text-[#100422] uppercase font-medium">
          Choose Your Event
        </div>

        <div className="flex flex-wrap gap-3">
          {events.map((item) => (
            <label
              key={item}
              className={
                "flex items-center gap-2 px-4 py-2 border-2 text-xs uppercase font-medium cursor-pointer transition " +
                (selected === item
                  ? "bg-light-lavender text-[#100422] border-[#100422]"
                  : "border-[#100422] text-[#100422]  hover:text-[#100422]")
              }
            >
              {/* Native radio for accessibility */}
              <input
                type="radio"
                name="event"
                value={item}
                checked={selected === item}
                onChange={() => setSelected(item)}
                className="hidden"
              />

              {/* Custom radio indicator */}
              <span
                className={
                  "w-3 h-3 rounded-full border flex items-center justify-center " +
                  (selected === item ? "border-[#100422]" : "border-[#100422]")
                }
              >
                {selected === item && (
                  <span className="w-1.5 h-1.5 rounded-full bg-[#100422]" />
                )}
              </span>

              {item}
            </label>
          ))}
        </div>
      </div>

      {/* BASIC INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
        <Input label="Name*" placeholder="" />
        <Input label="Last Name" placeholder="Enter your last name here" />

        <Input
          label="Work Email*"
          type="email"
          placeholder="abcd@gmail.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          error={emailError}
        />

        {/* Phone with country code selector */}
        <div className="flex flex-col gap-1">
          <label className="text-md text-[#100422]">Phone</label>

          <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
            <select className="bg-transparent text-sm text-[#100422] outline-none">
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>

            <span className="text-[#6F6486]">|</span>

            <input
              type="tel"
              placeholder="Enter your phone number here"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3] text-[#100422]"
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <label className="text-md text-[#100422]">Address</label>

          {/* Address line + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <Input placeholder="Address Line*" />
            <Input placeholder="Enter your City" />
          </div>

          {/* Province / Postal / Country */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4">
            <Input placeholder="Enter your Province" />
            <Input placeholder="Enter your Postal Code" />

            <div className="flex flex-col gap-1">
              <select className="bg-transparent border-b border-[#6F6486] py-2 text-sm text-[#9C92B3] outline-none">
                <option>Choose your country</option>
                <option>India</option>
                <option>United States</option>
                <option>United Kingdom</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      {/* SOCIAL MEDIA */}
      <SectionTitle text="Including your social media helps our team in the selection process" />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
        <Input label="Facebook" placeholder="https://" />
        <Input label="Youtube" placeholder="https://" />
        <Input label="TikTok" placeholder="https://" />
        <Input label="Instagram" placeholder="https://" />
        <Input label="Spotify" placeholder="https://" />
        <Input label="Personal Website" placeholder="https://" />
      </div>

      {/* GENRE */}
      <div className="mb-5">
        {/* GENRE */}
        <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-[#100422]">
          Genre
        </p>

        <div className="flex flex-wrap items-center max-w-5xl gap-3">
          {genres.map((genre) => (
            <button
              key={genre}
              type="button"
              onClick={() => setSelectedGenre(genre)}
              className={`px-4 py-2 border text-xs uppercase font-medium transition
        ${
          selectedGenre === genre
            ? "bg-light-lavender text-[#100422] border-[#100422]"
            : "border-[#100422] text-[#100422] hover:text-[#100422]"
        }`}
            >
              {genre}
            </button>
          ))}

          {/* OTHER FIELD – SAME LINE */}
          {selectedGenre === "OTHER" && (
            <input
              type="text"
              placeholder="OTHER :"
              className="
      w-full sm:w-60
      mt-2 sm:mt-0
      sm:ml-2
      border-b border-[#100422]
      bg-transparent py-2 text-sm
      placeholder:text-[#100422]
      focus:outline-none
    "
            />
          )}
        </div>
      </div>

      {/* PERFORMANCE INFO */}
      <div className="py-12">
        {/* ROW 1 */}
        <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-24 w-full">
          {/* Performance Language */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-[#100422] mb-3">
              Performance Language*
            </label>
            <input
              type="text"
              placeholder="Include each language and separate using.."
              className="w-full border-b border-[#100422] bg-transparent py-2 text-sm focus:outline-none placeholder:text-[#100422]/50"
            />
          </div>

          {/* Are you a band */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-[#100422] mb-3">
              Are You A Band?*
            </label>

            {/* buttons + helper text in SAME flex */}
            <div className="flex items-start justify-between gap-6">
              <div className="flex gap-4">
                <RadioButton label="YES" checked />
                <RadioButton label="NO" />
                <p className="text-xs text-[#100422]/60 max-w-xs">
                  If you have multiple instruments, you are a band.
                  <br />
                  If you perform with a DJ, you are a solo artist.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ROW 2 */}
        <div className="flex flex-col md:flex-row justify-between gap-y-10 gap-x-20 mt-14 w-full">
          {/* Previous DESIFEST */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-[#100422] mb-3">
              Have You Performed At A Previous DESIFEST?*
            </label>
            <div className="flex gap-4">
              <RadioButton label="YES" checked />
              <RadioButton label="NO" />
            </div>
          </div>

          {/* Type of performance */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-[#100422] mb-3">
              Type Of Performance?*
            </label>
            <div className="flex gap-4">
              <RadioButton label="SINGER/RAPPER" checked />
              <RadioButton label="DANCE" />
            </div>
          </div>

          {/* SOCAN / BMI */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-[#100422] mb-3">
              Registered for SOCAN or BMI?*
            </label>
            <div className="flex gap-4">
              <RadioButton label="YES" checked />
              <RadioButton label="NO" />
            </div>
          </div>
        </div>
      </div>

      {/* MANAGER */}
      <SectionTitle text="Do you have a Manager?" />

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          {/* Name */}
          <Input label="Name*" placeholder="" />

          {/* Last Name */}
          <Input label="Last Name" placeholder="Enter your last name here" />

          {/* Manager Email */}
          <Input
            label="Manager Email*"
            type="email"
            placeholder="abcd@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError} // shows red error text
          />

          {/* Manager Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-[#100422]">
              Manager Phone Number*
            </label>

            <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
              <select className="bg-transparent text-sm text-[#100422] outline-none">
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <span className="text-[#6F6486]">|</span>

              <input
                type="tel"
                placeholder="Enter your phone number here"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3] text-[#100422]"
              />
            </div>
          </div>

          {/* Past Performance Links */}
          <Input label="Past Performance Links 1*" placeholder="https://" />

          <Input label="Past Performance Links 2*" placeholder="https://" />

          <Input label="Past Performance Links 3*" placeholder="https://" />

          <Input label="Past Performance Links 4*" placeholder="https://" />
        </div>
      </div>

      <label className="flex items-center py-10">
        <input
          type="checkbox"
          className="mr-2 w-4 h-4 text-[#100422] border-gray-300 rounded "
        />
        I agree to be contacted about sponsorship opportunities
      </label>

      {/* AGREEMENT */}
      <div className="flex flex-col gap-2 mb-10">
        <label className="text-lg text-[#100422] font-medium">
          If you have any ideas on your set to help us put on a fantastic show,
          do share them here.
        </label>

        <textarea
          rows={2}
          placeholder=""
          className="
      w-full
      bg-transparent
      border-b
      border-[#6F6486]
      resize-none
      text-sm
      text-[#100422]
      outline-none
      placeholder:text-[#9C92B3]
      py-2
    "
        />
      </div>

      {/* SUBMIT */}
      <button className="bg-neon-yellow p-3 text-xl font-bold uppercase transition shadow-md">
        Submit
      </button>

      <div className="py-10 font-medium text-[#100422] text-xl">
        Join our mailing list to learn about upcoming gigs, grants and workshops
        to help your music aspirations thrive.
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

const RadioButton = ({ label, checked = false }) => {
  return (
    <button
      type="button"
      className={`flex items-center gap-2 px-4 py-2 border text-xs font-semibold uppercase transition
        ${
          checked
            ? "bg-light-lavender border-[#100422] text-[#100422]"
            : "border-[#100422] text-[#100422]"
        }`}
    >
      <span
        className={`w-3 h-3 rounded-full border border-[#100422] flex items-center justify-center`}
      >
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-[#100422]" />}
      </span>
      {label}
    </button>
  );
};

function Input({ label, placeholder, error, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-md text-[#100422]">{label}</label>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "bg-transparent border-b text-sm outline-none py-2 placeholder:text-[#9C92B3] text-[#100422] " +
          (error ? "border-red-500" : "border-[#6F6486]")
        }
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

function Select({ label, options }) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-wide mb-1">
        {label}
      </label>
      <select className="w-full border-b border-[#100422] bg-transparent py-2 text-sm focus:outline-none">
        {options.map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>
    </div>
  );
}

function SectionTitle({ text }) {
  return (
    <p className="md:text-xl text-[#100422] md:font-medium uppercase mb-4">
      {text}
    </p>
  );
}
