import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaWhatsapp,
  FaInstagram,
} from "react-icons/fa";

const ContactInfo = () => {
  return (
    <section className="py-8 px-2">

      <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">

        {/* Section Heading */}

        <div className="text-center mb-14">

          <span className="text-blue-600 font-semibold uppercase tracking-wider">
            Contact Information
          </span>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mt-3">
            Get In Touch With Us
          </h2>

          <p className="text-gray-600 mt-5 max-w-3xl mx-auto leading-8">
            Have questions or need appliance repair? Contact us using any of the
            methods below. Our support team is always ready to assist you.
          </p>

        </div>

        {/* Cards */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">

          {/* Phone */}

          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-2xl group-hover:bg-blue-600 group-hover:text-white transition duration-300">

              <FaPhoneAlt />

            </div>

            <h3 className="text-xl font-bold mt-6">
              Phone
            </h3>

            <a
              href="tel:+9779766896866"
              className="block mt-3 text-gray-600 hover:text-blue-600"
            >
              +977-9766896866
            </a>

          </div>

          {/* Email */}

          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-red-100 text-red-600 flex items-center justify-center text-2xl group-hover:bg-red-600 group-hover:text-white transition duration-300">

              <FaInstagram />

            </div>

            <h3 className="text-xl font-bold mt-6 ">
              Instagram
            </h3>

            <a href="https://www.instagram.com"
            className="block mt-3 text-gray-600 hover:text-red-600 cursor-pointer">
                 Repair Pro
            </a>

          </div>

          {/* Address */}

          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">
            <div className="w-16 h-16 mx-auto rounded-full bg-yellow-200 text-yellow-600 flex items-center justify-center text-2xl group-hover:bg-yellow-500 group-hover:text-white transition duration-300">

              <FaMapMarkerAlt />

            </div>

            <h3 className="text-xl font-bold mt-6">
              Address
            </h3>

            <p className="mt-3 text-gray-600 hover:text-yellow-600">
              Tinkune, Kathmandu
            </p>

          </div>

          {/* Whatsapp */}

          <div className="group bg-gray-50 rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 text-center">

            <div className="w-16 h-16 mx-auto rounded-full bg-green-100 text-green-600 flex items-center justify-center text-2xl group-hover:bg-green-600 group-hover:text-white transition duration-300">

              <FaWhatsapp />

            </div>

            <h3 className="text-xl font-bold mt-6">
              Whatsapp
            </h3>

            <a
              href="tel:+9779766896866"
              className="block mt-3 text-gray-600 hover:text-green-600"
            >
              +977-9836849773
            </a>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactInfo;