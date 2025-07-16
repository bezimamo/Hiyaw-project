"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface ProjectsProps {
  showAll?: boolean;
}

export function Projects({ showAll = false }: ProjectsProps) {
  const displayedProjects = showAll ? projects : projects.slice(0, 2);

  return (
    <div className="relative min-h-screen bg-[#f8f8f8] text-[#41423A] dark:bg-[#41423A] dark:text-white transition-colors duration-300">
      {/* Background Grid */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(#F8B133_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-30 pointer-events-none" />

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl font-hiyaw tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]">
          Explore Our Animation Projects
        </h1>
        <p className="mt-4 text-lg text-[#41423A] dark:text-white">
          Bringing creativity to life through breathtaking animations.
        </p>
      </motion.div>

      {/* Projects */}
      <div className="container mx-auto px-6 py-8 space-y-16">
        {displayedProjects.map((project, index) => {
          const isVideo =
            project.image.endsWith(".mp4") || project.image.endsWith(".mov");

          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center justify-between gap-10 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              <motion.div
                className="relative w-full md:w-1/2 rounded-lg overflow-hidden shadow-xl transition duration-300 hover:scale-105"
                whileHover={{ scale: 1.05 }}
              >
                {isVideo ? (
                  <video
                    src={project.image}
                    autoPlay
                    loop
                    playsInline
                    muted
                    className="w-full h-[400px] object-cover rounded-lg pointer-events-none"
                  />
                ) : (
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[400px] object-cover rounded-lg"
                    transition={{ duration: 0.4 }}
                  />
                )}
              </motion.div>

              <motion.div
                className="w-full md:w-1/2 space-y-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl font-hiyaw text-[#F8B133]">
                  {project.title}
                </h2>
                <p className="text-[20px] font-semibold text-[#F05A28]">
                  {project.type} • Animation
                </p>
                <p className="text-[18px] text-[#41423A] dark:text-white">
                  {project.description}
                </p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>

      {/* CTA */}
      {!showAll && (
        <div className="text-center mt-12">
          <Link href="/project">
            <Button
              size="lg"
              className="mb-16 rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition duration-300 ease-in-out"
            >
              See More Projects
            </Button>
          </Link>
        </div>
      )}
    </div>
  );
}

const projects = [
  {
    title: "Timket Toss",
    type: "2D Animation",
    image: "/assets/project/MotionGifs/last .mp4",
    description:
      "A playful tradition during Timket where admiration is tossed with a lemon.",
  },
  {
    title: "Popel Jim",
    type: "2D Animation",
    image: "/assets/project/MotionGifs/Nose Test 7.mov",
    description:
      "Client work for a children’s rhyme about using tissues instead of flicking boogers.",
  },
];
