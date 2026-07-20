import { FaCheckCircle, FaTools, FaUsers, FaAward } from "react-icons/fa";
import StoryImg from "../../assets/images/StoryImg.jpeg";

const features = [
  {
    icon: <FaTools />,
    title: "Expert Technicians",
    desc: "Skilled professionals with years of hands-on repair experience.",
  },
  {
    icon: <FaUsers />,
    title: "Customer First",
    desc: "Every repair is completed with honesty and customer satisfaction.",
  },
  {
    icon: <FaAward />,
    title: "Quality Service",
    desc: "Reliable workmanship using quality tools and genuine spare parts.",
  },
  {
    icon: <FaCheckCircle />,
    title: "Trusted Solutions",
    desc: "Affordable repairs backed by service warranty and support.",
  },
];

const OurStory = () => {
  return (
    <section className="py-14 md:py-14 bg-gradient-to-r from-blue-50 via-white to-blue-100 ">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Image */}
          <div className="relative">

            <div className="overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={StoryImg}
                alt="Our Story"
                className="w-full h-full object-cover transition duration-500 hover:scale-105"
              />
            </div>

            {/* Experience Badge */}
            <div className="absolute bottom-6 left-6 bg-blue-600 text-white rounded-2xl px-6 py-4 shadow-xl">
              <h3 className="text-3xl font-bold">10+</h3>
              <p className="text-sm">Years of Experience</p>
            </div>

          </div>

          {/* Content */}
          <div>

            <span className="inline-block bg-orange-100 text-orange-500 px-4 py-2 rounded-full text-sm font-semibold">
              Our Story
            </span>

            <h2 className="mt-5 text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
              Delivering Trusted Repair Services
              <span className="text-blue-600"> Since Day One</span>
            </h2>

            <p className="mt-6 text-gray-600 leading-8 text-justify">
              We started with a simple mission: to provide homeowners with
              dependable, affordable, and professional repair services they can
              trust. Over the years, we have built a strong reputation by
              combining technical expertise, transparent pricing, and a
              customer-first approach. Whether it's repairing home appliances,
              electrical systems, or plumbing issues, we strive to deliver
              lasting solutions that improve everyday life.
            </p>

            {/* Feature Cards */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">

              {features.map((item, index) => (
                <div
                  key={index}
                  className="p-5 rounded-2xl border border-gray-200 hover:border-blue-500 hover:shadow-lg transition-all duration-300"
                >
                  <div className="text-blue-600 text-2xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="font-bold text-gray-800 mb-2">
                    {item.title}
                  </h4>

                  <p className="text-gray-600 text-sm leading-6">
                    {item.desc}
                  </p>
                </div>
              ))}

            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default OurStory;
