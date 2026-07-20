import {
  FaUserCheck,
  FaHandshake,
  FaSmile,
  FaShieldAlt,
  FaCheckCircle,
  FaBolt,
  FaTools,
  FaMoneyBillWave,
  FaAward,
  FaCalendarAlt,
  FaHeadset,
  FaClock,
} from "react-icons/fa";

const features = [
  {
    icon: <FaUserCheck />,
    title: "Expert Technicians",
    description: "Certified professionals experienced in repairing all major home appliances.",
  },
  {
    icon: <FaHandshake />,
    title: "Customer-First Approach",
    description: "Friendly service with honest advice and transparent communication.",
  },
  {
    icon: <FaSmile />,
    title: "100% Satisfaction",
    description: "We stand behind our work to ensure every customer leaves satisfied.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Quality Service",
    description: "Only genuine spare parts and trusted repair techniques are used.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Quality Assurance",
    description: "Every repair is carefully inspected before delivery.",
  },
  {
    icon: <FaBolt />,
    title: "Fast Service",
    description: "Quick diagnosis and efficient repairs to save your time.",
  },
  {
    icon: <FaTools />,
    title: "Tailored Solutions",
    description: "Repair solutions customized for every appliance and problem.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Affordable Pricing",
    description: "Transparent pricing with no hidden charges.",
  },
  {
    icon: <FaAward />,
    title: "Commitment to Excellence",
    description: "Delivering dependable repairs with professional workmanship.",
  },
  {
    icon: <FaCalendarAlt />,
    title: "Flexible Scheduling",
    description: "Book appointments at a time that works for you.",
  },
  {
    icon: <FaHeadset />,
    title: "Dedicated Support",
    description: "Helpful customer support before and after every repair.",
  },
  {
    icon: <FaClock />,
    title: "Emergency Repairs",
    description: "Rapid response for urgent appliance breakdowns.",
  },
];

const WhyChooseUsPage = () => {
  return (
    <section className="bg-gradient-to-br from-blue-200 via-white to-cyan-200 py-12 sm:py-12 lg:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-12 lg:mb-13" data-aos="fade-up">

          <span className="inline-block bg-orange-100 text-orange-600 px-5 py-2 rounded-full font-semibold uppercase tracking-widest text-sm">
            Why Choose Us
          </span>

          <h1 className="mt-5 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight">
            Why Customers Trust <span className="text-orange-500">RepairPro</span>
          </h1>

          <p className="max-w-5xl mx-auto mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-7">
            We are committed to delivering reliable, affordable, and professional repair services.
             Our certified technicians ensure every 
            repair is completed with precision, genuine spare parts, and excellent customer support.
          </p>

        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">

          {features.map((feature, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 80}
              className="group bg-white rounded-2xl border border-gray-200 p-6 sm:p-7 lg:p-8 shadow-md transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:bg-gradient-to-br hover:from-blue-600 hover:to-cyan-600 cursor-pointer"
            >

              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-blue-100 flex items-center justify-center text-blue-600 text-3xl transition-all duration-500 group-hover:bg-white group-hover:text-blue-600 group-hover:scale-110 group-hover:rotate-6">
                {feature.icon}
              </div>

              {/* Title */}
              <h3 className="mt-6 text-xl sm:text-2xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-4 text-gray-600 text-sm sm:text-base leading-7 transition-colors duration-300 group-hover:text-blue-100">
                {feature.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsPage;