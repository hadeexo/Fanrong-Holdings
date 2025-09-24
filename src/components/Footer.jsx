import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTwitter,
} from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="relative z-10 bg-[#F5F5F5] text-[#686868] pt-32 px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 text-sm">
        <div>
          <img src={assets.logo} alt="fanrong logo" className="mb-4 w-20" />
          <p className="text-gray-medium">
            Fanrong Holdings is a dynamic principal investment company
            headquartered in Nigeria, with strategic interests in finance,
            education, and real estate—three critical sectors shaping the
            nation’s economic growth.
          </p>
          <div className="flex space-x-3 mt-4 mb-5">
            {[FaLinkedinIn, FaFacebookF, FaInstagram, FaTwitter].map(
              (Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="bg-gray-light p-2 rounded hover:bg-[#3A3B98] hover:text-white transition"
                >
                  <Icon />
                </a>
              )
            )}
          </div>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#3B2D85]">
            Quick links
          </h4>
          <ul className="space-y-2 flex flex-col">
            <li>
              <a href="/" className="hover:text-black">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-black">
                About
              </a>
            </li>
            <li>
              <a href="/service" className="hover:text-black">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-black">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-lg font-semibold mb-3 text-[#3B2D85]">
            Contact us
          </h4>
          <ul className="space-y-3 text-[#686868]">
            <li className="flex items-start gap-2">
              <FaMapMarkerAlt className="mt-1 text-[#3A3B98]" />
              <span>1, Akerele str, Off Diya Rd, Ifako, Lagos State</span>
            </li>
            <li className="flex items-center gap-2">
              <FaPhone className="text-[#3A3B98]" /> +234 808 585 6990
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#3A3B98]" /> admin@farongholdings.com
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-gray-light mt-10" />
      <div className="text-center mt-6 text-xs text-gray-400">
        © {new Date().getFullYear()} Fanrong Holdings | All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
