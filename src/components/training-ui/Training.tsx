'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  Video, PencilRuler, Sparkles, BookOpen,
  PlayCircle, Send, Rocket, User,
} from 'lucide-react';

export const Training = () => {
  const learnItems = [
    { icon: <Video size={24} />, label: 'Frame-by-Frame Animation' },
    { icon: <PencilRuler size={24} />, label: 'Character Design' },
    { icon: <Sparkles size={24} />, label: 'Expressive Motion' },
    { icon: <BookOpen size={24} />, label: 'Storyboarding' },
    { icon: <PlayCircle size={24} />, label: 'Digital Tools' },
    { icon: <Send size={24} />, label: 'Publishing Skills' },
  ];

  return (
    <div className="bg-white dark:bg-[#41423A] text-[#41423A] dark:text-white transition-colors duration-300">
      {/* Intro Section */}
      <motion.section
        className="min-h-screen px-6 py-24 grid md:grid-cols-2 gap-12 items-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {/* Left: Text */}
        <div className="text-center md:text-left">
          <h2 className="text-4xl font-bold mb-6">Professional 2D Animation Training</h2>
          <p className="text-lg mb-8 max-w-md">
            Learn animation from the ground up using real-world workflows. No prior experience required.
          </p>
          <a
            href="#contact"
            className="bg-[#F05A28] hover:bg-[#41423A] text-white font-semibold py-3 px-6 rounded-full transition"
          >
            Contact Us
          </a>
        </div>

        {/* Right: Video Preview */}
        <div className="w-full h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
          <video
            className="w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src="/assets/project/MotionGifs/fish.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </motion.section>

      {/* Why Learn Section */}
      <motion.section
        className="px-6 pb-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {[
            { icon: <Rocket size={32} />, text: 'Advance Your Creative Career' },
            { icon: <Sparkles size={32} />, text: 'Create Impactful Stories' },
            { icon: <User size={32} />, text: 'Learn from Industry Experts' },
          ].map((item, i) => (
            <motion.div
              key={i}
              className="bg-white text-[#41423A] dark:bg-white/10 dark:text-white rounded-xl p-6 shadow-md"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#F05A28] mb-3 flex justify-center">{item.icon}</div>
              <p className="font-medium text-center">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      {/* What You'll Learn */}
      <motion.section
        className="px-6 py-24"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="max-w-6xl mx-auto text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Skills You’ll Gain</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Gain a complete foundation in 2D animation and storytelling.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
          {learnItems.map((item, idx) => (
            <motion.div
              key={idx}
              className="bg-white text-[#41423A] dark:bg-white/10 dark:text-white rounded-xl p-5 flex items-center gap-4 shadow-md hover:shadow-xl transition"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: idx * 0.2 }}
              viewport={{ once: true }}
            >
              <div className="text-[#F05A28]">{item.icon}</div>
              <span className="font-semibold">{item.label}</span>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
          <motion.h3
            className="text-3xl font-bold mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Get Started Today
          </motion.h3>
          <motion.p
            className="text-lg mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Contact us to learn more or enroll in our upcoming sessions.
          </motion.p>
          <motion.a
            href="#contact"
            className="bg-[#F05A28] hover:bg-[#41423A] text-white font-semibold py-3 px-6 rounded-full shadow transition"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            Contact Us
          </motion.a>
        </div>
      </motion.section>
    </div>
  );
};
