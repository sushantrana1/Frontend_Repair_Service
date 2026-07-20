import { Link } from "react-router-dom";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import Technician from "../../assets/images/technician.avif";

const AboutHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-50 via-white to-blue-100 py-14 md:py-14">
      {/* Background Blur */}
      <div className="absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-200/30 blur-3xl"></div>
      <div className="absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-orange-200/30 blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">

          {/* Left Content */}
          <div className="text-center lg:text-left">

            {/* Badge */}
            <span className="inline-flex items-center rounded-full bg-orange-100 px-4 py-2 text-sm font-semibold text-orange-600 shadow-sm">
              About Our Company
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Trusted Home Appliance
              <span className="block text-blue-600">
                Repair Experts
              </span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-base sm:text-lg leading-8 text-justify lg:pr-10">
              We provide fast, reliable, and affordable repair services for all
              major home appliances. From air conditioners and refrigerators to
              washing machines, electrical systems, and plumbing solutions, our
              experienced technicians are committed to delivering exceptional
              workmanship, transparent pricing, and customer satisfaction with
              every repair.
            </p>

            {/* Buttons */}
            <div className="mt-8 flex flex-col sm:flex-row items-center lg:items-start gap-4">

              <Link
                to="/services"
                className="group inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-7 py-3.5 font-semibold text-white shadow-lg transition-all duration-300 hover:bg-blue-700 hover:-translate-y-1 hover:shadow-xl"
              >
                Our Services
                <FaArrowRight className="transition-transform duration-300 group-hover:translate-x-1" />
              </Link>

              <Link
                to="/contact"
                className="group inline-flex items-center justify-center gap-2 rounded-xl border-2 border-blue-600 px-7 py-3.5 font-semibold text-blue-600 transition-all duration-300 hover:bg-blue-600 hover:text-white hover:-translate-y-1"
              >
                <FaPhoneAlt />
                Contact Us
              </Link>

            </div>

          </div>

          {/* Right Image */}
          <div className="relative flex justify-center ">

            {/* Decorative Circle */}
            <div className="overflow-hidden rounded-3xl shadow-2xl">

            <img
              src={Technician}
              alt="Repair Technician"
              className="relative w-full max-w-sm sm:max-w-md lg:max-w-lg object-contain transition-all duration-500 hover:scale-105 drop-shadow-2xl"
            />
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutHero;