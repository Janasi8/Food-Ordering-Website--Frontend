import React from 'react';

const FoodCard = ({ item }) => {
  return (
    <div className="bg-white p-4 rounded-lg shadow-md">
      <img
        src={item.image}
        alt={item.name}
        className="w-full h-40 object-cover rounded-md"
      />
      <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
      <p className="text-gray-600">⭐ {item.rating}</p>
      <p className="text-orange-600 font-bold">{item.price}</p>
      <p className="text-sm text-gray-500">{item.time}</p>
    </div>
  );
};

export default FoodCard;
