import {
  FaClipboardCheck,
  FaPhoneAlt,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaClipboardCheck />,
    title: "Book a Service",
    description:
      "Complete the booking form with your appliance details and preferred schedule.",
  },
  {
    icon: <FaPhoneAlt />,
    title: "Confirmation Call",
    description:
      "Our support team will contact you to verify your booking and answer any questions.",
  },
  {
    icon: <FaTools />,
    title: "Technician Visit",
    description:
      "A certified technician arrives on time to inspect and repair your appliance.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Repair Completed",
    description:
      "Your appliance is tested thoroughly and handed back in excellent working condition.",
  },
];

const HowBookingWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-r from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div
          className="text-center mb-16"
          data-aos="fade-up"
        >
          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-4">
            Booking Process
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            How Booking Works
          </h2>

          <p className="mt-5 text-gray-600 max-w-5xl mx-auto leading-7">
            We've made our repair process simple, transparent, and hassle-free.
            <br />
            Just follow these four easy steps to get your appliance repaired.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">

          {/* Desktop Line */}
          <div className="hidden lg:block absolute top-10 left-[12%] right-[12%] h-1 bg-blue-200 rounded-full"></div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">

            {steps.map((step, index) => (
              <div
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 150}
                className="group relative bg-white rounded-2xl shadow-lg p-8 text-center transition-all duration-500 hover:-translate-y-3 hover:shadow-blue-300/40 hover:shadow-2xl border border-transparent hover:border-blue-500"
              >
                {/* Step Number */}
                <div className="absolute top-5 right-5 w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center text-sm font-bold">
                  {index + 1}
                </div>

                {/* Icon */}
                <div className="w-20 h-20 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-4xl text-blue-600 transition-all duration-500 group-hover:bg-blue-600 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                  {step.icon}
                </div>

                {/* Title */}
                <h3 className="mt-6 text-2xl font-bold text-gray-800 group-hover:text-blue-700 transition">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="mt-4 text-gray-600 leading-7">
                  {step.description}
                </p>
              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default HowBookingWorks;