import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Palette, Coffee, Gamepad2, Music, BookOpen, Target, Heart, Sparkles, Zap } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React.js', level: 95 },
    { name: 'JavaScript/ES6+', level: 90 },
    { name: 'Tailwind CSS', level: 92 },
    { name: 'UI/UX Design', level: 88 },
    { name: 'Next.js', level: 85 },
    { name: 'TypeScript', level: 82 },
  ];

  const hobbies = [
    { icon: <Gamepad2 />, title: 'Gaming', desc: 'Strategy & RPG games enthusiast' },
    { icon: <Music />, title: 'Music', desc: 'Play guitar & explore new genres' },
    { icon: <BookOpen />, title: 'Reading', desc: 'Tech blogs & fantasy novels' },
    { icon: <Coffee />, title: 'Coffee Art', desc: 'Creating beautiful latte art' },
  ];

  return (
    <section id="about" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 -right-40 w-[500px] h-[500px] bg-gradient-to-bl from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 -left-40 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-24"
        >
          <div className="inline-flex items-center gap-3 mb-4">
            <Sparkles className="w-5 h-5 text-yellow-300" />
            <span className="text-yellow-300 font-semibold tracking-wide text-sm uppercase">Get To Know Me</span>
            <Sparkles className="w-5 h-5 text-yellow-300" />
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">About </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Me</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column - Image & Stats */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative max-w-md mx-auto">
              {/* Main Image Container */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-yellow-500/20 bg-black">
                <div className="aspect-square bg-gradient-to-br from-gray-900 to-black">
                  {/* Placeholder for your image */}
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="text-center p-8">
                      <div className="w-32 h-32 md:w-40 md:h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 flex items-center justify-center">
                       
                      </div>
                      <img src="src/urmi2.png" alt="" class="object-cover -mt-60 bg-black"/>
                     
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-24 h-24 rounded-full border-2 border-dashed border-yellow-500/30 animate-spin-slow"></div>
                <div className="absolute -bottom-4 -left-4 w-20 h-20 rounded-full border-2 border-dashed border-yellow-500/30 animate-spin-slow-reverse"></div>
              </div>

              {/* Fun Stats */}
              <div className="grid grid-cols-3 gap-4 mt-8">
                <div className="text-center p-4 rounded-xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300">1000+</div>
                  <div className="text-sm text-gray-300 mt-1">Cups of Coffee</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300">15+</div>
                  <div className="text-sm text-gray-300 mt-1">Projects Built</div>
                </div>
                <div className="text-center p-4 rounded-xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm">
                  <div className="text-2xl font-bold text-yellow-300">∞</div>
                  <div className="text-sm text-gray-300 mt-1">Passion Level</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Introduction */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Heart className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">My Journey</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                Hello! I'm <span className="text-yellow-300 font-semibold">Urmi Chakraborty</span>, a passionate Web Designer & Front-End Developer with over 4 years of experience crafting digital experiences that users love.
              </p>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                My journey began in college when I wrote my first "Hello World" in HTML. Since then, I've been on an exciting rollercoaster ride through JavaScript frameworks, CSS preprocessors, and design principles. What started as curiosity has evolved into a <span className="text-yellow-300">lifelong passion</span> for creating beautiful, functional web applications.
              </p>
            </div>

            {/* What I Enjoy */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Zap className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">What I Love to Build</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm particularly drawn to projects that challenge my creativity and problem-solving skills. I enjoy building:
              </p>
              
              <ul className="space-y-3">
                {[
                  'Interactive dashboards with real-time data visualization',
                  'E-commerce platforms with seamless user experiences',
                  'Creative portfolios that tell compelling stories',
                  'Responsive web apps that work beautifully on all devices',
                  'Accessible interfaces that everyone can use'
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2"></div>
                    <span className="text-gray-300">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Skills Progress */}
            {/* <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Target className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">Technical Skills</h3>
              </div>
              
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between">
                      <span className="text-gray-300 font-medium">{skill.name}</span>
                      <span className="text-yellow-300 font-bold">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Hobbies & Interests */}
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Palette className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">Beyond The Code</h3>
              </div>
              
              <p className="text-gray-300 text-lg leading-relaxed">
                When I'm not coding, you can find me exploring other creative outlets that keep me inspired and balanced:
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {hobbies.map((hobby, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="text-center p-4 rounded-xl border border-yellow-500/20 bg-black/40 backdrop-blur-sm hover:border-yellow-400/50 transition-all"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 flex items-center justify-center">
                      {React.cloneElement(hobby.icon, { className: "w-5 h-5 text-yellow-300" })}
                    </div>
                    <h4 className="font-bold text-white mb-1">{hobby.title}</h4>
                    <p className="text-sm text-gray-400">{hobby.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Personality Touch */}
            <div className="p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20">
                  <Sparkles className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-white mb-2">My Philosophy</h4>
                  <p className="text-gray-300">
                    I believe that great code is like poetry—it should be beautiful, efficient, and tell a compelling story. 
                    I approach every project with <span className="text-yellow-300">enthusiasm, attention to detail</span>, and a commitment to excellence. 
                    For me, development isn't just a job; it's an opportunity to <span className="text-yellow-300">make a positive impact</span> through technology.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Fun Facts Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20 p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-black/40 via-yellow-500/5 to-black/40 backdrop-blur-sm"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { label: 'Code Before Coffee?', value: 'Coffee First ☕', color: 'text-yellow-300' },
              { label: 'Favorite Editor Theme', value: 'Dracula 🧛', color: 'text-purple-400' },
              { label: 'Debugging Method', value: 'Console.log & Patience', color: 'text-green-400' },
              { label: 'Work Style', value: 'Late Night Coder 🌙', color: 'text-blue-400' },
            ].map((fact, index) => (
              <div key={index} className="space-y-2">
                <p className="text-sm text-gray-400">{fact.label}</p>
                <p className={`font-bold text-lg ${fact.color}`}>{fact.value}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

// Add custom animations to tailwind.config.js
// Add these to your tailwind.config.js extensions:
// animation: {
//   'spin-slow': 'spin 20s linear infinite',
//   'spin-slow-reverse': 'spin-reverse 15s linear infinite',
// }

export default About;