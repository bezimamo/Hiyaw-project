import Image from 'next/image';
import { FaPalette, FaUsers, FaTools, FaClock } from 'react-icons/fa'; // Import relevant icons

export function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-12 px-6 container mx-auto">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left">
        <h4 className="text-lg font-extrabold text-[#41423A]">Why Choose Us</h4>
        <h1 className="text-4xl mt-4 text-[#F05A28]">
          Experience the magic of creativity with all our services.
        </h1>

        {/* Features List */}
        <div className="mt-6 space-y-6">
          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaPalette className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#41423A]">Comprehensive Creative Solutions</h2>
              <p className="text-lg">Everything you need under one roof.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaUsers className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#41423A]">A Team of Visionaries</h2>
              <p className="text-lg">Passionate professionals dedicated to awe-inspiring visuals.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaTools className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#41423A]">Tailored to Perfection</h2>
              <p className="text-lg">Animations customized to your vision and preferences.</p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#F05A28]">
              <FaClock className="text-white text-2xl" />
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#41423A]">Timely Delivery</h2>
              <p className="text-lg">We ensure top-notch results on schedule.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Animated Image */}
      <div className="md:w-1/2 flex justify-center mt-10 md:mt-0">
        <Image
          src="/assets/lalibela.png" // Replace with actual image path
          alt="Animated Illustration"
          width={500}
          height={500}
          className="rounded-lg shadow-lg"
        />
      </div>
    </section>
  );
}
