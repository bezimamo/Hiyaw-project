"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function About() {
  const handleScrollToAbout = (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex flex-col md:flex-row items-center justify-center min-h-screen px-6 md:px-16 lg:px-24 bg-white dark:bg-[#41423A] transition-all duration-300">
      {/* Animated Character Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        viewport={{ once: true }}
        className="relative flex-1 flex justify-center"
      >
        <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
          <Image
            src="/assets/project/image2.jpg"
            alt="Hero Character"
            width={500}
            height={500}
            className="drop-shadow-2xl rounded-lg"
          />
        </motion.div>
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
          viewport={{ once: true }}
          className="absolute top-10 left-10"
        >
         
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 text-center md:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-bold text-[#F05A28]"
        >
          About Hiyaw
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-4 text-lg text-[#41423A] dark:text-white"
        >
          Hiyaw is a visionary 2D animation brand based in Ethiopia, committed to crafting authentic and impactful stories that resonate deeply with its audiences.
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-2 text-lg text-[#41423A] dark:text-white"
        >
          With a focus on addressing societal challenges and promoting mental health awareness, Hiyaw leverages the art of animation to inspire and engage.
        </motion.p>
        
        {/* Button for scrolling */}
        <a href="#about" onClick={handleScrollToAbout}>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-3 rounded-full text-white bg-[#F05A28] hover:bg-[#F8B133] transition-all duration-300"
          >
            Check In
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
