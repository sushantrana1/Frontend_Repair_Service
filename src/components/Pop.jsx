import { useState } from "react";
import {
  FaTimes,
  FaWhatsapp,
  FaFacebookMessenger,
  FaRegCommentDots,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";

const Pop = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3">

      {/* Floating Icons */}
      <div
        className={`flex flex-col items-center gap-3 transition-all duration-500 ease-in-out ${
          open
            ? "opacity-100 scale-100 translate-y-0"
            : "opacity-0 scale-75 translate-x-6 pointer-events-none"
        }`}
      >
        {/* Instagram */}
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-gradient-to-r from-pink-500 to-orange-500 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 hover:rotate-6 transition-all duration-300"
        >
          <FaInstagram className="text-xl sm:text-2xl" />

          <span className="absolute right-16 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Instagram
          </span>
        </a>

        {/* WhatsApp */}
        <a
          href="https://wa.me/9779766896866"
          target="_blank"
          rel="noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-green-600 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 hover:rotate-6 transition-all duration-300"
        >
          <FaWhatsapp className="text-xl sm:text-2xl" />

          <span className="absolute right-16 whitespace-nowrap bg-gray-900 text-white text-xs px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            WhatsApp
          </span>
        </a>

        {/* Facebook */}
        <a
          href="https://www.facebook.com/search/top?q=clouds%20nepal%20web"
          target="_blank"
          rel="noreferrer"
          className="group relative w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-blue-600 text-white flex items-center justify-center shadow-xl hover:scale-110 hover:-translate-y-1 hover:rotate-6 transition-all duration-300"
        >
          <FaFacebook className="text-xl sm:text-2xl" />

          <span className="absolute right-16 whitespace-nowrap bg-gray-900 text-white text-s px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition">
            Facebook
          </span>
        </a>

      </div>

      {/* Main Floating Button */}
      <button
        onClick={() => setOpen(!open)}
        className={`w-14 h-14 sm:w-16 sm:h-16 rounded-full
        bg-gradient-to-r from-blue-600 to-purple-600
        text-white shadow-2xl
        flex items-center justify-center
        backdrop-blur-lg
        transition-all duration-300
        hover:scale-110 active:scale-95
        ${
          open
            ? "rotate-180"
            : "animate-bounce"
        }`}
      >
        {open ? (
          <FaTimes className="text-2xl" />
        ) : (
          <FaRegCommentDots className="text-3xl" />
        )}
      </button>

    </div>
  );
};

export default Pop;