import Image from 'next/image';
import { FaGlobeAfrica, FaUsers, FaLightbulb, FaHandsHelping, FaUniversalAccess } from 'react-icons/fa';

export function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 container mx-auto font-['Poppins']">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left px-8 md:px-16 mb-8 md:mb-0">
        <h4 className="text-lg font-extrabold text-[#41423A] mb-2">Why Choose Us</h4>
        <h1 className="text-4xl md:text-5xl mt-4 text-[#F05A28] font-bold leading-tight">
          Experience the magic of creativity with all our services.
        </h1>

        {/* Features List */}
        <div className="mt-10 space-y-8">
          <div className="flex items-start space-x-8 md:space-x-12">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaGlobeAfrica className="text-white text-5xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#41423A]">Cultural Authenticity</h3>
              <p className="text-sm md:text-base">We celebrate Ethiopian stories and heritage.</p>
            </div>
          </div>

          <div className="flex items-start space-x-8 md:space-x-12">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaUsers className="text-white text-5xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#41423A]">Community Empowerment</h3>
              <p className="text-sm md:text-base">We build a supportive network for collaboration and growth.</p>
            </div>
          </div>

          <div className="flex items-start space-x-8 md:space-x-12">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaLightbulb className="text-white text-5xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#41423A]">Artistic Innovation</h3>
              <p className="text-sm md:text-base">We embrace cutting-edge techniques to push creative boundaries.</p>
            </div>
          </div>

          <div className="flex items-start space-x-8 md:space-x-12">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaHandsHelping className="text-white text-5xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#41423A]">Social Responsibility</h3>
              <p className="text-sm md:text-base">We inspire positive change through meaningful storytelling.</p>
            </div>
          </div>

          <div className="flex items-start space-x-8 md:space-x-12">
            <div className="w-20 h-20 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaUniversalAccess className="text-white text-5xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold text-[#41423A]">Inclusivity</h3>
              <p className="text-sm md:text-base">We welcome diverse voices and perspectives.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Larger Image */}
      <div className="md:w-1/2 flex justify-center px-8 md:px-16 mt-8 md:mt-0">
        <Image
          src="/assets/img1.png" // Replace with the correct image path
          alt="Ethiopian Culture"
          width={600} // Increased image size
          height={700} // Increased height for equal alignment with text
          className="rounded-lg shadow-lg object-cover"
        />
      </div>
    </section>
  );
}
