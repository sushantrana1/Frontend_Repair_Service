import Why from "../../assets/images/why.png"
import { FaUserCheck, FaClock, FaMoneyBillWave, FaShieldAlt, FaArrowRight, } from "react-icons/fa";
import FeatureCard from "./FeatureCard";
import { Link } from "react-router-dom";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Certified Experts",
    description:
      "Experienced technicians trained to repair all major home appliances.",
  },
  {
    icon: <FaClock />,
    title: "On-Time Service",
    description:
      "Quick doorstep repair service with punctual appointments.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description:
      "Transparent pricing with no hidden costs.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Service Warranty",
    description:
      "Warranty support for complete peace of mind.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="py-7 md:py-10 lg:py-14 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-center">

          {/* Left Image */}
          <div className="group flex justify-center">

            <div className="bg-white rounded-3xl shadow-xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">

              <img
                src={Why}
                alt="Technician"
                className="w-full max-w-xs sm:max-w-md lg:max-w-lg object-contain transition-transform duration-500 group-hover:scale-110"
              />

            </div>

          </div>

          {/* Right Content */}
          <div className="text-center lg:text-left">

            <span className="text-orange-500 text-2xl sm:text-xl font-semibold uppercase tracking-widest">
              Why Choose Us
            </span>

            <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
              Why Customers Trust Repair
              <span className="text-orange-600">Pro</span>
            </h2>

            <p className="mt-5 text-gray-600 text-base leading-7">
              We provide trusted repair services with certified technicians,
              affordable pricing, genuine spare parts, and excellent customer
              support. Your satisfaction is our priority.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-8">

              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  icon={feature.icon}
                  title={feature.title}
                  description={feature.description}
                />
              ))}

            </div>

            {/* Button */}
            <div className="mt-8 flex justify-center lg:justify-start">
              <Link
                to="/whychooseus"
                className="inline-flex items-center gap-3 bg-orange-500 hover:bg-orange-600 text-white px-7 py-3 rounded-xl font-semibold transition duration-300 hover:scale-105"
              >
                Learn More
                <FaArrowRight />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUs;