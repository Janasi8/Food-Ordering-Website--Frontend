import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import HomePage from './components/HomePage';
import Categories from './components/Categories';
import FoodGrid from './components/FoodGrid';
import Footer from './components/Footer'; // Correctly imported

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex">
      {/* Sidebar: show/hide based on state */}
      {isSidebarOpen && (
        <Sidebar onClose={() => setIsSidebarOpen(false)} />
      )}

      {/* Main Content */}
      <div className="flex-1 bg-gray-100 min-h-screen flex flex-col">
        <Header onMenuClick={() => setIsSidebarOpen(!isSidebarOpen)} />
        <HomePage />
        <Categories />
        <FoodGrid />
        <Footer /> {/* ✅ Now Footer is rendered properly */}
      </div>
    </div>
  );
}

export default App;
