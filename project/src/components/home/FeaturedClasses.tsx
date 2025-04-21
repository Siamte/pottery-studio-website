import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { getFeaturedClasses, WorkshopClass } from '../../data/classes';

const FeaturedClasses: React.FC = () => {
  const featuredClasses = getFeaturedClasses();

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
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-4">
            Upcoming Workshops
          </h2>
          <p className="text-studio-blue-600 max-w-2xl mx-auto">
            Join our expert instructors and learn the art of pottery making through hands-on experience in our studio.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {featuredClasses.slice(0, 3).map((workshopClass: WorkshopClass) => (
            <ClassCard key={workshopClass.id} workshopClass={workshopClass} variants={itemVariants} />
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Link
            to="/classes"
            className="inline-block bg-terracotta-500 hover:bg-terracotta-600 text-white px-8 py-3 rounded-md font-medium transition-colors"
          >
            View All Classes
          </Link>
        </div>
      </div>
    </section>
  );
};

interface ClassCardProps {
  workshopClass: WorkshopClass;
  variants: any;
}

const ClassCard: React.FC<ClassCardProps> = ({ workshopClass, variants }) => {
  // Get the nearest upcoming session
  const nearestSession = workshopClass.upcoming[0];

  return (
    <motion.div
      variants={variants}
      className="bg-clay-primary-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
    >
      <Link to={`/classes/${workshopClass.id}`} className="block relative overflow-hidden h-64">
        <img
          src={workshopClass.image}
          alt={workshopClass.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-terracotta-500 text-white px-4 py-2">
          ${workshopClass.price}
        </div>
      </Link>
      <div className="p-6">
        <h3 className="font-serif text-xl text-studio-blue-800 mb-2">
          <Link to={`/classes/${workshopClass.id}`} className="hover:text-terracotta-500 transition-colors">
            {workshopClass.name}
          </Link>
        </h3>
        <p className="text-studio-blue-600 mb-4 text-sm">
          {workshopClass.shortDescription}
        </p>
        <div className="space-y-2 mb-4">
          <div className="flex items-center text-sm text-studio-blue-600">
            <Clock size={16} className="mr-2 text-terracotta-500" />
            <span>{workshopClass.duration}</span>
          </div>
          <div className="flex items-center text-sm text-studio-blue-600">
            <User size={16} className="mr-2 text-terracotta-500" />
            <span>{workshopClass.instructor}</span>
          </div>
          {nearestSession && (
            <div className="flex items-center text-sm text-studio-blue-600">
              <Calendar size={16} className="mr-2 text-terracotta-500" />
              <span>Next: {nearestSession.date}, {nearestSession.time}</span>
            </div>
          )}
        </div>
        <Link
          to={`/classes/${workshopClass.id}`}
          className="block w-full text-center bg-white border border-terracotta-500 text-terracotta-500 hover:bg-terracotta-500 hover:text-white px-4 py-2 rounded transition-colors text-sm font-medium"
        >
          View Details
        </Link>
      </div>
    </motion.div>
  );
};

export default FeaturedClasses;