import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const CallToAction: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-studio-blue-800 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-terracotta-500 opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-clay-primary-400 opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="font-serif text-3xl md:text-4xl lg:text-5xl mb-6"
          >
            Ready to Start Your Pottery Journey?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-lg text-clay-primary-100 mb-10 leading-relaxed"
          >
            Whether you're looking to add unique handcrafted pieces to your home or want to learn the art of ceramics, Clay Collective has something for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link
              to="/shop"
              className="bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-md font-medium transition-colors flex-1 sm:flex-initial text-center"
            >
              Shop Collection
            </Link>
            <Link
              to="/classes"
              className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-md font-medium transition-colors flex-1 sm:flex-initial text-center"
            >
              Book a Class
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;