import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Column 1: About Section */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              About Car Shop
            </h3>
            <p className="text-sm">
              Car Shop is your trusted destination for premium cars and
              exceptional service. Our mission is to deliver the best vehicles
              and ensure customer satisfaction.
            </p>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <NavLink to="/" className="hover:text-white">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:text-white">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/cars" className="hover:text-white">
                  Cars
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:text-white">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Column 3: Social Media */}
          <div>
            <h3 className="text-xl font-semibold text-white mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <NavLink
                to="#"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                aria-label="Facebook"
              >
                <FaFacebookF />
              </NavLink>
              <NavLink
                to="#"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                aria-label="Twitter"
              >
                <FaTwitter />
              </NavLink>
              <NavLink
                to="#"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                aria-label="Instagram"
              >
                <FaInstagram />
              </NavLink>
              <NavLink
                to="#"
                className="p-3 bg-gray-700 hover:bg-gray-600 rounded-full text-white"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn />
              </NavLink>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="mt-8 text-center border-t border-gray-700 pt-4">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Car Shop. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
