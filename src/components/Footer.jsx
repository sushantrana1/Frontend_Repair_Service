import { BsWhatsapp } from "react-icons/bs";
import {
  FaTools,
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-0 ">

      <div className="max-w-7xl mx-auto px-6 py-12 pb-6">

        {/* Top Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center pb-12 border-b border-gray-700 ">

          {/* Left */}
          <div>

            <div className="flex items-center gap-3">

              <FaTools className="text-4xl text-orange-500" />

              <h2 className="text-4xl font-bold text-white">
                Repair<span className="text-orange-500">Pro</span>
              </h2>

            </div>

            <p className="mt-6 text-gray-400 leading-8 text-justify">
              RepairPro is your trusted partner for reliable home and office
              appliance repair services. Our certified technicians provide
              affordable, fast, and professional solutions using genuine spare
              parts and modern repair techniques. Customer satisfaction,
              transparency, and quality workmanship are our top priorities,
              ensuring every repair is completed with precision and care.
            </p>

            {/* Social Icons */}

            <div className="flex gap-4 mt-8">

              <a
                href="https://www.facebook.com"
                className="w-11 h-11 rounded-full bg-blue-800 hover:bg-blue-500 flex items-center justify-center transition duration-300"
              >
                <FaFacebookF />
              </a>

              <a
                href="https://www.instagram.com"
                className="w-11 h-11 rounded-full bg-red-800 hover:bg-red-500 flex items-center justify-center transition duration-300"
              >
                <FaInstagram />
              </a>

              <a
                href="tel:+9779766896866"
                className="w-11 h-11 rounded-full bg-green-800 hover:bg-green-500 flex items-center justify-center transition duration-300"
              >
                <BsWhatsapp />
              </a>

            </div>

          </div>

          {/* Right - Google Map */}

          <div>

            <h3 className="text-2xl font-bold text-white mb-5">
              Our Location
            </h3>

            <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-700">

              <iframe
                title="RepairPro Location"
                src="https://www.google.com/maps?q=Tinkune,Kathmandu,Nepal&output=embed"
                width="100%"
                height="320"
                loading="lazy"
                allowFullScreen
              ></iframe>

            </div>

          </div>

        </div>

        {/* Middle Footer */}

        <div className="grid grid-cols-2 md:grid-cols-4 gap-18 pt-8 pb-1 ">

          {/* Quick Links */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3">

              <li>
                <Link to="/" className="hover:text-orange-500 transition">
                  Home
                </Link>
              </li>

              <li>
                <Link to="/services" className="hover:text-orange-500 transition">
                  Services
                </Link>
              </li>

              <li>
                <Link to="/about" className="hover:text-orange-500 transition">
                  About
                </Link>
              </li>

              <li>
                <a href="/contact" className="hover:text-orange-500 transition">
                  Contact
                </a>
              </li>

            </ul>

          </div>

          {/* Services */}

          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-5">
              Our Repair Services
            </h3>

            <ul className="grid grid-cols-2 gap-x-6 gap-y-3 text-sm sm:text-base text-gray-300">
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Electrical
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Plumbing
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                AC & Fan
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Refrigerator
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Washing Machine
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                LED & Smart TV
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Deep Freezer
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Water Purifier
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Vacuum Cleaner
              </li>
              <li className="hover:text-orange-400 transition duration-300 cursor-pointer">
                Induction Cooktop
              </li>
            </ul>
          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Contact Us
            </h3>

            <div className="space-y-4">

              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-orange-500 mt-1" />
                <span>Tinkune, Kathmandu, Nepal</span>
              </div>

              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" />
                <span className="hover:text-orange-500 cursor-pointer">+977-9887659897</span>
              </div>

              <div className="flex items-center gap-3">
                <FaEnvelope className="text-orange-500" />
                <span className="hover:text-orange-500 cursor-pointer">support@repairservice.com</span>
              </div>

            </div>

          </div>

          {/* Legal */}

          <div>

            <h3 className="text-xl font-semibold text-white mb-5">
              Legal
            </h3>

            <ul className="space-y-3">

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Privacy Policy
                </a>
              </li>

              <li>
                <a href="#" className="hover:text-orange-500 transition">
                  Terms & Conditions
                </a>
              </li>

            </ul>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-gray-700 py-6 ">

        <p className="text-center text-gray-400 text-sm">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-white">
            RepairPro
          </span>
          . All Rights Reserved.
        </p>

      </div>

    </footer>
  );
};

export default Footer;