import { FaPhoneAlt, FaArrowRight } from "react-icons/fa";
import { Link } from "react-router-dom";

const CTA = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-cyan-600 px-6 py-7 md:py-10 lg:py-14 " >
      <div className="max-w-7xl mx-auto ">
        <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-10 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
 
          {/* Left Content */}
          <div className="text-white max-w-2xl">
            <span className="inline-block bg-white/20 text-sm px-4 py-2 rounded-full mb-4">
              Need Appliance Repair?
            </span>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-6">
              Get Your Appliance Fixed
              <span className="block text-yellow-300">
                By Certified Experts
              </span>
            </h2>

            <p className="text-blue-100 text-lg leading-relaxed">
              Our experienced technicians are ready to repair your washing
              machine, refrigerator, air conditioner, microwave, television,
              and more. Fast service, genuine spare parts, and affordable
              pricing.
            </p>
          </div>

          {/* Right Content */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to = "/bookservice" className="flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-xl transition duration-300 shadow-lg hover:scale-105">
              <FaPhoneAlt />
              Book Service
            </Link>

            <Link to= "/services"
            className="flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl transition duration-300">
              Learn More
              <FaArrowRight />
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CTA;