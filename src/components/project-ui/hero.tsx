"use client";

import Image from "next/image";
import Link from "next/link";

export default function ProjectsHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 pt-10 container mx-auto font-['Poppins']">
      {/* Text Content */}
      <div className="md:w-1/2 text-left mb-10 md:mb-0">
        <h1 className="text-5xl font-bold text-[#F05A28] mb-4 leading-tight">
          Our Stories in Motion
        </h1>
        <p className="text-[#41423A] text-lg mb-6">
          Explore animations and projects that celebrate culture, spark ideas, 
          and redefine storytelling through dynamic visuals and creative design.
        </p>

        <Link href="#projects">
          <button className="bg-[#F8B133] text-white px-6 py-3 rounded-lg font-medium hover:bg-[#F05A28] transition-all duration-300">
            View Projects
          </button>
        </Link>
      </div>

      {/* Hero Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-20">
      <Image
          src="/assets/projects-hero.png"  // Replace with your actual animated hero illustration path
          alt="Projects Illustration"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
