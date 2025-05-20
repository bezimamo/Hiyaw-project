"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function Hero() {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent hydration mismatches
  if (!mounted) return null;

  const isDark = theme === "dark";

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
      <div className="relative z-20 text-center px-6 max-w-2xl space-y-6 animate-fade-in">
        <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]">
          Elevate Your Story with Animation
        </h1>

        <p className="max-w-[600px] md:text-xl text-[#41423A] dark:text-white mx-auto">
  Learn industry-standard 2D animation skills and bring your ideas to life through our expert-led training program.
</p>

<a href="/training">
  <Button
    size="lg"
    className="rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition-all duration-300"
  >
    Explore Training
  </Button>
</a>

      </div>
    </div>
  );
}
