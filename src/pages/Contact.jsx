import React from "react";

const Contact = () => {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12 mt-10">
      {/* Title */}
      <div className="text-center mb-8">
        <p className="text-[20px] text-[#2E3192] font-medium leading-relaxed">
          We'd love to hear from you
          <br />
          Send us a message
        </p>
      </div>

      {/* Contact Form */}
      <form id="contact-form" className="space-y-6">
        <div className="tp-contact-input">
          <input
            placeholder="Your Name"
            required
            type="text"
            name="name"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A3B98] focus:outline-none"
          />
        </div>

        <div className="tp-contact-input">
          <input
            placeholder="Email Here"
            required
            type="email"
            name="email"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:ring-2 focus:ring-[#3A3B98] focus:outline-none"
          />
        </div>

        <div className="tp-contact-input">
          <textarea
            name="message"
            placeholder="Message Here"
            required
            className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32 focus:ring-2 focus:ring-[#3A3B98] focus:outline-none"
          />
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full py-3 rounded-lg text-white font-semibold transition-all duration-300 hover:opacity-90"
            style={{
              backgroundImage:
                "linear-gradient(45deg, rgb(59, 45, 133) 20%, rgb(0, 124, 195) 40%, rgb(0, 174, 239) 100%)",
            }}
          >
            SUBMIT
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
