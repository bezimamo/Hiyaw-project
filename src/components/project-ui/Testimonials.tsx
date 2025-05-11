"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Alem Tadesse",
    role: "Creative Director, ArtLink Ethiopia",
    quote:
      "Working with Hiyaw was a dream. Their animations capture emotion, culture, and beauty all at once. We were deeply moved.",
    image: "/images/image1.png",
  },
  {
    name: "Saron Mekuria",
    role: "Mental Health Advocate",
    quote:
      "Their storytelling brought mental health awareness to life. My community finally felt seen and heard.",
    image: "/images/image2.png",
  },
  {
    name: "Daniel Kebede",
    role: "Program Manager, Youth Impact",
    quote:
      "We used their animations in workshops across the country. Youth connected instantly — powerful and inspiring!",
    image: "/images/image1.png",
  },
  {
    name: "Lily Tesfaye",
    role: "Animation Student",
    quote:
      "Hiyaw’s mentorship inspired me to pursue animation. Their work is educational, authentic, and full of soul.",
    image: "/images/image2.png",
  },
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  const prev = () => {
    if (index > 0) setIndex(index - 1);
  };

  const next = () => {
    if (index < testimonials.length - 1) setIndex(index + 1);
  };

  const t = testimonials[index];

  return (
    <section className="bg-[#F8B133] dark:bg-[#41423A] py-20 px-4 relative">
      <div className="max-w-4xl mx-auto text-center relative">
        <h2 className="text-4xl font-bold text-[#41423A] dark:text-white mb-12">
          What People Are Saying
        </h2>

        <div className="relative pb-12">
          {/* Arrows */}
          <button
            onClick={prev}
            disabled={index === 0}
            className={`absolute left-0 top-1/2 -translate-y-1/2 p-3 rounded-full z-20 transition ${
              index === 0
                ? "bg-[#F8B133] text-white opacity-40 cursor-not-allowed"
                : "bg-[#F05A28] hover:bg-[#F8B133] text-white"
            }`}
          >
            <ChevronLeft size={20} />
          </button>

          <button
            onClick={next}
            disabled={index === testimonials.length - 1}
            className={`absolute right-0 top-1/2 -translate-y-1/2 p-3 rounded-full z-20 transition ${
              index === testimonials.length - 1
                ? "bg-[#F8B133] text-white opacity-40 cursor-not-allowed"
                : "bg-[#F05A28] hover:bg-[#F8B133] text-white"
            }`}
          >
            <ChevronRight size={20} />
          </button>

          {/* Testimonial card with animation */}
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-white dark:bg-[#41423A] rounded-2xl shadow-lg mt-6 px-6 py-8">
                <CardContent className="text-left space-y-6">
                  <p className="text-lg italic text-[#41423A] dark:text-white">
                    “{t.quote}”
                  </p>
                  <div className="flex items-center gap-4 mt-4 ml-4">
                    <Image
                      src={t.image}
                      alt={t.name}
                      width={70}
                      height={70 }
                      className="rounded-full border-2 border-[#F05A28] object-cover"
                    />
                    <div>
                      <h4 className="text-lg font-bold text-[#41423A] dark:text-white">
                        {t.name}
                      </h4>
                      <p className="text-[#F05A28] text-sm">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Dots indicator */}
        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <span
              key={i}
              className={`w-3 h-3 rounded-full transition ${
                index === i
                  ? "bg-[#F05A28]"
                  : "bg-white/60 dark:bg-white/20"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
