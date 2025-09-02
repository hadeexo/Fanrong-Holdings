import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setStatus("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setStatus("❌ Failed to send message. Try again later.");
      }
    } catch (error) {
      console.error(error);
      setStatus("❌ Server error.");
    }
  };

  return (
    <div className="max-w-2xl mx-auto px-4 py-12 mt-10">
      <div className="text-center mb-8">
        <p className="text-[20px] text-[#2E3192] font-medium leading-relaxed">
          We'd love to hear from you
          <br />
          Send us a message
        </p>
      </div>

      <form id="contact-form" className="space-y-6" onSubmit={handleSubmit}>
        <input
          placeholder="Your Name"
          required
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <input
          placeholder="Email Here"
          required
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3"
        />

        <textarea
          name="message"
          placeholder="Message Here"
          required
          value={formData.message}
          onChange={handleChange}
          className="w-full border border-gray-300 rounded-lg px-4 py-3 h-32"
        />

        <button
          type="submit"
          className="w-full py-3 rounded-lg text-white font-semibold"
          style={{
            backgroundImage:
              "linear-gradient(45deg, rgb(59, 45, 133) 20%, rgb(0, 124, 195) 40%, rgb(0, 174, 239) 100%)",
          }}
        >
          SUBMIT
        </button>
      </form>

      {status && <p className="mt-4 text-center">{status}</p>}
    </div>
  );
};

export default Contact;
