import {
    FaUser,
    FaEnvelope,
    FaPhoneAlt,
    FaRegEdit,
    FaPaperPlane,
} from "react-icons/fa";

const ContactForm = () => {
    return (
        <section className="py-4 px-2 sm:py-4 md:py-8 lg:py-8">
            <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100 ">

                <span className="text-blue-600 font-semibold uppercase tracking-wider">
                    Send Message
                </span>

                <h2 className="text-4xl font-bold text-gray-800 mt-3 mb-3">
                    We'd Love To Hear From You
                </h2>

                <p className="text-gray-600 mb-8">
                    Fill out the form below and our support team will contact you as soon as possible.
                </p>

                <form className="space-y-6">

                    {/* Name */}

                    <div className="relative group">

                        <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

                        <input
                            type="text"
                            placeholder="Full Name"
                            className="bg-gray-50 w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />

                    </div>

                    {/* Email */}

                    <div className="relative group">

                        <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="bg-gray-50 w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />

                    </div>

                    {/* Phone */}

                    <div className="relative group">

                        <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

                        <input
                            type="tel"
                            placeholder="Phone Number"
                            className="bg-gray-50 w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />

                    </div>

                    {/* Subject */}

                    <div className="relative group">

                        <FaRegEdit className="absolute left-4 top-5 text-gray-400 group-focus-within:text-blue-600 transition" />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="bg-gray-50 w-full pl-12 pr-4 py-4 rounded-xl border border-gray-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none transition"
                        />

                    </div>

                    {/* Message */}

                    <textarea
                        rows="3"
                        placeholder="Write your message..."
                        className="bg-gray-50 w-full rounded-xl border border-gray-300 p-4 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none resize-none transition"
                    ></textarea>

                    {/* Button */}

                    <a href="email:support@repairservice.com"
                        className="group w-full bg-gradient-to-r from-blue-600 to-cyan-500 hover:from-blue-700 hover:to-cyan-600 text-white py-4 rounded-xl font-semibold flex items-center justify-center gap-3 shadow-lg hover:shadow-2xl hover:-translate-y-1 transition-all duration-300">
                        <FaPaperPlane className="group-hover:translate-x-1 transition-transform duration-300" />
                        Send Message
                    </a>

                </form>

            </div>
        </section>
    );
};

export default ContactForm;