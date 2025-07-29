import React from "react";
import {
  Search,
  Moon,
  User,
  ShoppingCart,
  Menu,
  MapPin,
} from "lucide-react";

const Header = ({ onMenuClick }) => {
  return (
    <header className="bg-violet-600 text-white shadow-md p-4 flex flex-wrap items-center justify-between gap-4 border-b border-violet-700 relative">
      
      {/* 🍔 Mobile Sidebar Toggle */}
      <button onClick={onMenuClick} className="sm:hidden absolute left-4 top-4">
        <Menu size={24} className="text-yellow-200" />
      </button>

      {/* 🍽️ Logo */}
      <div className="flex items-center gap-2 sm:ml-10">
        <div className="text-2xl sm:text-3xl font-extrabold text-yellow-300 font-[Poppins]">
          🍽️ Foodie
        </div>
      </div>

      {/* 📍 Location + 🔍 Search */}
      <div className="flex flex-1 items-center gap-2 sm:gap-4 w-full sm:w-auto">
        {/* Location input */}
        <div className="flex items-center bg-violet-500 rounded-full px-3 py-1 w-36 sm:w-44 shadow-inner">
          <MapPin size={16} className="text-yellow-100 mr-1" />
          <input
            type="text"
            placeholder="Location"
            className="bg-transparent outline-none text-sm placeholder-yellow-100 text-white w-full"
          />
        </div>

        {/* Search input */}
        <div className="flex items-center bg-violet-500 rounded-full px-3 py-1 flex-grow shadow-inner">
          <Search className="text-yellow-100 mr-1" size={18} />
          <input
            type="text"
            placeholder="Search food..."
            className="outline-none text-sm bg-transparent placeholder-yellow-100 text-white w-full"
          />
        </div>
      </div>

      {/* 🎛️ Sort + Theme + Profile + Cart + Login/Signup */}
      <div className="flex items-center gap-2 sm:gap-3 flex-wrap sm:flex-nowrap">
        {/* Sort Dropdown */}
        

        {/* Theme Button */}
        <button className="p-2 rounded-full hover:bg-violet-500 transition" title="Toggle Theme">
          <Moon size={18} className="text-yellow-100" />
        </button>

        {/* Profile */}
        <button className="p-2 rounded-full hover:bg-violet-500 transition" title="Profile">
          <User size={18} className="text-yellow-100" />
        </button>

        {/* Cart */}
        <button className="p-2 rounded-full hover:bg-violet-500 transition" title="Cart">
          <ShoppingCart size={18} className="text-yellow-100" />
        </button>

        {/* Login & Signup */}
        <button className="bg-white text-violet-700 font-semibold px-4 py-1 rounded hover:bg-yellow-300 hover:text-black transition">
          Login
        </button>
        <button className="bg-white text-violet-700 font-semibold px-4 py-1 rounded hover:bg-yellow-300 hover:text-black transition">
          Sign Up
        </button>
        
      </div>
    </header>
  );
};

export default Header;

