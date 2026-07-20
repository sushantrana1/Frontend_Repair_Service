import Team from "../assets/images/team.png";
import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { IoTimeOutline } from "react-icons/io5";
import { BsPeopleFill } from "react-icons/bs";
import { MdAttachMoney } from "react-icons/md";
import { GrServices } from "react-icons/gr";
import { AiOutlineSolution } from "react-icons/ai";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-blue-50 via-white to-blue-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 pt-5 pb-10 sm:pt-6 sm:pb-14 lg:pt-10 lg:pb-20">

        <div className="flex flex-col-reverse lg:flex-row items-center gap-10 lg:gap-16">

          {/* Left Content */}
          <div className="w-full lg:w-1/2 text-center lg:text-left mx-auto lg:mx-0">

            {/* Badge */}
            <div className="flex justify-center lg:justify-start">
              <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-600 px-4 py-2 rounded-full text-sm sm:text-base font-semibold">
                <VscWorkspaceTrusted className="text-orange-500 text-xl sm:text-2xl" />
                Trusted Repair Experts
              </span>
            </div>

            {/* Heading */}
            <h1 className="mt-6 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Professional
              <span className="text-blue-600"> Home </span>
              <br className="hidden sm:block" />
              Repair Services
            </h1>

            {/* Description */}
            <p className="mt-6 text-gray-600 text-sm sm:text-base lg:text-lg leading-7">
              We provide fast, reliable, and affordable repair services for your
              home appliances and electrical systems. Our experienced technicians
              are ready to help.
            </p>

            {/* Features */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <BsPeopleFill className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Skilled Technicians
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <VscWorkspaceTrusted className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Trusted & Reliable
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <MdAttachMoney className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Affordable Pricing
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <AiOutlineSolution className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Tailored Solutions
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <IoTimeOutline className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Fast Service
              </div>

              <div className="flex items-center gap-3 justify-center md:justify-start font-semibold text-gray-600">
                <GrServices className="text-white rounded-full p-1 w-7 h-7 bg-blue-600" />
                Quality Service
              </div>

            </div>

            {/* Buttons */}
            <div className="flex flex-col md:flex-row gap-4 mt-10 justify-center lg:justify-start">

              <Link to = "/bookservice" className="w-full md:w-auto bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition duration-300"> 
                Book Service
                <FaArrowRight />
              </Link>

              <a
                href="tel:+977976689866"
                className="group w-full md:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-4 rounded-xl flex items-center justify-center gap-2 transition-all duration-300 hover:shadow-lg hover:scale-105"
              >
                <FaPhoneAlt className="group-hover:rotate-12 transition-transform duration-300" />
                Call Now
              </a>

            </div>

          </div>

          {/* Right Image */}
          <div className="w-full lg:w-1/2 flex justify-center relative mt-6 mb-20 lg:mt-0 group">

            {/* Background Circle */}
            <div
              className="absolute w-64 h-64 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[500px] lg:h-[500px]
    bg-blue-100 rounded-full transition-all duration-500
    group-hover:scale-110 group-hover:bg-blue-200"
            ></div>

            {/* Glow Effect */}
            <div
              className="absolute w-52 h-52 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-[420px] lg:h-[420px]
    bg-orange-200/30 rounded-full blur-3xl opacity-0
    group-hover:opacity-100 transition-all duration-500"
            ></div>

            {/* Image */}
            <img
              src={Team}
              alt="Repair Team"
              className=" relative z-10 w-[260px] sm:w-[360px] md:w-[430px] lg:w-full max-w-xl object-contain transition-all
     duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-3 cursor-pointer drop-shadow-2xl
     animate-floating group-hover:scale-110 group-hover:-translate-y-3"/>

          </div>

        </div>

      </div>
    </section>
  );
};

export default Hero;