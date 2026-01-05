import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useForm } from 'react-hook-form'
import { 
  Mail, Phone, MapPin, Send, CheckCircle, 
  MessageSquare, Clock, User, AlertCircle
} from 'lucide-react'

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors }, 
    reset 
  } = useForm()

  const contactInfo = [
    {
      icon: <Mail />,
      title: 'Email',
      value: 'hello@stevemilner.com',
      link: 'mailto:hello@stevemilner.com',
      description: 'Usually responds within 24 hours',
    },
    {
      icon: <Phone />,
      title: 'Phone',
      value: '+216 12 345 678',
      link: 'tel:+21612345678',
      description: 'Mon-Fri from 9am to 6pm',
    },
    {
      icon: <MapPin />,
      title: 'Location',
      value: 'Tunis, Tunisia',
      link: '#',
      description: 'Available for remote work worldwide',
    },
  ]

  const socialLinks = [
    { platform: 'Twitter', handle: '@stevemilner', color: 'hover:bg-sky-500/20' },
    { platform: 'LinkedIn', handle: 'stevemilner', color: 'hover:bg-blue-600/20' },
    { platform: 'GitHub', handle: 'stevemilner', color: 'hover:bg-gray-800/20' },
    { platform: 'Dribbble', handle: 'stevemilner', color: 'hover:bg-pink-500/20' },
  ]

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    reset()
    setIsSubmitting(false)
    
    setTimeout(() => setIsSubmitted(false), 5000)
  }

  const formVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  }

  const infoVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.8,
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
    <section id="contact" className="section-py bg-dark reveal">
      <div className="container-tunis">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6"
          >
            Get In <span className="text-gradient">Touch</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-400 text-lg max-w-3xl mx-auto"
          >
            Have a project in mind? Let's work together to bring your ideas to life. I'm just a message away.
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            variants={infoVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-gray-400 mb-8">
                  Feel free to reach out using any of the following methods. I'm always open to discussing new projects.
                </p>
              </div>

              {/* Contact Details */}
              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <motion.a
                    key={info.title}
                    variants={itemVariants}
                    href={info.link}
                    whileHover={{ x: 10 }}
                    className="flex items-start gap-4 p-4 glass-effect rounded-xl hover:bg-white/5 transition-all group"
                  >
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <div className="text-primary">
                        {info.icon}
                      </div>
                    </div>
                    <div>
                      <div className="font-medium">{info.title}</div>
                      <div className="text-lg font-bold mt-1">{info.value}</div>
                      <div className="text-sm text-gray-500 mt-2">{info.description}</div>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Links */}
              <motion.div variants={itemVariants} className="pt-6">
                <h4 className="text-xl font-bold mb-4">Follow Me</h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.platform}
                      href="#"
                      className={`px-4 py-2 glass-effect rounded-lg ${social.color} transition-all hover:border-white/30`}
                    >
                      {social.platform}
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Availability */}
              <motion.div variants={itemVariants} className="glass-effect p-6 rounded-xl">
                <div className="flex items-center gap-3 mb-4">
                  <Clock className="text-primary" />
                  <h5 className="font-bold">Availability</h5>
                </div>
                <p className="text-gray-400 text-sm">
                  Currently accepting new projects for Q2 2024. Limited slots available for long-term collaborations.
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="glass-effect p-8 rounded-3xl">
              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold mb-2">Message Sent Successfully!</h3>
                  <p className="text-gray-400 mb-6">
                    Thank you for your message. I'll get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="btn-outline"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <>
                  <div className="flex items-center gap-3 mb-8">
                    <MessageSquare className="text-primary" />
                    <h3 className="text-2xl font-bold">Send a Message</h3>
                  </div>

                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      {/* Name Field */}
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">
                          <div className="flex items-center gap-2">
                            <User size={14} />
                            Your Name
                          </div>
                        </label>
                        <input
                          id="name"
                          type="text"
                          {...register('name', { 
                            required: 'Name is required',
                            minLength: {
                              value: 2,
                              message: 'Name must be at least 2 characters'
                            }
                          })}
                          className="input-field"
                          placeholder="John Doe"
                        />
                        {errors.name && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                          >
                            <AlertCircle size={14} />
                            {errors.name.message}
                          </motion.p>
                        )}
                      </div>

                      {/* Email Field */}
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">
                          Email Address
                        </label>
                        <input
                          id="email"
                          type="email"
                          {...register('email', { 
                            required: 'Email is required',
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: 'Invalid email address'
                            }
                          })}
                          className="input-field"
                          placeholder="john@example.com"
                        />
                        {errors.email && (
                          <motion.p 
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-red-400 text-sm mt-2 flex items-center gap-1"
                          >
                            <AlertCircle size={14} />
                            {errors.email.message}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Subject Field */}
                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium mb-2">
                        Subject
                      </label>
                      <input
                        id="subject"
                        type="text"
                        {...register('subject', { 
                          required: 'Subject is required',
                          minLength: {
                            value: 5,
                            message: 'Subject must be at least 5 characters'
                          }
                        })}
                        className="input-field"
                        placeholder="Project Inquiry"
                      />
                      {errors.subject && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.subject.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Message Field */}
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium mb-2">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        rows="6"
                        {...register('message', { 
                          required: 'Message is required',
                          minLength: {
                            value: 20,
                            message: 'Message must be at least 20 characters'
                          }
                        })}
                        className="input-field resize-none"
                        placeholder="Tell me about your project, timeline, and budget..."
                      />
                      {errors.message && (
                        <motion.p 
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-red-400 text-sm mt-2 flex items-center gap-1"
                        >
                          <AlertCircle size={14} />
                          {errors.message.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="btn-glow w-full flex items-center justify-center gap-3 py-4 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={20} />
                          Send Message
                        </>
                      )}
                    </motion.button>

                    {/* Privacy Note */}
                    <p className="text-center text-gray-500 text-sm">
                      Your information is secure and will only be used to respond to your inquiry.
                    </p>
                  </form>
                </>
              )}
            </div>

            {/* Map Placeholder */}
            <motion.div
              variants={itemVariants}
              className="mt-12 glass-effect rounded-2xl overflow-hidden"
            >
              <div className="h-48 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-gray-600 mx-auto mb-4" />
                  <p className="text-gray-500">Interactive map would go here</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact