import React, { useState } from "react";
import { Home, ShoppingCart, Percent, X, Menu } from "lucide-react";

const Sidebar = ({ onClose }) => {
  return (
    <div className="w-60 bg-gray-200 text-black min-h-screen p-4 fixed top-0 left-0 z-40 shadow-md sm:relative sm:z-auto sm:block">
      <div className="flex justify-between items-center mb-6 sm:mb-8">
        <div className="text-2xl font-extrabold font-serif tracking-wide">
          🍽️ <span className="font-poppins">Foodie</span>
        </div>
        <button onClick={onClose} className="sm:hidden">
          <X size={20} />
        </button>
      </div>
      <nav>
        <ul>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-yellow-600">
            <Home size={20} /> Home
          </li>
          <li className="mb-4 flex items-center gap-2 cursor-pointer hover:text-yellow-600">
            <ShoppingCart size={20} /> Orders
          </li>
          <li className="flex items-center gap-2 cursor-pointer hover:text-yellow-600">
            <Percent size={20} /> Offers
          </li>
        </ul>
      </nav>
    </div>
  );
};

const SidebarWrapper = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Hamburger Menu Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="sm:hidden fixed top-4 left-4 z-50 bg-white text-black rounded-full p-2 shadow"
      >
        <Menu size={24} />
      </button>

      {/* Sidebar (only for mobile view when toggled) */}
      {isOpen && (
        <Sidebar onClose={() => setIsOpen(false)} />
      )}

      {/* Sidebar for large screens */}
      <div className="hidden sm:block">
        <Sidebar />
      </div>
    </>
  );
};

export default SidebarWrapper;
