"use client";
import { Button } from "@/components/ui/button";
import GridPattern from "@/components/ui/grid-pattern";
import { useTheme } from "next-themes";

export function Hero() {
  const { theme } = useTheme();

  return (
    <div className={`relative min-h-[calc(100vh-4rem)] flex items-center transition-colors duration-300 ${theme === "dark" ? "bg-black" : "bg-white"}`}>
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 h-full w-full [background:radial-gradient(#F8B133_1px,transparent_1px)] [background-size:16px_16px] opacity-20 dark:opacity-30"></div>

      <div className="container grid gap-8 md:grid-cols-2 items-center space-x-3 ml-10">
        <GridPattern width={80} height={80} x={-1} y={-1} className="mask-image:linear-gradient(to_bottom_right,white,transparent,transparent -z-15" />

        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-r from-[#F8B133] to-[#F05A28]">
            Elevate Your Story with Animation
          </h1>

          <p className="max-w-[600px] md:text-xl text-[#41423A] dark:text-white">
            Bring ideas to life with stunning visuals, motion graphics, and immersive experiences.
          </p>

          <Button size="lg" className="rounded-full bg-[#F05A28] hover:bg-[#F8B133] text-white transition-all duration-300">
            See My Work
          </Button>
        </div>

        {/* Video Instead of Image */}
        <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden rounded-lg shadow-2xl">
          <video
            src="/hero.mp4" // Replace with your actual video path
            autoPlay
            loop
            muted
            playsInline
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  );
}