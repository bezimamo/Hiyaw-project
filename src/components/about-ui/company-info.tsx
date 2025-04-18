"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const infoBlocks = [
  {
    title: "Our Mission",
    description: "Empowering businesses through innovative technology solutions.",
    content:
      "We create cutting-edge software that drives digital transformation and makes complex technologies accessible to all businesses.",
    image: "/assets/image1.png",
  },
  {
    title: "Our Values",
    description: "Integrity, Innovation, Collaboration, Excellence.",
    content:
      "Integrity: Upholding the highest ethical standards. Innovation: Pushing boundaries. Collaboration: Harnessing teamwork. Excellence: Delivering the best.",
    image: "/assets/image2.png",
  },
  {
    title: "Our Vision",
    description: "To be the global leader in transformative tech solutions.",
    content:
      "We aim to be the go-to partner for businesses leveraging technology for growth, leading global innovation and positive change.",
    image: "/assets/image3.jpeg",
  },
];

export function CompanyInfo() {
  return (
    <section className="py-24 container mx-auto px-10 text-[#41423A] font-['Poppins']">
      {/* Section Title */}
      <motion.h2 
        className="text-4xl font-bold text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Who We Are
      </motion.h2>

      {/* Layout Container */}
      <div className="relative w-full max-w-6xl mx-auto grid grid-cols-3 gap-16 items-center">
        {/* Left - Our Mission */}
        <motion.div 
          className="space-y-4 text-left" 
          initial={{ opacity: 0, x: -50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-[#F05A28]">{infoBlocks[0].title}</h3>
          <p className="text-[#41423A]/80">{infoBlocks[0].description}</p>
          <p className="text-sm text-[#41423A]/70">{infoBlocks[0].content}</p>
          <Image src={infoBlocks[0].image} alt="Mission" width={300} height={200} className="rounded-lg shadow-lg" />
        </motion.div>

        {/* Middle - Our Values (Top Center, More Space) */}
        <motion.div 
          className="space-y-6 text-center relative -top-16" 
          initial={{ opacity: 0, y: -50 }} 
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-[#F05A28]">{infoBlocks[1].title}</h3>
          <p className="text-[#41423A]/80">{infoBlocks[1].description}</p>
          <p className="text-sm text-[#41423A]/70">{infoBlocks[1].content}</p>
          <Image src={infoBlocks[1].image} alt="Values" width={300} height={200} className="rounded-full shadow-lg border-4 border-[#F05A28]" />
        </motion.div>

        {/* Right - Our Vision */}
        <motion.div 
          className="space-y-4 text-right" 
          initial={{ opacity: 0, x: 50 }} 
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          whileHover={{ scale: 1.05 }}
        >
          <h3 className="text-2xl font-bold text-[#F05A28]">{infoBlocks[2].title}</h3>
          <p className="text-[#41423A]/80">{infoBlocks[2].description}</p>
          <p className="text-sm text-[#41423A]/70">{infoBlocks[2].content}</p>
          <Image src={infoBlocks[2].image} alt="Vision" width={300} height={200} className="rounded-lg shadow-lg ml-10" />
        </motion.div>
      </div>
    </section>
  );
}