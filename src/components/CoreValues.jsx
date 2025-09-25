import { motion } from "framer-motion";
import { ShieldCheck, Award, ClipboardCheck, Users, Heart } from "lucide-react";

const CoreValues = () => {
  const values = [
    {
      title: "Professionalism",
      text: "We uphold the highest standards of integrity, accountability, and excellence in all our dealings.",
      icon: ShieldCheck,
    },
    {
      title: "Excellence",
      text: "We strive for superior performance, innovation, and sustainable results that create lasting impact.",
      icon: Award,
    },
    {
      title: "Accountability",
      text: "We take responsibility for our actions, honoring commitments to stakeholders, communities, and the environment.",
      icon: ClipboardCheck,
    },
    {
      title: "Collaboration",
      text: "We believe in the power of partnerships, teamwork, and shared success in achieving our goals.",
      icon: Users,
    },
    {
      title: "Empathy",
      text: "We are people-centered, committed to understanding and responding to the needs of our communities and stakeholders.",
      icon: Heart,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-[#3A3B98]"
        >
          Core Values
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
          {values.slice(0, 3).map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-[#3A3B98] w-full md:w-80 mx-auto"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#3A3B98]/10 text-[#3A3B98] p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap justify-center gap-10">
          {values.slice(3).map((value, index) => {
            const Icon = value.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white shadow-lg rounded-xl p-6 text-center border-t-4 border-[#3A3B98] w-full md:w-80"
              >
                <div className="flex justify-center mb-4">
                  <div className="bg-[#3A3B98]/10 text-[#3A3B98] p-3 rounded-full">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {value.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CoreValues;
