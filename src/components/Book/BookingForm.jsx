import {
  FaUser,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaTools,
  FaCalendarAlt,
  FaClock,
  FaCommentDots,
  FaArrowRight,
} from "react-icons/fa";

const BookingForm = () => {
  return (
    <div
      data-aos="fade-right"
      className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 lg:p-10"
    >
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Book Your Service
      </h2>

      <p className="text-gray-500 mb-8">
        Fill in your details and we'll contact you shortly.
      </p>

      <form className="space-y-6">

        {/* Name & Phone */}
        <div className="grid md:grid-cols-2 gap-5">

          <div className="relative">
            <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <input
              type="text"
              placeholder="Full Name"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

          <div className="relative">
            <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <input
              type="tel"
              placeholder="Phone Number"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

        </div>

        {/* Email & Address */}
        <div className="grid md:grid-cols-2 gap-5">

          <div className="relative">
            <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <input
              type="email"
              placeholder="Email Address"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

          <div className="relative">
            <FaMapMarkerAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <input
              type="text"
              placeholder="Your Address"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

        </div>

        {/* Service & Brand */}
        <div className="grid md:grid-cols-2 gap-5">

          <div className="relative">
            <FaTools className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <select
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition appearance-none bg-white"
            >
              <option>Select Service</option>
              <option>Air Conditioner Repair</option>
              <option>Refrigerator Repair</option>
              <option>Washing Machine Repair</option>
              <option>Microwave Repair</option>
              <option>Television Repair</option>
              <option>Electrical Service</option>
              <option>Plumbing Service</option>
            </select>
          </div>

          <input
            type="text"
            placeholder="Appliance Brand (Samsung, LG...)"
            className="w-full border border-gray-300 rounded-xl py-3 px-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
          />

        </div>

        {/* Date & Time */}
        <div className="grid md:grid-cols-2 gap-5">

          <div className="relative">
            <FaCalendarAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <input
              type="date"
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition"
            />
          </div>

          <div className="relative">
            <FaClock className="absolute left-4 top-1/2 -translate-y-1/2 text-blue-600" />

            <select
              className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition appearance-none bg-white"
            >
              <option>Preferred Time</option>
              <option>Morning</option>
              <option>Afternoon</option>
              <option>Evening</option>
            </select>
          </div>

        </div>

        {/* Problem Description */}
        <div className="relative">
          <FaCommentDots className="absolute left-4 top-5 text-blue-600" />

          <textarea
            rows="5"
            placeholder="Describe the issue with your appliance..."
            className="w-full border border-gray-300 rounded-xl pt-4 pl-12 pr-4 outline-none focus:border-blue-600 focus:ring-4 focus:ring-blue-100 transition resize-none"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 hover:from-blue-700 hover:to-cyan-600 transition-all duration-300 hover:shadow-xl"
        >
          Book Service

          <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-2" />
        </button>

      </form>
    </div>
  );
};

export default BookingForm;