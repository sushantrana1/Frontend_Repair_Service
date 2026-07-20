import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTools,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="relative overflow-hidden min-h-screen bg-gradient-to-r from-blue-50 via-white to-cyan-200 flex items-center justify-center px-4 sm:px-6 py-8">
      <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2 transition-all duration-500">

        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-cyan-600 text-white p-12 relative overflow-hidden">

          <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>
          <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-16 -right-16"></div>

          <div className="relative z-10">
            <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-700 text-4xl mb-8 transition duration-500 hover:rotate-12 hover:scale-110 cursor-pointer">
              <FaTools />
            </div>

            <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
              Welcome Back
            </h1>

            <p className="text-blue-100 text-base md:text-lg leading-8">
              Login to book repair services, track your service requests,
              manage appointments, and connect with our certified technicians
              anytime.
            </p>

            <div className="mt-10 border-l-4 border-yellow-400 pl-5">
              <p className="italic text-blue-100">
                "Fast, Reliable & Professional Home Appliance Repair."
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="p-8 md:p-14">

          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
            Login
          </h2>

          <p className="text-gray-500 mb-10">
            Sign in to continue to your account.
          </p>

          <form className="space-y-6">

            {/* Email */}
            <div>
              <label className="block mb-2 text-gray-700 font-medium">
                Email Address
              </label>

              <div className="relative group">
                <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition duration-300 group-focus-within:text-blue-600" />

                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-blue-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>

              <label className="block mb-2 text-gray-700 font-medium">
                Password
              </label>

              <div className="relative group">

                <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 transition duration-300 group-focus-within:text-blue-600" />

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter your password"
                  className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 hover:border-blue-400"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

            </div>

            {/* Remember */}
            <div className="flex justify-between items-center text-sm">

              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" />
                Remember Me
              </label>

              <Link
                to="/forgot-password"
                className="text-blue-600 hover:underline"
              >
                Forgot Password?
              </Link>

            </div>

            {/* Login Button */}

            <button
              className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
            >
              Login
            </button>

            {/* Divider */}

            <div className="flex items-center gap-3">

              <hr className="flex-1" />

              <span className="text-gray-400 text-sm">
                OR
              </span>

              <hr className="flex-1" />

            </div>

           <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
             {/* Google */}

            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-400 hover:scale-105 transition-all duration-300"
            >
              <FaGoogle className="text-red-500" />
              Continue with Google
            </button>

            {/* facebook */}
            <button
              type="button"
              className="w-full border border-gray-300 py-3 rounded-xl flex items-center justify-center gap-3 hover:bg-blue-50 hover:border-blue-400 hover:scale-105 transition-all duration-300"
            >
              <FaFacebook className="text-blue-500" />
              Continue with Facebook
            </button>
           </div>

          </form>

          <p className="text-center mt-8 text-gray-600">

            Don't have an account?

            <Link
              to="/signup"
              className="text-blue-600 font-semibold ml-2 hover:text-cyan-600 transition duration-300"
            >
              Sign Up
            </Link>

          </p>

        </div>

      </div>
    </section>
  );
};

export default Login;