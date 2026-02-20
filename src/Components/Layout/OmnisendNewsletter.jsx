import React, { useState } from "react";

const OmnisendNewsletter = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    const payload = {
      brandID: "63670d85e67810becfd762ff",
      formID: "6367213965bcf558f067c20c",
      stepID: "",
      pageData: {
        URL: window.location.href,
        title: document.title,
        timeToSubmit: 0,
      },
      formData: {
        firstName,
        emailField: email,
      },
      contactID: "",
      unconfirmedContactID: "",
    };

    try {
      const response = await fetch(
        "https://forms.soundestlink.com/REST/forms/v2/subscribe",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        }
      );

      if (response.ok) {
        setSuccess(true);
        setFirstName("");
        setEmail("");
      } else {
        setError("Something went wrong.");
      }
    } catch (err) {
      setError("Network error. Try again.");
    }

    setLoading(false);
  };

  if (success) {
    return (
      <div className="text-center text-xl font-semibold text-white">
        You've successfully subscribed 🎉
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col sm:flex-row gap-4 w-full"
    >
      {/* First Name */}
      <input
        type="text"
        placeholder="Enter Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
        required
        className=" border w-full border-white bg-transparent p-4  text-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white"
      />

      {/* Email */}
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className=" border w-full border-white bg-transparent p-4 text-xl text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-white"
      />

      {/* Subscribe Button */}
      <button
        type="submit"
        disabled={loading}
        className=" bg-neon-yellow p-4 w-full oswald-500 uppercase text-black font-medium text-2xl transition hover:opacity-90 disabled:opacity-60"
      >
        {loading ? "Subscribing..." : "Subscribe to Newsletter"}
      </button>

      {error && <p className="text-red-400">{error}</p>}
    </form>
  );
};

export default OmnisendNewsletter;