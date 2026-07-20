import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "How long does a repair usually take?",
    answer:
      "Most appliance repairs are completed within 1–2 hours, depending on the type of appliance and the complexity of the issue.",
  },
  {
    question: "Do you provide a service warranty?",
    answer:
      "Yes. We provide a service warranty on eligible repairs, ensuring peace of mind and customer satisfaction.",
  },
  {
    question: "What brands do you repair?",
    answer:
      "We repair major appliance brands including Samsung, LG, Haier, Whirlpool, Panasonic, Bosch, IFB, Godrej, and many more.",
  },
  {
    question: "Do you charge a visiting or inspection fee?",
    answer:
      "A standard inspection fee may apply depending on your location and the service requested. The fee is explained before work begins.",
  },
  {
    question: "Which areas do you serve?",
    answer:
      "We provide repair services across major cities and nearby areas. Contact us to confirm service availability in your location.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-14 pb-2 bg-gradient-to-l from-blue-50 via-white to-blue-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-14" data-aos="fade-up">
          <span className="inline-block bg-blue-100 text-blue-700 px-5 py-2 rounded-full font-semibold mb-4">
            FAQs
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Find answers to the most common questions about our appliance repair
            services and booking process.
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">

          {faqs.map((faq, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className={`rounded-2xl border transition-all duration-300 overflow-hidden
                ${
                  activeIndex === index
                    ? "border-blue-600 shadow-xl bg-blue-50"
                    : "border-gray-200 bg-white hover:border-blue-400 hover:shadow-lg"
                }`}
            >

              {/* Question */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex items-center justify-between text-left p-6"
              >
                <h3 className="text-lg font-semibold text-gray-800 pr-6">
                  {faq.question}
                </h3>

                <div
                  className={`text-blue-600 transition-transform duration-300 ${
                    activeIndex === index ? "rotate-180" : ""
                  }`}
                >
                  {activeIndex === index ? <FaMinus /> : <FaPlus />}
                </div>
              </button>

              {/* Answer */}
              <div
                className={`grid transition-all duration-500 ease-in-out ${
                  activeIndex === index
                    ? "grid-rows-[1fr]"
                    : "grid-rows-[0fr]"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 pb-6 text-gray-600 leading-7">
                    {faq.answer}
                  </div>
                </div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default FAQ;