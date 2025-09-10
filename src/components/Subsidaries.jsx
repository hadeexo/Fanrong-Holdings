import { motion } from "framer-motion";
import { subsidiariesData } from "../assets/assets";
import { useNavigate } from "react-router-dom";
import Title from "./Title";

const headingVariant = {
  hidden: { y: -50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 1.2, ease: "easeOut" },
  },
};

const cardVariant = (direction) => ({
  hidden: {
    x: direction === "left" ? -100 : 100,
    opacity: 0,
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { duration: 0.9, ease: "easeOut" },
  },
});

const Subsidiaries = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-[#efefef9c] py-12">
      <motion.div
        className="text-center"
        variants={headingVariant}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
      >
        <div className="text-3xl mb-10">
          <Title text1={"OUR"} text2={" SUBSIDIARIES"} />
        </div>
      </motion.div>

      <div className="w-full md:w-[85%] mx-auto flex flex-col gap-20">
        {subsidiariesData.map((item, index) => {
          const isEven = index % 2 === 0;
          const direction = isEven ? "left" : "right";

          return (
            <motion.div
              key={item.id}
              className="mx-2 grid grid-cols-1 md:grid-cols-2 items-center gap-10"
              variants={cardVariant(direction)}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
            >
              {isEven ? (
                <>
                  <div className="order-2 md:order-1 space-y-4">
                    <div className="mt-2 flex items-center gap-2">
                      <h4 className="text-lg font-bold text-gray-500">
                        {item.summary}
                      </h4>
                    </div>
                    <blockquote className="mt-4 border-l-4 border-[#007CC3] pl-4">
                      <p className="text-black text-justify leading-relaxed">
                        {item.details}
                      </p>
                    </blockquote>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                      className="h-10 rounded-md px-6 bg-[#3A3B98] text-white hover:bg-[#2a2975]"
                      onClick={() => navigate("/service")}
                    >
                      Read More
                    </motion.button>
                  </div>

                  <div className="order-1 md:order-2">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-[80%] object-cover"
                    />
                  </div>
                </>
              ) : (
                <>
                  <div className="order-1">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="rounded-lg shadow-lg w-[80%] object-cover"
                    />
                  </div>

                  <div className="order-2 space-y-4">
                    <div className="mt-2 flex items-center gap-2">
                      <h4 className="text-lg font-bold text-gray-500">
                        {item.summary}
                      </h4>
                    </div>
                    <blockquote className="mt-4 border-l-4 border-[#007CC3] pl-4">
                      <p className="text-black text-justify leading-relaxed">
                        {item.details}
                      </p>
                    </blockquote>
                    <motion.button
                      variants={{
                        hidden: { opacity: 0, x: 30 },
                        visible: { opacity: 1, x: 0 },
                      }}
                      transition={{ duration: 0.6 }}
                      className="h-10 rounded-md px-6 bg-[#3A3B98] text-white hover:bg-[#2a2975]"
                      onClick={() => navigate("/service")}
                    >
                      Read More
                    </motion.button>
                  </div>
                </>
              )}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Subsidiaries;
