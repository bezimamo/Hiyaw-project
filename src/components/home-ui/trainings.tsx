"use client";
import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function Trainings() {
  const { theme } = useTheme();

  return (
    <section
      className={`relative flex flex-col items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 transition-all duration-300 ${
        theme === "dark" ? "bg-[#41423A] text-white" : "bg-white text-[#41423A]"
      }`}
    >
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(#F8B133_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-30"></div>

      <motion.h2
        className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Enhance Your Skills with Our Training
      </motion.h2>

      <motion.p
        className="mb-12 max-w-2xl text-center text-gray-700 dark:text-gray-300"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Learn from the best in the industry with expert-led training sessions.
      </motion.p>

      {/* Training Grid */}
      <div className="grid md:grid-cols-3 gap-8 px-4 w-full max-w-6xl">
        {trainings.map((training, index) => (
          <motion.div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-xl cursor-pointer group"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
          >
            {/* Animated Image */}
            <motion.img
              src={training.image}
              alt={training.title}
              className="w-full h-60 object-cover transition-transform duration-500 group-hover:scale-110"
            />

            {/* Overlay Text Animation */}
            <motion.div
              className="absolute inset-0 bg-[#41423A] bg-opacity-50 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            >
              <h3 className="text-2xl font-bold text-white">{training.title}</h3>
              <p className="text-lg text-[#F8B133]">{training.date}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

const trainings = [
  {
    title: "Mastering Keyframe Animation",
    date: "March 10, 2025",
    image: "/about.png",
  },
  {
    title: "Animating with Framer Motion",
    date: "March 15, 2025",
    image: "/about.png",
  },
  {
    title: "Advanced CSS Animations",
    date: "March 22, 2025",
    image: "about.png",
  },
];
