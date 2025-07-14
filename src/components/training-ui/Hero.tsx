"use client";

import Image from "next/image";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#f8f8f8]  dark:bg-[#41423A]">
      {/* Background Image */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Image
          src="/assets/project/image3.jpg"
          alt="2D Animation Background"
          fill
          priority
          quality={90}
          className="object-cover object-top"
          sizes="100vw"
        />
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#41423A]/90 via-[#41423A]/70 to-transparent dark:from-black/90 dark:via-black/70 dark:to-transparent" />

      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-6xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-hiyaw text-[#F8B133] mb-6 animate-fade-in-up">
          Master <span className="text-white">2D Animation</span>
        </h1>
        <p className="text-white text-lg sm:text-xl max-w-2xl mx-auto mb-8 animate-fade-in-up delay-100">
          Transform your drawings into captivating stories with professional animation techniques
        </p>
        <a
          href="https://forms.gle/GYdR2Na4GhaAPAmeA"
          rel="noopener noreferrer"
          className="inline-block bg-[#F05A28] hover:bg-[#F8B133] text-white font-bold py-3 px-8 rounded-full text-lg transition-all duration-300 transform hover:scale-105 animate-fade-in-up delay-200 shadow-lg"
          onClick={(e) => {
            e.preventDefault(); // Prevent interference
            window.open("https://forms.gle/GYdR2Na4GhaAPAmeA", "_blank");
          }}
        >
          Enroll Now
        </a>
      </div>

      {/* Scroll Indicator (Optional) */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};