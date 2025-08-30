import { useState } from "react";
import { testimonialData } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import Title from "./Title";
import { Navigation } from "swiper/modules";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="my-16 text-center">
      <div className="text-center text-3xl">
        {" "}
        <Title text1={"TEST"} text2={"IMONIALS"} />{" "}
      </div>
      <h2 className="text-lg font-bold">What our clients are saying</h2>

      <div className="hidden md:block">
        <div className="max-w-2xl mx-auto mt-6 min-h-[160px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.4 }}
            >
              <p className="text-lg italic text-gray-600">
                "{testimonialData[activeIndex].message}"
              </p>
              <h3 className="mt-4 font-semibold text-lg">
                {testimonialData[activeIndex].name}
              </h3>
              <p className="text-sm text-gray-500">
                {testimonialData[activeIndex].post}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Avatars */}
        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          {testimonialData.map((test, index) => (
            <div
              key={index}
              className={`cursor-pointer transition transform ${
                index === activeIndex
                  ? "scale-110 ring-2 ring-[#007CC3] shadow-xl"
                  : "opacity-60 hover:opacity-100"
              } rounded-full`}
              onClick={() => setActiveIndex(index)}
            >
              <img
                src={test.image}
                alt={test.name}
                className="w-20 h-20 rounded-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>

      <div className="md:hidden mt-10">
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={20}
          slidesPerView={1}
        >
          {testimonialData.map((test, index) => (
            <SwiperSlide key={index}>
              <div className="bg-white p-6 rounded-xl shadow-md text-center">
                <img
                  src={test.image}
                  alt={test.name}
                  className="w-20 h-20 rounded-full mx-auto mb-4"
                />
                <p className="text-lg italic text-gray-600">"{test.message}"</p>
                <h3 className="mt-4 font-semibold text-lg">{test.name}</h3>
                <p className="text-sm text-gray-500">{test.post}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonials;
