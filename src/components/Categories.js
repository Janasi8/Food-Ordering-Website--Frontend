const Categories = () => {
  const categories = ["All", "Pizza", "Burger", "Dessert", "Drinks"];

  return (
    <div className="px-4 py-4">
      <div className="flex flex-wrap items-center gap-4 overflow-x-auto">
        {/* Category Buttons */}
        {categories.map((cat, index) => (
          <button
            key={index}
            className="px-4 py-2 bg-white shadow rounded-md hover:bg-yellow-300"
          >
            {cat}
          </button>
        ))}

        {/* Sort Dropdown placed right beside category buttons */}
        <select className="border border-violet-400 rounded-full px-4 py-2 text-sm bg-violet-700 text-white shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-300">
          <option>Sort by</option>
          <option>Price: Low to High</option>
          <option>Price: High to Low</option>
          <option>Rating</option>
          <option>Delivery Time</option>
        </select>
      </div>
    </div>
  );
};

export default Categories;
