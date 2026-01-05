import React from 'react';
import { motion } from 'framer-motion';

const Skills = () => {
  // Circular progress skills
  const circularSkills = [
    { name: 'HTML', percentage: 95, color: 'from-orange-500 to-orange-600' },
    { name: 'CSS', percentage: 90, color: 'from-blue-500 to-blue-600' },
    { name: 'JavaScript', percentage: 88, color: 'from-yellow-400 to-yellow-500' },
    { name: 'React', percentage: 92, color: 'from-cyan-400 to-cyan-500' },
    { name: 'Node.js', percentage: 85, color: 'from-green-500 to-green-600' },
    { name: 'TypeScript', percentage: 80, color: 'from-blue-600 to-blue-700' },
    { name: 'Next.js', percentage: 78, color: 'from-gray-700 to-gray-900' },
    { name: 'Tailwind', percentage: 92, color: 'from-teal-400 to-teal-500' },
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
    { name: 'GraphQL', color: 'text-pink-500' },
  ];

  // Additional tools and languages for bottom marquee
  const additionalTech = [
    { name: 'Git', color: 'text-orange-600' },
    { name: 'GitHub', color: 'text-gray-200' },
    { name: 'Docker', color: 'text-blue-500' },
    { name: 'Postman', color: 'text-orange-500' },
    { name: 'WordPress', color: 'text-blue-900' },
    { name: 'Figma', color: 'text-purple-500' },
    { name: 'Adobe XD', color: 'text-pink-500' },
    { name: 'VS Code', color: 'text-blue-400' },
    { name: 'Java', color: 'text-red-500' },
    { name: 'C++', color: 'text-blue-500' },
    { name: 'C', color: 'text-gray-400' },
    { name: 'Python', color: 'text-yellow-400' },
    { name: 'Android', color: 'text-green-400' },
    { name: 'iOS', color: 'text-gray-300' },
    { name: 'Swift', color: 'text-orange-400' },
  ];

  // Technology icons mapping with better emojis
  const getTechIcon = (name) => {
    const icons = {
      'HTML': '🔶', 'CSS': '🎨', 'JavaScript': '🚀', 'React': '⚛️', 
      'Node.js': '🟢', 'TypeScript': '🔷', 'Next.js': '⏭️', 'Tailwind': '🌀',
      'Vue.js': '🟩', 'Angular': '🅰️', 'Redux': '🔄', 'jQuery': '💰',
      'Bootstrap': '🥾', 'Sass': '💝', 'Express.js': '🚂', 'Python': '🐍',
      'Java': '☕', 'C++': '➕➕', 'C': '🔤', 'PHP': '🐘', 'Laravel': '🏎️',
      'MongoDB': '🍃', 'MySQL': '🐬', 'PostgreSQL': '🐘', 'Firebase': '🔥',
      'GraphQL': '🛠️', 'Git': '📦', 'GitHub': '🐱', 'Docker': '🐳',
      'Postman': '📬', 'WordPress': '✍️', 'Figma': '🎯', 'Adobe XD': '✏️',
      'VS Code': '💻', 'Material UI': '🎪', 'Android': '🤖', 'iOS': '📱',
      'Swift': '🕊️'
    };
    return icons[name] || '💼';
  };

  return (
    <section id="skills" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">My </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Skills</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Circular Progress Skills */}
          <div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {circularSkills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative group"
                >
                  {/* Circular Progress Container */}
                  <div className="relative w-36 h-36 mx-auto">
                    {/* Background Circle */}
                    <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
                      {/* Background Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke="rgba(255,255,255,0.1)"
                        strokeWidth="8"
                      />
                      {/* Progress Circle */}
                      <circle
                        cx="50"
                        cy="50"
                        r="45"
                        fill="none"
                        stroke={`url(#gradient-${index})`}
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeDasharray={`${skill.percentage * 2.83} 283`}
                        className="transition-all duration-1000 ease-out"
                      />
                      <defs>
                        <linearGradient id={`gradient-${index}`} x1="0%" y1="0%" x2="100%" y2="0%">
                          <stop offset="0%" className={`${skill.color.split(' ')[0]}`} />
                          <stop offset="100%" className={`${skill.color.split(' ')[1]}`} />
                        </linearGradient>
                      </defs>
                    </svg>

                    {/* Center Content */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <div className={`p-3 rounded-full bg-gradient-to-br ${skill.color} bg-opacity-20 mb-2`}>
                        <div className="text-white text-2xl">
                          {getTechIcon(skill.name)}
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-white">{skill.percentage}%</div>
                      <div className="text-sm text-gray-300 mt-1">{skill.name}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Info Box below circular skills */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="mt-12 p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-black/40 to-black/20 backdrop-blur-sm"
            >
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                <span className="text-yellow-300">✦</span> Expertise Levels
              </h3>
              <p className="text-gray-300">
                These percentages represent my confidence and proficiency in each technology. 
                I continuously update my skills through projects, courses, and real-world applications.
              </p>
            </motion.div>
          </div>

          {/* Right Column - Frontend & Backend Sections with Marquee */}
          <div className="space-y-12">
            {/* Frontend Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-cyan-400 to-cyan-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Frontend Technologies</h3>
              </div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden py-6">
                {/* Left Fade Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right Fade Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                
                {/* First Marquee - Slower */}
                <motion.div
                  animate={{ 
                    x: [0, -1000]
                  }}
                  transition={{ 
                    x: {
                      repeat: Infinity,
                      duration: 40,
                      ease: "linear",
                      repeatType: "loop"
                    }
                  }}
                  className="flex gap-8"
                >
                  {[...frontendTech, ...frontendTech, ...frontendTech].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 px-4 flex-shrink-0">
                      <div className="p-4 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-cyan-500/50 transition-all duration-300 hover:scale-110">
                        <div className={`text-3xl ${tech.color}`}>
                          {getTechIcon(tech.name)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>

            {/* Backend Section */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-3 h-8 bg-gradient-to-b from-green-400 to-green-600 rounded-full"></div>
                <h3 className="text-2xl font-bold text-white">Backend & Databases</h3>
              </div>
              
              {/* Marquee Container */}
              <div className="relative overflow-hidden py-6">
                {/* Left Fade Gradient */}
                <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
                {/* Right Fade Gradient */}
                <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
                
                {/* Marquee - Reverse Direction */}
                <motion.div
                  animate={{ 
                    x: [-1000, 0]
                  }}
                  transition={{ 
                    x: {
                      repeat: Infinity,
                      duration: 45,
                      ease: "linear",
                      repeatType: "loop"
                    }
                  }}
                  className="flex gap-8"
                >
                  {[...backendTech, ...backendTech, ...backendTech].map((tech, index) => (
                    <div key={index} className="flex flex-col items-center gap-3 px-4 flex-shrink-0">
                      <div className="p-4 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm hover:border-green-500/50 transition-all duration-300 hover:scale-110">
                        <div className={`text-3xl ${tech.color}`}>
                          {getTechIcon(tech.name)}
                        </div>
                      </div>
                      <span className="text-sm text-gray-300 font-medium whitespace-nowrap">{tech.name}</span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section - Additional Tools & Languages Marquee */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-3">Tools & Languages</h3>
            <p className="text-gray-400">Additional technologies I work with</p>
          </div>

          {/* Continuous Marquee */}
          <div className="relative overflow-hidden py-6">
            {/* Left Fade Gradient */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-black to-transparent z-10"></div>
            {/* Right Fade Gradient */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-black to-transparent z-10"></div>
            
            {/* Fast Marquee */}
            <motion.div
              animate={{ 
                x: [0, -2000]
              }}
              transition={{ 
                x: {
                  repeat: Infinity,
                  duration: 35,
                  ease: "linear",
                  repeatType: "loop"
                }
              }}
              className="flex gap-10"
            >
              {[...additionalTech, ...additionalTech, ...additionalTech].map((tech, index) => (
                <div key={index} className="flex items-center gap-4 px-6 py-3 rounded-xl border border-gray-800 bg-black/40 backdrop-blur-sm flex-shrink-0 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <div className={`text-2xl ${tech.color}`}>
                    {getTechIcon(tech.name)}
                  </div>
                  <span className="text-gray-300 font-medium whitespace-nowrap">{tech.name}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Skill Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          <div className="text-center p-6 rounded-2xl border border-yellow-500/20 bg-black/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-300">30+</div>
            <div className="text-gray-300 mt-2">Projects Completed</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-yellow-500/20 bg-black/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-300">4+</div>
            <div className="text-gray-300 mt-2">Years Experience</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-yellow-500/20 bg-black/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-300">25+</div>
            <div className="text-gray-300 mt-2">Technologies</div>
          </div>
          <div className="text-center p-6 rounded-2xl border border-yellow-500/20 bg-black/30 backdrop-blur-sm">
            <div className="text-3xl font-bold text-yellow-300">15+</div>
            <div className="text-gray-300 mt-2">Happy Clients</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;