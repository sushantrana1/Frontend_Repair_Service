import {
  FaStar,
  FaQuoteLeft,
} from "react-icons/fa";

const testimonials = [
  {
    name: "Ram Bahadur",
    location: "Kathmandu",
    image: "https://i.pravatar.cc/150?img=12",
    review:
      "The technician arrived on time and repaired my washing machine quickly. Excellent service and very professional.",
  },
  {
    name: "Sita Sharma",
    location: "Lalitpur",
    image: "https://i.pravatar.cc/150?img=32",
    review:
      "Affordable pricing and friendly staff. My refrigerator is working perfectly again. Highly recommended.",
  },
  {
    name: "Hari Karki",
    location: "Bhaktapur",
    image: "https://i.pravatar.cc/150?img=15",
    review:
      "Fast response and quality repair. They explained everything clearly before starting the work.",
  },
];

const Testimonials = () => {
  return (
    <section className="py-14 bg-gradient-to-l from-blue-50 via-white to-blue-100">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl font-bold text-gray-800">
            What Our Customers Say
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Customer satisfaction is at the heart of everything we do.
            Here's what our happy customers have to say about our repair
            services.
          </p>

        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {testimonials.map((item, index) => (

            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg p-8 relative transition duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >

              <FaQuoteLeft className="text-blue-100 text-5xl absolute top-6 right-6" />

              <div className="flex items-center gap-4 mb-6">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover border-4 border-blue-100"
                />

                <div>

                  <h4 className="font-bold text-lg text-gray-800">
                    {item.name}
                  </h4>

                  <p className="text-gray-500 text-sm">
                    {item.location}
                  </p>

                </div>

              </div>

              <div className="flex text-yellow-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} />
                ))}
              </div>

              <p className="text-gray-600 leading-7">
                "{item.review}"
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Testimonials;