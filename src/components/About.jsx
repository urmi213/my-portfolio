import React from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { User, Target, Award, Briefcase, Code2, Palette, Database, Cpu } from 'lucide-react'

const About = () => {
  const stats = [
    { icon: <Briefcase />, value: '5+', label: 'Years Experience', suffix: '' },
    { icon: <Award />, value: '120+', label: 'Projects Completed', suffix: '' },
    { icon: <User />, value: '80+', label: 'Happy Clients', suffix: '' },
    { icon: <Target />, value: '95', label: 'Client Satisfaction', suffix: '%' },
  ]

  const skills = [
    { name: 'React/Next.js', level: 95, icon: <Code2 />, color: 'from-cyan-500 to-blue-500' },
    { name: 'UI/UX Design', level: 90, icon: <Palette />, color: 'from-purple-500 to-pink-500' },
    { name: 'Backend', level: 85, icon: <Database />, color: 'from-green-500 to-emerald-500' },
    { name: 'DevOps', level: 80, icon: <Cpu />, color: 'from-orange-500 to-red-500' },
  ]

  useGSAP(() => {
    // Counter animation for stats
    stats.forEach((stat, index) => {
      gsap.from(`.stat-value-${index}`, {
        textContent: 0,
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        stagger: 1,
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
          end: 'bottom 20%',
          toggleActions: 'play none none none',
        },
      })
    })

    // Skill bars animation
    gsap.from('.skill-bar', {
      width: '0%',
      duration: 1.5,
      ease: 'power3.out',
      stagger: 0.3,
      scrollTrigger: {
        trigger: '.skills-section',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    })
  })

  return (
    <section id="about" className="section-py reveal">
      <div className="container-tunis">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            About <span className="text-gradient">Me</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Get to know more about my background, skills, and what drives me to create exceptional digital experiences
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-6">
              <h3 className="text-3xl font-bold">
                Crafting digital experiences with passion and precision
              </h3>
              <p className="text-gray-300 leading-relaxed">
                I am a passionate web designer and front-end developer with over 5 years of experience creating beautiful, functional websites and applications. My journey started with a curiosity about how websites work, which evolved into a career dedicated to creating exceptional digital experiences.
              </p>
              <p className="text-gray-300 leading-relaxed">
                I specialize in React, Next.js, and modern web technologies, always staying updated with the latest trends and best practices. My approach combines aesthetic design with technical excellence to deliver solutions that not only look great but also perform exceptionally.
              </p>
            </div>

            {/* Skills Section */}
            <div className="skills-section pt-6">
              <h4 className="text-2xl font-bold mb-8">My Skills</h4>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="space-y-3">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg bg-gradient-to-r ${skill.color}`}>
                          {skill.icon}
                        </div>
                        <span className="font-medium">{skill.name}</span>
                      </div>
                      <span className="text-gray-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-tunis-gray rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.5, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        className={`h-full rounded-full bg-gradient-to-r ${skill.color} skill-bar`}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="stats-grid"
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="glass-effect p-6 rounded-2xl text-center card-hover"
                >
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-full mb-4">
                    <div className="text-primary">
                      {stat.icon}
                    </div>
                  </div>
                  <div className="text-4xl font-bold mb-2">
                    <span className={`stat-value-${index}`}>{stat.value}</span>
                    {stat.suffix}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="mt-12">
              <h4 className="text-2xl font-bold mb-6">Tech Stack</h4>
              <div className="flex flex-wrap gap-3">
                {[
                  'React', 'Next.js', 'TypeScript', 'Tailwind CSS', 
                  'GSAP', 'Framer Motion', 'Node.js', 'MongoDB',
                  'GraphQL', 'Firebase', 'AWS', 'Docker'
                ].map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{ scale: 1.1 }}
                    className="tag hover-lift cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              viewport={{ once: true }}
              className="mt-12 glass-effect p-6 rounded-2xl border-l-4 border-primary"
            >
              <p className="text-gray-300 italic">
                "Good design is as little design as possible. Less, but better – because it concentrates on the essential aspects."
              </p>
              <p className="mt-4 text-gray-500 text-sm">- Dieter Rams</p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About