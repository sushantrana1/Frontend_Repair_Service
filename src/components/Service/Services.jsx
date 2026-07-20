import Ac from "../../assets/services/Ac.png";
import Appliances from "../../assets/services/Appliances.jpg";
import Electrical from "../../assets/services/Electrical.jpg";
import Plumbing from "../../assets/services/Plumbing.jpg";
import Refrigerator from "../../assets/services/Refrigerator.jpeg";
import WashingMachine from "../../assets/services/WashingMachine.jpeg";

import ServiceCard from "./ServiceCard";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    image: Electrical,
    title: "Electrical Repair",
    description:
      "Professional electrical installation, maintenance, and repair services.",
  },
  {
    image: Plumbing,
    title: "Plumbing",
    description:
      "Expert plumbing solutions for leaks, pipes, taps, and drainage systems.",
  },
  {
    image: Ac,
    title: "AC Repair",
    description:
      "Fast AC installation, servicing, gas filling, and maintenance.",
  },
  {
    image: WashingMachine,
    title: "Washing Machine",
    description:
      "Complete repair and maintenance for all washing machine brands.",
  },
  {
    image: Refrigerator,
    title: "Refrigerator",
    description:
      "Cooling issues, compressor replacement, and refrigerator servicing.",
  },
  {
    image: Appliances,
    title: "Home Appliances",
    description:
      "Repair services for microwave, geyser, water purifier, and more.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-7 md:py-10 lg:py-14 bg-gradient-to-l from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-6 ">

        <div className="text-left">

          <span className="text-orange-500 text-2xl font-semibold uppercase tracking-widest">
            Our Services
          </span>

          <h2 className="text-4xl lg:text-5xl font-bold mt-4 text-gray-800">
            Professional Repair Services
          </h2>

          <p className="mt-5 text-gray-600 mx-auto leading-8 text-justify text-lg">
            At RepairPro, we are committed to delivering reliable, affordable, and
            high-quality repair and maintenance services for both residential and
            commercial customers. Our team of experienced and certified technicians
            specializes in repairing a wide range of home appliances and electrical
            systems, including air conditioners, refrigerators, washing machines,
            electrical wiring, plumbing fixtures, kitchen appliances, and many other
            essential household equipment. <br /><br /> Using advanced tools, modern repair
            techniques, and genuine spare parts whenever possible, we ensure every repair
            is completed with precision, safety, and long-lasting results. Customer
            satisfaction is at the heart of everything we do, and we believe in honest
            pricing, transparent communication, and dependable after-service support.
            Whether you need routine maintenance, emergency repairs, or professional
            installation services, our dedicated team is always ready to assist you with
            exceptional workmanship and friendly service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 mt-12">

          {services.slice(0, 6).map((service, index) => (
            <ServiceCard
              key={index}
              image={service.image}
              title={service.title}
              description={service.description}
            />
          ))}

        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-8">
          <Link
            to="/services"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-xl"
          >
            View More Services
            <FaArrowRight />
          </Link>
        </div>
      </div>

    </section >
  );
};

export default Services;