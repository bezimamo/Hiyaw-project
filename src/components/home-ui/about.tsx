"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export function About() {
  return (
    <section className="relative overflow-x-hidden flex flex-col md:flex-row items-center justify-between min-h-screen px-6 md:px-16 lg:px-24 bg-[#f8f8f8]  dark:bg-[#41423A] transition-all duration-300">
      {/* Image Section */}
      <motion.div
        initial={{ x: -100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.2 }}
        viewport={{ once: true }}
        className="flex-1 flex justify-center w-full md:w-1/2 mb-10 md:mb-0"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
          className="max-w-[500px] w-full"
        >
          <Image
            src="/assets/project/Storytelling/story6.jpg"
            alt="Hero Character"
            width={500}
            height={500}
            className="w-full h-auto drop-shadow-2xl rounded-lg"
          />
        </motion.div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        initial={{ x: 100, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1, type: "spring", delay: 0.4 }}
        viewport={{ once: true }}
        className="flex-1 w-full md:w-1/2 text-center md:text-left"
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-hiyaw text-[#F05A28]"
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

        {/* Button to navigate to About page */}
        <Link href="/about">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
            className="mt-6 px-6 py-3 rounded-full text-white bg-[#F05A28] hover:bg-[#F8B133] transition-all duration-300"
          >
            Learn More
          </motion.button>
        </Link>
      </motion.div>
    </section>
  );
}
