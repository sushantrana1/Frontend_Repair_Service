import {
  FaCheckCircle,
  FaPhoneAlt,
  FaClock,
  FaShieldAlt,
  FaTools,
  FaAward,
} from "react-icons/fa";

const features = [
  {
    icon: <FaTools />,
    title: "Certified Technicians",
  },
  {
    icon: <FaClock />,
    title: "Same-Day Service",
  },
  {
    icon: <FaShieldAlt />,
    title: "Service Warranty",
  },
  {
    icon: <FaAward />,
    title: "Genuine Spare Parts",
  },
  {
    icon: <FaCheckCircle />,
    title: "Affordable Pricing",
  },
];

const BookingInfo = () => {
  return (
    <div
      data-aos="fade-left"
      className="bg-gradient-to-br from-blue-500 to-cyan-700 rounded-3xl text-white p-6 shadow-xl h-fit">

      {/* Heading */}
      <h2 className="text-3xl font-bold text-center">
        Why Choose Us?
      </h2>

      <p className="text-blue-100 text-center mt-4 leading-7">
        Our experienced technicians provide fast, reliable, and affordable
        appliance repair services with guaranteed customer satisfaction.
      </p>

      {/* Features */}
      <div className="space-y-4 mt-5">

        {features.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-4 bg-white/10 rounded-xl p-4 hover:bg-white/20 transition duration-300"
          >
            <div className="text-2xl text-cyan-300">
              {item.icon}
            </div>

            <h4 className="font-semibold">
              {item.title}
            </h4>
          </div>
        ))}

      </div>

      {/* Emergency Call */}
      <div className="mt-4 bg-white text-blue-700 rounded-2xl p-6 text-center shadow-lg">

        <p className="text-gray-500 text-sm">
            Need Immediate Assistance?
        </p>

        <h3 className="text-2xl font-bold mt-2">
          +977-9766896866
        </h3>
        
        <a href="tel:+9779766896866"
        className="mt-2 group inline-flex items-center justify-center gap-3 bg-linear-to-r from-blue-600 to-cyan-600 text-gray-900 
        font-semibold px-6 py-2.5 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
        <FaPhoneAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>

      </div>

    </div>
  );
};

export default BookingInfo;