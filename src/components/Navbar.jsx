import { NavLink, Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { label: "HOME", path: "/" },
    {
      label: "ABOUT",
      path: "/about",
      children: [
        { label: "The Company", path: "/about" },
        { label: "Our Board", path: "/about/board" },
      ],
    },

    {
      label: "SERVICES",
      path: "/service",
    },
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
        when: "beforeChildren",
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
      className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md flex items-center justify-between py-5 px-10 font-medium"
    >
      <Link to="/">
        <img src={assets.logo} className="w-13" alt="Logo" />
      </Link>

      <motion.ul
        className="hidden sm:flex gap-5 text-sm text-gray-700"
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.55,
            },
          },
        }}
      >
        {navLinks.map(({ label, path, children }) => (
          <motion.li
            key={label}
            variants={linkVariants}
            className="relative group"
          >
            <NavLink
              to={path}
              className={({ isActive }) =>
                `flex flex-col items-center gap-1 transition duration-300 ${
                  isActive ? "text-[#007CC3]" : "text-black"
                }`
              }
            >
              <p className="relative group">
                {label}
                <span
                  className={`absolute left-0 -bottom-1 h-[2px] w-full bg-[#007CC3] transition-all duration-300 ease-in-out ${
                    location.pathname === path
                      ? "scale-x-100"
                      : "scale-x-0 group-hover:scale-x-100"
                  } origin-left`}
                ></span>
              </p>
            </NavLink>

            {children && (
              <ul className="absolute top-8 left-0 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 z-50 w-20">
                {children.map((child) => (
                  <li key={child.label}>
                    <NavLink
                      to={child.path}
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-[#007CC3]"
                    >
                      {child.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            )}
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
};

export default Navbar;
