import React from 'react'
import { motion } from 'framer-motion'
import { Heart, ArrowUp, Mail, Code2, Github, Linkedin, Twitter } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
  ]

  const services = [
    'UI/UX Design',
    'Web Development',
    'Mobile Apps',
    'SEO Optimization',
    'Branding',
    'Consultation',
  ]

  const socialLinks = [
    { icon: <Github />, href: '#', label: 'GitHub' },
    { icon: <Linkedin />, href: '#', label: 'LinkedIn' },
    { icon: <Twitter />, href: '#', label: 'Twitter' },
    { icon: <Mail />, href: '#', label: 'Email' },
  ]

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <footer className="bg-tunis-gray border-t border-white/10">
      <div className="container-tunis py-12">
        <motion.div
          variants={footerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 mb-12"
        >
          {/* Brand Column */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="flex items-center gap-3">
              <Code2 className="text-primary" size={32} />
              <div>
                <div className="text-2xl font-display font-bold">
                  Steve<span className="text-gradient">.</span>
                </div>
                <div className="text-sm text-gray-500">Web Designer & Developer</div>
              </div>
            </div>
            <p className="text-gray-400 text-sm">
              Creating beautiful digital experiences that make a difference. Let's build something amazing together.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="p-2 glass-effect rounded-lg hover:bg-white/10 transition-colors"
                  aria-label={link.label}
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    className="text-gray-400 hover:text-white transition-colors hover-lift inline-flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Newsletter */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6">Stay Updated</h4>
            <div className="space-y-4">
              <p className="text-gray-400 text-sm">
                Subscribe to my newsletter for the latest updates, tips, and insights.
              </p>
              <form className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email"
                  className="flex-1 px-4 py-3 bg-tunis-dark border border-white/10 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
                />
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  type="submit"
                  className="px-4 py-3 bg-primary text-white rounded-lg hover:bg-primary-light transition-colors"
                >
                  Subscribe
                </motion.button>
              </form>
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <div className="divider" />

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-center gap-6"
        >
          {/* Copyright */}
          <div className="text-gray-400 text-sm flex items-center gap-1">
            © {currentYear} Steve Milner. All rights reserved.
            <Heart className="w-4 h-4 text-red-500 mx-1" />
            Made with passion
          </div>
          
          {/* Legal Links */}
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
              Cookies
            </a>
          </div>

          {/* Scroll to Top */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="p-3 glass-effect rounded-lg hover:bg-primary/20 transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        </motion.div>
      </div>

      {/* Watermark */}
      <div className="border-t border-white/5 py-4 text-center">
        <p className="text-gray-600 text-sm">
          Designed with ❤️ using React, Tailwind, GSAP & Framer Motion
        </p>
      </div>
    </footer>
  )
}

export default Footer