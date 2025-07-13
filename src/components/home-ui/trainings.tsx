"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";
import Link from "next/link";

export function Trainings() {
  const { resolvedTheme } = useTheme();

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 transition-all duration-300 ${
        resolvedTheme === "dark"
          ? "bg-[#41423A] text-white"
          : "bg-[#f8f8f8]  text-[#41423A]"
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(#F8B133_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-30 pointer-events-none"></div>

      <motion.h2
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enhance Your Skills with Our Training
      </motion.h2>

      <motion.p
        className="mb-12 max-w-2xl text-[20px] text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Learn from the best in the industry with expert-led training sessions.
      </motion.p>

      {/* Training Grid */}
      <div className="grid md:grid-cols-3 gap-8 w-full max-w-6xl">
        {trainings.map((training, index) => (
          <motion.div
            key={index}
            className="overflow-hidden rounded-xl shadow-lg bg-white dark:bg-[#32332D] transition-transform duration-300 hover:scale-105"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            <video
              src={training.video}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-60 object-cover"
            ></video>
            <div className="p-4">
              <p className=" text-[18px] text-gray-600 dark:text-gray-300">
                {training.description}
              </p>
              <p className=" mt-2 text-[18px] text-[#F8B133]">{training.date}</p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* View All Trainings Link */}
      <motion.div
        className="mt-12"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/training"
          className="inline-block bg-[#F8B133] hover:bg-[#F05A28] text-white font-semibold py-2 px-6 rounded-full transition-colors duration-300"
        >
          View All Trainings
        </Link>
      </motion.div>
    </section>
  );
}

// ✅ Training data with description
const trainings = [
  {
    title: "Mastering Keyframe Animation",
    date: "March 10, 2025",
    video: "/assets/project/Exercises/Exercise A-1.m4v",
    description:
      "Understand keyframe techniques for precise animation control.",
  },
  {
    title: "Animating with Framer Motion",
    date: "March 15, 2025",
    video: "/assets/project/Exercises/Exercise B-1.m4v",
    description: "Create fluid, interactive animations using Framer Motion.",
  },
  {
    title: "Advanced CSS Animations",
    date: "March 22, 2025",
    video: "/assets/project/Exercises/Exercise C-1.m4v",
    description: "Explore complex animation techniques using pure CSS.",
  },
];
