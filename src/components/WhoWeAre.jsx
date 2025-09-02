import { motion } from "framer-motion";
import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const WhoWeAre = () => {
  const navigate = useNavigate();
  return (
    <section className="relative py-20 px-6 md:px-16 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <p className="uppercase text-sm tracking-widest text-[#686868]">
            Who We Are
          </p>
          <h2 className="text-4xl md:text-5xl font-bold leading-tight">
            <span className="text-[#3B2D85]">Building Prosperity, </span> <br />{" "}
            Shaping Futures
          </h2>
          <p className="text-[#686868] leading-relaxed">
            Fanrong Holdings is a principal investment company in Nigeria, with
            strategic interests in finance, education, and real estate. Guided
            by innovation and strong governance, we create long-term value while
            contributing to national development.
          </p>
          <p className="text-[#686868] leading-relaxed">
            By strategically deploying resources across finance, education, and
            real estate, the company not only generates superior returns for its
            stakeholders but also contributes to Nigeria’s socio-economic
            advancement.
          </p>

          <button
            className="mt-4 bg-transparent border border-[#3B2D85] text-[#3B2D85] px-6 py-3 rounded-md font-semibold hover:bg-[#3B2D85] hover:text-white transition"
            onClick={() => navigate("/about")}
          >
            Learn More
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="absolute w-80 h-80 md:w-[700px] md:h-[700px] bg-[#007cc32c] rounded-full z-0" />
          <div className="absolute w-80 h-80 md:w-[600px] md:h-[600px] bg-[#007cc31b] rounded-full z-15" />

          <img
            src={assets.about}
            alt="Who We Are"
            className="relative z-10 w-72 h-72 md:w-[500px] md:h-[500px] object-cover rounded-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default WhoWeAre;
