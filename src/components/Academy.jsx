import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    gsap.from('.edu-fade', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out'
    });
  }, { scope: containerRef });

  return (
    <section 
      id="education" 
      ref={containerRef} 
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 lg:-ml-4 xl:-ml-40 lg:-mt-40 "
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12 edu-fade">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 backdrop-blur-sm mb-4">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span className="text-yellow-300 font-semibold tracking-wide">EDUCATION</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">Background</span>
          </h2>
          
          <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full mx-auto"></div>
        </div>

        {/* Education Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="edu-fade bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl border border-yellow-500/20 p-6 md:p-8"
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Icon */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
              <GraduationCap className="w-12 h-12 text-yellow-300" />
            </div>

            {/* Content */}
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-white mb-2">
                Metropolitan University, Sylhet
              </h3>
              <p className="text-xl text-yellow-300 mb-6">
                B.Sc. in Computer Science & Engineering (Honours)
              </p>

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-yellow-200/70 text-sm">Duration</p>
                    <p className="text-white font-medium">2023 - Present</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10">
                  <div className="w-5 h-5 flex items-center justify-center text-yellow-300">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="text-yellow-200/70 text-sm">Current Status</p>
                    <p className="text-white font-medium">3rd Year Undergraduate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-yellow-200/70 text-sm">Location</p>
                    <p className="text-white font-medium">Sylhet, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10">
                  <div className="w-5 h-5 flex items-center justify-center text-yellow-300">
                    <span className="text-lg">⚡</span>
                  </div>
                  <div>
                    <p className="text-yellow-200/70 text-sm">Program</p>
                    <p className="text-white font-medium">B.Sc. in CSE</p>
                  </div>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between mb-2">
                  <span className="text-yellow-200/70">Program Progress</span>
                  <span className="text-yellow-300 font-bold">70% Complete</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-yellow-500 to-yellow-300 h-2 rounded-full"
                    style={{ width: '60%' }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-yellow-200/50">
                  <span>Year 1</span>
                  <span>Year 2</span>
                  <span className="text-yellow-300 font-bold">Year 3</span>
                  <span>Year 4</span>
                </div>
              </div>

              {/* Current Status Badge */}
              <div className="mt-6 flex justify-center">
                <span className="px-6 py-2 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 rounded-full text-yellow-300 font-medium">
                  Currently Pursuing
                </span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education;