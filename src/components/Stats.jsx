import { useInView } from "react-intersection-observer";
import {
    FaTools,
    FaUsers,
    FaAward,
    FaHeadset,
} from "react-icons/fa";

const stats = [
    {
        icon: <FaTools />,
        end: 5000,
        suffix: "+",
        title: "Repairs Completed",
    },
    {
        icon: <FaUsers />,
        end: 2500,
        suffix: "+",
        title: "Happy Customers",
    },
    {
        icon: <FaAward />,
        end: 15,
        suffix: "+",
        title: "Years of Experience",
    },
    {
        icon: <FaHeadset />,
        text: "24/7",
        title: "Customer Support",
    },
];

const Stats = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.3,
    });

    return (
        <section
            ref={ref}
            className="overflow-hidden pt-0 pb-12 bg-gradient-to-r from-blue-700 to-cyan-600"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 lg:p-12 ">

                    {/* Heading */}
                    <div
                        className="text-center mb-10"
                        data-aos="fade-up"
                    >
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white">
                            Our Achievements
                        </h2>

                        <p className="mt-4 text-sm sm:text-base lg:text-lg text-blue-100 max-w-2xl mx-auto leading-6 sm:leading-7 px-2">
                            We are proud to deliver trusted, reliable, and professional
                            appliance repair services with thousands of satisfied customers
                            across Nepal.
                        </p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">

                        {stats.map((item, index) => (
                            <div
                                key={index}
                                data-aos="zoom-in-up"
                                data-aos-delay={index * 150}
                                className=" group bg-white hover:bg-gradient-to-b hover:from-white hover:to-blue-50 rounded-2xl p-5 sm:p-6 lg:p-8
                text-center shadow-lg transition-all duration-500 hover:-translate-y-3 hover:scale-105 hover:shadow-2xl hover:shadow-blue-500/30 cursor-pointer"  >

                                {/* Icon */}
                                <div
                                    className=" w-14 h-14 sm:w-16 sm:h-16 lg:w-20 lg:h-20 text-2xl sm:text-3xl lg:text-4xl
                  mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700  transition-all
                  duration-500 group-hover:bg-blue-700 group-hover:text-white group-hover:rotate-12 group-hover:scale-110">
                                    {item.icon}
                                </div>

                                {/* Number */}
                                <h3
                                    className=" mt-6 text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-700" >
                                    {item.text ? (
                                        item.text
                                    ) : (
                                        <>
                                            {item.end}
                                        </>
                                    )}
                                </h3>

                                {/* Title */}
                                <p
                                    className="
                  text-sm sm:text-base text-gray-600 font-medium
                  transition-colors
                  duration-300
                  group-hover:text-gray-800
                "
                                >
                                    {item.title}
                                </p>

                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </section>
    );
};

export default Stats;