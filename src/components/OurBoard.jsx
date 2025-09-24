import React, { useState } from "react";
import { assets, boardMembers, management } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";

const OurBoard = () => {
  const [selected, setSelected] = useState(null);

  return (
    <section className="relative">
      <div className="relative py-20 mt-10 overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${assets.board})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f092e]/50 to-[#3B2D85]/20 z-0" />
        <div className="relative z-10">
          <h1 className="text-center text-white text-3xl font-bold">
            Our Board
          </h1>
        </div>
      </div>

      <div className="bg-white py-20 px-10 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {boardMembers.map((member) => (
            <div
              key={member.name}
              className="rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelected(member)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover object-center"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#3B2D85]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="relative z-10 mt-10">
          <h1 className="text-center text-black text-3xl font-bold">
            The Management 
          </h1>
        </div>
      </div>

      <div className="bg-white py-5 px-10 md:px-12 relative z-10">
        <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {management.map((member) => (
            <div
              key={member.name}
              className="rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
              onClick={() => setSelected(member)}
            >
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-64 object-cover object-center "
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-[#3B2D85]">
                  {member.name}
                </h3>
                <p className="text-sm text-gray-500">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 px-4"
            onClick={() => setSelected(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="bg-white rounded-xl shadow-lg max-w-4xl w-full relative flex flex-col md:flex-row overflow-hidden"
              onClick={(e) => e.stopPropagation()}
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              drag="y"
              dragConstraints={{ top: 0, bottom: 0 }}
              onDragEnd={(e, info) => {
                if (info.offset.y > 120) setSelected(null);
              }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-12 right-3 z-20 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-md hover:bg-white text-gray-700 hover:text-black"
              >
                ✕
              </button>

              <div className="md:w-1/2 flex-shrink-0">
                <img
                  src={selected.img}
                  alt={selected.name}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="md:w-1/2 p-6 max-h-[80vh] overflow-y-auto">
                <h3 className="text-2xl font-bold text-[#3B2D85]">
                  {selected.name}
                </h3>
                <p className="text-sm text-gray-500 mb-4">{selected.role}</p>
                <p className="text-gray-600 leading-relaxed">{selected.bio}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default OurBoard;
