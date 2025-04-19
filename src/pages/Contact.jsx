import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaPaperPlane, FaArrowRight } from 'react-icons/fa';

const Contact = () => {
  const [contactForm, setContactForm] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [newsletter, setNewsletter] = useState({
    email: '',
  });

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle contact form submission
    console.log('Contact Form:', contactForm);
  };

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log('Newsletter:', newsletter);
  };

  const contactInfo = [
    {
      icon: <FaPhone />,
      title: 'Phone',
      content: '+20 123 456 789',
      href: 'tel:+201234567890',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      content: 'info@resala-abuhammad.org',
      href: 'mailto:info@resala-abuhammad.org',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      content: 'Abu-Hammad, Sharqia, Egypt',
      href: 'https://goo.gl/maps/yourLocation',
    },
    {
      icon: <FaClock />,
      title: 'Working Hours',
      content: 'Sun-Thu: 9:00 AM - 5:00 PM',
    },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-[var(--gradient-start)] to-[var(--gradient-end)]">
          <div className="absolute inset-0 opacity-20">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_800px_at_100%_200px,rgba(255,255,255,0.1),transparent)]" />
            <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_800px_at_0%_800px,rgba(255,255,255,0.1),transparent)]" />
          </div>
        </div>
        <div className="relative container mx-auto px-4 text-center">
          <motion.span 
            className="inline-block text-sm font-semibold uppercase tracking-wider mb-4 bg-white/10 px-4 py-2 rounded-full backdrop-blur-sm text-white"
            {...fadeInUp}
          >
            Get in Touch
          </motion.span>
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-white mb-6 text-shadow"
            {...fadeInUp}
            transition={{ delay: 0.2 }}
          >
            Contact Us
          </motion.h1>
          <motion.p 
            className="text-xl text-white/90 max-w-3xl mx-auto"
            {...fadeInUp}
            transition={{ delay: 0.4 }}
          >
            Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
          </motion.p>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Contact Information
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.href}
                    className={`group p-4 rounded-xl transition-all duration-300 ${info.href ? 'hover:bg-gray-50 cursor-pointer' : ''}`}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-start">
                      <div className="text-2xl text-[var(--gradient-start)] mr-4 group-hover:scale-110 transition-transform duration-300">
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold mb-1">{info.title}</h3>
                        <p className="text-gray-600 group-hover:text-gray-900 transition-colors duration-300">
                          {info.content}
                        </p>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8 overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Our Location
              </h2>
              <div className="rounded-xl overflow-hidden shadow-lg">
                <iframe
                  title="Resala Abu-Hammad Location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1234.5678!2d31.123456!3d30.123456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDA3JzM0LjQiTiAzMcKwMDcnMzQuNCJF!5e0!3m2!1sen!2seg!4v1234567890"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </motion.div>
          </div>

          {/* Forms */}
          <div className="space-y-8">
            {/* Contact Form */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-8 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Send us a Message
              </h2>
              <form onSubmit={handleContactSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={contactForm.subject}
                    onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-semibold mb-2">
                    Message
                  </label>
                  <textarea
                    value={contactForm.message}
                    onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300 h-32"
                    required
                  ></textarea>
                </div>
                <motion.button
                  type="submit"
                  className="btn-primary w-full group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Send Message
                  <FaArrowRight className="ml-2 inline-block transform group-hover:translate-x-1 transition-transform" />
                </motion.button>
              </form>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div 
              className="bg-white rounded-2xl shadow-xl p-8"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[var(--gradient-start)] to-[var(--gradient-end)] bg-clip-text text-transparent">
                Subscribe to Newsletter
              </h2>
              <p className="text-gray-600 mb-6">
                Stay updated with our latest news and activities
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <div className="relative">
                  <input
                    type="email"
                    value={newsletter.email}
                    onChange={(e) => setNewsletter({ email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full p-3 rounded-xl border-2 border-gray-200 focus:border-[var(--gradient-start)] focus:ring-2 focus:ring-[var(--gradient-start)]/20 transition-all duration-300"
                    required
                  />
                </div>
                <motion.button
                  type="submit"
                  className="btn-secondary w-full flex items-center justify-center group"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <FaPaperPlane className="mr-2 transform group-hover:translate-x-1 transition-transform" />
                  Subscribe
                </motion.button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;