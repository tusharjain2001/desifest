import { useState } from "react";

export default function VolunteerSignupForm() {
  const genres = [
    "June 19th (Afternoon / Evening)",
    "June 20th (Morning)",
    "June 20th (Afternoon – Evening)",
    "General Volunteering",
    "SKILL BASED VOLUNTEERING (eg. sponshorship, planning, media, activation)",
  ];

  const [selectedGenre, setSelectedGenre] = useState("");
  const [email, setEmail] = useState("");
  const emailError =
    email.length > 0 && !email.includes("@") ? "Not a valid mailID" : "";

  return (
    <div className="w-full mx-auto  p-6 md:p-10 text-[#100422]">
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
          <label className="text-sm text-[#100422]">Phone</label>

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
          <label className="text-sm text-[#100422]">Address</label>

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
            ? "bg-white text-[#100422] border-[#100422]"
            : "border-[#100422] text-[#100422] hover:text-[#100422]"
        }`}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>

      {/* AGREEMENT */}
      <div className="flex flex-col gap-2 mb-10 mt-10">
        <label className="text-md text-[#100422]">
          How Can You Help? <br/> Please share a little about yourself, any past
          volunteer experience (including with us) and what skills or
          experiences can you bring to our shows this year.
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

      <div className="flex flex-col gap-2 mb-10">
        <label className="text-md text-[#100422]">
          How Can We Help You?<br/> What experiences are you looking to achieve while
          working with DESIFEST?
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

      <label className="flex items-center py-10">
        <input
          type="checkbox"
          className="mr-2 w-4 h-4 text-[#100422] border-gray-300 rounded "
        />
        I agree to be contacted about sponsorship opportunities
      </label>

      {/* SUBMIT */}
      <button className="bg-neon-yellow p-3 text-xl font-bold uppercase transition shadow-md">
        Submit
      </button>

      <div className="py-10 font-medium text-[#100422] text-xl">
        We appreciate your interest and frankly, DESIFEST is a community project
        and volunteers like you have made it possible for the past 18 years. If
        you are not not already following us, please follow us on Instagram
        @desifestmusic or on FB to stay updated on all activities this year.
      </div>
    </div>
  );
}

/* ---------- Reusable Components ---------- */

function Input({ label, placeholder, error, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-sm text-[#100422]">{label}</label>}

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
