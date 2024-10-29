import React from "react";
import Navbar from "../components/navbar";

const HowToSignUp = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 py-12 px-6 sm:px-10 lg:px-20">
        {/* Video Section */}
        <div className="flex justify-center mb-12">
          <div
            className="relative w-full max-w-5xl"
            style={{ paddingBottom: "40%", height: 0 }}
          >
            <iframe
              className="absolute top-0 left-0 w-full h-2/3 rounded-lg shadow-lg"
              src="https://www.youtube.com/embed/PQ6KAe6T7FU?si=iO48ghjfpkq_Qxge"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Sign-Up Steps Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {/* Step 1 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[#b88e2f]">
              1. Select Your Role
            </h2>
            <ul className="text-sm lg:text-base text-gray-700">
              <li>
                <strong> • Taskers:</strong>: Browse products and hire services.
              </li>
              <li>
                <strong>• Tasker</strong>: Offer professional services (requires
                verification).
              </li>
              <li>
                <strong>• Merchant</strong>: Sell products on the marketplace
                (requires verification).
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[#b88e2f]">
              2. Provide Basic Information
            </h2>
            <ul className="text-sm lg:text-base text-gray-700">
              <li>
                Provide your name, contact details, location, and set a
                password.
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[#b88e2f]">
              3. Verification Process (For Taskers & Merchants)
            </h2>
            <ul className="text-xs lg:text-base text-gray-700">
              <li>
                <strong>• Submit Details</strong>: Upload relevant
                certifications, business documents, or portfolio (optional).
              </li>
              <li>
                <strong> • Wait for Review </strong>: Our team verifies your
                qualifications and approves your account within 24-48 hours.
              </li>
              <li>
                <strong>• Receive Login Info</strong>: Upon approval, you’ll get
                login details, allowing you to access your profile and begin
                listing services or products.
              </li>
            </ul>
          </div>

          {/* Step 4 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[#b88e2f]">
              4. Verify Your Email
            </h2>
            <ul className="text-sm lg:text-base text-gray-700">
              <li>Activate your account by confirming your email.</li>
            </ul>
          </div>

          {/* Step 5 */}
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h2 className="text-xl lg:text-2xl font-bold text-gray-800 mb-4 text-[#b88e2f]">
              5. Get Started
            </h2>
            <ul className="text-sm lg:text-base text-gray-700">
              <li>
                <strong>Customers:</strong> Browse products and services.
              </li>
              <li>
                <strong>Taskers & Merchants:</strong> Start listing services or
                products.
              </li>
            </ul>
          </div>

          {/* Sign-Up Button */}
          <div className="text-center lg:text-left flex flex-col items-center lg:items-start">
            <button className="bg-[#b88e2f] text-white py-3 px-6 rounded-lg shadow-md hover:bg-yellow-600 transition duration-300 text-lg lg:text-xl font-semibold mt-4">
              Sign Up Now
            </button>
            <p className="mt-4 text-sm lg:text-base">
              Already have an account?{" "}
              <a href="/login" className="text-[#b88e2f] hover:underline">
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowToSignUp;
