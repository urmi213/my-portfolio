import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ExternalLink, Github, Eye, X, 
  Code2, Server, Database, Palette,
  Smartphone, Globe, Zap, TrendingUp,
  Calendar, Users, Award, ChevronRight
} from 'lucide-react';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      id: 1,
      name: 'Pet-Care',
      category: 'Full Stack',
      description: 'A Pet-Care platform with real-time inventory management and payment integration.',
      shortDescription: 'Pet-Care with payment integration',
      image: '/cute-happy-pup.webp',
      technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Firebase'],
      mainTech: 'MERN Stack',
      liveLink: 'https://pet-mart.netlify.app',
      githubLink: 'https://github.com/urmi213/pet-care',
      features: [
        'User authentication & authorization',
        'Product catalog with search & filters',
        'Shopping cart & checkout process',
        'Payment gateway integration',
        'Order tracking system',
        'Admin dashboard'
      ],
      challenges: [
        'Implementing real-time inventory updates',
        'Handling payment failures gracefully',
        'Optimizing image loading for product gallery',
        'Managing user sessions across devices'
      ],
      improvements: [
        'Add AI-based product recommendations',
        'Implement PWA for mobile experience',
        'Add multi-vendor support',
        'Integrate live chat support'
      ],
      status: 'Completed',
      duration: '4 Days',
      teamSize: 'Solo',
      color: 'from-blue-500 to-cyan-400'
    },
    {
      id: 2,
      name: 'GameHub',
      category: 'Frontend',
      description: 'A collaborative Game application with drag-and-drop functionality .',
      shortDescription: 'Collaborative game with drag-and-drop',
      image: '/pubg.jpg',
      technologies: ['React', 'Tailwind CSS', 'Firebase', 'Framer Motion',],
      mainTech: 'React + Firebase',
      liveLink: 'https://692eb18141b51969cf5154a9--elaborate-mochi-07e6c4.netlify.app/',
      githubLink: 'https://github.com/urmi213/Assignment-9',
      features: [
        'Drag-and-drop task management',
        'Real-time team collaboration',
        'Task categories & priorities',
        'Progress tracking & analytics',
        'Calendar integration',
        'Mobile responsive design'
      ],
      challenges: [
        'Implementing smooth drag-and-drop animations',
        'Real-time sync across multiple users',
        'Offline functionality with sync on reconnect',
        'Performance optimization with large task lists'
      ],
      improvements: [
        'Add voice command support',
        'Integrate with project management tools',
        'Add time tracking features',
        'Implement AI task prioritization'
      ],
      status: 'Completed',
      duration: '2 Days',
      teamSize: 'Solo',
      color: 'from-purple-500 to-pink-400'
    },
    {
      id: 3,
      name: 'Blood Donation App',
      category: 'MERN Stack',
      description: 'A comprehensive blood donation application with workout plans, nutrition logging, and progress analytics.',
      shortDescription: 'blood donation with workout plans & analytics',
      image: '/blood.jpg',
      technologies: ['Express', 'MongoDB','Node js', 'React', 'Firebase', , ''],
      mainTech: 'Node js + MongoDB',
      liveLink: 'https://blood-donation-app-ce260.web.app/',
      githubLink: 'https://github.com/urmi213/frontend-11',
      features: [
        'Workout planning & tracking',
        'Nutrition & calorie logging',
        'Progress analytics with charts',
        'Social sharing & challenges',
        'Health data integration',
        'Personalized recommendations'
      ],
      challenges: [
        'Integrating with multiple fitness APIs',
        'Handling offline data synchronization',
        'Battery optimization for background sync',
        'Ensuring data privacy & security'
      ],
      improvements: [
        'Add AI-based workout recommendations',
        'Integrate with wearables',
        'Add video workout tutorials',
        'Implement community features'
      ],
      status: 'In Development',
      duration: '4 Days',
      teamSize: 'Solo',
      color: 'from-green-500 to-emerald-400'
    }
    
  ];

  const ProjectCard = ({ project }) => (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      className="group relative"
    >
      <div className="relative rounded-2xl overflow-hidden border border-yellow-500/20 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm">
        {/* Image Container */}
        <div className="relative h-56 overflow-hidden">
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-20`} />
          <img 
            src={project.image} 
            alt={project.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30">
              <span className="text-xs font-medium text-yellow-300">{project.category}</span>
            </div>
          </div>
          {/* Overlay Gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-60" />
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{project.name}</h3>
            <p className="text-gray-300 text-sm">{project.shortDescription}</p>
          </div>

          {/* Tech Stack Preview */}
          <div className="flex flex-wrap gap-2">
            {project.technologies.slice(0, 4).map((tech, index) => (
              <span key={index} className="px-2 py-1 text-xs rounded bg-black/40 border border-gray-800 text-gray-300">
                {tech}
              </span>
            ))}
            {project.technologies.length > 4 && (
              <span className="px-2 py-1 text-xs rounded bg-black/40 border border-gray-800 text-gray-300">
                +{project.technologies.length - 4}
              </span>
            )}
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-2 pt-2">
            <div className="text-center">
              <div className="text-sm text-yellow-300 font-bold">{project.duration}</div>
              <div className="text-xs text-gray-400">Duration</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-yellow-300 font-bold">{project.teamSize}</div>
              <div className="text-xs text-gray-400">Team</div>
            </div>
            <div className="text-center">
              <div className="text-sm text-yellow-300 font-bold">{project.status}</div>
              <div className="text-xs text-gray-400">Status</div>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={() => setSelectedProject(project)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full mt-4 py-3 rounded-xl font-medium bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all flex items-center justify-center gap-2"
          >
            <Eye size={18} />
            View Project Details
            <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );

  const ProjectModal = ({ project, onClose }) => (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.9, opacity: 0 }}
          transition={{ type: "spring", damping: 25 }}
          className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-gray-900 to-black"
          onClick={e => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30 hover:border-yellow-500/50 transition-all"
          >
            <X className="w-5 h-5 text-yellow-300" />
          </button>

          {/* Header */}
          <div className="relative h-64 overflow-hidden">
            <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
            <img 
              src={project.image} 
              alt={project.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30">
                  <span className="text-sm font-medium text-yellow-300">{project.category}</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 backdrop-blur-sm border border-yellow-500/30">
                  <span className="text-sm font-medium text-yellow-300">{project.mainTech}</span>
                </div>
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">{project.name}</h2>
              <p className="text-gray-300">{project.description}</p>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 md:p-8 space-y-8">
            {/* Project Links */}
            <div className="flex flex-wrap gap-4">
              <motion.a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl font-medium bg-gradient-to-r from-yellow-500 to-yellow-300 text-black hover:from-yellow-400 hover:to-yellow-200 transition-all"
              >
                <ExternalLink size={18} />
                Live Project
              </motion.a>
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-3 px-6 py-3 rounded-xl font-medium border-2 border-yellow-500 text-yellow-300 hover:text-yellow-200 hover:border-yellow-400 transition-all"
              >
                <Github size={18} />
                GitHub Repository
              </motion.a>
            </div>

            {/* Tech Stack */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Code2 className="w-5 h-5 text-yellow-300" />
                <h3 className="text-xl font-bold text-white">Technology Stack</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <div key={index} className="px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
                    <span className="text-yellow-300 font-medium">{tech}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Features */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Zap className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">Key Features</h3>
                </div>
                <ul className="space-y-2">
                  {project.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-yellow-300 mt-2 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Info */}
              <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm text-gray-400">Duration</span>
                    </div>
                    <div className="text-lg font-bold text-white">{project.duration}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Users className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm text-gray-400">Team Size</span>
                    </div>
                    <div className="text-lg font-bold text-white">{project.teamSize}</div>
                  </div>
                  <div className="p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                    <div className="flex items-center gap-2 mb-2">
                      <Award className="w-4 h-4 text-yellow-300" />
                      <span className="text-sm text-gray-400">Status</span>
                    </div>
                    <div className="text-lg font-bold text-white">{project.status}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Challenges & Improvements */}
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Server className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">Challenges Faced</h3>
                </div>
                <ul className="space-y-3">
                  {project.challenges.map((challenge, index) => (
                    <li key={index} className="p-3 rounded-lg border border-yellow-500/10 bg-black/20">
                      <span className="text-gray-300">{challenge}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <TrendingUp className="w-5 h-5 text-yellow-300" />
                  <h3 className="text-xl font-bold text-white">Future Improvements</h3>
                </div>
                <ul className="space-y-3">
                  {project.improvements.map((improvement, index) => (
                    <li key={index} className="p-3 rounded-lg border border-yellow-500/10 bg-black/20">
                      <span className="text-gray-300">{improvement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Tech Icons */}
            <div className="grid grid-cols-4 gap-4 pt-4">
              <div className="flex flex-col items-center p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                <Code2 className="w-8 h-8 text-yellow-300 mb-2" />
                <span className="text-sm text-gray-300">Frontend</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                <Database className="w-8 h-8 text-yellow-300 mb-2" />
                <span className="text-sm text-gray-300">Database</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                <Palette className="w-8 h-8 text-yellow-300 mb-2" />
                <span className="text-sm text-gray-300">UI/UX</span>
              </div>
              <div className="flex flex-col items-center p-4 rounded-xl border border-yellow-500/20 bg-black/20">
                <Globe className="w-8 h-8 text-yellow-300 mb-2" />
                <span className="text-sm text-gray-300">Deployment</span>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );

  return (
    <section id="projects" className="py-20 md:py-32 bg-black relative overflow-hidden lg:-ml-4 xl:-ml-40  sm:-mt-80 lg:-mt-30">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-gradient-to-bl from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl" />
        
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
          <div className="inline-flex items-center gap-3 mb-4">
            <span className="text-yellow-300 font-semibold tracking-wide text-sm uppercase">Portfolio Showcase</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Featured </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Projects</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            A collection of my recent work showcasing my skills in web development and design
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        {/* Stats Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-black/40 via-yellow-500/5 to-black/40 backdrop-blur-sm"
        >
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <p className="text-gray-300 mb-6">Want to see more of my work?</p>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all"
          >
            <span>Start a Project with Me</span>
            <ChevronRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal 
          project={selectedProject} 
          onClose={() => setSelectedProject(null)} 
        />
      )}
    </section>
  );
};

export default Projects;