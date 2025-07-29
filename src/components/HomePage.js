import React from "react";

const HomePage = () => {
  return (
    <div className="p-4">
      {/* Hero Image */}
      <div className="relative w-full h-64 mb-8">
        <img
          src="https://wallpapers.com/images/hd/food-4k-spdnpz7bhmx4kv2r.jpg"
          alt="Delicious food"
          className="w-full h-full object-cover rounded-xl shadow-lg"
        />
        <div className="absolute inset-0 bg-black bg-opacity-30 flex flex-col justify-center items-center text-white rounded-xl">
          <h1 className="text-4xl font-bold mb-2">Welcome to Foodie</h1>
          <p className="text-lg">From street food to fine dining, we have it all!</p>
        </div>
      </div>

      {/* Offers Section */}
      <h2 className="text-2xl font-bold text-gray-800 mb-4">🔥 Trending Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">50% off on all Pizzas 🍕</h3>
          <p className="text-gray-600">Limited time offer! Grab your favorite slice now.</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Buy 1 Get 1 Free 🍔</h3>
          <p className="text-gray-600">Available on select burgers only. Don’t miss out!</p>
        </div>
        <div className="bg-white p-4 rounded-xl shadow hover:shadow-md transition">
          <h3 className="text-lg font-semibold mb-2">Free Delivery 🚚</h3>
          <p className="text-gray-600">Enjoy free delivery on orders above ₹199.</p>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
