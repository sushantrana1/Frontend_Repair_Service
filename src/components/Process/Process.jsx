import {
  FaCalendarCheck,
  FaUserCog,
  FaTools,
  FaCheckCircle,
} from "react-icons/fa";

import ProcessCard from "./ProcessCard";

const steps = [
  {
    number: "01",
    icon: <FaCalendarCheck />,
    title: "Book Service",
    description:
      "Choose your required repair service and book an appointment online or by phone.",
  },
  {
    number: "02",
    icon: <FaUserCog />,
    title: "Technician Visits",
    description:
      "Our certified technician arrives at your location on time to inspect the problem.",
  },
  {
    number: "03",
    icon: <FaTools />,
    title: "Repair & Testing",
    description:
      "We repair your appliance using quality parts and thoroughly test it before completion.",
  },
  {
    number: "04",
    icon: <FaCheckCircle />,
    title: "Job Completed",
    description:
      "Enjoy your repaired appliance with confidence and service warranty support.",
  },
];

const Process = () => {
  return (
    <section className="py-7 md:py-10 lg:py-14 bg-gradient-to-l from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center">

          <span className="text-orange-500 text-2xl font-semibold uppercase tracking-widest">
            How It Works
          </span>

          <h2 className="mt-4 text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800">
            Our Simple Repair Process
          </h2>

          <p className="mt-4 w-auto  text-gray-600 leading-7">
            Getting your appliance repaired is easy. Just follow these
            four simple steps and let our experts handle the rest.
          </p>

        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 mt-14">

          {steps.map((step, index) => (
            <ProcessCard
              key={index}
              number={step.number}
              icon={step.icon}
              title={step.title}
              description={step.description}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default Process;