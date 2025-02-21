import React from 'react';

const HeroSection = () => {
  return (
    <div 
      className="relative h-[500px] flex items-center justify-center text-white text-center"
      style={{
        background: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1493770348161-369560ae357d?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-50"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-4">
        <h1 className="text-5xl font-bold mb-6 font-poppins">
          Discover, Share, and Cook Delicious Recipes
        </h1>
        <p className="text-xl mb-8 text-gray-200 font-open-sans">
          Join our community of food lovers and explore thousands of recipes from around the world.
        </p>
        <button 
          className="bg-[#FF6F61] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#E65A50] transition duration-300"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default HeroSection;