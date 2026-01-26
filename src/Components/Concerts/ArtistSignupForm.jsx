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

  // Form state
  const [selected, setSelected] = useState(events[0]);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneCode, setPhoneCode] = useState("+91");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const [country, setCountry] = useState("");

  const [facebook, setFacebook] = useState("");
  const [youtube, setYoutube] = useState("");
  const [instagram, setInstagram] = useState("");
  const [tiktok, setTiktok] = useState("");
  const [spotify, setSpotify] = useState("");
  const [website, setWebsite] = useState("");

  const [selectedGenre, setSelectedGenre] = useState("");
  const [otherGenre, setOtherGenre] = useState("");

  const [performanceLanguage, setPerformanceLanguage] = useState("");
  const [isBand, setIsBand] = useState("YES");
  const [performedBefore, setPerformedBefore] = useState("YES");
  const [performanceType, setPerformanceType] = useState("SINGER/RAPPER");
  const [socanRegistered, setSocanRegistered] = useState("YES");

  const [managerFirstName, setManagerFirstName] = useState("");
  const [managerLastName, setManagerLastName] = useState("");
  const [managerEmail, setManagerEmail] = useState("");
  const [managerPhoneCode, setManagerPhoneCode] = useState("+91");
  const [managerPhone, setManagerPhone] = useState("");

  const [pastLink1, setPastLink1] = useState("");
  const [pastLink2, setPastLink2] = useState("");
  const [pastLink3, setPastLink3] = useState("");
  const [pastLink4, setPastLink4] = useState("");

  const [ideas, setIdeas] = useState("");
  const [consent, setConsent] = useState(false);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");

  const emailError =
    email.length > 0 && !email.includes("@") ? "Not a valid mailID" : "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!firstName || !email || !selected) {
      setSubmitMessage("Please fill in all required fields");
      return;
    }

    setIsSubmitting(true);
    setSubmitMessage("");

    const pastLinks = [pastLink1, pastLink2, pastLink3, pastLink4].filter(
      (link) => link.trim() !== "",
    );

    const formData = {
      event: selected,
      firstName,
      lastName,
      email,
      phoneCode,
      phone,
      address,
      city,
      province,
      postalCode,
      country,
      facebook,
      youtube,
      instagram,
      tiktok,
      spotify,
      website,
      genre: selectedGenre,
      otherGenre,
      performanceLanguage,
      isBand,
      performedBefore,
      performanceType,
      socanRegistered,
      managerFirstName,
      managerLastName,
      managerEmail,
      managerPhoneCode,
      managerPhone,
      pastLinks,
      ideas,
      consent,
    };

    try {
      const response = await fetch(
        "https://desifest-backend.vercel.app/api/send-volunteer-email",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const data = await response.json();

      if (response.ok) {
        setSubmitMessage("✓ Application submitted successfully!");
        // Reset form
        setFirstName("");
        setLastName("");
        setEmail("");
        setPhone("");
        setAddress("");
        setCity("");
        setProvince("");
        setPostalCode("");
        setCountry("");
        setFacebook("");
        setYoutube("");
        setInstagram("");
        setTiktok("");
        setSpotify("");
        setWebsite("");
        setSelectedGenre("");
        setOtherGenre("");
        setPerformanceLanguage("");
        setManagerFirstName("");
        setManagerLastName("");
        setManagerEmail("");
        setManagerPhone("");
        setPastLink1("");
        setPastLink2("");
        setPastLink3("");
        setPastLink4("");
        setIdeas("");
        setConsent(false);
      } else {
        setSubmitMessage(`✗ Error: ${data.error || "Submission failed"}`);
      }
    } catch (error) {
      setSubmitMessage("✗ Network error. Please try again.");
      console.error("Submit error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full mx-auto bg-[#F6F3FA] p-6 md:p-10 text-blue-black"
    >
      {/* CHOOSE EVENT */}
      <div className="mb-8 flex flex-col md:flex-row gap-10 justify-start items-center">
        <div className="text-2xl text-blue-black uppercase font-medium">
          Choose Your Event
        </div>

        <div className="flex flex-wrap gap-3">
          {events.map((item) => (
            <label
              key={item}
              className={
                "flex items-center gap-2 px-4 py-2 border-2 text-xs uppercase font-medium cursor-pointer transition " +
                (selected === item
                  ? "bg-light-lavender text-blue-black border-blue-black"
                  : "border-blue-black text-blue-black  hover:text-blue-black")
              }
            >
              <input
                type="radio"
                name="event"
                value={item}
                checked={selected === item}
                onChange={() => setSelected(item)}
                className="hidden"
              />

              <span
                className={
                  "w-3 h-3 rounded-full border flex items-center justify-center " +
                  (selected === item ? "border-blue-black" : "border-blue-black")
                }
              >
                {selected === item && (
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-black" />
                )}
              </span>

              {item}
            </label>
          ))}
        </div>
      </div>

      {/* BASIC INFO */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mb-10">
        <Input
          label="Name*"
          placeholder=""
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <Input
          label="Last Name"
          placeholder="Enter your last name here"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />

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
          <label className="text-md text-blue-black">Phone</label>

          <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
            <select
              className="bg-transparent text-sm text-blue-black outline-none"
              value={phoneCode}
              onChange={(e) => setPhoneCode(e.target.value)}
            >
              <option>+91</option>
              <option>+1</option>
              <option>+44</option>
            </select>

            <span className="text-[#6F6486]">|</span>

            <input
              type="tel"
              placeholder="Enter your phone number here"
              className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3] text-blue-black"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="md:col-span-2 flex flex-col gap-4">
          <label className="text-md text-blue-black">Address</label>

          {/* Address line + City */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-4">
            <Input
              placeholder="Address Line*"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Input
              placeholder="Enter your City"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          {/* Province / Postal / Country */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-10 gap-y-4">
            <Input
              placeholder="Enter your Province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
            />
            <Input
              placeholder="Enter your Postal Code"
              value={postalCode}
              onChange={(e) => setPostalCode(e.target.value)}
            />

            <div className="flex flex-col gap-1">
              <select
                className="bg-transparent border-b border-[#6F6486] py-2 text-sm text-[#9C92B3] outline-none"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              >
                <option value="">Choose your country</option>
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
        <Input
          label="Facebook"
          placeholder="https://"
          value={facebook}
          onChange={(e) => setFacebook(e.target.value)}
        />
        <Input
          label="Youtube"
          placeholder="https://"
          value={youtube}
          onChange={(e) => setYoutube(e.target.value)}
        />
        <Input
          label="TikTok"
          placeholder="https://"
          value={tiktok}
          onChange={(e) => setTiktok(e.target.value)}
        />
        <Input
          label="Instagram"
          placeholder="https://"
          value={instagram}
          onChange={(e) => setInstagram(e.target.value)}
        />
        <Input
          label="Spotify"
          placeholder="https://"
          value={spotify}
          onChange={(e) => setSpotify(e.target.value)}
        />
        <Input
          label="Personal Website"
          placeholder="https://"
          value={website}
          onChange={(e) => setWebsite(e.target.value)}
        />
      </div>

      {/* GENRE */}
      <div className="mb-5">
        <p className="text-sm font-semibold uppercase tracking-widest mb-4 text-blue-black">
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
            ? "bg-light-lavender text-blue-black border-blue-black"
            : "border-blue-black text-blue-black hover:text-blue-black"
        }`}
            >
              {genre}
            </button>
          ))}

          {selectedGenre === "OTHER" && (
            <input
              type="text"
              placeholder="OTHER :"
              value={otherGenre}
              onChange={(e) => setOtherGenre(e.target.value)}
              className="
      w-full sm:w-60
      mt-2 sm:mt-0
      sm:ml-2
      border-b border-blue-black
      bg-transparent py-2 text-sm
      placeholder:text-blue-black
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
            <label className="block text-sm font-semibold text-blue-black mb-3">
              Performance Language*
            </label>
            <input
              type="text"
              placeholder="Include each language and separate using.."
              className="w-full border-b border-blue-black bg-transparent py-2 text-sm focus:outline-none placeholder:text-blue-black/50"
              value={performanceLanguage}
              onChange={(e) => setPerformanceLanguage(e.target.value)}
            />
          </div>

          {/* Are you a band */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-blue-black mb-3">
              Are You A Band?*
            </label>

            <div className="flex items-start justify-between gap-6">
              <div className="flex gap-4">
                <RadioButton
                  label="YES"
                  checked={isBand === "YES"}
                  onClick={() => setIsBand("YES")}
                />
                <RadioButton
                  label="NO"
                  checked={isBand === "NO"}
                  onClick={() => setIsBand("NO")}
                />
                <p className="text-xs text-blue-black/60 max-w-xs">
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
            <label className="block text-sm font-semibold text-blue-black mb-3">
              Have You Performed At A Previous DESIFEST?*
            </label>
            <div className="flex gap-4">
              <RadioButton
                label="YES"
                checked={performedBefore === "YES"}
                onClick={() => setPerformedBefore("YES")}
              />
              <RadioButton
                label="NO"
                checked={performedBefore === "NO"}
                onClick={() => setPerformedBefore("NO")}
              />
            </div>
          </div>

          {/* Type of performance */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-blue-black mb-3">
              Type Of Performance?*
            </label>
            <div className="flex gap-4">
              <RadioButton
                label="SINGER/RAPPER"
                checked={performanceType === "SINGER/RAPPER"}
                onClick={() => setPerformanceType("SINGER/RAPPER")}
              />
              <RadioButton
                label="DANCE"
                checked={performanceType === "DANCE"}
                onClick={() => setPerformanceType("DANCE")}
              />
            </div>
          </div>

          {/* SOCAN / BMI */}
          <div className="flex-1">
            <label className="block text-sm font-semibold text-blue-black mb-3">
              Registered for SOCAN or BMI?*
            </label>
            <div className="flex gap-4">
              <RadioButton
                label="YES"
                checked={socanRegistered === "YES"}
                onClick={() => setSocanRegistered("YES")}
              />
              <RadioButton
                label="NO"
                checked={socanRegistered === "NO"}
                onClick={() => setSocanRegistered("NO")}
              />
            </div>
          </div>
        </div>
      </div>

      {/* MANAGER */}
      <SectionTitle text="Do you have a Manager?" />

      <div className="mb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6">
          <Input
            label="Name*"
            placeholder=""
            value={managerFirstName}
            onChange={(e) => setManagerFirstName(e.target.value)}
          />

          <Input
            label="Last Name"
            placeholder="Enter your last name here"
            value={managerLastName}
            onChange={(e) => setManagerLastName(e.target.value)}
          />

          <Input
            label="Manager Email*"
            type="email"
            placeholder="abcd@gmail.com"
            value={managerEmail}
            onChange={(e) => setManagerEmail(e.target.value)}
          />

          {/* Manager Phone */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-blue-black">
              Manager Phone Number*
            </label>

            <div className="flex items-center gap-2 border-b border-[#6F6486] py-2">
              <select
                className="bg-transparent text-sm text-blue-black outline-none"
                value={managerPhoneCode}
                onChange={(e) => setManagerPhoneCode(e.target.value)}
              >
                <option>+91</option>
                <option>+1</option>
                <option>+44</option>
              </select>

              <span className="text-[#6F6486]">|</span>

              <input
                type="tel"
                placeholder="Enter your phone number here"
                className="flex-1 bg-transparent text-sm outline-none placeholder:text-[#9C92B3] text-blue-black"
                value={managerPhone}
                onChange={(e) => setManagerPhone(e.target.value)}
              />
            </div>
          </div>

          <Input
            label="Past Performance Links 1*"
            placeholder="https://"
            value={pastLink1}
            onChange={(e) => setPastLink1(e.target.value)}
          />

          <Input
            label="Past Performance Links 2*"
            placeholder="https://"
            value={pastLink2}
            onChange={(e) => setPastLink2(e.target.value)}
          />

          <Input
            label="Past Performance Links 3*"
            placeholder="https://"
            value={pastLink3}
            onChange={(e) => setPastLink3(e.target.value)}
          />

          <Input
            label="Past Performance Links 4*"
            placeholder="https://"
            value={pastLink4}
            onChange={(e) => setPastLink4(e.target.value)}
          />
        </div>
      </div>

      <label className="flex items-center py-10">
        <input
          type="checkbox"
          className="mr-2 w-4 h-4 text-blue-black border-gray-300 rounded"
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        I agree to be contacted about sponsorship opportunities
      </label>

      {/* AGREEMENT */}
      <div className="flex flex-col gap-2 mb-10">
        <label className="text-lg text-blue-black font-medium">
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
      text-blue-black
      outline-none
      placeholder:text-[#9C92B3]
      py-2
    "
          value={ideas}
          onChange={(e) => setIdeas(e.target.value)}
        />
      </div>

      {/* SUBMIT MESSAGE */}
      {submitMessage && (
        <div
          className={`mb-4 p-3 rounded ${
            submitMessage.includes("✓")
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {submitMessage}
        </div>
      )}

      {/* SUBMIT */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="bg-neon-yellow p-3 text-xl font-bold uppercase transition shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? "Submitting..." : "Submit"}
      </button>

      <div className="py-10 font-medium text-blue-black text-xl">
        Join our mailing list to learn about upcoming gigs, grants and workshops
        to help your music aspirations thrive.
      </div>
    </form>
  );
}

/* ---------- Reusable Components ---------- */

const RadioButton = ({ label, checked = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`flex items-center gap-2 px-4 py-2 border text-xs font-semibold uppercase transition
        ${
          checked
            ? "bg-light-lavender border-blue-black text-blue-black"
            : "border-blue-black text-blue-black"
        }`}
    >
      <span
        className={`w-3 h-3 rounded-full border border-blue-black flex items-center justify-center`}
      >
        {checked && <span className="w-1.5 h-1.5 rounded-full bg-blue-black" />}
      </span>
      {label}
    </button>
  );
};

function Input({ label, placeholder, error, type = "text", value, onChange }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label className="text-md text-blue-black">{label}</label>}

      <input
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className={
          "bg-transparent border-b text-sm outline-none py-2 placeholder:text-[#9C92B3] text-blue-black " +
          (error ? "border-red-500" : "border-[#6F6486]")
        }
      />

      {error && <span className="text-xs text-red-500">{error}</span>}
    </div>
  );
}

function SectionTitle({ text }) {
  return (
    <p className="md:text-xl text-blue-black md:font-medium uppercase mb-4">
      {text}
    </p>
  );
}
