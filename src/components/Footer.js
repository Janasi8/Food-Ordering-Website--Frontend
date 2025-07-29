import React from "react";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  DownloadCloud,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-violet-600 text-white shadow-md pt-8 pb-4">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-8 px-4">
        {/* About Section */}
        <div>
          <h3 className="text-lg font-bold mb-2">About Foodie</h3>
          <p className="text-sm text-gray-200">
            Foodie brings your favorite meals to your doorstep. Quick delivery,
            delicious food, and a wide range of cuisines!
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-2">Contact Us</h3>
          <ul className="text-sm text-gray-200 space-y-1">
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@foodie.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +91-9876543210
            </li>
          </ul>
        </div>

        {/* Download & Social */}
        <div>
          <h3 className="text-lg font-bold mb-2">Get Our App</h3>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2 mb-3">
            <DownloadCloud size={18} /> Download for Android
          </button>
          <button className="bg-yellow-300 hover:bg-yellow-400 text-black px-4 py-2 rounded-full flex items-center gap-2">
            <DownloadCloud size={18} /> Download for iOS
          </button>
          <div className="mt-4 flex gap-3">
            <a href="#" className="hover:text-yellow-300">
              <Facebook size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Instagram size={20} />
            </a>
            <a href="#" className="hover:text-yellow-300">
              <Twitter size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Text */}
      <div className="mt-10 border-t border-violet-500 pt-4 text-center text-sm text-gray-300">
        &copy; {new Date().getFullYear()} <span className="font-semibold text-yellow-200">Foodie</span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
