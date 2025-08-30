import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { serviceData } from "../assets/assets";

export default function WhatWeOffer() {
  const [openIndex, setOpenIndex] = useState(null);
  const navigate = useNavigate();

  return (
    <section className="relative py-27 px-6 md:px-12 bg-gradient-to-br from-[#f8faff] to-[#eef2ff]">
      <div className="max-w-5xl mx-auto space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3B98]">
            Our Services
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fanrong Holdings delivers innovative, reliable, and impactful
            solutions across finance, education, and investment.
          </p>
        </div>

        {/* Accordions */}
        <div className="space-y-6">
          {serviceData.map((svc, i) => (
            <div
              key={i}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <div>
                  <h3 className="text-xl font-semibold text-[#3A3B98]">
                    {svc.title}
                  </h3>
                  <p className="text-gray-500 text-sm">{svc.desc}</p>
                </div>
                <ChevronDown
                  className={`w-6 h-6 text-[#3A3B98] transform transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>

              <AnimatePresence initial={false}>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="px-6 pb-6"
                  >
                    <ul className="mt-3 grid sm:grid-cols-2 gap-3">
                      {svc.items.map((item, idx) => (
                        <li
                          key={idx}
                          className="bg-[#f0f4ff] text-[#3A3B98] px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#e0e7ff] transition"
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center bg-[#3A3B98] text-white py-12 rounded-2xl shadow-lg space-y-6">
          <h3 className="text-2xl font-bold">Make An Appointment Today</h3>
          <p className="max-w-2xl mx-auto text-white/90">
            Fanrong Group is a principal investment firm that invests across
            Finance, Education, Real Estate, Agro-allied, and more through
            innovative, growth-oriented strategies to benefit all stakeholders.
          </p>
          <button
            className="px-6 py-3 bg-white text-[#3A3B98] rounded-md font-semibold hover:bg-gray-100 transition"
            onClick={() => navigate("/contact")}
          >
            Get Appointment
          </button>
        </div>
      </div>
    </section>
  );
}
