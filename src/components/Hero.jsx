import React, { useRef } from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'
import { Github, Linkedin, Twitter, Dribbble, ArrowRight, Download, Sparkles, Mail, MapPin, Award, Briefcase, Users } from 'lucide-react'

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

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

  const stats = [
    { icon: <Briefcase />, value: "50+", label: "Projects", color: "from-yellow-500 to-orange-500" },
    { icon: <Award />, value: "4+", label: "Years Exp", color: "from-yellow-400 to-amber-500" },
    { icon: <Users />, value: "30+", label: "Clients", color: "from-amber-500 to-yellow-600" },
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
      ease: 'back.out(1.2)',
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

    // Stats counter animation
    gsap.from('.stat-item', {
      opacity: 0,
      y: 30,
      duration: 1,
      stagger: 0.2,
      delay: 1,
      ease: 'power3.out'
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
        ease: [0.25, 0.1, 0.25, 1.0],
      },
    },
  }

  const imageVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      x: 50 
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      x: 0,
      transition: {
        duration: 1.2,
        delay: 0.5,
        ease: [0.34, 1.56, 0.64, 1]
      }
    },
  }

  return (
    <section 
      id="home" 
      ref={containerRef} 
      className="flex items-center pt-20 md:pt-24 w-full min-h-screen "
    >
      {/* Background Elements */}
      <div className=" inset-0 overflow-hidden">
        <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-gradient-to-br from-yellow-500/10 via-transparent to-yellow-600/10 rounded-full blur-3xl " />
        <div className="absolute -bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-gradient-to-tr from-yellow-400/10 via-transparent to-yellow-500/10 rounded-full blur-3xl " />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.05)_1px,transparent_1px)] bg-[size:60px_60px] opacity-10" />
        
        {/* Left side accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1/3 " />
      </div>

      {/* Main Container */}
      <div className="relative z-10 w-full">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-3 gap-8 lg:gap-12 items-center"
          >
            {/* Left Column - Text Content */}
            <div className="lg:col-span-2 space-y-8 md:space-y-10 lg:pr-12">
              {/* Badge */}
              <motion.div variants={itemVariants} className="inline-flex">
                <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 backdrop-blur-sm float-element">
                  <Sparkles className="w-4 h-4 text-yellow-300" />
                  <span className="text-yellow-300 font-semibold tracking-wide text-xl">I'M Urmi Chakraborty</span>
                </div>
              </motion.div>

              {/* Main Title */}
              <div ref={titleRef} className="space-y-4 md:space-y-6">
                <h1 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl font-bold leading-tight tracking-tight">
                  <span className="block text-white">WEB DESIGNER</span>
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 via-yellow-400 to-yellow-500">
                    & FRONT‑END DEVELOPER
                  </span>
                </h1>
                
                {/* Divider */}
                <div className="w-24 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"></div>
              </div>

              {/* Description */}
              <motion.p variants={itemVariants} className="text-xl md:text-2xl lg:text-xl text-gray-200 max-w-3xl reveal-text opacity-0 translate-y-10 leading-relaxed">
                I'm <span className="text-yellow-300 font-semibold">front‑end developer</span> focused on crafting <span className="text-white font-medium">clean & user‑friendly experiences</span>. I am passionate about building <span className="text-yellow-300 font-semibold">excellent software</span> that improves the lives of those around me.
              </motion.p>

              {/* Stats */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 pt-4 md:pt-8">
                {stats.map((stat, index) => (
                  <div key={index} className="stat-item opacity-0">
                    <div className="p-4 md:p-5 rounded-xl border border-yellow-500/20 bg-gradient-to-br from-black/30 to-black/10 backdrop-blur-sm">
                      <div className="flex items-center gap-3 mb-2">
                        <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.color} bg-opacity-20`}>
                          {React.cloneElement(stat.icon, { className: "w-5 h-5 text-yellow-300" })}
                        </div>
                        <div className="text-2xl md:text-3xl font-bold text-white">{stat.value}</div>
                      </div>
                      <div className="text-sm md:text-base text-yellow-200 font-medium">{stat.label}</div>
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Contact Info */}
              <motion.div variants={itemVariants} className="grid grid-cols-1 md:grid-cols-2 gap-4 -mt-20">
                <div className="flex items-center gap-4 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all group bg-black/20 backdrop-blur-sm">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 group-hover:from-yellow-500/20 group-hover:to-yellow-600/20">
                    <MapPin className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-sm text-yellow-200/70 uppercase tracking-wider font-medium">Location</p>
                    <p className="text-lg text-white font-semibold">Sylhet, Bangladesh</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-xl border border-yellow-500/10 hover:border-yellow-500/30 transition-all group bg-black/20 backdrop-blur-sm">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 group-hover:from-yellow-500/20 group-hover:to-yellow-600/20">
                    <Mail className="w-5 h-5 text-yellow-300" />
                  </div>
                  <div>
                    <p className="text-sm text-yellow-200/70 uppercase tracking-wider font-medium">Email</p>
                    <p className="text-lg text-white font-semibold">urmichakravorty02@gmail.com</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div variants={itemVariants} className="flex flex-wrap gap-4 md:gap-6 pt-6 md:pt-10">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black hover:from-yellow-400 hover:to-yellow-500 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50"
                >
                   Download CV
                  <Download size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
                </motion.button>
                
              </motion.div>

              {/* Social Links */}
<motion.div variants={itemVariants} className="pt-8 md:pt-12">
  <p className="text-yellow-200/80 mb-4 text-sm uppercase tracking-widest font-medium">Connect with me</p>
  <div className="flex gap-4">
    <motion.a
      href="https://github.com/urmi213"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.1 + 0.8 }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/20 bg-black/20 backdrop-blur-sm hover:bg-gray-800"
      aria-label="GitHub"
    >
      <Github className="w-6 h-6 text-yellow-300" />
    </motion.a>
    
    <motion.a
      href="https://www.linkedin.com/in/urmi-chakraborty/"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.2 + 0.8 }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/20 bg-black/20 backdrop-blur-sm hover:bg-blue-600/20"
      aria-label="LinkedIn"
    >
      <Linkedin className="w-6 h-6 text-yellow-300" />
    </motion.a>
    
    <motion.a
      href="https://x.com/UrmiChakra39598"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.3 + 0.8 }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/20 bg-black/20 backdrop-blur-sm hover:bg-sky-500/20"
      aria-label="Twitter"
    >
      <Twitter className="w-6 h-6 text-yellow-300" />
    </motion.a>
    
    <motion.a
      href="https://wa.me/01791399042"
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4 + 0.8 }}
      whileHover={{ scale: 1.15, y: -5 }}
      whileTap={{ scale: 0.9 }}
      className="p-4 rounded-xl border border-yellow-500/20 hover:border-yellow-400 transition-all hover:shadow-lg hover:shadow-yellow-500/20 bg-black/20 backdrop-blur-sm hover:bg-green-600/20"
      aria-label="WhatsApp"
    >
      <svg className="w-6 h-6 text-yellow-300" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.76.982.998-3.675-.236-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.9 6.994c-.004 5.45-4.438 9.88-9.888 9.88m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.333.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.333 11.893-11.893 0-3.18-1.24-6.162-3.495-8.411"/>
      </svg>
    </motion.a>
  </div>
</motion.div>
</div>
            {/* Right Column - Profile Image */}
            <motion.div
              ref={imageRef}
              variants={imageVariants}
              initial="hidden"
              animate="visible"
              className=" flex items-center justify-center top-0"
            >
              <div className="relative w-[300px] h-[300px] md:w-[350px] md:h-[350px] lg:w-[450px] lg:h-[450px] -mt-130">
                {/* Outer Glow */}
                <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 via-yellow-400/20 to-yellow-600/30 rounded-full blur-xl" />
                
                {/* Decorative circles */}
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-6 border-2 border-dashed border-yellow-500/20 rounded-full"
                />
                
                {/* Image Container */}
                <div className="relative w-full h-full rounded-[2rem] overflow-hidden border-4 border-yellow-400/30 shadow-2xl shadow-yellow-500/30 ">
                  <img 
                    src="src/urmidark.png" 
                    alt="Urmi Chakraborty" 
                    className="w-full h-full object-cover object-center"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
                  
                  {/* Yellow accent line */}
                  <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent rounded-full"></div>
                </div>
                
                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-3 -right-3 px-3 py-1 rounded-full border border-green-500/40 bg-black/60 backdrop-blur-sm"
                >
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-xs font-bold text-green-400">AVAILABLE</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                  className="absolute -bottom-4 -left-4 px-4 py-2 rounded-xl border border-yellow-500/40 bg-black/60 backdrop-blur-sm"
                >
                  <div className="text-center">
                    <div className="text-xl font-bold text-yellow-300">Passionate
</div>
                    <div className="text-xs text-yellow-200/80 font-medium"> Frontend Developer</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            animate={{ y: [0, 15, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center"
          >
            <span className="text-xs text-yellow-300/70 uppercase tracking-widest mb-2">Scroll</span>
            <div className="w-8 h-14 border-2 border-yellow-500/30 rounded-full flex justify-center p-1">
              <div className="w-2 h-4 bg-gradient-to-b from-yellow-400 to-yellow-300 rounded-full animate-bounce" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero