import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

import ServiceCard from "../components/Service/ServiceCard";
import services from "../data/Services";

const ServicesPage = () => {
  return (
    <section className="bg-gradient-to-br from-blue-200 via-white to-cyan-100 py-10 md:py-7 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-orange-500 transition mb-8"
        >
          <FaArrowLeft />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="text-center mb-13" data-aos="fade-up">

          <span className="inline-block bg-orange-100 text-orange-500 px-5 py-2 rounded-full font-semibold uppercase tracking-wide">
            Our Services
          </span>

          <h1 className="mt-5 text-4xl md:text-5xl font-bold text-gray-800">
            Professional Repair Services
          </h1>

          <p className="mt-6 text-gray-500 max-w-6xl mx-auto text-lg leading-8">
            We provide professional repair, installation, and maintenance
            services for a wide range of home appliances, electrical systems,
            and plumbing solutions. Our certified technicians ensure quality
            workmanship, genuine spare parts, and reliable customer support.
          </p>

        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-8 ">

          {services.map((service, index) => (
            <div
              key={service.id}
              data-aos="zoom-in-up"
              data-aos-delay={index * 80}
            >
              <ServiceCard
                image={service.image}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default ServicesPage;