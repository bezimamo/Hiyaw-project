"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import { Button } from "@/components/ui/button";

export function Projects() {
  const { theme } = useTheme();

  return (
    <div
      className={`relative min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(#F8B133_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-30"></div>

      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-16"
      >
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]">
          Explore Our Animation Projects
        </h1>
        <p className="mt-4 text-lg text-gray-700 dark:text-gray-300">
          Bringing creativity to life through breathtaking animations.
        </p>
      </motion.div>

      {/* Projects Section */}
      <div className="container mx-auto px-6 py-8 space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className={`flex flex-col md:flex-row items-center justify-between gap-8 ${
              index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
            }`}
          >
            {/* Project Image */}
            <motion.div
              className="relative w-full md:w-1/2 p-6 rounded-lg shadow-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl"
              whileHover={{ scale: 1.05 }}
              style={{ backgroundColor: theme === "dark" ? "#41423A" : "#FFFFFF" }}
            >
              <motion.img
                src={project.image}
                alt={project.title}
                className="w-full h-[300px] object-cover rounded-lg"
                transition={{ duration: 0.4 }}
              />
            </motion.div>

            {/* Project Details */}
            <motion.div
              className="w-full md:w-1/2 space-y-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold text-[#F8B133]">{project.title}</h2>
              <p className="text-lg text-gray-700 dark:text-gray-300">{project.type} • Animation</p>
              <Button
                size="lg"
                className="mt-4 rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition duration-300 ease-in-out"
              >
                View Details
              </Button>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {/* CTA Button */}
      <div className="text-center mt-12">
        <Button
          size="lg"
          className="rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition duration-300 ease-in-out"
        >
          See More Projects
        </Button>
      </div>
    </div>
  );
}

const projects = [
  {
    title: "Hero Corps",
    type: "2D Animation",
    image: "/project1.png",
  },
  {
    title: "Ajaka Lost in Rome",
    type: "2D Animation",
    image: "/project2.png",
  },
  {
    title: "Astonishing Beki",
    type: "3D Animation",
    image: "/project3.png",
  },
];
