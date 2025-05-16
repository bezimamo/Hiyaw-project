'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  FaMountain,
  FaHandshake,
  FaPalette,
  FaSeedling,
  FaComments,
} from 'react-icons/fa';

export function AboutHero() {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-8 md:px-16 container mx-auto font-['Poppins'] dark:bg-[#41423A]">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 text-left px-8 md:px-16 mb-8 md:mb-0 min-h-[600px] flex flex-col justify-center"
      >
        <h4 className="text-lg font-extrabold text-[#41423A] mb-2 dark:text-white">
          What Sets Us Apart
        </h4>
        <h1 className="text-4xl md:text-5xl mt-4 text-[#F05A28] font-bold leading-tight">
          Reimagining creativity through culture, purpose, and passion.
        </h1>

        {/* Features List */}
        <div className="mt-10 space-y-8">
          {[
            {
              icon: <FaMountain className="text-white text-4xl" />,
              title: 'Rooted in Identity',
              desc: 'We draw strength from Ethiopia’s rich cultural foundations.',
            },
            {
              icon: <FaHandshake className="text-white text-4xl" />,
              title: 'Collaborative Spirit',
              desc: 'We grow stronger by working side-by-side with local talents.',
            },
            {
              icon: <FaPalette className="text-white text-4xl" />,
              title: 'Creative Freedom',
              desc: 'We encourage bold artistic exploration and unique expression.',
            },
            {
              icon: <FaSeedling className="text-white text-4xl" />,
              title: 'Sustainable Impact',
              desc: 'Our work reflects care for community, environment, and legacy.',
            },
            {
              icon: <FaComments className="text-white text-4xl" />,
              title: 'Open Dialogue',
              desc: 'We foster conversations that bridge differences and inspire unity.',
            },
          ].map(({ icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index, duration: 0.5 }}
              className="flex items-start space-x-8 md:space-x-12"
            >
              <div className="min-w-[5rem] min-h-[5rem] aspect-square flex-shrink-0 flex items-center justify-center rounded-full bg-[#F8B133]">
                {icon}
              </div>
              <div>
                <h3 className="text-xl md:text-2xl font-bold text-[#41423A] dark:text-white">
                  {title}
                </h3>
                <p className="text-sm md:text-base text-[#41423A] dark:text-white">
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Image */}
      <motion.div
      initial={{ opacity: 0, x: -50 }}
      animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="md:w-1/2 flex justify-center px-8 md:px-16 mt-8 md:mt-0 min-h-[600px] items-center"
      >
        <div className="relative w-full h-[600px] max-w-[400px]">
          <Image
            src="/assets/project/image1.jpg"
            alt="Creative Collaboration"
            fill
           priority
            className="rounded-lg shadow-lg object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
