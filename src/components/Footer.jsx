import React from "react";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-10 px-6 mt-5 border-t-2 border-white z-30 w-full">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">
        {/* Left Section */}
        <div className="space-y-5">
          {/* Address */}
          <div className="flex items-start space-x-3">
            <FaMapMarkerAlt className="text-xl text-gray-400" />
            <p className="-mt-2">
              Lucknow Uttar Pradesh, <br />
              <span className="font-semibold"> India</span>
            </p>
          </div>

          {/* Phone */}
          <div className="flex items-center space-x-3">
            <FaPhoneAlt className="text-xl text-gray-400" />
            <p className="font-semibold">+91 95xx8x 9xx2</p>
          </div>

          {/* Email */}
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-xl text-gray-400" />
            <a
              href="mailto:amannarayan09@gmail.com"
              className="text-blue-400 hover:underline"
            >
              amxxxxx9@gmail.com
            </a>
          </div>
        </div>

        {/* Right Section */}
        <div>
          <h3 className="font-semibold text-lg mb-3">About Devloper</h3>
          <p className="text-sm leading-relaxed mb-5">
            Aman Narayan | Full Stack Developer in Progress
            <br />
            Through the Netflix projects, I've strengthened my React.js and
            overall development skills.
          </p>

          {/* Social Icons */}
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/aman-narayan-74216b30b"
              className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"
            >
              <FaLinkedinIn />
            </a>
            <a
              href="https://github.com/Aman-Narayan"
              className="bg-gray-800 p-2 rounded hover:bg-gray-700 transition"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
