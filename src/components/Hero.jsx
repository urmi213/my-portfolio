import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Github, Linkedin, Twitter, Dribbble, ArrowRight, Download, Sparkles } from 'lucide-react'

const Hero = () => {
  const containerRef = useRef(null)
  const titleRef = useRef(null)
  const imageRef = useRef(null)

  const socialLinks = [
    { icon: <Github />, href: '#', label: 'GitHub', color: 'hover:bg-gray-800' },
    { icon: <Linkedin />, href: '#', label: 'LinkedIn', color: 'hover:bg-blue-600/20' },
    { icon: <Twitter />, href: '#', label: 'Twitter', color: 'hover:bg-sky-500/20' },
    { icon: <Dribbble />, href: '#', label: 'Dribbble', color: 'hover:bg-pink-600/20' },
  ]

  useGSAP(() => {
    // Title animation
    gsap.from(titleRef.current, {
      opacity: 0,
      y: 50,
      duration: 1.5,
      ease: 'power3.out',
    })

    // Image animation
    gsap.from(imageRef.current, {
      opacity: 0,
      scale: 0.8,
      duration: 1.2,
      ease: 'back.out(1.7)',
      delay: 0.3,
    })

    // Floating elements
    gsap.to('.float-element', {
      y: -20,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })

    // Text reveal
    gsap.to('.reveal-text', {
      opacity: 1,
      y: 0,
      duration: 1,
      stagger: 0.1,
      delay: 0.5,
      ease: 'power3.out',
    })
  }, { scope: containerRef })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  }

  return (
    <section id="home" ref={containerRef} className="relative min-h-screen flex items-center pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-primary/5 via-transparent to-accent/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-secondary/5 via-transparent to-primary/5 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-pattern opacity-10" />
      </div>

      <div className="container-tunis relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Text Content */}
          <div className="space-y-8">
            {/* Badge */}
            <motion.div variants={itemVariants} className="inline-flex">
              <div className="badge float-element">
                <Sparkles className="w-4 h-4 text-accent" />
                <span>Hello, I'm Steve Milner</span>
              </div>
            </motion.div>

            {/* Main Title */}
            <div ref={titleRef} className="space-y-4">
              <h1 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-tight">
                <span className="block text-white">Web Designer</span>
                <span className="block text-gradient">& Front‑end Developer</span>
              </h1>
            </div>

            {/* Description */}
            <motion.p variants={itemVariants} className="text-xl text-gray-300 max-w-2xl reveal-text opacity-0 translate-y-10">
              I'm a Tunisian based web designer & front‑end developer focused on crafting clean & user‑friendly experiences. I am passionate about building excellent software that improves the lives of those around me.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-glow flex items-center gap-2"
              >
                View My Work
                <ArrowRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline flex items-center gap-2"
              >
                <Download size={18} />
                Download CV
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="pt-8">
              <p className="text-gray-400 mb-4 text-sm uppercase tracking-wider">Follow me on</p>
              <div className="flex gap-3">
                {socialLinks.map((link, index) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`p-3 glass-effect rounded-xl ${link.color} transition-all hover:border-white/30`}
                    aria-label={link.label}
                  >
                    {link.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Profile Image */}
          <motion.div
            ref={imageRef}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative w-80 h-80 md:w-[500px] md:h-[500px]">
              {/* Outer Glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/30 via-accent/30 to-secondary/30 rounded-full blur-2xl animate-pulse" />
              
              {/* Image Container */}
              <div className="relative w-full h-full rounded-3xl overflow-hidden border-2 border-white/20 shadow-2xl shadow-primary/30">
                {/* Replace with your image */}
                <div className="w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-800 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-6">👨‍💻</div>
                    <p className="text-gray-400 text-lg">Your Amazing Profile</p>
                    <p className="text-sm text-gray-500 mt-2">Add your photo here</p>
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
                className="absolute -top-4 -right-4 glass-effect px-4 py-2 rounded-full border border-green-500/30"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-green-400">Available for work</span>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
                className="absolute -bottom-6 -left-6 glass-effect px-4 py-3 rounded-xl border border-primary/30"
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </motion.div>

              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 border-2 border-dashed border-white/10 rounded-full"
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
        >
          <span className="text-xs text-gray-500 uppercase tracking-widest mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center p-1">
            <div className="w-1.5 h-3 bg-gradient-to-b from-primary to-accent rounded-full animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero