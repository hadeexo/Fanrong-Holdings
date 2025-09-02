import React, { useState } from "react";
import { FaEnvelope } from "react-icons/fa";
import toast from "react-hot-toast";

const Connect = () => {
  const [email, setEmail] = useState("");
  const [statusMessage, setStatusMessage] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailRegex.test(email)) {
      try {
        const res = await fetch("http://localhost:5000/subscribe", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email }),
        });

        if (res.ok) {
          toast.success("Thank you for subscribing!");
          setEmail("");
        } else {
          toast.error("Subscription failed, try again later.");
        }
      } catch (error) {
        toast.error("Server error. Please try again.");
      }
    } else {
      toast.error("Please enter a valid email address.");
    }
  };

  return (
    <div className="relative z-20 max-w-5xl mx-auto px-4">
      <div className="-mb-20">
        <div className="bg-gradient-to-r from-[#3A3B98] via-[#007CC3] to-[#00AEEF] text-white rounded-3xl px-6 py-10 md:px-16 md:py-14 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Our Newsletter<span className="text-[#686868] ml-1">•</span>
            </h2>

            <form
              onSubmit={onSubmitHandler}
              className="flex flex-col md:flex-row md:items-center gap-4 w-full md:w-auto"
            >
              <input
                type="text"
                placeholder="Full Name"
                required
                className="rounded-md text-[#686868] bg-white px-4 py-3 w-full md:w-40"
              />

              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email Address"
                required
                className="rounded-md text-[#686868] bg-white px-4 py-3 w-full md:w-64"
              />

              <button
                type="submit"
                className="bg-gradient-to-r from-[#3B2D85] to-[#3A3B98] hover:opacity-90 text-white px-6 py-3 rounded-md font-semibold flex items-center justify-center gap-2 transition"
              >
                <FaEnvelope />
                Subscribe
              </button>
            </form>
          </div>

          {statusMessage && (
            <p className="mt-4 text-sm text-white">{statusMessage}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Connect;
