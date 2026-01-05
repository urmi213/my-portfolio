import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { GraduationCap, Calendar, MapPin, Sparkles } from 'lucide-react';

const Education = () => {
  const containerRef = useRef(null);
  const sectionRef = useRef(null);

  // ✅ FIX 1: Check if we're at education section on page load
  useEffect(() => {
    // Check URL hash
    const hash = window.location.hash;
    if (hash === '#education') {
      // Ensure section is visible
      setTimeout(() => {
        const element = document.getElementById('education');
        if (element) {
          element.style.opacity = '1';
          element.style.visibility = 'visible';
        }
      }, 100);
    }

    // Force show content on mount
    setTimeout(() => {
      if (sectionRef.current) {
        gsap.set(sectionRef.current, { opacity: 1, visibility: 'visible' });
      }
    }, 200);
  }, []);

  // ✅ FIX 2: Simpler animation that works on refresh
  useGSAP(() => {
    // Only animate if section is in viewport
    gsap.from('.edu-animate', {
      opacity: 0,
      y: 20,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power2.out',
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });

    // Always ensure content is visible after animation
    gsap.to('.edu-content', {
      opacity: 1,
      duration: 0.5,
      delay: 0.3,
      onComplete: () => {
        document.querySelectorAll('.edu-content').forEach(el => {
          el.style.visibility = 'visible';
          el.style.opacity = '1';
        });
      }
    });

  }, { scope: containerRef });

  return (
    <section 
      id="education" 
      ref={containerRef}
      className="relative w-full py-20 px-4 sm:px-6 lg:px-8 min-h-screen flex items-centerlg:-ml-4 xl:-ml-40 lg:-mt-40"
      style={{ visibility: 'visible', opacity: 1 }}
    >
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl" />
      </div>

      <div ref={sectionRef} className="relative z-10 max-w-4xl mx-auto w-full" style={{ opacity: 1, visibility: 'visible' }}>
        {/* Header */}
        <div className="text-center mb-12 edu-animate">
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
          initial={{ opacity: 1, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="edu-content bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm rounded-2xl border border-yellow-500/20 p-6 md:p-8"
          style={{ opacity: 1, visibility: 'visible' }}
        >
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Icon */}
            <div className="p-5 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 edu-animate">
              <GraduationCap className="w-12 h-12 text-yellow-300" />
            </div>

            {/* Content */}
            <div className="flex-1 edu-content">
              <h3 className="text-2xl font-bold text-white mb-2">
                Metropolitan University, Sylhet
              </h3>
              <p className="text-xl text-yellow-300 mb-6">
                B.Sc. in Computer Science & Engineering (Honours)
              </p>

              {/* Details */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10 edu-animate">
                  <Calendar className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-yellow-200/70 text-sm">Duration</p>
                    <p className="text-white font-medium">2023 - Present</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10 edu-animate">
                  <div className="w-5 h-5 flex items-center justify-center text-yellow-300">
                    <span className="text-lg">🎓</span>
                  </div>
                  <div>
                    <p className="text-yellow-200/70 text-sm">Current Status</p>
                    <p className="text-white font-medium">3rd Year Undergraduate</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10 edu-animate">
                  <MapPin className="w-5 h-5 text-yellow-300" />
                  <div>
                    <p className="text-yellow-200/70 text-sm">Location</p>
                    <p className="text-white font-medium">Sylhet, Bangladesh</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 rounded-lg bg-gradient-to-r from-black/20 to-black/10 edu-animate">
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
              <div className="mt-8 edu-animate">
                <div className="flex justify-between mb-2">
                  <span className="text-yellow-200/70">Program Progress</span>
                  <span className="text-yellow-300 font-bold">60% Complete</span>
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
              <div className="mt-6 flex justify-center edu-animate">
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