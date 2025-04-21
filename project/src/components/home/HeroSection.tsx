import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-screen-90 bg-gray-900 overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/6615908/pexels-photo-6615908.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="max-w-xl"
          >
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl text-white font-semibold mb-6">
              Handcrafted Pottery For Your Home
            </h1>
            <p className="text-lg md:text-xl text-clay-primary-100 mb-8">
              Unique ceramic pieces created with passion and skill.
              Shop our collection or join a workshop to create your own.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/shop"
                className="bg-terracotta-500 hover:bg-terracotta-600 transition-colors text-white px-8 py-3 rounded-md font-medium flex items-center justify-center"
              >
                Shop Collection
                <ArrowRight size={18} className="ml-2" />
              </Link>
              <Link
                to="/classes"
                className="bg-transparent hover:bg-white/10 border border-white text-white px-8 py-3 rounded-md font-medium transition-colors flex items-center justify-center"
              >
                Explore Classes
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-white rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;