import React from "react";
import foodItems from "../data/foodItems";
import { Star } from "lucide-react";

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white rounded-2xl shadow-lg overflow-hidden transform transition hover:scale-105 duration-300 border border-violet-200">
      <img
        src={item.image}
        alt={item.name}
        className="h-40 w-full object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-violet-800 font-[Poppins]">
          {item.name}
        </h3>
        <p className="text-sm text-gray-600 mb-2">{item.time}</p>
        <div className="flex justify-between items-center">
          <span className="text-violet-600 font-bold">{item.price}</span>
          <span className="flex items-center gap-1 text-sm text-yellow-500">
            <Star size={14} /> {item.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const FoodGrid = () => {
  return (
    <div className="bg-violet-50 py-8 px-4 sm:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-violet-700 mb-6 font-[Poppins]">
        Popular Dishes
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foodItems.map((item, index) => (
          <FoodCard key={index} item={item} />
        ))}
      </div>
    </div>
  );
};

export default FoodGrid;
