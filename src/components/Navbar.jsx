import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "HOME", path: "/" },
    { label: "ABOUT", path: "/about" },
    { label: "SERVICES", path: "/service" },
    { label: "CONTACT", path: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.15,
      },
    },
  };

  const linkVariants = {
    hidden: { y: -20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      animate="visible"
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between py-5 px-6 md:px-10 font-medium"
    >

      <Link to="/">
        <img src={assets.logo} className="w-12" alt="Logo" />
      </Link>

    
      <motion.ul
        className="hidden sm:flex gap-6 text-sm text-gray-700"
        variants={navVariants}
      >
        {navLinks.map(({ label, path }) => (
          <motion.li key={label} variants={linkVariants} className="relative group">
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition duration-300 ${
                  isActive ? "text-[#007CC3]" : "text-black"
                }`
              }
            >
              <span className="relative group">
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#007CC3] transition-all duration-300 ease-in-out ${
                    location.pathname === path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                ></span>
              </span>
            </NavLink>
          </motion.li>
        ))}
      </motion.ul>

      <button
        className="sm:hidden text-gray-700"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    
      <motion.div
        initial={{ x: "100%" }}
        animate={{ x: isOpen ? "0%" : "100%" }}
        transition={{ type: "spring", stiffness: 100, damping: 20 }}
        className="fixed top-0 right-0 h-full w-2/3 bg-white shadow-lg z-40 sm:hidden flex flex-col p-6"
      >
        {navLinks.map(({ label, path }) => (
          <NavLink
            key={label}
            to={path}
            onClick={() => setIsOpen(false)}
            className={({ isActive }) =>
              `py-3 border-b transition ${
                isActive ? "text-[#007CC3]" : "text-black"
              }`
            }
          >
            {label}
          </NavLink>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Navbar;
