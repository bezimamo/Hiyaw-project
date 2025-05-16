"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export function CompanyStory() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section className="py-24 container mx-auto px-16 font-['Poppins'] dark:bg-[#41423A]">
      <div className="flex flex-col md:flex-row items-center justify-between gap-16">
        
        {/* Left Side - Text Content */}
        <motion.div 
          className="flex-1 max-w-2xl md:ml-12"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-4xl font-bold text-[#41423A] mb-6 leading-tight dark:text-white">
            We Put <span className="relative">
              People
              <motion.span 
                className="absolute bottom-0 left-0 w-full h-1 bg-[#F05A28]"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
              ></motion.span>
            </span> First
          </h2>
          <p className="text-lg text-[#41423A] mb-8 leading-relaxed dark:text-white">
            At Hiyaw, we believe technology should empower people and make their lives easier. 
            Our mission is simple: to create solutions that prioritize people at every step.
          </p>

          {/* Read More Button & Modal */}
          <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
            <DialogTrigger asChild>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button className="group bg-[#F05A28] text-white px-6 py-3 rounded-lg flex items-center shadow-lg">
                  Read More
                  <ArrowUpRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
                </Button>
              </motion.div>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] bg-white rounded-lg shadow-lg p-6">
              <DialogHeader>
                <DialogTitle className="text-xl font-bold text-[#41423A]">Our Story</DialogTitle>
              </DialogHeader>
              <div className="mt-6 text-[#41423A] text-sm">
                <p>
                  From our beginnings as a small team with big dreams, we've been driven by a commitment to innovation and collaboration. 
                  Our journey has been about building a company that places people at the center—whether they are team members, clients, or the communities we serve.
                </p>
                <p className="mt-4">
                  We focus on creating tech that genuinely makes a difference, and we're excited about continuing to shape the future, one solution at a time.
                </p>
              </div>
            </DialogContent>
          </Dialog>
        </motion.div>

        {/* Right Side - Animated GIF */}
        <motion.div 
          className="flex-1 flex justify-end md:mr-12"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="w-[420px] h-[420px] bg-gradient-to-br from-[#F05A28]/20 to-[#F05A28]/40 rounded-full flex items-center justify-center shadow-lg overflow-hidden">
            <video
            src="/assets/project/candle.mp4"
            autoPlay
            loop
            muted
            playsInline
            className="w-[420px] h-[420px] rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
