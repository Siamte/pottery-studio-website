import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import ClassCard from '../components/classes/ClassCard';
import { classes, WorkshopClass } from '../data/classes';

const categories = [
  { id: '', name: 'All Classes' },
  { id: 'beginner', name: 'Beginner' },
  { id: 'intermediate', name: 'Intermediate' },
  { id: 'advanced', name: 'Advanced' },
  { id: 'workshop', name: 'Workshops' }
];

const ClassesPage: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState('');

  useEffect(() => {
    document.title = 'Classes & Workshops | Clay Collective';
    window.scrollTo(0, 0);
  }, []);

  const filteredClasses = activeFilter
    ? classes.filter(c => c.category === activeFilter)
    : classes;

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
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="font-serif text-4xl md:text-5xl text-studio-blue-800 mb-4">
            Classes & Workshops
          </h1>
          <p className="text-studio-blue-600">
            Learn the art of pottery in our professionally equipped studio. We offer
            classes for all skill levels, from beginner workshops to advanced techniques.
          </p>
        </div>

        {/* Filter buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${activeFilter === category.id
                  ? 'bg-terracotta-500 text-white'
                  : 'bg-clay-primary-50 text-studio-blue-700 hover:bg-clay-primary-100'
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Class grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredClasses.map((workshopClass: WorkshopClass) => (
            <ClassCard
              key={workshopClass.id}
              workshopClass={workshopClass}
              variants={itemVariants}
            />
          ))}
        </motion.div>

        {/* Information section */}
        <div className="mt-16 bg-clay-primary-100 rounded-lg p-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl text-studio-blue-800 mb-4">
                About Our Classes
              </h2>
              <p className="text-studio-blue-600 mb-4">
                Our pottery classes are designed to provide a supportive and creative environment
                where you can explore the world of ceramics. Whether you're a complete beginner or
                an experienced potter looking to refine your skills, we have a class for you.
              </p>
              <p className="text-studio-blue-600 mb-4">
                All classes include clay, tools, firing, and glazes. Just bring your creativity and
                willingness to get your hands dirty!
              </p>
              <div className="space-y-2 mt-6">
                <h3 className="font-medium text-studio-blue-700">What to expect:</h3>
                <ul className="space-y-2 text-studio-blue-600">
                  <li>• Small class sizes for personalized attention</li>
                  <li>• Professional equipment and materials</li>
                  <li>• Experienced instructors</li>
                  <li>• Take home your finished creations</li>
                  <li>• A fun, relaxed atmosphere</li>
                </ul>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3094351/pexels-photo-3094351.jpeg"
                alt="Pottery class in session"
                className="rounded-lg w-full h-auto"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassesPage;