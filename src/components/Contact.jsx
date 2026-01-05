import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MessageSquare, Send, MapPin, 
  Clock, CheckCircle, AlertCircle, Copy,
  MessageCircle, ExternalLink, Calendar
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: 'Email Address',
      value: 'urmi.chakraborty@example.com',
      href: 'mailto:urmi.chakraborty@example.com',
      label: 'Send Email',
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-300',
      action: 'copy'
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: 'Phone Number',
      value: '+880 1791-399042',
      href: 'tel:+8801791399042',
      label: 'Call Now',
      color: 'from-green-500/20 to-green-600/20',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-300',
      action: 'call'
    },
    {
      icon: <MessageSquare className="w-6 h-6" />,
      title: 'WhatsApp',
      value: '+880 1791-399042',
      href: 'https://wa.me/8801791399042',
      label: 'Chat on WhatsApp',
      color: 'from-green-500/20 to-emerald-600/20',
      borderColor: 'border-green-500/30',
      textColor: 'text-green-300',
      action: 'whatsapp'
    }
  ];

  const handleCopy = (value, field) => {
    navigator.clipboard.writeText(value);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real application, you would send this data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 md:py-32 bg-black relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-3xl" />
        
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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Touch</span>
          </h2>
          
          <div className="w-20 h-1 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-8"></div>
          
          <p className="text-gray-300 text-lg max-w-2xl mx-auto">
            Have a project in mind? Let's discuss how we can work together to bring your ideas to life.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Contact Info Cards */}
            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`p-6 rounded-2xl border ${item.borderColor} bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:shadow-xl hover:shadow-yellow-500/10 transition-all`}>
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-4">
                        <div className={`p-3 rounded-xl bg-gradient-to-br ${item.color}`}>
                          <div className={item.textColor}>
                            {item.icon}
                          </div>
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white mb-1">{item.title}</h3>
                          <div className="flex items-center gap-3">
                            <p className={`text-xl font-semibold ${item.textColor}`}>{item.value}</p>
                            {copiedField === item.title && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-xs text-green-400 flex items-center gap-1"
                              >
                                <CheckCircle className="w-3 h-3" /> Copied!
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Action Button */}
                      <div className="flex gap-2">
                        {item.action === 'copy' && (
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.95 }}
                            onClick={() => handleCopy(item.value, item.title)}
                            className="p-2 rounded-lg bg-black/40 border border-gray-800 hover:border-yellow-500/50 transition-all"
                            title="Copy to clipboard"
                          >
                            <Copy className="w-4 h-4 text-gray-300" />
                          </motion.button>
                        )}
                        
                        <motion.a
                          href={item.href}
                          target={item.action === 'whatsapp' ? '_blank' : '_self'}
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all"
                        >
                          {item.action === 'whatsapp' ? (
                            <MessageCircle className="w-4 h-4" />
                          ) : item.action === 'call' ? (
                            <Phone className="w-4 h-4" />
                          ) : (
                            <Send className="w-4 h-4" />
                          )}
                          <span className="text-sm font-medium">{item.label}</span>
                        </motion.a>
                      </div>
                    </div>
                    
                    {/* Additional Info */}
                    {item.action === 'whatsapp' && (
                      <div className="mt-4 p-3 rounded-lg bg-black/30 border border-gray-800">
                        <p className="text-sm text-gray-400">
                          <Clock className="w-3 h-3 inline mr-2" />
                          Quick Response: Usually replies within 1 hour
                        </p>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-600/20">
                  <AlertCircle className="w-6 h-6 text-yellow-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Response Time</h3>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>Email: Within 24 hours</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                      <span>Phone: Available 9 AM - 6 PM (GMT+6)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-500"></div>
                      <span>WhatsApp: Instant response during working hours</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>

            {/* Location Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="p-6 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-gradient-to-br from-blue-500/20 to-blue-600/20">
                  <MapPin className="w-6 h-6 text-blue-300" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-2">Location</h3>
                  <p className="text-gray-300 mb-3">Based in Bangladesh, working with clients worldwide</p>
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-black/40 border border-gray-800">
                    <Clock className="w-4 h-4 text-yellow-300" />
                    <span className="text-sm text-gray-300">Time Zone: GMT+6</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="sticky top-24">
              <div className="p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm">
                <div className="mb-8">
                  <h3 className="text-2xl font-bold text-white mb-2">Send a Message</h3>
                  <p className="text-gray-300">Fill out the form below and I'll get back to you as soon as possible.</p>
                </div>

                {isSubmitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
                      <CheckCircle className="w-10 h-10 text-green-400" />
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-300 mb-6">Thank you for your message. I'll get back to you within 24 hours.</p>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-3 rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all"
                    >
                      Send Another Message
                    </motion.button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-2">
                        Subject *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all"
                        placeholder="Project Inquiry"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white resize-none transition-all"
                        placeholder="Tell me about your project..."
                      />
                    </div>

                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full py-4 rounded-xl font-bold text-lg bg-gradient-to-r from-yellow-500 to-yellow-300 text-black hover:from-yellow-400 hover:to-yellow-200 transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 flex items-center justify-center gap-3"
                    >
                      <Send className="w-5 h-5" />
                      Send Message
                    </motion.button>

                    <p className="text-sm text-gray-400 text-center pt-4">
                      By submitting this form, you agree to our privacy policy.
                    </p>
                  </form>
                )}
              </div>

              {/* Quick Links */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                
                  
                
                <motion.a
                  href="#projects"
                  whileHover={{ y: -3 }}
                  className="p-4 rounded-xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm hover:border-yellow-400/50 transition-all"
                >
                  <div className="flex items-center gap-3">
                    <ExternalLink className="w-5 h-5 text-yellow-300" />
                    <span className="text-sm font-medium text-white">View My Work</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Social Proof/Testimonial */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="p-8 rounded-2xl border border-yellow-500/30 bg-gradient-to-r from-black/40 via-yellow-500/5 to-black/40 backdrop-blur-sm">
            <div className="text-center max-w-2xl mx-auto">
              <div className="text-2xl font-bold text-white mb-4">
                "Urmi is professional, responsive, and delivers exceptional work. Highly recommended!"
              </div>
              <div className="text-gray-300">- Satisfied Client</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;