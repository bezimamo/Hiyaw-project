import React from "react";
import Image from "next/image";
import Link from "next/link";

const CallToAction: React.FC = () => {
  return (
    <section className="dark:bg-[#41423A] py-20 px-6 text-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">
        {/* Left - Text */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold leading-snug mb-6">
            Every story deserves to be seen.
          </h2>
          <p className="text-lg text-[#F8B133] mb-8">
            Let&apos;s animate yours — with meaning, culture, and heart.
          </p>
          <Link
            href="/contact" // Change this if you want to link to email or external page
            className="inline-block bg-[#F05A28] hover:bg-[#F8B133] text-white font-semibold px-6 py-3 rounded-full transition duration-300"
          >
            Start a Project
          </Link>
        </div>

        {/* Right - Visual (GIF or image) */}
        <div className="flex justify-center md:justify-end">
          <Image
            src="/assets/project/Storytelling/story6.jpg" // Make sure this file exists
            alt="Animated character"
            width={500}
            height={400}
            className="rounded-xl object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
