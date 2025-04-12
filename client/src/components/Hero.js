import React from "react";

const Hero = () => {
  return (
    <div className="relative h-[60vh]">
      <img
        src="https://images.unsplash.com/photo-1606788075761-37c5e3ecb46d?auto=format&fit=crop&w=1350&q=80"
        alt="Hero Banner"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black bg-opacity-40 flex flex-col items-center justify-center text-center text-white px-4">
        <h1 className="text-4xl sm:text-5xl font-bold mb-4">Find your next stay</h1>
        <p className="text-lg sm:text-xl mb-6">Unique homes and experiences around the world</p>
        <button className="bg-white text-black px-6 py-3 rounded-full font-semibold hover:bg-gray-100 transition">
          Start Exploring
        </button>
      </div>
    </div>
  );
};

export default Hero;
