import React from "react";

const ProcessCard = ({ number, icon, title, description }) => {
  return (
    <div className="group relative bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 text-center">

      {/* Number */}
      <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-orange-500 text-white font-bold text-lg flex items-center justify-center shadow-lg">
        {number}
      </div>

      {/* Icon */}
      <div className="mt-6 w-20 h-20 mx-auto rounded-full bg-blue-100 text-blue-600 flex items-center justify-center text-4xl transition-all duration-300 group-hover:bg-blue-600 group-hover:text-white">
        {icon}
      </div>

      {/* Title */}
      <h3 className="mt-6 text-xl font-bold text-gray-800">
        {title}
      </h3>

      {/* Description */}
      <p className="mt-3 text-gray-600 leading-7 text-sm sm:text-base">
        {description}
      </p>

    </div>
  );
};

export default ProcessCard;