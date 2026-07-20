import { FaPhoneAlt, FaEnvelope, FaHeadset } from "react-icons/fa";

const ContactHero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-r from-blue-700 via-blue-600 to-cyan-500 text-white py-6">

      {/* Background Decorations */}
      <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-300/10 rounded-full blur-3xl"></div>

      <div className="relative max-w-7xl mx-auto px-6 py-4 lg:py-4">

        {/* Glass Container */}
        <div className="relative overflow-hidden rounded-3xl border border-white/30 bg-white/10 backdrop-blur-lg shadow-2xl px-8 md:px-14 py-14">

          {/* Glass Glow */}
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-transparent pointer-events-none"></div>

          <div className="relative z-10 max-w-4xl mx-auto text-center">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-md px-5 py-2 rounded-full mb-6 border border-white/20 shadow-lg">
              <FaHeadset className="text-yellow-300" />
              <span className="font-medium">
                We're Here to Help
              </span>
            </div>

            {/* Heading */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Contact Our
              <span className="text-yellow-300"> Repair Experts</span>
            </h1>

            {/* Description */}
            <p className="mt-6 text-lg md:text-xl text-blue-100 leading-8 max-w-4xl mx-auto">
              Have questions, need emergency appliance repair, or want to
              schedule a service? Our friendly support team is ready to assist
              you with fast, reliable, and professional solutions.
            </p>

            {/* Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row justify-center gap-5">

              {/* Call Button */}
              <a
                href="tel:+9779766896866"
                className="group inline-flex items-center justify-center gap-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold px-8 py-4 rounded-xl shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <FaPhoneAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>

              {/* Email Button */}
              <a
                href="mailto:support@repairservice.com"
                className="group inline-flex items-center justify-center gap-3 border-2 border-white text-white hover:bg-white hover:text-blue-700 font-semibold px-8 py-4 rounded-xl hover:shadow-2xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                <FaEnvelope className="group-hover:rotate-12 transition-transform duration-300" />
                Email Us
              </a>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactHero;