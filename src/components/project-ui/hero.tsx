"use client";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section   className="flex flex-col md:flex-row items-center justify-between px-8 md:px-16 pt-10 container mx-auto font-['Poppins'] min-h-[700px]"
  style={{
    backgroundImage: "url('/assets/project/muba in his natural habitat.png')",  backgroundSize: "cover",   backgroundPosition: "center",   backgroundRepeat: "no-repeat", 
  }}
    >
      {/* Text Content */}
      <div className="md:w-1/2 text-left mb-10 md:mb-0 relative -top-14 md:left-6">
        <h1 className="text-5xl font-bold text-[#F05A28] mb-4 leading-tight">
          Our Stories in Motion
        </h1>
        <p className=" text-lg mb-6 text-white">
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
