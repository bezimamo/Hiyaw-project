"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

type ProjectGroup = {
  title: string;
  description: string;
  image: string;
  details: string;
  category: "Storytelling" | "MotionGifs" | "caricature" | "Exercises";
};


const isVideo = (filename: string) =>
  filename.endsWith(".mp4") || filename.endsWith(".gif") || filename.endsWith(".mov") || filename.endsWith(".m4v");

// ✅ Sample data (you can rename or add the rest later)
const projects: ProjectGroup[] = [
    {
  title: "Roots of Grace",
  description: "A young face bearing timeless tradition.",
 image: "/assets/project/caricature/img1.jpg",
  details:
    "Adorned with a delicate forehead cross and flowing traditional hair, this 10-year-old girl embodies the elegance and spiritual depth of ancient Ethiopian womanhood. A symbol of identity passed through generations.",
  category: "caricature",
}
, 
{
  title: "Buna Time",
  description: "An animated tribute to Ethiopia’s rich coffee tradition.",
  image: "/assets/project/MotionGifs/coffee.mov",
  details:
    "A visual homage to the Ethiopian coffee ceremony, capturing the grace and warmth of pouring coffee from a traditional jebena.",
  category: "MotionGifs",
},
{
  title: "Essence in Motion",
  description: "A 360° character turn-around showcasing detailed design from every angle.",
  image: "/assets/project/Storytelling/story6.jpg",
  details:
    "This visual breakdown presents a full turn-around of a character in five seamless steps — capturing style, posture, and personality in motion. It celebrates the artistry behind character development and form.",
  category: "Storytelling",
},
{
    title: "Stride of Glory",
    description: "A motion tribute to Ethiopia’s legendary runners.",
    image: "",
    details:
      "This motion piece highlights the unwavering spirit of Ethiopian athletes, known for their endurance and determination. With each stride, the runner embodies discipline, national pride, and the legacy of champions who have carried Ethiopia’s flag across finish lines around the world.",
    category: "MotionGifs",
  },
    
  {
    title: "Voices of the Forgotten",
    description: "An emotional 2D short exploring mental health stigma in Ethiopia.",
    image: "/assets/project/Storytelling/story1.jpg",
    details: "This animation gives voice to those silently battling mental health issues...",
    category: "Storytelling",
  },
   {
    title: "Lemon Toss of Love",
    description: "A playful tradition of affection during baptism ceremonies in Ethiopia.",
    image: "/assets/project/MotionGifs/last .mp4",
    details:
      "    During Timket, Ethiopia's Epiphany celebration, it's common for young men to toss lemons at women they admire — a lighthearted gesture symbolizing interest and admiration. If the girl catches or accepts the lemon, it is seen as a mutual sign of affection. This motion piece captures that joyful, symbolic moment, blending tradition with youthful romance ",
    category: "MotionGifs",
 },
   {
  title: "Hope in His Eyes",
  description: "A smile that carries dreams and ambition.",
   image: "/assets/project/caricature/img2.jpg",
  details:
    "This piece captures the radiant energy of a 20-year-old man, full of life, optimism, and readiness to embrace the future.",
  category: "caricature",
}
,

  {
  title: "Slip, Fall, Rise",
  description: "A playful loop of Sack's unexpected tumble and recovery.",
  image: "/assets/project/MotionGifs/sack.mp4",
  details:
    "Sack leaps from a height only to hilariously slip on a banana and crash to the ground — but in true animated spirit, he dusts himself off and stands tall. A short, fun reminder that falling is part of the story.",
  category: "MotionGifs",
},
  
 {
  title: "The Clay Drum – Part 1",
  description: "A bounty hunter, a child, and the price of recklessness.",
  image: "/assets/project/Storytelling/story2.jpg",
  details:
    "Hired to eliminate mutated dogs on the radioactive outskirts of town, Mubarek stumbles upon a hidden child. Forced to protect him, the reckless hunter must confront his own impulsiveness to ensure the boy's survival.",
  category: "Storytelling",
}
,
{
  title: "Squash & Stretch",
  description: "A visual play on motion, weight, and exaggeration.",
  image: "/assets/project/MotionGifs/squash_and_strech.mp4", // Confirm path
  details:
    "A short animation showcasing the classic squash and stretch principle — emphasizing the illusion of weight and flexibility in motion. Simple, stylized, and full of bounce.",
  category: "MotionGifs",
},
  {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/Exercises/Exercise A-1.m4v",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "Exercises",
  },

{
  title: "Whispers of the River",
  description: "A broken man’s quiet fight for redemption.",
  image: "/assets/project/Storytelling/story3.jpg",
  details:
    "Bernard, a refugee construction engineer haunted by loss and addiction, begins his journey toward healing. Set against the stillness of a foreign land, he seeks to rebuild not just his life — but himself.",
  category: "Storytelling",
}
,
 {
  title: "Lines of Labor",
  description: "A weathered face carved by decades of work.",
  image: "/assets/project/caricature/img3.jpg",
  details:
    "His expression tells stories of sacrifice and survival — a life of resilience, shaped by years of physical and emotional endurance.",
  category: "caricature",
},
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/Exercises/Exercise B-1.m4v",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "Exercises",
  },
  {
  title: "The Clay Drum",
  description: "Erguman’s misadventures in the search for dignity and yoghurt.",
  image: "/assets/project/Storytelling/story4.jpg",
  details:
    "After squandering his savings chasing a cult dream and losing his band, Erguman finds himself running odd errands for a yoghurt a day. This offbeat tale follows his chaotic path toward financial freedom — one awkward job at a time.",
  category: "Storytelling",
},
    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/Exercises/Exercise C-1.m4v",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "Exercises",
  },
    {
  title: "Candlelight",
  description: "A gentle flicker in the dark, full of warmth and stillness.",
  image: "/assets/project/MotionGifs/candle.mp4",
  details:
    "This subtle animation captures the soft movement of a candle flame — symbolizing calm, reflection, and the fragile beauty of light in darkness.",
  category: "MotionGifs",
},
  {
  title: "The Sky Serpent: Origin",
  description: "An archaeologist’s quest to uncover the truth behind her father’s disappearance.",
  image: "/assets/project/Storytelling/story5.jpg", // Replace with actual image path if different
  details:
    "Yun, once a child enchanted by her father's bedtime stories, is now a renowned archaeologist. Her journey leads her to a remote temple wrapped in myth and memory, where she seeks answers about her father’s vanishing — and the secrets buried in ancient Chinese lore.",
  category: "Storytelling",
}, 
 {
  title: "Kindled Flame",
  description: "A quiet moment of ignition — where light meets purpose.",
  image: "/assets/project/MotionGifs/untitled.mp4",
  details:
    "This animation portrays a man gently lighting a candle with a match. It symbolizes intention, renewal, and the quiet power of a single spark in the darkness.",
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
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/thw walking sack.mp4",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
  },
 {
  title: "Lij Kut: Rise of the Warrior",
  description: "A young warrior’s journey to fight darkness and discover unexpected allies.",
  image: "/assets/project/Storytelling/story7.jpg", 
  details:
    "After witnessing the loss of his parents to monstrous creatures, Kut vows to protect the innocent. His path to power leads him to a hidden glade where he encounters a mystical Pegasus—challenging his view of good and evil. With loyal friends and a newfound purpose, Kut joins a military force to battle the darkness and unveil the origin of its terror.",
  category: "Storytelling",
},
 {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/MotionGifs/Nose Test 7.mov",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "MotionGifs",
 },
 
  {
    title: "Silver Years",
    description: "Grace, wisdom, and the calm of a long journey.",
    image: "/assets/project/caricature/img4.jpg",
    details:
      "Crowned with white hair, this portrait honors the legacy of age — a lifetime of memories reflected in gentle eyes and quiet strength.",
    category: "caricature",
  },

    {
    title: "Whispers of the River",
    description: "A poetic tale of nature and spiritual balance.",
    image: "/assets/project/Exercises/Exercise D-1.m4v",
    details:
      "This animation reflects the harmony between community and the natural world.",
    category: "Exercises",
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
    "All" | "Storytelling" | "caricature" | "MotionGifs" | "Exercises"
  >("All");

  const openModal = (project: ProjectGroup) => setSelectedProject(project);
  const closeModal = () => setSelectedProject(null);
  const loadMoreProjects = () => setVisibleCount((prev) => prev + 3);

  useEffect(() => setVisibleCount(3), [activeCategory]);

  const filteredProjects = projects.filter(
    (p) => activeCategory === "All" || p.category === activeCategory
  );

  const getProjectMedia = (project: ProjectGroup) => {
    if (project.title === "Stride of Glory") {
      return document.documentElement.classList.contains("dark")
        ? "/assets/project/MotionGifs/run dark mode.mov"
        : "/assets/project/MotionGifs/Run cycle2.mov";
    }
    return project.image;
  };

  return (
    <section className=" bg-[#f8f8f8]  dark:bg-[#41423A] py-16 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-[#41423A] dark:text-white text-center mb-10">
          featured student projects
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {["Storytelling", "MotionGifs", "caricature", "Exercises", "All"].map((cat) => (
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {filteredProjects.slice(0, visibleCount).map((project, index) => (
            <div
              key={index}
              className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 cursor-pointer"
              onClick={() => openModal(project)}
            >
              {isVideo(getProjectMedia(project)) ? (
                <video
  src={getProjectMedia(project)}
  controls
  className={`w-full h-64 object-cover ${
    project.title === "Lemon Toss of Love" ? "object-top" : "object-[center_80%]"
  }`}
  style={{ width: "100%", height: "256px" }}
/>

                
              ) : (
                <Image
                  src={getProjectMedia(project)}
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

      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 px-4 overflow-y-auto">
          <div className="bg-white dark:bg-[#2D2E28] rounded-lg max-w-3xl w-full p-6 relative max-h-[90vh] overflow-y-auto">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-black dark:text-white text-2xl font-bold"
            >
              &times;
            </button>

            <h3 className="text-2xl font-bold mb-4 text-[#41423A] dark:text-white">
              {selectedProject.title}
            </h3>

            <div className="mb-4">
              {isVideo(getProjectMedia(selectedProject)) ? (
                <video
                  src={getProjectMedia(selectedProject)}
                  controls
                  className="max-h-[60vh] w-full object-contain rounded-lg"
                />
              ) : (
                <Image
                  src={getProjectMedia(selectedProject)}
                  alt={selectedProject.title}
                  width={800}
                  height={600}
                  className="max-h-[60vh] w-full object-contain rounded-lg"
                />
              )}
            </div>

            <p className="text-gray-800 dark:text-gray-200">{selectedProject.details}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectGallery;
