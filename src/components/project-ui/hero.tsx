import React from "react";

const Hero: React.FC = () => {
  return (
    <section
      className="relative flex items-center justify-center h-screen bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/proj-img-1.png')" }} // Replace with your image path
    >
      <div className="max-w-4xl mx-auto text-center bg-black/40 p-6 rounded-lg">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Bring Your 2D Animations to Life ✨
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/90">
          Explore my creative journey through motion, storytelling, and design.
        </p>
        <button className="mt-8 bg-[#F8B133] text-[#41423A] font-semibold py-3 px-6 rounded-lg hover:bg-white transition duration-300">
          View My Work
        </button>
      </div>
    </section>
  );
};

export default Hero;
