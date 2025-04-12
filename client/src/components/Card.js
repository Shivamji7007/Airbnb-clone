import React from "react";

function Card() {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden">
      <img
        src="https://via.placeholder.com/300x200"
        alt="Example"
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h2 className="text-lg font-semibold text-gray-800">Card Title</h2>
        <p className="text-gray-600 mt-2">This is a sample description.</p>
      </div>
    </div>
  );
}

export default Card;
