"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ProjectGroup = {
  title: string;
  description: string;
  image: string;
  details: string;
  category: "Storytelling" | "MotionGifs" | "AgingFaces" | "Exercises";
};


const isVideo = (filename: string) =>
  filename.endsWith(".mp4") || filename.endsWith(".gif") || filename.endsWith(".mov");

// ✅ Sample data (you can rename or add the rest later)
const projects: ProjectGroup[] = [
  {
    title: "Voices of the Forgotten",
    description: "An emotional 2D short exploring mental health stigma in Ethiopia.",
    image: "/assets/project/Storytelling/story1.jpg",
    details: "This animation gives voice to those silently battling mental health issues...",
    category: "Storytelling",
  },
  {
    title: "The Clay Drum - Part 1",
    description: "A cultural tale about a young boy...",
    image: "/assets/project/Storytelling/story2.jpg",
    details: "Rooted in Ethiopian folklore...",
    category: "Storytelling",
  },
  {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/Storytelling/story3.jpg",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "Storytelling",
  },
  
  {
    title: "The Clay Drum",
    description: "A cultural tale about a young boy preserving his village’s traditions.",
    image: "/assets/project/Storytelling/story4.jpg",
    details:
      "Rooted in Ethiopian folklore, this story blends tradition and imagination. It showcases the beauty of cultural heritage, while subtly addressing the impact of modern distractions on youth identity.",
    category: "Storytelling",
  },
  {
    title: "The Clay Drum",
    description: "A cultural tale about a young boy preserving his village’s traditions.",
    image: "/assets/project/Storytelling/story5.jpg",
    details:
      "Rooted in Ethiopian folklore, this story blends tradition and imagination. It showcases the beauty of cultural heritage, while subtly addressing the impact of modern distractions on youth identity.",
    category: "Storytelling",
  },
  {
    title: "Together We Heal",
    description: "A collaborative animation created with community members.",
    image: "/assets/project/Storytelling/story6.jpg",
    details:
      "Created through community workshops, this piece represents healing after trauma. It empowers individuals to share their stories through collaborative storytelling and creative animation.",
    category: "Storytelling",
  },
  {
    title: "Light in the Shadows",
    description: "A journey of resilience and personal transformation.",
    image: "/assets/project/Storytelling/story7.jpg",
    details:
      "This story follows a teen facing personal trauma and healing through creativity.",
    category: "Storytelling",
  },
  {
    title: "Colors of Heritage",
    description: "An animated celebration of Ethiopian traditional clothing.",
    image: "/assets/project/MotionGifs/coffee.mov",
    details:
      "Highlighting Ethiopian fashion and design through animated illustration.",
    category: "MotionGifs",
  },
  {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/acx.mov",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
  
  {
    title: "The Clay Drum",
    description: "A cultural tale about a young boy preserving his village’s traditions.",
    image: "/assets/project/MotionGifs/candle.mp4",
    details:
      "Rooted in Ethiopian folklore, this story blends tradition and imagination. It showcases the beauty of cultural heritage, while subtly addressing the impact of modern distractions on youth identity.",
    category: "MotionGifs",
  },
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/sack.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/squash_and_strech.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/thw walking sack.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/untitled.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/walking animation.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
    
];

const ProjectGallery: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectGroup | null>(null);
  const [visibleCount, setVisibleCount] = useState(3);
  const [activeCategory, setActiveCategory] = useState<
    "All" | "Storytelling" | "AgingFaces" | "MotionGifs" | "Exercises"
  >("All");

  const openModal = (project: ProjectGroup) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const loadMoreProjects = () => setVisibleCount((prev) => prev + 3);

  useEffect(() => setVisibleCount(3), [activeCategory]);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  return (
    <section className="bg-white dark:bg-[#41423A] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold text-[#41423A] dark:text-white text-center mb-10">
          Featured Projects
        </h2>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["All", "Storytelling", "MotionGifs", "AgingFaces", "Exercises"].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat as typeof activeCategory)}
              className={`px-4 py-2 rounded-full font-medium transition ${
                activeCategory === cat
                  ? "bg-[#F8B133] text-[#41423A]"
                  : "bg-gray-200 dark:bg-gray-600 text-gray-700 dark:text-white"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {isVideo(project.image) ? (
                <video
                  src={project.image}
                  controls
                  className="w-full h-64 object-cover"
                  style={{ width: "100%", height: "256px" }}
                />
              ) : (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover"
                  style={{ width: "100%", height: "256px" }}
                />
              )}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white p-4 text-center">
                <h3 className="text-xl font-semibold">{project.title}</h3>
                <p className="text-sm mt-1">{project.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        {visibleCount < filteredProjects.length && (
          <div className="mt-10 text-center">
            <button
              onClick={loadMoreProjects}
              className="bg-[#F8B133] text-[#41423A] font-semibold px-6 py-3 rounded hover:bg-[#F05A28] hover:text-white transition duration-300"
            >
              Load More Projects
            </button>
          </div>
        )}
      </div>

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4">
          <div className="bg-white dark:bg-[#41423A] rounded-lg p-6 max-w-md w-full relative">
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-[#F05A28] hover:text-[#F8B133] text-2xl font-bold"
            >
              &times;
            </button>
            <h3 className="text-2xl font-bold mb-2 text-[#41423A] dark:text-white">
              {selectedProject.title}
            </h3>
            <p className="mb-4 text-[#41423A] dark:text-white">
              {selectedProject.details}
            </p>
            {isVideo(selectedProject.image) ? (
              <video
                src={selectedProject.image}
                controls
                className="rounded-lg w-full"
              />
            ) : (
              <Image
                src={selectedProject.image}
                alt={selectedProject.title}
                width={500}
                height={300}
                className="rounded-lg"
              />
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;