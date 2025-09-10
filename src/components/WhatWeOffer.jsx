import { useState } from "react";
import { ChevronDown, Landmark, Wallet, BookOpen, Home } from "lucide-react";

const subsidiaries = [
  {
    title: "Mapout Resources Management Ltd (MRM)",
    shortDesc:
      "Mapout Resources Management (MRM) is a wholly owned subsidiary of Fanrong Group, created to provide innovative and inclusive investment and lending solutions. By blending conventional approaches with forward-looking strategies, MRM manages resources with a clear focus—maximizing value for all stakeholders.",
    details:
      "As the Group’s micro- and nano-lending arm, MRM provides short-term personal loans, SME financing, and tailored financial services for salaried individuals, self-employed professionals, and small businesses. Our fast-access funding and financial advisory services help meet urgent needs while supporting long-term growth and stability.",
    icon: <Wallet className="w-8 h-8 md:w-10 md:h-10 text-[#3A3B98]" />,
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
    shortDesc:
      "The wealth management arm of Fanrong Group, creates sustainable value for investors by channeling funds into carefully selected businesses and opportunities.",
    details:
      "Leveraging expertise, market insight, and disciplined risk management, MRM Investment Ltd delivers consistent, superior returns while protecting stakeholder interests.",
    icon: <Landmark className="w-8 h-8 md:w-10 md:h-10 text-[#3A3B98]" />,
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
    shortDesc:
      "The education arm of Fanrong Group, dedicated to advancing human capital development from primary to tertiary levels.",
    details:
      "Our mission is to provide quality, affordable, and accessible education through innovative approaches to teaching, learning, and administration. By combining rigorous academics with practical skills, we nurture future-ready leaders equipped to drive innovation, entrepreneurship, and socio-economic transformation.",
    icon: <BookOpen className="w-8 h-8 md:w-10 md:h-10 text-[#3A3B98]" />,
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
    shortDesc:
      "A subsidiary of Fanrong Group founded in 2022, committed to making homeownership affordable and accessible for Nigerians across all social classes.",
    details:
      "Backed by research, innovation, and a skilled team, Mapout Homes redefines housing as more than shelter—creating security, stability, and long-term investment value.",
    icon: <Home className="w-8 h-8 md:w-10 md:h-10 text-[#3A3B98]" />,
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

export default function Services() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="bg-gray-50 py-24 px-6 md:px-12 rounded-lg m-4">
      <h2 className="text-4xl md:text-5xl font-bold text-[#3A3B98] text-center mb-4">
        Our Services
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto text-lg text-center mb-12">
        The Fanrong Group operates through strategic subsidiaries, each focused
        on delivering impact in finance, education, and real estate.
      </p>

      <div className="max-w-6xl mx-auto space-y-6 text-justify">
        {subsidiaries.map((sub, i) => (
          <div
            key={sub.title}
            className="bg-white shadow-md rounded-2xl overflow-hidden border border-gray-100"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full px-6 py-5 flex justify-between items-start text-left"
            >
             
              <div className="flex items-start gap-4 flex-1">
                <div className="flex-shrink-0 self-start">{sub.icon}</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#3A3B98]">
                    {sub.title}
                  </h3>
                  <p className="text-gray-500 text-sm text-justify mt-1">
                    {sub.shortDesc}
                  </p>
                </div>
              </div>

              
              <div className="flex-shrink-0 self-start ml-4">
                <ChevronDown
                  className={`w-5 h-5 text-[#3A3B98] transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </div>
            </button>

            <div
              className={`grid transition-all duration-400 ease-in-out ${
                openIndex === i
                  ? "grid-rows-[1fr] opacity-100"
                  : "grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden px-6 pb-6">
                <p className="text-gray-600 text-sm text-justify mb-4">
                  {sub.details}
                </p>
                <ul className="grid sm:grid-cols-2 gap-3">
                  {sub.items.map((item) => (
                    <li
                      key={item}
                      className="bg-[#f0f4ff] text-[#3A3B98] px-4 py-3 rounded-lg text-sm font-medium hover:bg-[#e0e7ff] transition"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
