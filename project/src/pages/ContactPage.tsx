import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    document.title = 'Contact Us | Clay Collective';
    window.scrollTo(0, 0);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would send the form data to a server
    setSubmitted(true);
  };

  const contactInfo = [
    {
      icon: <MapPin size={24} className="text-terracotta-500" />,
      title: 'Visit Us',
      content: '123 Pottery Lane, Clay District, CA 90210'
    },
    {
      icon: <Phone size={24} className="text-terracotta-500" />,
      title: 'Call Us',
      content: '(555) 123-4567'
    },
    {
      icon: <Mail size={24} className="text-terracotta-500" />,
      title: 'Email Us',
      content: 'hello@claycollective.com'
    },
    {
      icon: <Clock size={24} className="text-terracotta-500" />,
      title: 'Opening Hours',
      content: 'Tue-Sat: 10am - 7pm, Sun: 12pm - 5pm'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Page header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-studio-blue-800 mb-4"
          >
            Contact Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-studio-blue-600"
          >
            Have questions about our products or classes? We'd love to hear from you.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="font-serif text-2xl text-studio-blue-800 mb-6">
                Send Us a Message
              </h2>

              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="bg-green-50 text-green-700 p-4 rounded-md mb-4"
                >
                  <p className="font-medium">Thank you for your message!</p>
                  <p>We'll get back to you as soon as possible.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-studio-blue-700 mb-1">
                      Your Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-studio-blue-700 mb-1">
                      Your Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-300"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-studio-blue-700 mb-1">
                      Your Message
                    </label>
                    <textarea
                      id="message"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      required
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-terracotta-300"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full bg-terracotta-500 hover:bg-terracotta-600 text-white py-3 rounded-md font-medium flex items-center justify-center transition-colors"
                  >
                    Send Message
                    <Send size={18} className="ml-2" />
                  </button>
                </form>
              )}
            </div>
          </motion.div>

          {/* Contact info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-clay-primary-50 p-6 rounded-lg"
                >
                  <div className="mb-4">{info.icon}</div>
                  <h3 className="font-serif text-xl text-studio-blue-800 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-studio-blue-600">
                    {info.content}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              variants={itemVariants}
              className="mt-6 bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="font-serif text-xl text-studio-blue-800 mb-4">
                Find Us
              </h3>
              <div className="aspect-video bg-clay-primary-100 rounded-md flex items-center justify-center">
                {/* In a real app, this would be a Google Map or similar */}
                <p className="text-studio-blue-500">Interactive map would be displayed here</p>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* FAQ section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-studio-blue-800 mb-4">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mx-auto mb-6"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-studio-blue-800 mb-2">
                Do I need to book classes in advance?
              </h3>
              <p className="text-studio-blue-600">
                Yes, we recommend booking at least a week in advance as our classes fill up quickly. You can book classes online or by calling our studio.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-studio-blue-800 mb-2">
                How long does shipping take?
              </h3>
              <p className="text-studio-blue-600">
                We typically ship orders within 2-3 business days. Delivery times vary depending on your location, but usually range from 3-7 business days within the continental US.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-studio-blue-800 mb-2">
                Can I return or exchange products?
              </h3>
              <p className="text-studio-blue-600">
                We accept returns within 14 days of delivery for unused, undamaged items. Custom or made-to-order pieces are not eligible for return unless damaged in transit.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="font-serif text-lg text-studio-blue-800 mb-2">
                Do you offer gift certificates?
              </h3>
              <p className="text-studio-blue-600">
                Yes! Gift certificates are available for both our shop items and classes. They make perfect gifts for creative friends and family members.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;