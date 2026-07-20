import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaBars, FaTimes, FaTools, FaHome, FaServicestack, FaInfoCircle,
  FaPhoneAlt, FaSignInAlt, FaUserPlus, FaChevronDown, FaFileContract, FaUserShield,
} from "react-icons/fa";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "Home", href: "/", icon: <FaHome /> },
    { name: "Services", href: "/services", icon: <FaServicestack /> },
    { name: "About", href: "/about", icon: <FaInfoCircle /> },
    { name: "Contact", href: "/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-l from-blue-100 to-cyan-50 backdrop-blur-md shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <FaTools className="text-3xl text-blue-600 transition duration-300 group-hover:rotate-12 group-hover:scale-110" />
          <h1 className="text-2xl font-bold text-gray-800">
            Repair<span className="text-orange-500">Pro</span>
          </h1>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium">

          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                className="group relative flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300"
              >
                <span className="text-orange-500 group-hover:scale-125 transition">
                  {link.icon}
                </span>

                {link.name}

                <span className="absolute -bottom-2 left-0 w-0 h-0.5 bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </li>
          ))}

          <li className="relative group">

            <button className="flex items-center gap-2 text-gray-700 hover:text-blue-600 transition duration-300">
              <FaFileContract className="text-orange-500" />
              Legal
              <FaChevronDown className="text-xs transition-transform duration-300 group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 mt-3 w-56 bg-white rounded-xl shadow-xl border border-gray-100 opacity-0 invisible
             group-hover:opacity-100 group-hover:visible transition-all duration-300">

              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition"
              >
                <FaUserShield className="text-blue-600" />
                Privacy Policy
              </a>

              <a
                href="#"
                className="flex items-center gap-3 px-5 py-3 hover:bg-blue-50 transition"
              >
                <FaFileContract className="text-orange-500" />
                Terms & Conditions
              </a>

            </div>

          </li>

        </ul>

        {/* Login/Register */}
        <div className="hidden lg:flex items-center gap-4">
            
            <Link to ="/login" className="flex items-center gap-2 border-2 border-blue-600 text-blue-600
             px-5 py-2 rounded-lg hover:bg-blue-600
             hover:text-white transition duration-300 cursor-pointer">
            <FaSignInAlt />
            Login
          </Link>
          

          <Link to="/signup" className="flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white
           px-5 py-2 rounded-lg transition duration-300 shadow-lg hover:shadow-xl cursor-pointer">
            <FaUserPlus />
            Register
          </Link>

        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="lg:hidden text-2xl text-gray-800 transition-transform duration-300 hover:scale-110"
        >
          <div
            className={`transition-transform duration-300 ${menuOpen ? "rotate-180" : "rotate-0"
              }`}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </button>
      </div>


      {/* Mobile Menu */}
      <div
        className={`lg:hidden overflow-hidden bg-white shadow-lg transition-all duration-500 ease-in-out ${menuOpen
            ? "max-h-[600px] opacity-100 translate-y-0"
            : "max-h-0 opacity-0 -translate-y-4"
          }`}
      >
        <ul className="flex flex-col items-center py-6 gap-6 font-medium">

          {navLinks.map((link) => (
            <li
              key={link.name}
              className={`transition-all duration-500 ${menuOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 -translate-x-5"
                }`}
            >
              <a
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="flex items-center gap-3 text-gray-700 hover:text-blue-600 transition duration-300"
              >
                <span className="text-orange-500">
                  {link.icon}
                </span>

                {link.name}
              </a>
            </li>
          ))}

           <Link to ="/login">
          <button
            className={`w-52 border-2 border-blue-600 text-blue-600 py-3 rounded-lg flex
               items-center justify-center gap-2 hover:bg-blue-600 hover:text-white transition-all duration-500 ${menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
              }`}
          >
            <FaSignInAlt />
            Login
          </button> </Link>

          <Link to ="/signup">
          <button
            className={`w-52 bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg flex items-center justify-center 
              gap-2 transition-all duration-500 ${menuOpen
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-5"
              }`}
          >
            <FaUserPlus />
            Register
          </button></Link>

        </ul>
      </div>

    </nav>
  );
};

export default Navbar;