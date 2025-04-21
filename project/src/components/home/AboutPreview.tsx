import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const AboutPreview: React.FC = () => {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/2162938/pexels-photo-2162938.jpeg"
                alt="Potter working in studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-full bg-terracotta-500/20 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-6">
              Our Story & Craft
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mb-6"></div>
            <p className="text-studio-blue-600 mb-6">
              Clay Collective was founded in 2015 by a group of passionate ceramicists with a shared vision: to create a space where the ancient art of pottery could be both practiced and celebrated.
            </p>
            <p className="text-studio-blue-600 mb-8">
              Today, our studio serves as both a working space for our resident artists and a teaching facility where we share our knowledge and love for clay with students of all skill levels. Each piece we create is handcrafted using traditional techniques, ensuring unique items that carry the distinct mark of their maker.
            </p>
            <Link
              to="/about"
              className="inline-block bg-studio-blue-700 hover:bg-studio-blue-800 text-white px-8 py-3 rounded-md font-medium transition-colors"
            >
              Learn More About Us
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;