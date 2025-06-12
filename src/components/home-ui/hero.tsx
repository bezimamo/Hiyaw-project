"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <div
      className={`relative w-full h-screen overflow-hidden flex items-center justify-center transition-colors duration-500 ${
        isDark ? "bg-[#41423A]" : "bg-[#FFFFFF]"
      }`}
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover z-0"
        src={
          isDark
            ? "/assets/HiyawLogoDarkmodeAnimation.mov"
            : "/assets/HiyawLogoLightmodeAnimation.mov"
        }
      />

      {/* Overlay */}
      <div
        className={`absolute inset-0 z-10 transition-colors duration-500 ${
          isDark ? "bg-[#41423A]/60" : "bg-[#FFFFFF]/60"
        }`}
      />

      {/* Content */}
      <div className="relative z-20 text-center px-6 max-w-2xl animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]">
          Elevate Your Story with Animation
        </h1>

        <p className="max-w-[600px] mx-auto mt-6 text-[20px] text-[#41423A] dark:text-white">
          Learn industry-standard 2D animation skills and bring your ideas to life through our expert-led training program.
        </p>

        <a href="/training">
          <Button
            size="lg"
            className="mt-4 rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition-all duration-300"
          >
            Explore Training
          </Button>
        </a>
      </div>
    </div>
  );
}
