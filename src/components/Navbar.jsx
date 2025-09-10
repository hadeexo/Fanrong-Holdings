import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

const Navbar = () => {
  const location = useLocation();
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navLinks = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT",
      path: "",
      children: [
        { label: "The Company", path: "/about" },
        { label: "Our Board", path: "/about/board" },
      ],
    },
    { label: "SERVICES", path: "/service" },
    { label: "CONTACT", path: "/contact" },
  ];

  const navVariants = {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6, ease: "easeOut", when: "beforeChildren", staggerChildren: 0.15 } },
  };

  const linkVariants = { hidden: { y: -20, opacity: 0 }, visible: { y: 0, opacity: 1 } };

  const dropdownVariants = {
    hidden: { opacity: 0, y: -10, scale: 0.95, filter: "blur(4px)" },
    visible: { opacity: 1, y: 0, scale: 1, filter: "blur(0px)", transition: { duration: 0.2, ease: "easeOut", staggerChildren: 0.05 } },
    exit: { opacity: 0, y: -5, scale: 0.98, filter: "blur(2px)", transition: { duration: 0.15, ease: "easeIn" } },
  };

  const dropdownItemVariants = { hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } };

  const mobileMenuVariants = { hidden: { opacity: 0, height: 0 }, visible: { opacity: 1, height: "auto", transition: { duration: 0.3, staggerChildren: 0.1, when: "beforeChildren" } }, exit: { opacity: 0, height: 0, transition: { duration: 0.2, when: "afterChildren" } } };

  const mobileItemVariants = { hidden: { x: -20, opacity: 0 }, visible: { x: 0, opacity: 1 } };

  return (
    <motion.div variants={navVariants} initial="hidden" animate="visible" className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100 font-medium">
      <div className="flex items-center justify-between py-4 px-5 sm:px-10">
        <Link to="/">
          <img src={assets.logo} className="w-13" alt="Logo" />
        </Link>

        {/* Desktop Menu */}
        <motion.ul className="hidden sm:flex gap-8 text-sm text-gray-700" initial="hidden" animate="visible" variants={{ visible: { transition: { staggerChildren: 0.55 } } }}>
          {navLinks.map(({ label, path, children }) => (
            <motion.li key={label} variants={linkVariants} className="relative" onMouseEnter={() => setHoveredItem(label)} onMouseLeave={() => setHoveredItem(null)}>
              
              {/* Parent with children */}
              {children ? (
                <span className="flex flex-col items-center gap-1 transition-all duration-200 text-black group cursor-pointer">
                  <p className="relative py-2 px-1">
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#007CC3] to-[#0099E6] transition-all duration-300 ease-out ${
                        hoveredItem === label ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      } origin-left rounded-full`}
                    ></span>
                  </p>
                </span>
              ) : (
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `flex flex-col items-center gap-1 transition-all duration-200 hover:text-[#007CC3] ${
                      isActive ? "text-[#007CC3]" : "text-black"
                    }`
                  }
                >
                  <p className="relative group py-2 px-1">
                    {label}
                    <span
                      className={`absolute left-0 -bottom-1 h-[2px] w-full bg-gradient-to-r from-[#007CC3] to-[#0099E6] transition-all duration-300 ease-out ${
                        location.pathname === path ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                      } origin-left rounded-full`}
                    ></span>
                  </p>
                </NavLink>
              )}

              {/* Dropdown Menu */}
              <AnimatePresence>
                {children && hoveredItem === label && (
                  <motion.ul variants={dropdownVariants} initial="hidden" animate="visible" exit="exit" className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 bg-white/98 backdrop-blur-md shadow-lg rounded-lg border border-gray-200/60 overflow-hidden min-w-[180px] z-50">
                    {children.map((child, index) => (
                      <motion.li key={child.label} variants={dropdownItemVariants}>
                        <NavLink
                          to={child.path}
                          className={({ isActive }) =>
                            `block px-5 py-3 text-sm transition-all duration-200 relative overflow-hidden group ${
                              isActive ? "text-[#007CC3] bg-blue-50/80" : "text-gray-700 hover:text-[#007CC3] hover:bg-gray-50/80"
                            } ${index !== children.length - 1 ? "border-b border-gray-100" : ""}`
                          }
                        >
                          <span className="relative z-10 font-medium">{child.label}</span>
                          <span className="absolute inset-0 bg-gradient-to-r from-blue-50 to-cyan-50 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
                        </NavLink>
                      </motion.li>
                    ))}
                  </motion.ul>
                )}
              </AnimatePresence>
            </motion.li>
          ))}
        </motion.ul>

        {/* Mobile Menu Button */}
        <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="sm:hidden flex flex-col justify-center items-center w-6 h-6 space-y-1">
          <motion.span animate={isMobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="w-6 h-0.5 bg-gray-700 block" />
          <motion.span animate={isMobileMenuOpen ? { opacity: 0 } : { opacity: 1 }} transition={{ duration: 0.2 }} className="w-6 h-0.5 bg-gray-700 block" />
          <motion.span animate={isMobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }} transition={{ duration: 0.3, ease: "easeInOut" }} className="w-6 h-0.5 bg-gray-700 block" />
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div variants={mobileMenuVariants} initial="hidden" animate="visible" exit="exit" className="sm:hidden bg-white/95 backdrop-blur-md border-t border-gray-200/60 overflow-hidden">
            <div className="px-5 py-3 space-y-2">
              {navLinks.map(({ label, path, children }) => (
                <motion.div key={label} variants={mobileItemVariants}>
                  <div className="flex items-center justify-between">
                    <NavLink
                      to={path || "#"}
                      onClick={(e) => {
                        if (children) {
                          e.preventDefault();
                          setMobileDropdown(mobileDropdown === label ? null : label);
                        } else {
                          setIsMobileMenuOpen(false);
                        }
                      }}
                      className={({ isActive }) =>
                        `block py-3 px-4 rounded-lg transition-all duration-200 font-medium ${
                          isActive && path ? "text-[#007CC3] bg-blue-50/80" : "text-gray-700 hover:text-[#007CC3] hover:bg-gray-50/80"
                        }`
                      }
                    >
                      {label}
                    </NavLink>
                    {children && (
                      <motion.button
                        onClick={() => setMobileDropdown(mobileDropdown === label ? null : label)}
                        className="p-3 rounded-lg hover:bg-gray-50/80 transition-colors duration-200"
                      >
                        <motion.svg className="w-4 h-4 text-gray-600" fill="currentColor" viewBox="0 0 20 20" animate={{ rotate: mobileDropdown === label ? 180 : 0 }} transition={{ duration: 0.2 }}>
                          <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                        </motion.svg>
                      </motion.button>
                    )}
                  </div>

                  <AnimatePresence>
                    {children && mobileDropdown === label && (
                      <motion.div initial={{ opacity: 0, height: 0 }} animate={{ opacity: 1, height: "auto" }} exit={{ opacity: 0, height: 0 }} transition={{ duration: 0.2 }} className="ml-4 mt-2 space-y-1 overflow-hidden">
                        {children.map((child) => (
                          <NavLink
                            key={child.label}
                            to={child.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className={({ isActive }) =>
                              `flex items-center py-2.5 px-4 rounded-lg text-sm transition-all duration-200 ${
                                isActive ? "text-[#007CC3] bg-blue-50/80" : "text-gray-600 hover:text-[#007CC3] hover:bg-gray-50/80"
                              }`
                            }
                          >
                            <div className="w-1.5 h-1.5 rounded-full bg-gray-400 mr-3 group-hover:bg-[#007CC3] transition-colors duration-150"></div>
                            {child.label}
                          </NavLink>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default Navbar;
