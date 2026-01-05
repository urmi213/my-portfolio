import React from 'react'
import { motion } from 'framer-motion'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { 
  Palette, Code, Smartphone, Rocket, Search, Shield,
  Zap, Layers, Globe, BarChart, Users, Cloud
} from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: <Palette />,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces that enhance user experience and drive engagement.',
      features: ['User Research', 'Wireframing', 'Prototyping', 'Visual Design'],
      color: 'from-purple-500 to-pink-500',
      delay: 0
    },
    {
      icon: <Code />,
      title: 'Web Development',
      description: 'Building responsive and performant websites using modern technologies and best practices.',
      features: ['React/Next.js', 'TypeScript', 'Tailwind CSS', 'Performance'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: <Smartphone />,
      title: 'Mobile Apps',
      description: 'Developing cross-platform mobile applications with React Native and Flutter.',
      features: ['iOS & Android', 'React Native', 'Push Notifications', 'App Store'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.2
    },
    {
      icon: <Rocket />,
      title: 'Performance Optimization',
      description: 'Improving website speed and performance for better user engagement and SEO.',
      features: ['Core Web Vitals', 'Lazy Loading', 'Caching', 'CDN'],
      color: 'from-orange-500 to-red-500',
      delay: 0.3
    },
    {
      icon: <Search />,
      title: 'SEO Optimization',
      description: 'Optimizing websites for search engines to improve visibility and organic traffic.',
      features: ['Technical SEO', 'Content Strategy', 'Keyword Research', 'Analytics'],
      color: 'from-indigo-500 to-purple-500',
      delay: 0.4
    },
    {
      icon: <Shield />,
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to keep your website running smoothly and securely.',
      features: ['Security Updates', 'Backups', 'Monitoring', '24/7 Support'],
      color: 'from-gray-500 to-blue-500',
      delay: 0.5
    },
  ]

  const additionalServices = [
    { icon: <Zap />, title: 'Fast Loading', desc: 'Optimized for speed' },
    { icon: <Layers />, title: 'Scalable', desc: 'Grows with your business' },
    { icon: <Globe />, title: 'Global CDN', desc: 'Worldwide delivery' },
    { icon: <BarChart />, title: 'Analytics', desc: 'Data-driven insights' },
    { icon: <Users />, title: 'Team Collaboration', desc: 'Seamless workflow' },
    { icon: <Cloud />, title: 'Cloud Hosting', desc: 'Reliable infrastructure' },
  ]

  useGSAP(() => {
    // Stagger animation for service cards
    gsap.from('.service-card', {
      opacity: 0,
      y: 50,
      duration: 1,
      stagger: 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: '.services-grid',
        start: 'top 80%',
        end: 'bottom 20%',
        toggleActions: 'play none none none',
      },
    })

    // Floating animation for icons
    gsap.to('.service-icon', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    })
  })

  return (
    <section id="services" className="section-py bg-dark reveal">
      <div className="container-tunis">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            My <span className="text-gradient">Services</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Comprehensive solutions tailored to meet your digital needs and drive business growth
          </motion.p>
        </div>

        {/* Main Services Grid */}
        <div className="services-grid">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: service.delay }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="service-card glass-effect p-8 rounded-3xl border border-white/10 card-hover group"
              >
                {/* Icon Container */}
                <div className="relative mb-6">
                  <div className={`absolute inset-0 bg-gradient-to-r ${service.color} rounded-2xl blur-xl opacity-20 group-hover:opacity-40 transition-opacity`} />
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center service-icon`}>
                    <div className="text-white">
                      {service.icon}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="text-gray-400 mb-6">{service.description}</p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Button */}
                <button className="mt-8 text-primary hover:text-primary-light font-medium inline-flex items-center gap-2 group/btn">
                  Learn More
                  <motion.span
                    className="inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </button>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Additional Services */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <h3 className="text-3xl font-bold text-center mb-12">Why Choose Me</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {additionalServices.map((service) => (
              <motion.div
                key={service.title}
                whileHover={{ scale: 1.1 }}
                className="glass-effect p-4 rounded-xl text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mb-3">
                  {service.icon}
                </div>
                <div className="font-medium">{service.title}</div>
                <div className="text-sm text-gray-500 mt-1">{service.desc}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <div className="glass-effect p-12 rounded-3xl relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-accent/10" />
            
            <h3 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-gray-400 mb-8 max-w-2xl mx-auto">
              Let's work together to create something amazing. I'm here to help you bring your ideas to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="btn-glow px-8 py-4 text-lg"
            >
              Get In Touch
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services