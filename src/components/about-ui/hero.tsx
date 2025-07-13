'use client';

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
    <section className="flex flex-col md:flex-row items-center justify-between py-16 px-6 md:px-16 container mx-auto font-['Poppins'] bg-[#f8f8f8]  dark:bg-[#41423A]">
      {/* Left Side - Text Content */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="md:w-[43%] text-left min-h-[800px] flex flex-col justify-start md:mr-4 mt-8"
      >
        <h4 className="text-lg font-extrabold text-[#41423A] mb-2 dark:text-white">
          What Sets Us Apart
        </h4>
        <h1
          className="text-[#F05A28] font-bold mt-4"
          style={{ fontSize: '48px', lineHeight: '52px' }}
        >
          Reimagining creativity through culture, purpose, and passion.
        </h1>

        {/* Features List */}
        <div className="mt-10 space-y-10">
          {[
            {
              icon: <FaMountain className="text-white text-3xl" />,
              title: 'Rooted in Identity',
              desc: 'We draw strength from Ethiopia’s rich cultural foundations.',
            },
            {
              icon: <FaHandshake className="text-white text-3xl" />,
              title: 'Collaborative Spirit',
              desc: 'We grow stronger by working side-by-side with local talents.',
            },
            {
              icon: <FaPalette className="text-white text-3xl" />,
              title: 'Creative Freedom',
              desc: 'We encourage bold artistic exploration and unique expression.',
            },
            {
              icon: <FaSeedling className="text-white text-3xl" />,
              title: 'Sustainable Impact',
              desc: 'Our work reflects care for community, environment, and legacy.',
            },
            {
              icon: <FaComments className="text-white text-3xl" />,
              title: 'Open Dialogue',
              desc: 'We foster conversations that bridge differences and inspire unity.',
            },
          ].map(({ icon, title, desc }, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ delay: 0.2 * index, duration: 0.6 }}
              className="flex items-start gap-6"
            >
              <div className="w-16 h-16 flex-shrink-0 flex items-center justify-center rounded-full bg-[#F8B133]">
                {icon}
              </div>
              <div>
                <h3
                  className="font-bold text-[#41423A] dark:text-white"
                  style={{ fontSize: '22px', lineHeight: '29px' }}
                >
                  {title}
                </h3>
                <p
                  className="text-[#41423A] dark:text-white"
                  style={{
                    fontSize: '18px',
                    lineHeight: '1.4',
                    marginBottom: '1.4em',
                    letterSpacing: '1px',
                  }}
                >
                  {desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Right Side - Video (replaces Image) */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8 }}
        className="md:w-[50%] flex justify-center min-h-[700px] items-center mt-12 md:mt-0"
      >
       <div className="relative w-full h-[700px] max-w-[550px] overflow-hidden">
  {/* Light mode video */}
  <video
    src="/assets/project/MotionGifs/Run cycle2.mov"
    autoPlay
    loop
    muted
    playsInline
    className="rounded-lg shadow-lg object-cover object-bottom scale-110 block dark:hidden w-full h-full"
  />
  {/* Dark mode video */}
  <video
    src="/assets/project/MotionGifs/run dark mode.mov"
    autoPlay
    loop
    muted
    playsInline
    className="rounded-lg shadow-lg object-cover object-bottom scale-110 hidden dark:block w-full h-full"
  />
</div>

      </motion.div>
    </section>
  );
}
