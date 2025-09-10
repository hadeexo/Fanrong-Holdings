import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        {/* Text Section */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6 text-center md:text-left"
        >
          <p className="uppercase text-sm tracking-widest text-[#686868]">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#3B2D85]">Building Prosperity, </span> <br />
            Shaping Futures
          </h2>
          <p className="text-[#686868] leading-relaxed text-justify">
            Fanrong Holdings is a principal investment company in Nigeria, with
            strategic interests in finance, education, and real estate. Guided
            by innovation and strong governance, we create long-term value while
            contributing to national development.
          </p>
          <p className="text-[#686868] leading-relaxed text-justify">
            By strategically deploying resources across finance, education, and
            real estate, the company not only generates superior returns for its
            stakeholders but also contributes to Nigeria’s socio-economic
            advancement.
          </p>

          <div className="flex justify-center md:justify-start">
            <button
              className="mt-4 bg-transparent border border-[#3B2D85] text-[#3B2D85] px-6 py-3 rounded-md font-semibold hover:bg-[#3B2D85] hover:text-white transition"
              onClick={() => navigate("/about")}
            >
              Learn More
            </button>
          </div>
        </motion.div>

        {/* Image + Circles Section */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center items-center"
        >
          <div className="absolute w-72 md:w-[700px] aspect-square bg-[#007cc32c] rounded-full z-0 transition-all duration-500 ease-in-out" />

          <div className="absolute w-64 md:w-[600px] aspect-square bg-[#007cc31b] rounded-full z-20 transition-all duration-500 ease-in-out" />

          <img
            src={assets.about}
            alt="Who We Are"
            className="relative z-10 w-64 sm:w-80 md:w-[420px] lg:w-[500px] aspect-square object-cover rounded-full shadow-lg transition-all duration-500 ease-in-out"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
