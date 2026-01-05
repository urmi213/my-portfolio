import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ExternalLink, Github, Eye, Filter, Grid, List } from 'lucide-react'

const Portfolio = () => {
  const [filter, setFilter] = useState('all')
  const [viewMode, setViewMode] = useState('grid')

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Design' },
    { id: 'app', name: 'Mobile Apps' },
    { id: 'branding', name: 'Branding' },
    { id: 'ui', name: 'UI/UX' },
  ]

  const projects = [
    {
      id: 1,
      title: 'E-commerce Platform',
      category: 'web',
      description: 'Full-featured online store with React, Node.js, and MongoDB',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 2,
      title: 'Travel Booking App',
      category: 'app',
      description: 'Mobile application for travel bookings and reviews',
      tags: ['React Native', 'Firebase', 'Mapbox'],
      image: 'https://images.unsplash.com/photo-1539635278303-d4002c07eae3?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: true,
    },
    {
      id: 3,
      title: 'Corporate Website',
      category: 'web',
      description: 'Modern corporate website with CMS integration',
      tags: ['Next.js', 'Tailwind', 'Strapi'],
      image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 4,
      title: 'Dashboard Analytics',
      category: 'web',
      description: 'Real-time analytics dashboard with data visualization',
      tags: ['React', 'D3.js', 'Express', 'WebSocket'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 5,
      title: 'Fitness App UI',
      category: 'ui',
      description: 'User interface design for fitness tracking application',
      tags: ['Figma', 'UI Design', 'Prototyping'],
      image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 6,
      title: 'Social Media Platform',
      category: 'app',
      description: 'Social networking platform with real-time features',
      tags: ['React', 'Socket.io', 'PostgreSQL', 'Redis'],
      image: 'https://images.unsplash.com/photo-1611605698335-8b1569810432?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 7,
      title: 'Brand Identity Design',
      category: 'branding',
      description: 'Complete brand identity for tech startup',
      tags: ['Logo Design', 'Brand Guidelines', 'Typography'],
      image: 'https://images.unsplash.com/photo-1634942537034-2531766767d1?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
    {
      id: 8,
      title: 'AI Chatbot Interface',
      category: 'ui',
      description: 'Chat interface for AI-powered customer service',
      tags: ['AI Integration', 'Chat UI', 'Real-time'],
      image: 'https://images.unsplash.com/photo-1551650975-87deedd944c3?auto=format&fit=crop&w=800',
      liveLink: '#',
      githubLink: '#',
      featured: false,
    },
  ]

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter)

  const featuredProjects = projects.filter(project => project.featured)

  useGSAP(() => {
    // Grid items animation
    gsap.from('.project-item', {
      opacity: 0,
      y: 50,
      duration: 0.8,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.projects-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    })

    // Filter buttons animation
    gsap.from('.filter-btn', {
      opacity: 0,
      scale: 0.8,
      duration: 0.5,
      stagger: 0.05,
      ease: 'back.out(1.7)',
    })
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="portfolio" className="section-py reveal">
      <div className="container-tunis">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            My <span className="text-gradient">Portfolio</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            A selection of my recent projects and work. Each project represents a unique challenge and solution.
          </motion.p>
        </div>

        {/* Featured Projects */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mb-16"
        >
          <h3 className="text-2xl font-bold mb-8">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="group relative rounded-3xl overflow-hidden border border-white/10 card-hover"
              >
                {/* Project Image */}
                <div className="relative h-64 md:h-80 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  {/* Overlay Content */}
                  <div className="absolute inset-0 p-8 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <h4 className="text-2xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex gap-4">
                      <a href={project.liveLink} className="btn-primary">
                        <Eye size={18} />
                        Live Preview
                      </a>
                      <a href={project.githubLink} className="btn-outline">
                        <Github size={18} />
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-xl font-bold">{project.title}</h4>
                    <span className="badge">{project.category}</span>
                  </div>
                  <p className="text-gray-400 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="tag">{tag}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Filter Controls */}
        <div className="mb-12">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setFilter(category.id)}
                  className={`filter-btn px-5 py-2 rounded-full font-medium transition-all ${
                    filter === category.id
                      ? 'bg-gradient-to-r from-primary to-primary-light text-white'
                      : 'glass-effect text-gray-400 hover:text-white'
                  }`}
                >
                  {category.name}
                </motion.button>
              ))}
            </div>

            <div className="flex gap-2 glass-effect p-1 rounded-full">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full ${
                  viewMode === 'grid' ? 'bg-primary text-white' : 'text-gray-400'
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full ${
                  viewMode === 'list' ? 'bg-primary text-white' : 'text-gray-400'
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={filter + viewMode}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="projects-grid"
          >
            <div className={viewMode === 'grid' 
              ? "grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
              : "space-y-8"
            }>
              {filteredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                  whileHover={{ y: -5 }}
                  className={`project-item glass-effect rounded-2xl overflow-hidden border border-white/10 card-hover ${
                    viewMode === 'list' ? 'flex flex-col md:flex-row' : ''
                  }`}
                >
                  {/* Image */}
                  <div className={viewMode === 'list' 
                    ? "md:w-1/3 h-48 md:h-auto" 
                    : "h-48"
                  }>
                    <div className="relative w-full h-full overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <div className="flex gap-3">
                          <a href={project.liveLink} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                            <ExternalLink size={16} />
                          </a>
                          <a href={project.githubLink} className="p-2 bg-white rounded-full hover:bg-primary hover:text-white transition-colors">
                            <Github size={16} />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className={viewMode === 'list' 
                    ? "md:w-2/3 p-6" 
                    : "p-6"
                  }>
                    <div className="flex justify-between items-start mb-4">
                      <h4 className="text-xl font-bold">{project.title}</h4>
                      <span className="badge">{project.category}</span>
                    </div>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag) => (
                        <span key={tag} className="tag">{tag}</span>
                      ))}
                    </div>
                    <div className="flex justify-between items-center">
                      <a href={project.liveLink} className="text-primary hover:text-primary-light font-medium flex items-center gap-2">
                        <Eye size={16} />
                        View Project
                      </a>
                      <a href={project.githubLink} className="text-gray-400 hover:text-white">
                        <Github size={20} />
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn-glow px-8 py-4 text-lg"
          >
            View All Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio