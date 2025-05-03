import React from "react";

const ProjectOverview: React.FC = () => {
  return (
    <section className="bg-[#F8B133] dark:bg-[#41423A] text-white py-16 px-6">
      <div className="max-w-5xl mx-auto text-center space-y-8">
        {/* Title & Description */}
        <div>
          <h2 className="text-4xl font-bold">Animation Project Overview 🎬</h2>
          <p className="mt-4 text-lg text-white/90 max-w-xl mx-auto">
            Dive into an immersive storytelling experience through fluid motion and expressive characters.
          </p>
        </div>

        {/* Key Details Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white/10 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🛠 Tools Used</h3>
            <p className="text-md text-white/80">Adobe Animate, Toon Boom Harmony</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">⏳ Animation Duration</h3>
            <p className="text-md text-white/80">2 Months</p>
          </div>
          <div className="p-6 bg-white/10 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold">🎨 Techniques</h3>
            <p className="text-md text-white/80">Frame-by-Frame, Rigging</p>
          </div>
        </div>

        {/* CTA Button */}
        <button className="mt-6 px-6 py-3 bg-[#F05A28] text-white font-semibold rounded-lg hover:bg-white hover:text-[#41423A] transition-all">
          Explore Full Project
        </button>
      </div>
    </section>
  );
};

export default ProjectOverview;
