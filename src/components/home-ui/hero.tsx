"use client";

import { useTheme } from "next-themes";
//import { Button } from "@/components/ui/button";

export function Hero() {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <div
      className={`relative w-full h-screen overflow-hidden ${
        isDark ? "bg-[#41423A]" : "bg-white"
      }`}
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-contain z-0"
        src={
          isDark
            ? "/assets/Hiyaw Logo Darkmode Animation.mov"
            : "/assets/Hiyaw Logo lightmode Animation.mov"
        }
      />

      <div
        className={`absolute inset-0 z-10 ${
          isDark ? "bg-[#41423A]/50" : "bg-white/40"
        }`}
      />

      {/* <div className="absolute bottom-8 left-8 z-20">
        <Button className="rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white text-lg px-6 py-3 transition-all left-10 duration-300">
          See Work
        </Button>
      </div> */}
    </div>
  );
}
