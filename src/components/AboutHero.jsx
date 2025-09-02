import { motion } from "framer-motion";
import { assets } from "../assets/assets";

const AboutHero = () => {
  return (
    <section className="relative py-20 px-6 md:px-12 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-gradient-to-tl"
        style={{ backgroundImage: `url(${assets.abt_img})` }}
      />

      <div className="mt-10 relative max-w-6xl mx-auto space-y-32 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <img
              src={assets.one}
              alt="About Us"
              className="rounded-l-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </motion.div>

          <div className="bg-[#3A3B98] text-white rounded-lg shadow-xl p-8">
            <h3 className="text-xl font-bold mb-4">Our History</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              For over 8 years, Fanrong Holdings has been shaping futures across
              real estate, education, and financial services. From delivering
              affordable housing projects that close the shelter gap, to driving
              community-first educational initiatives that empower young minds,
              to providing innovative financial solutions that foster inclusion.
              Our journey has been defined by trust, innovation, and a
              commitment to sustainable value creation.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="order-2 md:order-1 bg-[#3A3B98] text-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">Our Vision</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              To be a leading African principal investment company that creates
              enduring value through strategic investments in key sectors, while
              empowering communities and driving sustainable economic growth.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="order-1 md:order-2 relative flex justify-center"
          >
            <img
              src={assets.idea}
              alt="Our Vision"
              className="rounded-r-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="relative flex justify-center"
          >
            <img
              src={assets.value}
              alt="Our Values"
              className="rounded-l-full shadow-lg object-cover w-full md:w-[500px] h-[350px] md:h-[400px]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="bg-[#3A3B98] text-white rounded-lg shadow-xl p-8"
          >
            <h3 className="text-xl font-bold mb-4">Our Values</h3>
            <p className="text-sm leading-relaxed mb-4 text-white/90">
              At Fanrong Holdings, we stand on pillars of integrity, excellence,
              and partnership. Our values guide every decision—from nurturing
              local economies to fostering authentic stakeholder relationships—
              because real success comes from building together.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
