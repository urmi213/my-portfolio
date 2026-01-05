import React, { useState } from 'react'
import SidebarHeader from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import Academy from './components/academy'

function App() {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false)

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <SidebarHeader 
        isCollapsed={isSidebarCollapsed} 
        setIsCollapsed={setIsSidebarCollapsed} 
      />
      
      <main className={`transition-all duration-300 ${
        isSidebarCollapsed ? 'md:ml-16' : 'md:ml-64'
      } ml-0`}>
        <Hero />
        <About />
        <Academy/>
        <Services />
        <Portfolio />
        <Contact />
        
      </main>
    </div>
  )
}

export default App