import React from "react";

const FeatureCard = ({ icon, title, description }) => {
  return (
    <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
      <div className="w-16 h-16 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center text-3xl group-hover:bg-orange-500 group-hover:text-white transition">
        {icon}
      </div>

      <h3 className="text-xl font-bold mt-5 text-gray-800">
        {title}
      </h3>

      <p className="mt-3 text-gray-600 leading-7">
        {description}
      </p>
    </div>
  );
};

export default FeatureCard;