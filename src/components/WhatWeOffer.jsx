import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Landmark, Wallet, BookOpen, Home } from "lucide-react";

const subsidiaries = [
  {
    title: "Mapout Resources Management Ltd (MRM)",
    desc: "Wholly owned subsidiary of Fanrong Group, providing inclusive investment and lending solutions. MRM focuses on short-term personal loans, SME financing, and financial advisory to empower individuals and businesses.",
    icon: <Wallet className="w-6 h-6 text-[#3A3B98]" />,
    items: [
      "Employee Group Loans",
      "SME Loans",
      "Trader Loans",
      "Payday Loans",
      "Asset Finance",
      "Invoice Discounting",
      "LPO Financing",
    ],
  },
  {
    title: "MRM Investment Ltd",
    desc: "The wealth management arm of Fanrong Group, dedicated to sustainable value creation. It accepts funds from diverse clients and channels them into carefully selected businesses and opportunities.",
    icon: <Landmark className="w-6 h-6 text-[#3A3B98]" />,
    items: [
      "Fixed Income Notes",
      "Eurobond-Linked Notes",
      "Equity-Linked Notes",
      "Real Estate-Linked Notes",
      "Education Investment Scheme",
      "Employee Savings Scheme",
      "Financial Advisory Services",
    ],
  },
  {
    title: "Reigning Stars Educational Services Ltd",
    desc: "The education arm of Fanrong Group, advancing human capital development from primary to tertiary levels. Reigning Stars offers quality, affordable, and accessible education for future-ready leaders.",
    icon: <BookOpen className="w-6 h-6 text-[#3A3B98]" />,
    items: [
      "Primary Education (Reigning Stars School)",
      "Secondary Education (Reigning Stars College)",
      "B.Sc Programmes (via Ajayi Crowther University)",
      "MBA & DBA Programmes",
      "HND Conversion Programmes",
      "Postgraduate Diploma in Education (PGDE)",
    ],
  },
  {
    title: "Mapout Homes",
    desc: "Subsidiary established to make homeownership accessible and affordable. With innovative research and a professional team, Mapout Homes delivers sustainable housing and real estate solutions.",
    icon: <Home className="w-6 h-6 text-[#3A3B98]" />,
    items: [
      "Property Development",
      "Facility Management",
      "Property Remodeling & Renovation",
      "Real Estate Advisory & Consultancy",
      "Property Sales & Marketing",
      "Rental & Lease Management",
      "Estate Planning & Development",
      "Affordable Housing Solutions",
      "Interior Design & Finishing",
    ],
  },
];

export default function Subsidiaries() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="py-20 bg-gray-50 px-6 md:px-12">
      <div className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold text-[#3A3B98]">
            Our Subsidiaries
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            The Fanrong Group operates through strategic subsidiaries, each
            focused on delivering impact in finance, education, and real estate.
          </p>
        </div>

        <div className="space-y-6">
          {subsidiaries.map((sub, i) => (
            <div
              key={sub.title}
              className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left"
              >
                <div className="flex items-start gap-3">
                  {sub.icon}
                  <div>
                    <h3 className="text-xl font-semibold text-[#3A3B98]">
                      {sub.title}
                    </h3>
                    <p className="text-gray-500 text-sm">{sub.desc}</p>
                  </div>
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
                      {sub.items.map((item) => (
                        <li
                          key={item}
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
      </div>
    </section>
  );
}
