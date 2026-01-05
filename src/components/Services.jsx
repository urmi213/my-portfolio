import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Rectangular progress skills
  const skills = [
    { name: 'HTML', percentage: 95, color: 'bg-gradient-to-r from-orange-500 to-orange-600' },
    { name: 'CSS', percentage: 90, color: 'bg-gradient-to-r from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 88, color: 'bg-gradient-to-r from-yellow-400 to-yellow-500' },
    { name: 'React', percentage: 92, color: 'bg-gradient-to-r from-cyan-400 to-cyan-500' },
    { name: 'Node.js', percentage: 85, color: 'bg-gradient-to-r from-green-500 to-green-600' },
    { name: 'TypeScript', percentage: 80, color: 'bg-gradient-to-r from-blue-600 to-blue-700' },
    { name: 'Next.js', percentage: 78, color: 'bg-gradient-to-r from-gray-700 to-gray-900' },
    { name: 'Tailwind', percentage: 92, color: 'bg-gradient-to-r from-teal-400 to-teal-500' },
  ];

  // Frontend technologies for marquee
  const frontendTech = [
    { name: 'React', color: 'text-cyan-400' },
    { name: 'Next.js', color: 'text-gray-200' },
    { name: 'Vue.js', color: 'text-green-500' },
    { name: 'JavaScript', color: 'text-yellow-400' },
    { name: 'Redux', color: 'text-purple-500' },
    { name: 'Bootstrap', color: 'text-purple-600' },
    { name: 'Tailwind', color: 'text-teal-400' },
  ];

  // Backend technologies for marquee
  const backendTech = [
    { name: 'Node.js', color: 'text-green-500' },
    { name: 'Express.js', color: 'text-gray-300' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'Java', color: 'text-red-500' },
    { name: 'C++', color: 'text-blue-500' },
    { name: 'C', color: 'text-gray-400' },
    { name: 'MongoDB', color: 'text-green-400' },
    { name: 'MySQL', color: 'text-blue-300' },
    { name: 'Firebase', color: 'text-yellow-500' },
  ];

  // Additional tools and languages for bottom marquee
  const additionalTech = [
    { name: 'Git', color: 'text-orange-600' },
    { name: 'GitHub', color: 'text-gray-200' },
    { name: 'Figma', color: 'text-purple-500' },
    { name: 'VS Code', color: 'text-blue-400' },
    { name: 'Java', color: 'text-red-500' },
    { name: 'C++', color: 'text-blue-500' },
    { name: 'C', color: 'text-gray-400' },
    { name: 'Android', color: 'text-green-400' },
  ];

  // Technology icons mapping with better emojis
  const getTechIcon = (name) => {
    const icons = {
      'HTML': '🔶', 'CSS': '🎨', 'JavaScript': '🚀', 'React': '⚛️', 
      'Node.js': '🟢', 'Next.js': '⏭️', 'Tailwind': '🌀',
      'Vue.js': '🟩', 'Bootstrap': '🥾', 'Express.js': '🚂', 'Python': '🐍',
      'Java': '☕', 'C++': '➕➕', 'C': '🔤', 
      'MongoDB': '🍃', 'MySQL': '🐬', 'Firebase': '🔥',
      'Git': '📦', 'GitHub': '🐱', 'Postman': '📬', 'Figma': '🎯', 
      'VS Code': '💻', 'Android': '🤖', 'Redux': '🔄',
    };
    return icons[name] || '💼';
  };

  return (
    <section id="skills" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-black relative overflow-hidden lg:-ml-4 xl:-ml-40 lg:-mt-30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[200px] h-[200px] xs:w-[250px] xs:h-[250px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] bg-gradient-to-bl from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[150px] h-[150px] xs:w-[200px] xs:h-[200px] sm:w-[250px] sm:h-[250px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] xl:w-[500px] xl:h-[500px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-2xl sm:blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:20px_20px] sm:bg-[size:30px_30px] md:bg-[size:40px_40px] lg:bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 md:mb-6">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Skills</span>
          </h2>
          
          <div className="w-12 h-1 xs:w-14 sm:w-16 md:w-20 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-4 sm:mb-6 md:mb-8"></div>
          
          <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 xs:px-3 sm:px-4">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-16">
          {/* Left Column - Rectangular Progress Bars */}
          <div>
            <div className="space-y-4 sm:space-y-5 md:space-y-6 lg:space-y-7 xl:space-y-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true, margin: "-20px" }}
                  className="group"
                >
                  <div className="flex items-center justify-between mb-1 sm:mb-2">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-6 h-6 xs:w-7 xs:h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center bg-gradient-to-br from-black/50 to-black/30 backdrop-blur-sm border border-gray-800">
                        <span className="text-sm xs:text-base sm:text-lg md:text-xl lg:text-xl">{getTechIcon(skill.name)}</span>
                      </div>
                      <span className="text-white font-semibold text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">{skill.name}</span>
                    </div>
                    <span className="text-yellow-300 font-bold text-xs xs:text-sm sm:text-base md:text-lg lg:text-lg xl:text-xl">{skill.percentage}%</span>
                  </div>
                  
                  {/* Progress Bar Container */}
                  <div className="h-2 xs:h-2.5 sm:h-3 md:h-3.5 lg:h-4 rounded-full bg-gray-800/50 overflow-hidden">
                    {/* Animated Progress Bar */}
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      transition={{ duration: 1.5, delay: 0.5 + index * 0.1, ease: "easeOut" }}
                      viewport={{ once: true, margin: "-20px" }}
                      className={`h-full rounded-full ${skill.color} relative`}
                    >
                      {/* Shimmer Effect */}
                      <motion.div
                        initial={{ x: '-100%' }}
                        whileInView={{ x: '100%' }}
                        transition={{ duration: 2, delay: 1 + index * 0.1, repeat: Infinity, repeatDelay: 3 }}
                        viewport={{ once: true, margin: "-20px" }}
                        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"
                      />
                    </motion.div>
                  </div>
                  
                  {/* Progress dots for better visualization */}
                  <div className="flex justify-between mt-0.5 sm:mt-1">
                    {[0, 25, 50, 75, 100].map((point) => (
                      <div key={point} className="flex flex-col items-center">
                        <div className={`w-0.5 h-0.5 xs:w-1 xs:h-1 rounded-full ${skill.percentage >= point ? 'bg-yellow-400' : 'bg-gray-700'}`} />
                        <span className="text-[8px] xs:text-[9px] sm:text-xs text-gray-500 mt-0.5 sm:mt-1">{point}%</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Box below progress bars */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true, margin: "-20px" }}
              className="mt-6 sm:mt-8 md:mt-10 lg:mt-12 p-3 xs:p-4 sm:p-5 md:p-6 rounded-lg sm:rounded-xl md:rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm"
            >
              <h3 className="text-base xs:text-lg sm:text-xl md:text-xl font-bold text-white mb-1 sm:mb-2 md:mb-3 flex items-center gap-1 sm:gap-2">
                <span className="text-yellow-300">✦</span> Skill Proficiency
              </h3>
              <p className="text-gray-300 text-xs xs:text-sm sm:text-base md:text-base leading-relaxed">
                Progress bars show my confidence level in each technology. 
                I continuously improve my skills through projects, courses, and real-world applications.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Frontend & Backend Sections with Marquee */}
          <div className="space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12 mt-6 sm:mt-8 lg:mt-0">
            {/* Frontend Section */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="w-1.5 h-4 xs:w-2 xs:h-5 sm:w-2.5 sm:h-6 md:w-3 md:h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">Frontend Technologies</h3>
              </div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden py-3 xs:py-4 sm:py-5 md:py-6">
                {/* Left Fade Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right Fade Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                
                {/* First Marquee - Slower */}
                <div className="flex animate-marquee whitespace-nowrap">
                  {[...frontendTech, ...frontendTech].map((tech, index) => (
                    <div key={index} className="inline-flex flex-col items-center gap-1 xs:gap-2 sm:gap-3 mx-1 xs:mx-2 sm:mx-3 md:mx-4 px-1 xs:px-2 sm:px-3 md:px-4 flex-shrink-0">
                      <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 sm:hover:scale-110">
                        <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl ${tech.color}`}>
                          {getTechIcon(tech.name)}
                        </div>
                      </div>
                      <span className="text-[10px] xs:text-xs sm:text-sm md:text-sm text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Backend Section */}
            <div>
              <div className="flex items-center gap-2 sm:gap-3 mb-3 xs:mb-4 sm:mb-5 md:mb-6">
                <div className="w-1.5 h-4 xs:w-2 xs:h-5 sm:w-2.5 sm:h-6 md:w-3 md:h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl font-bold text-white">Backend & Databases</h3>
              </div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden py-3 xs:py-4 sm:py-5 md:py-6">
                {/* Left Fade Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right Fade Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                
                {/* Marquee - Reverse Direction */}
                <div className="flex animate-marquee-reverse whitespace-nowrap">
                  {[...backendTech, ...backendTech].map((tech, index) => (
                    <div key={index} className="inline-flex flex-col items-center gap-1 xs:gap-2 sm:gap-3 mx-1 xs:mx-2 sm:mx-3 md:mx-4 px-1 xs:px-2 sm:px-3 md:px-4 flex-shrink-0">
                      <div className="p-1.5 xs:p-2 sm:p-2.5 md:p-3 lg:p-4 rounded-md sm:rounded-lg md:rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:scale-105 sm:hover:scale-110">
                        <div className={`text-lg xs:text-xl sm:text-2xl md:text-3xl lg:text-3xl ${tech.color}`}>
                          {getTechIcon(tech.name)}
                        </div>
                      </div>
                      <span className="text-[10px] xs:text-xs sm:text-sm md:text-sm text-gray-300 font-medium">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Tools & Languages Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true, margin: "-20px" }}
          className="mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16"
        >
          <div className="text-center mb-4 xs:mb-5 sm:mb-6 md:mb-7 lg:mb-8">
            <h3 className="text-lg xs:text-xl sm:text-2xl md:text-2xl lg:text-2xl font-bold text-white mb-1 xs:mb-2 sm:mb-3">Tools & Languages</h3>
            <p className="text-gray-400 text-xs xs:text-sm sm:text-base md:text-base">Additional technologies I work with</p>
          </div>

          {/* Continuous Marquee */}
          <div className="relative overflow-hidden py-3 xs:py-4 sm:py-5 md:py-6">
            {/* Left Fade Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            {/* Right Fade Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-4 xs:w-6 sm:w-8 md:w-12 lg:w-16 xl:w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            {/* Fast Marquee */}
            <div className="flex animate-marquee-fast whitespace-nowrap">
              {[...additionalTech, ...additionalTech].map((tech, index) => (
                <div key={index} className="inline-flex items-center gap-1 xs:gap-2 sm:gap-3 md:gap-4 mx-1 xs:mx-1.5 sm:mx-2 md:mx-3 px-2 xs:px-3 sm:px-4 md:px-5 lg:px-6 py-1.5 xs:py-2 sm:py-2.5 md:py-3 rounded-md sm:rounded-lg md:rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm flex-shrink-0 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <div className={`text-base xs:text-lg sm:text-xl md:text-2xl lg:text-2xl ${tech.color}`}>
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-gray-300 font-medium text-xs xs:text-sm sm:text-base md:text-base">{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Add CSS animations for marquee effects */}
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        @keyframes marquee-reverse {
          0% {
            transform: translateX(-50%);
          }
          100% {
            transform: translateX(0);
          }
        }
        
        @keyframes marquee-fast {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        
        .animate-marquee-reverse {
          animation: marquee-reverse 35s linear infinite;
        }
        
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }
        
        /* Extra small devices (phones, less than 400px) */
        @media (max-width: 399px) {
          .animate-marquee {
            animation: marquee 20s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 25s linear infinite;
          }
          
          .animate-marquee-fast {
            animation: marquee-fast 15s linear infinite;
          }
        }
        
        /* Small devices (phones, 400px and up) */
        @media (min-width: 400px) and (max-width: 639px) {
          .animate-marquee {
            animation: marquee 25s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 30s linear infinite;
          }
          
          .animate-marquee-fast {
            animation: marquee-fast 20s linear infinite;
          }
        }
        
        /* Medium devices (tablets, 768px and up) */
        @media (min-width: 768px) {
          .animate-marquee {
            animation: marquee 35s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 40s linear infinite;
          }
          
          .animate-marquee-fast {
            animation: marquee-fast 30s linear infinite;
          }
        }
        
        /* Large devices (desktops, 1024px and up) */
        @media (min-width: 1024px) {
          .animate-marquee {
            animation: marquee 40s linear infinite;
          }
          
          .animate-marquee-reverse {
            animation: marquee-reverse 45s linear infinite;
          }
          
          .animate-marquee-fast {
            animation: marquee-fast 35s linear infinite;
          }
        }
      `}</style>
    </section>
  );
};

export default Skills;