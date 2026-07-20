import { FaCheckCircle } from "react-icons/fa";
import Team from "../../assets/images/team.png"; 

const points = [
  "Certified and experienced repair technicians",
  "Fast response with same-day service",
  "Quality workmanship with genuine spare parts",
  "Customer satisfaction is our top priority",
  "Reliable after-service support",
  "Affordable and transparent pricing",
];

const WhoWeAre = () => {
  return (
    <section className="bg-gradient-to-l from-blue-50 via-white to-blue-100 py-16 md:py-14">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-600 px-4 py-2 rounded-full text-sm font-semibold">
              Who We Are
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900">
              Your Trusted Partner for Home<span className="text-blue-500"> Appliance Repairs</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-justify">
              We are a team of skilled and passionate technicians dedicated to
              providing dependable repair solutions for homes and businesses.
              With years of experience, we handle everything from appliance
              repairs to electrical and plumbing services, ensuring every job is
              completed with precision, honesty, and professionalism.
            </p>

            <div className="grid sm:grid-cols-2 gap-4 mt-8">

              {points.map((item, index) => (
                <div
                  key={index}
                  className="flex items-start gap-3"
                >
                  <FaCheckCircle className="text-blue-600 mt-1 flex-shrink-0" />

                  <p className="text-gray-700">
                    {item}
                  </p>
                </div>
              ))}

            </div>

          </div>

          {/* Right Image */}
          <div className="relative">

            <img
              src={Team}
              alt="Our Team"
              className="rounded-3xl w-full hover:scale-105 transition duration-500"
            />

          </div>

        </div>

      </div>
    </section>
  );
};

export default WhoWeAre;