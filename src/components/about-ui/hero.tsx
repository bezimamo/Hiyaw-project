import Image from 'next/image';
import { FaGlobeAfrica, FaUsers, FaLightbulb, FaHandsHelping, FaUniversalAccess } from 'react-icons/fa';

export function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 container mx-auto font-['Poppins'] dark:bg-[#41423A]">
      {/* Left Side - Text Content */}
      <div className="md:w-1/2 text-left px-8 md:px-16 mb-8 md:mb-0">
        <h4 className="text-lg font-extrabold text-[#41423A] mb-2 dark:text-white">Why Choose Us</h4>
        <h1 className="text-4xl md:text-5xl mt-4 text-[#F05A28] font-bold leading-tight">
          Experience the magic of creativity with all our services.
        </h1>

        {/* Features List */}
        <div className="mt-10 space-y-8">
          {[
            {
              icon: <FaGlobeAfrica className="text-white text-4xl" />,
              title: 'Cultural Authenticity',
              desc: 'We celebrate Ethiopian stories and heritage.',
            },
            {
              icon: <FaUsers className="text-white text-4xl" />,
              title: 'Community Empowerment',
              desc: 'We build a supportive network for collaboration and growth.',
            },
            {
              icon: <FaLightbulb className="text-white text-[36px]" />, // Slightly bigger to match others visually
              title: 'Artistic Innovation',
              desc: 'We embrace cutting-edge techniques to push creative boundaries.',
            },
            {
              icon: <FaHandsHelping className="text-white text-4xl" />,
              title: 'Social Responsibility',
              desc: 'We inspire positive change through meaningful storytelling.',
            },
            {
              icon: <FaUniversalAccess className="text-white text-4xl" />,
              title: 'Inclusivity',
              desc: 'We welcome diverse voices and perspectives.',
            },
          ].map(({ icon, title, desc }, index) => (
            <div key={index} className="flex items-start space-x-8 md:space-x-12">
              <div className="min-w-[5rem] min-h-[5rem] aspect-square flex-shrink-0 flex items-center justify-center rounded-full bg-[#F8B133]">
                {icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#41423A] dark:text-white">{title}</h3>
                <p className="text-sm md:text-base">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

     {/* Right Side - Image */}
<div className="md:w-1/2 flex justify-center px-8 md:px-16 mt-8 md:mt-0">
  <div className="relative w-full h-auto aspect-[3/4]">
    <Image
      src="/assets/project/image1.jpg"
      alt="Ethiopian Culture"
      fill
      className="rounded-lg shadow-lg object-cover"
    />
  </div>
</div>


    </section>
  );
}