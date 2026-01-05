import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MessageSquare, Send, 
  CheckCircle, Copy, MessageCircle
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedField, setCopiedField] = useState(null);

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'Email Address',
      value: 'urmichakravorty02@gmail.com',
      href: 'mailto:urmichakravorty02@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Urmi%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0ABest%20regards%2C',
      label: 'Send Email',
      color: 'from-red-500/20 to-red-600/20',
      borderColor: 'border-red-500/30',
      textColor: 'text-red-300',
      action: 'email'
    },
    {
      icon: <Phone className="w-5 h-5 sm:w-6 sm:h-6" />,
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
      icon: <MessageSquare className="w-5 h-5 sm:w-6 sm:h-6" />,
      title: 'WhatsApp',
      value: '+880 1791-399042',
      href: 'https://wa.me/8801791399042?text=Hello%20Urmi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.',
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

  const handleEmailSend = () => {
    window.location.href = 'mailto:urmichakravorty02@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20Urmi%2C%0A%0AI%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project.%0A%0ABest%20regards%2C';
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    fetch('https://formsubmit.co/ajax/urmichakravorty02@gmail.com', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        name: formData.name,
        email: formData.email,
        subject: formData.subject,
        message: formData.message
      })
    })
    .then(response => response.json())
    .then(data => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', subject: '', message: '' });
      
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    })
    .catch(error => {
      console.error('Error:', error);
      setIsSubmitting(false);
      alert('Form submission failed. Please contact me directly via email or WhatsApp.');
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 lg:py-24 xl:py-32 bg-black relative overflow-hidden lg:-ml-4 xl:-ml-40 lg:-mt-40">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-[300px] h-[300px] sm:w-[400px] sm:h-[400px] md:w-[500px] md:h-[500px] lg:w-[600px] lg:h-[600px] bg-gradient-to-br from-yellow-500/5 via-transparent to-yellow-600/5 rounded-full blur-2xl sm:blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-[250px] h-[250px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] lg:w-[500px] lg:h-[500px] bg-gradient-to-tr from-yellow-400/5 via-transparent to-yellow-500/5 rounded-full blur-2xl sm:blur-3xl" />
        
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(245,158,11,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(245,158,11,0.02)_1px,transparent_1px)] bg-[size:30px_30px] sm:bg-[size:40px_40px] md:bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-3 xs:px-4 sm:px-5 md:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-8 sm:mb-12 md:mb-16 lg:mb-20"
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            <span className="text-white">Get In </span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-yellow-500">Touch</span>
          </h2>
          
          <div className="w-16 h-1 sm:w-20 bg-gradient-to-r from-yellow-500 to-yellow-300 mx-auto rounded-full mb-6 sm:mb-8"></div>
          
          <p className="text-gray-300 text-sm sm:text-base md:text-lg max-w-2xl mx-auto px-2 sm:px-4">
            Contact me directly through email, phone, or WhatsApp for project inquiries.
          </p>
        </motion.div>

        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
          {/* Left Column - Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6 sm:space-y-8"
          >
            {/* Simple Contact Method */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
              className="p-4 sm:p-6 rounded-xl md:rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-yellow-500/10 to-yellow-600/10 backdrop-blur-sm"
            >
              <div className="text-center">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 sm:mb-4">Quick Contact</h3>
                <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">Send me a message directly. Or Contact me On Whatsapp</p>
                <p className="text-xs sm:text-sm text-gray-400">
                  This will open your default email app (Gmail, Outlook, etc.) with my address pre-filled.
                </p>
              </div>
            </motion.div>

            {/* Contact Info Cards */}
            <div className="space-y-4 sm:space-y-6">
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
                  <div className={`p-4 sm:p-6 rounded-xl md:rounded-2xl border ${item.borderColor} bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm hover:shadow-lg hover:shadow-yellow-500/10 transition-all`}>
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
                        <div className={`p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${item.color}`}>
                          <div className={item.textColor}>
                            {item.icon}
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-base sm:text-lg font-bold text-white mb-1 truncate">{item.title}</h3>
                          <div className="flex items-center gap-2 sm:gap-3">
                            <p className={`text-sm sm:text-lg md:text-xl font-semibold ${item.textColor} truncate`}>{item.value}</p>
                            {copiedField === item.title && (
                              <motion.span
                                initial={{ opacity: 0, scale: 0 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="text-xs text-green-400 flex items-center gap-1 flex-shrink-0"
                              >
                                <CheckCircle className="w-3 h-3" /> Copied!
                              </motion.span>
                            )}
                          </div>
                        </div>
                      </div>
                      
                      {/* Copy Button */}
                      <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => handleCopy(item.value, item.title)}
                        className="p-1.5 sm:p-2 rounded-lg bg-black/40 border border-gray-800 hover:border-yellow-500/50 transition-all flex-shrink-0 ml-2"
                        title="Copy to clipboard"
                      >
                        <Copy className="w-3 h-3 sm:w-4 sm:h-4 text-gray-300" />
                      </motion.button>
                    </div>
                    
                    {/* Action Button */}
                    <motion.a
                      href={item.href}
                      target={item.action === 'whatsapp' ? '_blank' : '_self'}
                      rel="noopener noreferrer"
                      onClick={(e) => {
                        if (item.action === 'email') {
                          e.preventDefault();
                          handleEmailSend();
                        }
                      }}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="w-full flex items-center justify-center gap-2 px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all text-sm sm:text-base"
                    >
                      {item.action === 'whatsapp' ? (
                        <MessageCircle className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : item.action === 'call' ? (
                        <Phone className="w-3 h-3 sm:w-4 sm:h-4" />
                      ) : (
                        <Send className="w-3 h-3 sm:w-4 sm:h-4" />
                      )}
                      <span className="font-medium truncate">{item.label}</span>
                    </motion.a>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:sticky lg:top-24"
          >
            <div className="p-4 sm:p-6 md:p-8 rounded-xl md:rounded-2xl border border-yellow-500/30 bg-gradient-to-br from-black/40 to-black/20 backdrop-blur-sm">
              <div className="mb-6 sm:mb-8">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Send Message Directly</h3>
                <p className="text-gray-300 text-sm sm:text-base">Fill out this form to send me a message directly to my email.</p>
              </div>

              {isSubmitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8 sm:py-12"
                >
                  <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-full bg-gradient-to-br from-green-500/20 to-green-600/20 border border-green-500/30 flex items-center justify-center">
                    <CheckCircle className="w-8 h-8 sm:w-10 sm:h-10 text-green-400" />
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-300 text-sm sm:text-base mb-4 sm:mb-6">Your message has been sent directly to my email.</p>
                  <p className="text-xs sm:text-sm text-gray-400 mb-6">I'll get back to you within 24 hours.</p>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setIsSubmitted(false)}
                    className="px-4 sm:px-6 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-gradient-to-r from-yellow-500/20 to-yellow-600/20 border border-yellow-500/30 text-yellow-300 hover:from-yellow-500/30 hover:to-yellow-600/30 transition-all text-sm sm:text-base"
                  >
                    Send Another Message
                  </motion.button>
                </motion.div>
              ) : (
                <form 
                  action={`https://formsubmit.co/urmichakravorty02@gmail.com`} 
                  method="POST"
                  onSubmit={handleSubmit}
                  className="space-y-4 sm:space-y-6"
                >
                  <input type="hidden" name="_captcha" value="false" />
                  <input type="hidden" name="_template" value="table" />
                  <input type="hidden" name="_subject" value="New Portfolio Message!" />
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
                    <div>
                      <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Your Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all text-sm sm:text-base"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                        Your Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all text-sm sm:text-base"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="subject" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Subject *
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white transition-all text-sm sm:text-base"
                      placeholder="Project Inquiry"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-gray-300 mb-1 sm:mb-2">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={4}
                      className="w-full px-3 sm:px-4 py-2 sm:py-3 rounded-lg sm:rounded-xl bg-black/40 border border-gray-800 focus:border-yellow-500/50 focus:outline-none focus:ring-2 focus:ring-yellow-500/20 text-white resize-none transition-all text-sm sm:text-base"
                      placeholder="Tell me about your project..."
                    />
                  </div>

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={`w-full py-3 sm:py-4 rounded-lg sm:rounded-xl font-bold text-sm sm:text-base md:text-lg ${
                      isSubmitting 
                        ? 'bg-gray-700 cursor-not-allowed' 
                        : 'bg-gradient-to-r from-yellow-500 to-yellow-300 hover:from-yellow-400 hover:to-yellow-200'
                    } text-black transition-all shadow-lg shadow-yellow-500/30 hover:shadow-yellow-500/50 flex items-center justify-center gap-2 sm:gap-3`}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-t-transparent border-black rounded-full animate-spin"></div>
                        <span className="text-sm sm:text-base">Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 sm:w-5 sm:h-5" />
                        <span>Send Message to Email</span>
                      </>
                    )}
                  </motion.button>

                  <p className="text-xs sm:text-sm text-gray-400 text-center pt-2 sm:pt-4">
                    Using FormSubmit to deliver messages directly to my inbox
                  </p>
                </form>
              )}
            </div>

            {/* Alternative Contact Methods */}
            <div className="mt-4 sm:mt-6 md:mt-8 p-3 sm:p-4 md:p-6 rounded-xl md:rounded-2xl border border-gray-800 bg-black/40 backdrop-blur-sm">
              <h4 className="text-base sm:text-lg font-bold text-white mb-3 sm:mb-4">Alternative Contact Methods</h4>
              <div className="grid grid-cols-1 xs:grid-cols-2 gap-3 sm:gap-4">
                <motion.a
                  href="mailto:urmichakravorty02@gmail.com"
                  onClick={(e) => {
                    e.preventDefault();
                    handleEmailSend();
                  }}
                  whileHover={{ y: -3 }}
                  className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-red-500/30 bg-gradient-to-br from-red-500/10 to-red-600/10 backdrop-blur-sm hover:border-red-400/50 transition-all"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 text-red-300" />
                    <span className="text-xs sm:text-sm font-medium text-white truncate">Email Directly</span>
                  </div>
                </motion.a>
                <motion.a
                  href="https://wa.me/8801791399042?text=Hello%20Urmi,%20I%20visited%20your%20portfolio%20and%20would%20like%20to%20discuss%20a%20project."
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="p-2 sm:p-3 md:p-4 rounded-lg sm:rounded-xl border border-green-500/30 bg-gradient-to-br from-green-500/10 to-green-600/10 backdrop-blur-sm hover:border-green-400/50 transition-all"
                >
                  <div className="flex items-center gap-2 sm:gap-3">
                    <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-300" />
                    <span className="text-xs sm:text-sm font-medium text-white truncate">WhatsApp Direct</span>
                  </div>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;