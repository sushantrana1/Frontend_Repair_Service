import { FaArrowRight } from "react-icons/fa";

const ServiceCard = ({ image, title, description }) => {
  return (
    <div
      className="
        group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-3 "
    >
      {/* Image */}
      <div className="relative overflow-hidden">

        <img
          src={image}
          alt={title}
          className=" w-full h-52 sm:h-56 lg:h-60 object-cover transition-transform duration-700 group-hover:scale-110 "
        />

        {/* Dark overlay */}
        <div
          className=" absolute inset-0 bg-gradient-to-t from-black/40  via-transparent to-transparent opacity-0 group-hover:opacity-100 transition duration-500 "
        ></div>

      </div>

      {/* Content */}
      <div className="p-6 sm:p-7">

        <h3
          className=" text-xl sm:text-2x font-bold text-gray-800 group-hover:text-blue-600 transition "
        >
          {title}
        </h3>

        <p
          className="  mt-3  text-gray-600  text-sm  sm:text-base  leading-7 "
        >
          {description}
        </p>

        {/* Button

        <button
          className=" mt-6  inline-flex  items-center  gap-2  px-5  py-2.5  rounded-full  bg-blue-50
    text-blue-600 font-semibold transition-all duration-300 group-hover:bg-orange-500 group-hover:text-white "
        >
          Learn More
          <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
        </button> */}

      </div>
    </div>
  );
};

export default ServiceCard;