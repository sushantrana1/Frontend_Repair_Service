import { FaBullseye, FaEye } from "react-icons/fa";

const MissionVision = () => {
  return (
    <section className="py-14 md:py-14 bg-gradient-to-l from-blue-50 via-white to-blue-100">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
            Our Mission & Vision
          </span>

          <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
            Driven by Excellence,
            <span className="text-blue-600"> Focused on Your Satisfaction</span>
          </h2>

          <p className="mt-5 text-gray-600 leading-8">
            Our commitment goes beyond repairing appliances. We strive to build
            long-term relationships through quality workmanship, trusted service,
            and customer satisfaction.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {/* Mission */}
          <div className="group bg-gray-100 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-blue-500 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl mb-6 group-hover:bg-blue-600 group-hover:text-white transition">
              <FaBullseye />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Mission
            </h3>

            <p className="text-gray-600 leading-8 text-justify">
              To provide reliable, affordable, and professional repair services
              that restore comfort and convenience to every home. We are committed
              to delivering exceptional workmanship, honest pricing, and
              outstanding customer service with every repair we undertake.
            </p>

          </div>

          {/* Vision */}
          <div className="group bg-gray-100 border border-gray-200 rounded-3xl p-8 shadow-sm hover:shadow-xl hover:border-orange-500 transition-all duration-300">

            <div className="w-16 h-16 rounded-2xl bg-orange-100 text-orange-500 flex items-center justify-center text-3xl mb-6 group-hover:bg-orange-500 group-hover:text-white transition">
              <FaEye />
            </div>

            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              Our Vision
            </h3>

            <p className="text-gray-600 leading-8 text-justify">
              To become Nepal's most trusted repair service provider by embracing
              innovation, maintaining the highest quality standards, and building
              lasting relationships with customers through dependable and
              transparent service.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};

export default MissionVision;