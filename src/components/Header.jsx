import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { 
  Menu, X, Code2, Sun, Moon, 
  Home, User, Settings, Briefcase, Mail,
  ChevronRight, ExternalLink, GraduationCap // Added GraduationCap
} from 'lucide-react'

const SidebarHeader = () => {
  const [darkMode, setDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeItem, setActiveItem] = useState('Home')

  const navItems = [
    { name: 'Home', icon: <Home size={20} />, href: '#home', badge: null },
    { name: 'About', icon: <User size={20} />, href: '#about', badge: null },
    { name: 'Skills', icon: <Settings size={20} />, href: '#skills', badge: null },
    { name: 'Projects', icon: <Briefcase size={20} />, href: '#projects', badge: null },
    { name: 'Education', icon: <GraduationCap size={20} />, href: '#education', badge: null }, // Added Education
    { name: 'Contact', icon: <Mail size={20} />, href: '#contact', badge: null },
  ]

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
      
      // Update active item based on scroll position
      const sections = navItems.map(item => item.href.replace('#', ''));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        const activeName = navItems.find(item => item.href === `#${currentSection}`)?.name;
        if (activeName && activeName !== activeItem) {
          setActiveItem(activeName);
        }
      }
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [navItems, activeItem])

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleNavClick = (itemName, href) => {
    setActiveItem(itemName)
    
    // Smooth scroll to section
    const sectionId = href.replace('#', '');
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false)
    }
  }

  const handleHireMeClick = () => {
    handleNavClick('Contact', '#contact');
  }

  return (
    <>
      {/* Desktop Top-Right Navigation (Sticky) */}
      <motion.div
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`hidden md:block fixed top-6 right-6 z-50 transition-all duration-300 ${
          isScrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
        }`}
      >
        {/* Transparent Navigation Container */}
        <div className="relative">
          {/* Glow effect only on hover */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/0 to-yellow-600/0 rounded-full group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 group-hover:blur-lg transition-all duration-500 pointer-events-none" />
          
          {/* Navigation Bar */}
          <div className="relative flex items-center gap-2 px-6 py-3 rounded-2xl backdrop-blur-lg bg-black/20 border border-white/10 hover:border-yellow-500/30 shadow-2xl shadow-black/30 transition-all duration-300 group">
            
            {/* Logo/Brand */}
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="mr-4 cursor-pointer"
              onClick={() => handleNavClick('Home', '#home')}
            >
              <div className="relative">
                <div className="p-2 rounded-xl bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
                  <Code2 className="text-yellow-400" size={20} />
                </div>
              </div>
            </motion.div>

            {/* Navigation Items */}
            <div className="flex items-center gap-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.name, item.href);
                  }}
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-4 py-2 rounded-xl transition-all duration-300 flex items-center gap-2 ${
                    activeItem === item.name 
                      ? 'text-yellow-300 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20' 
                      : 'text-gray-300 hover:text-yellow-300 hover:bg-white/5'
                  }`}
                >
                  <span className={`${activeItem === item.name ? 'text-yellow-300' : 'text-gray-400'}`}>
                    {item.icon}
                  </span>
                  <span className="text-sm font-medium whitespace-nowrap">{item.name}</span>
                  
                  {/* Active indicator */}
                  {activeItem === item.name && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-1/2 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full"
                    />
                  )}
                </motion.a>
              ))}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-yellow-500/30 to-transparent mx-2" />

            {/* Hire Me Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="ml-2"
            >
              <a 
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  handleHireMeClick();
                }}
                className="relative px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black text-sm font-bold tracking-wider group overflow-hidden shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300 flex items-center gap-2"
              >
                {/* Shine Effect */}
                <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
                
                <span className="relative">HIRE ME</span>
                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Top-Right Sticky Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className={`md:hidden fixed top-4 right-4 z-50 transition-all duration-300 ${
          isScrolled ? 'scale-95 opacity-90' : 'scale-100 opacity-100'
        }`}
      >
        {/* Transparent Mobile Header */}
        <div className="relative">
          {/* Glow effect */}
          <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/0 to-yellow-600/0 rounded-full group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 group-hover:blur-lg transition-all duration-500 pointer-events-none" />
          
          <div className="relative backdrop-blur-lg bg-black/20 border border-white/10 hover:border-yellow-500/30 rounded-2xl shadow-2xl shadow-black/30 transition-all duration-300 group">
            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 flex items-center gap-3"
            >
              <div className="flex items-center gap-2">
                <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
                  <Code2 className="text-yellow-400" size={18} />
                </div>
                <span className="text-white text-sm font-medium">Menu</span>
              </div>
              <div className="p-2 rounded-lg bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20">
                {isMobileMenuOpen ? (
                  <X className="text-yellow-400 w-4 h-4" />
                ) : (
                  <Menu className="text-yellow-400 w-4 h-4" />
                )}
              </div>
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden fixed inset-0 z-40"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            {/* Background Overlay */}
            <div className="absolute inset-0 bg-black/70 backdrop-blur-sm" />
            
            {/* Menu Content - Appears from top-right */}
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="absolute top-20 right-4 w-64 rounded-2xl bg-gradient-to-b from-gray-900/95 via-black/95 to-gray-900/95 backdrop-blur-xl border border-yellow-500/20 shadow-2xl shadow-black/50 overflow-hidden"
              onClick={e => e.stopPropagation()}
            >
              {/* Menu Header */}
              <div className="p-6 border-b border-yellow-500/10">
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30">
                    <Code2 className="text-yellow-400" size={24} />
                  </div>
                  <div>
                    <h2 className="text-lg font-bold text-white">Urmi Chakraborty</h2>
                    <p className="text-yellow-300 text-sm">Web Designer & Developer</p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="p-4 space-y-2">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(item.name, item.href);
                    }}
                    className={`flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 ${
                      activeItem === item.name 
                        ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30' 
                        : 'hover:bg-white/5'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <div className={`p-2 rounded-lg ${
                        activeItem === item.name 
                          ? 'bg-yellow-500/20 text-yellow-300' 
                          : 'bg-white/5 text-gray-400'
                      }`}>
                        {item.icon}
                      </div>
                      <span className={`font-medium ${
                        activeItem === item.name ? 'text-yellow-300' : 'text-gray-300'
                      }`}>
                        {item.name}
                      </span>
                    </div>
                    <ChevronRight className={`w-4 h-4 ${
                      activeItem === item.name ? 'text-yellow-400' : 'text-gray-500'
                    }`} />
                  </a>
                ))}
              </div>

              {/* Mobile Hire Button */}
              <div className="p-6 border-t border-yellow-500/10">
                <a 
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    handleHireMeClick();
                  }}
                  className="block w-full text-center py-3 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-bold text-sm tracking-wider shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300"
                >
                  <span className="flex items-center justify-center gap-2">
                    HIRE ME NOW
                    <ExternalLink className="w-4 h-4" />
                  </span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default SidebarHeader;