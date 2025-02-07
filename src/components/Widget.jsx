import React from "react";

const widgetData = [
  {
    title: "Accessorize Smartly",
    description: "A statement necklace, a stylish hat, or a classy handbag can elevate a simple outfit.",
  },
  {
    title: "Fit Over Fashion",
    description: "No matter how trendy an item is, if it doesn't fit you well, it won't look good.",
  },
  {
    title: "Color Coordination",
    description: "Neutral colors are versatile, but don't be afraid to experiment with bold colors and patterns.",
  },
  {
    title: "Footwear Matters",
    description: "Shoes can significantly impact your outfit. Invest in classic sneakers, comfortable flats, and stylish boots.",
  },
];

const Widget = () => {
  return (
    <div className="w-full  bg-white shadow-lg rounded-lg p-4">
      <div className="border-b pb-2 mb-4">
        <h1 className="text-lg font-bold text-gray-700">Top Tips of the Day</h1>
      </div>

      <div className="space-y-4">
        {widgetData.map((item, index) => (
          <div key={index} className="flex items-start border-b pb-3 last:border-0">
            {item.image && (
              <img src={item.image} alt={item.title} className="w-10 h-10 rounded-lg mr-3 object-cover" />
            )}
            <div>
              <h5 className="text-gray-800 font-semibold">{item.title}</h5>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Widget;
