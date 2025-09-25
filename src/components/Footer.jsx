import {
  Facebook,
  Instagram,
  Linkedin,
  Twitter,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-30">
      <div className="max-w-6xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="inline-block bg-white p-2 rounded-md shadow-md">
            <img src={assets.logo} alt="Fanrong Holdings" className="h-10" />
          </div>

          <p className="text-sm leading-relaxed mb-6">
            Fanrong Holdings is a dynamic principal investment company
            headquartered in Nigeria, with strategic interests in finance,
            education, and real estate—three critical sectors shaping the
            nation’s economic growth.
          </p>
          <div className="flex space-x-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-[#3A3B98]"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-[#3A3B98]"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-[#3A3B98]"
            >
              <Instagram size={18} />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-700 hover:bg-[#3A3B98]"
            >
              <Twitter size={18} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="/" className="hover:text-white">
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white">
                Services
              </a>
            </li>
            <li>
              <a href="/contact" className="hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-white text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-3 text-sm">
            <li className="flex items-start gap-3">
              <MapPin size={18} className="text-[#3A3B98]" />
              <span>1, Akerele str, Off Diya Rd, Ifako, Lagos State</span>
            </li>
            <li className="flex items-center gap-3">
              <Phone size={18} className="text-[#3A3B98]" />
              <span>+234 808 585 6990</span>
            </li>
            <li className="flex items-center gap-3">
              <Mail size={18} className="text-[#3A3B98]" />
              <span>admin@fanrongholdings.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-700 mt-12 py-6 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Fanrong Holdings. All rights reserved.
        <span className="mx-2">|</span>
        <a href="/privacy" className="hover:text-white">
          Privacy Policy
        </a>
        <span className="mx-2">|</span>
        <a href="/terms" className="hover:text-white">
          Terms of Service
        </a>
      </div>
    </footer>
  );
};

export default Footer;
