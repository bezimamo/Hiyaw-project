"use client";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section
      className="flex flex-col md:flex-row items-center justify-between w-full h-screen bg-[#f8f8f8]  dark:bg-[#41423A] font-['Poppins']"
      style={{
        backgroundImage: "url('/assets/project/muba in his natural habitat.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-left px-8 md:px-16">
        <h1 className="text-5xl font-bold text-[#F05A28] mb-4 leading-tight">
          Our Stories in Motion
        </h1>
        <p className="text-[20px] mb-6 text-white">
          Explore animations and projects that celebrate culture, spark ideas,
          and redefine storytelling through dynamic visuals and creative design.
        </p>

        <Link href="#projects">
          <button className="bg-[#F8B133] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F05A28] transition-all duration-300">
            View Projects
          </button>
        </Link>
      </div>
    </section>
  );
}
