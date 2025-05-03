import React from "react";

const Gallery: React.FC = () => {
  const images = [
    "/images/image1.png",
    "/images/OIP.jfif",
    "/images/ethio.png",
    "/images/OIP (1).jfif",
  ];

  return (
    <section className="bg-[#F8B133] dark:bg-[#41423A] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        <h2 className="text-4xl font-bold">Gallery & Showcase 🎨</h2>
        <p className="text-lg text-white/90 max-w-xl mx-auto">
          A visual journey from concept sketches to final animation frames.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              className="rounded-lg shadow-md transition transform hover:scale-105 cursor-pointer"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
