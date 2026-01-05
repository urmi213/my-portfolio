import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Menu, X, Code2, Moon, Sun, ArrowUpRight, 
  Home, User, Settings, Briefcase, Mail,
  Github, Linkedin, Twitter, Dribbble,
  Sparkles, ChevronRight, ExternalLink
} from 'lucide-react'

const SidebarHeader = ({ isCollapsed, setIsCollapsed }) => {
  const [darkMode, setDarkMode] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hoveredItem, setHoveredItem] = useState(null)
  const [activeItem, setActiveItem] = useState('Home')

  const navItems = [
    { name: 'Home', icon: <Home size={24} />, href: '#home', badge: null },
    { name: 'About', icon: <User size={24} />, href: '#about', badge: null },
    { name: 'Skills', icon: <Settings size={24} />, href: '#services', badge: null },
    { name: 'Projects', icon: <Briefcase size={24} />, href: '#portfolio', badge: null },
    { name: 'Contact', icon: <Mail size={24} />, href: '#contact', badge: null },
  ]

  const toggleTheme = () => {
    setDarkMode(!darkMode)
    document.documentElement.classList.toggle('dark')
  }

  const handleNavClick = (itemName) => {
    setActiveItem(itemName)
    if (window.innerWidth < 768) {
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <>
      {/* Desktop Left Sidebar */}
      <motion.aside
        initial={{ x: -100 }}
        animate={{ x: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.34, 1.56, 0.64, 1] // Changed from 'back.out(1.2)' to cubic bezier
        }}
        className="hidden md:flex fixed left-0 top-0 h-full z-50"
      >
        {/* Main Sidebar */}
        <div className="h-full flex flex-col items-center gap-8 p-6 bg-gradient-to-b from-gray-900/95 via-black/90 to-gray-900/95 backdrop-blur-xl border-r border-yellow-500/20 shadow-2xl shadow-black/50">
          
          {/* Logo at Top with Glow Effect */}
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            className="mb-4 cursor-pointer group"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 rounded-full blur-lg group-hover:blur-xl transition-all duration-500" />
              <div className="relative p-4 rounded-2xl bg-gradient-to-br from-black via-gray-900 to-black border-2 border-yellow-500/30">
                <Code2 className="text-yellow-400" size={32} />
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-br from-yellow-500 to-yellow-300 rounded-full flex items-center justify-center"
              >
                <span className="text-xs font-bold text-black">SM</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Vertical Navigation */}
          <div className="flex flex-col items-center gap-6 flex-grow">
            {navItems.map((item) => (
              <div key={item.name} className="relative group">
                <motion.a
                  href={item.href}
                  onMouseEnter={() => setHoveredItem(item.name)}
                  onMouseLeave={() => setHoveredItem(null)}
                  onClick={() => handleNavClick(item.name)}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`flex items-center justify-center w-14 h-14 rounded-2xl transition-all duration-300 relative overflow-hidden ${
                    activeItem === item.name 
                      ? 'bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border-2 border-yellow-500/50 shadow-lg shadow-yellow-500/20' 
                      : 'bg-black/30 border border-white/10 hover:border-yellow-500/30'
                  }`}
                >
                  {/* Background Glow on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br from-yellow-500/0 to-yellow-600/0 group-hover:from-yellow-500/10 group-hover:to-yellow-600/10 transition-all duration-500 ${
                    activeItem === item.name ? 'from-yellow-500/20 to-yellow-600/20' : ''
                  }`} />
                  
                  {/* Icon */}
                  <div className={`relative z-10 ${
                    activeItem === item.name 
                      ? 'text-yellow-300' 
                      : 'text-gray-400 group-hover:text-yellow-300'
                  } transition-colors duration-300`}>
                    {item.icon}
                  </div>

                  {/* Active Indicator */}
                  {activeItem === item.name && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      className="absolute -right-1.5 -top-1.5 w-3 h-3 bg-gradient-to-r from-yellow-500 to-yellow-300 rounded-full shadow-lg shadow-yellow-500/50"
                    />
                  )}

                  {/* Badge */}
                  {item.badge && (
                    <motion.div
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                     
                    >
                      <span className="text-[10px] font-bold text-white">{item.badge}</span>
                    </motion.div>
                  )}
                </motion.a>

                {/* Animated Hover Tooltip */}
                <motion.div
                  initial={{ opacity: 0, x: -20, scale: 0.8 }}
                  animate={{ 
                    opacity: hoveredItem === item.name ? 1 : 0,
                    x: hoveredItem === item.name ? 0 : -20,
                    scale: hoveredItem === item.name ? 1 : 0.8
                  }}
                  transition={{ duration: 0.2, ease: "easeOut" }}
                  className="absolute left-full ml-4 top-1/2 -translate-y-1/2 whitespace-nowrap z-50"
                >
                  <div className="relative">
                    {/* Tooltip Background with Glow */}
                    <div className="absolute -inset-1 bg-gradient-to-r from-yellow-500/30 to-yellow-600/30 rounded-xl blur-sm" />
                    <div className="relative bg-gradient-to-r from-gray-900 to-black px-4 py-3 rounded-xl shadow-2xl shadow-black/50 border border-yellow-500/30">
                      <span className="text-white font-bold text-sm tracking-wider flex items-center gap-2">
                        {item.name}
                        <ChevronRight className="w-4 h-4 text-yellow-400" />
                      </span>
                    </div>
                    {/* Arrow */}
                    <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-0 h-0 border-t-4 border-b-4 border-r-4 border-t-transparent border-b-transparent border-r-gray-900" />
                  </div>
                </motion.div>
              </div>
            ))}
          </div>

          {/* Divider */}
          <div className="w-10 h-px bg-gradient-to-r from-transparent via-yellow-500/30 to-transparent my-2" />

          {/* Theme Toggle */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-3 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10 hover:border-yellow-500/50 hover:shadow-lg hover:shadow-yellow-500/10 transition-all duration-300 group"
            aria-label="Toggle theme"
          >
            <div className="relative">
              <div className="text-yellow-400 group-hover:text-yellow-300 transition-colors">
                {darkMode ? <Sun size={22} /> : <Moon size={22} />}
              </div>
              <motion.div
                animate={{ rotate: darkMode ? 180 : 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              />
            </div>
          </motion.button>

          {/* Hire Me Button */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="mb-4"
          >
            <button className="relative px-5 py-3 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-bold text-sm tracking-wider group overflow-hidden shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/30 to-transparent group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative flex items-center gap-2">
                HIRE ME
                <ExternalLink className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </motion.div>

          {/* Current Year Badge */}
          <div className="mt-auto">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 flex items-center justify-center group">
              <motion.span 
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute w-14 h-14 border border-yellow-500/10 rounded-full"
              />
              <span className="text-yellow-300 text-sm font-bold relative">24</span>
            </div>
          </div>
        </div>

        {/* Sidebar Glow Effect */}
        <div className="absolute -right-1 top-0 bottom-0 w-2 bg-gradient-to-b from-transparent via-yellow-500/20 to-transparent" />
      </motion.aside>

      {/* Mobile Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ 
          duration: 0.6, 
          ease: [0.34, 1.56, 0.64, 1] // Changed from 'back.out(1.2)' to cubic bezier
        }}
        className="md:hidden fixed top-0 w-full z-50"
      >
        {/* Background with Gradient Border */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/95 via-gray-900/95 to-black/95 backdrop-blur-xl">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-500/10 via-transparent to-yellow-500/10" />
        </div>
        
        <div className="container mx-auto px-6 py-4 relative">
          <div className="flex items-center justify-between">
            {/* Logo with Animation */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 group"
            >
              <div className="relative">
                <div className="absolute -inset-3 bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 rounded-full blur group-hover:blur-lg transition-all duration-500" />
                <div className="relative p-2 rounded-xl bg-gradient-to-br from-black via-gray-900 to-black border border-yellow-500/30">
                  <Code2 className="text-yellow-400" size={24} />
                </div>
              </div>
              <span className="text-xl font-bold text-white">
                Steve<span className="text-yellow-400">.</span>
                <motion.span
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="text-yellow-400"
                >
                  Milner
                </motion.span>
              </span>
            </motion.div>

            {/* Mobile Menu Button with Animation */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-3 rounded-xl bg-gradient-to-br from-black/40 to-black/20 border border-white/10 hover:border-yellow-500/50 shadow-lg shadow-black/30 relative group"
            >
              <div className="relative">
                {isMobileMenuOpen ? (
                  <X className="text-yellow-400 w-6 h-6" />
                ) : (
                  <Menu className="text-yellow-400 w-6 h-6" />
                )}
              </div>
              {/* Pulse Animation */}
              {!isMobileMenuOpen && (
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="absolute inset-0 border-2 border-yellow-500/30 rounded-xl"
                />
              )}
            </motion.button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay with Animation */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isMobileMenuOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className={`md:hidden fixed inset-0 z-40 ${isMobileMenuOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
      >
        {/* Background Overlay */}
        <div 
          className="absolute inset-0 bg-black/95 backdrop-blur-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        />
        
        {/* Menu Content */}
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: isMobileMenuOpen ? 0 : '-100%' }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="absolute left-0 top-0 bottom-0 w-4/5 max-w-sm bg-gradient-to-b from-gray-900 via-black to-gray-900 border-r border-yellow-500/20 shadow-2xl shadow-black/50"
        >
          <div className="h-full flex flex-col p-8">
            {/* Mobile Menu Header */}
            <div className="mb-12">
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30">
                  <Code2 className="text-yellow-400" size={32} />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-white">Steve Milner</h2>
                  <p className="text-yellow-300 text-sm">Web Designer</p>
                </div>
              </div>
              
              {/* Theme Toggle Mobile */}
              <button
                onClick={toggleTheme}
                className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 border border-yellow-500/20 w-full"
              >
                <div className="p-2 rounded-lg bg-yellow-500/20">
                  {darkMode ? <Sun className="text-yellow-400" /> : <Moon className="text-yellow-400" />}
                </div>
                <span className="text-white font-medium">
                  {darkMode ? 'Light Mode' : 'Dark Mode'}
                </span>
              </button>
            </div>

            {/* Mobile Navigation */}
            <div className="space-y-2 flex-grow">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.name)}
                  className={`flex items-center gap-4 px-4 py-4 rounded-xl transition-all duration-300 group ${
                    activeItem === item.name 
                      ? 'bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30' 
                      : 'hover:bg-white/5'
                  }`}
                >
                  <div className={`p-3 rounded-lg transition-colors ${
                    activeItem === item.name 
                      ? 'bg-yellow-500/20 text-yellow-300' 
                      : 'bg-white/5 text-gray-400 group-hover:text-yellow-300'
                  }`}>
                    {item.icon}
                  </div>
                  <span className={`text-lg font-medium transition-colors ${
                    activeItem === item.name ? 'text-yellow-300' : 'text-gray-300 group-hover:text-white'
                  }`}>
                    {item.name}
                  </span>
                  {item.badge && (
                    <span className="ml-auto px-3 py-1 bg-gradient-to-r from-red-500 to-pink-600 rounded-full text-xs font-bold">
                      {item.badge}
                    </span>
                  )}
                  <ChevronRight className={`w-5 h-5 transition-all ${
                    activeItem === item.name 
                      ? 'text-yellow-400 translate-x-1' 
                      : 'text-gray-500 group-hover:text-yellow-400'
                  }`} />
                </a>
              ))}
            </div>

            {/* Mobile Hire Button */}
            <button className="mt-8 w-full py-4 rounded-xl bg-gradient-to-r from-yellow-500 via-yellow-400 to-yellow-300 text-black font-bold text-lg tracking-wider shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 transition-all duration-300">
              <span className="flex items-center justify-center gap-2">
                HIRE ME NOW
                <ArrowUpRight className="w-5 h-5" />
              </span>
            </button>
          </div>
        </motion.div>
      </motion.div>
    </>
  )
}

export default SidebarHeader