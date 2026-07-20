import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhoneAlt,
  FaLock,
  FaEye,
  FaEyeSlash,
  FaTools,
  FaGoogle,
  FaFacebook,
} from "react-icons/fa";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <section className="min-h-screen bg-gradient-to-r from-blue-50 via-white to-cyan-200 flex items-center justify-center px-4 py-8">

  <div className="w-full max-w-6xl bg-white rounded-3xl shadow-2xl overflow-hidden grid lg:grid-cols-2">

        {/* Left Side */}

    <div className="hidden lg:flex flex-col justify-center bg-gradient-to-br from-blue-700 to-cyan-600 text-white p-12 relative overflow-hidden">

      <div className="absolute w-72 h-72 bg-white/10 rounded-full -top-20 -left-20"></div>

      <div className="absolute w-60 h-60 bg-white/10 rounded-full -bottom-16 -right-16"></div>

      <div className="relative z-10">

        <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-blue-700 text-4xl mb-8 transition duration-300 hover:rotate-12 hover:scale-110">

          <FaTools />

        </div>

        <h1 className="text-5xl font-bold mb-6">
          Join Our Repair Service
        </h1>

        <p className="text-blue-100 text-lg leading-8 mb-10">
          Create your account to book appliance repair services, manage appointments, receive service updates, and connect with certified technicians anytime.
        </p>

        <div className="space-y-4">

          <div className="bg-white/10 rounded-xl p-4">
            ✔ Certified Technicians
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            ✔ Same Day Home Service
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            ✔ Genuine Spare Parts
          </div>

          <div className="bg-white/10 rounded-xl p-4">
            ✔ Affordable Pricing
          </div>

        </div>

      </div>

    </div>

        {/* Right Side */}

    <div className="p-8 md:p-14">

      <h2 className="text-4xl font-bold text-gray-800 mb-2">
        Create Account
      </h2>

      <p className="text-gray-500 mb-8">
        Fill in the details below to create your account.
      </p>

      <form className="space-y-5">
        {/* Full Name */}

<div>
  <label className="block mb-2 font-medium text-gray-700">
    Full Name
  </label>

  <div className="relative group">
    <FaUser className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

    <input
      type="text"
      placeholder="Enter your full name"
      className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
    />
  </div>
</div>

{/* Email */}

<div>
  <label className="block mb-2 font-medium text-gray-700">
    Email Address
  </label>

  <div className="relative group">
    <FaEnvelope className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

    <input
      type="email"
      placeholder="Enter your email"
      className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
    />
  </div>
</div>

{/* Phone */}

<div>
  <label className="block mb-2 font-medium text-gray-700">
    Phone Number
  </label>

  <div className="relative group">
    <FaPhoneAlt className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

    <input
      type="tel"
      placeholder="98XXXXXXXX"
      className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-4 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
    />
  </div>
</div>

{/* Password */}

<div>
  <label className="block mb-2 font-medium text-gray-700">
    Password
  </label>

  <div className="relative group">
    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

    <input
      type={showPassword ? "text" : "password"}
      placeholder="Enter your password"
      className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
    />

    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

{/* Confirm Password */}

<div>
  <label className="block mb-2 font-medium text-gray-700">
    Confirm Password
  </label>

  <div className="relative group">
    <FaLock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 group-focus-within:text-blue-600 transition" />

    <input
      type={showConfirmPassword ? "text" : "password"}
      placeholder="Confirm your password"
      className="w-full border border-gray-300 rounded-xl py-3 pl-12 pr-12 transition-all duration-300 focus:border-blue-600 focus:ring-4 focus:ring-blue-100 outline-none"
    />

    <button
      type="button"
      onClick={() =>
        setShowConfirmPassword(!showConfirmPassword)
      }
      className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-blue-600 transition"
    >
      {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

{/* Terms & Conditions */}

<div className="flex items-start gap-3">
  <input
    type="checkbox"
    className="mt-1 h-4 w-4 accent-blue-600 cursor-pointer"
  />

  <p className="text-sm text-gray-600">
    I agree to the{" "}
    <Link
      to="/terms"
      className="text-blue-600 hover:text-cyan-600 font-medium transition"
    >
      Terms & Conditions
    </Link>{" "}
    and{" "}
    <Link
      to="/privacy"
      className="text-blue-600 hover:text-cyan-600 font-medium transition"
    >
      Privacy Policy
    </Link>
  </p>
</div>

<button
  type="submit"
  className="w-full bg-gradient-to-r from-blue-600 to-cyan-500 text-white py-3 rounded-xl font-semibold shadow-lg hover:shadow-2xl hover:-translate-y-1 hover:scale-[1.02] transition-all duration-300"
>
  Create Account
</button>

<div className="flex items-center gap-3">

  <hr className="flex-1 border-gray-300" />

  <span className="text-gray-400 text-sm">
    OR
  </span>

  <hr className="flex-1 border-gray-300" />

</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

  {/* Google */}

  <button
    type="button"
    className="border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-red-50 hover:border-red-400 hover:scale-105 transition-all duration-300"
  >
    <FaGoogle className="text-red-500 text-lg" />
    Google
  </button>

  {/* Facebook */}

  <button
    type="button"
    className="border border-gray-300 rounded-xl py-3 flex items-center justify-center gap-3 hover:bg-blue-50 hover:border-blue-500 hover:scale-105 transition-all duration-300"
  >
    <FaFacebook className="text-blue-600 text-lg" />
    Facebook
  </button>

</div>

<p className="text-center mt-8 text-gray-600">

  Already have an account?

  <Link
    to="/login"
    className="text-blue-600 font-semibold ml-2 hover:text-cyan-600 transition"
  >
    Login
  </Link>

</p>
      </form>
      </div>
  </div>
  </section>
    );
};
export default Signup;