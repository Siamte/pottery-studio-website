import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, User } from 'lucide-react';
import { WorkshopClass } from '../../data/classes';

interface ClassCardProps {
  workshopClass: WorkshopClass;
  variants?: any;
}

const ClassCard: React.FC<ClassCardProps> = ({ workshopClass, variants }) => {
  // Get the nearest upcoming session
  const nearestSession = workshopClass.upcoming[0];

  const cardContent = (
    <>
      <div className="relative overflow-hidden h-64">
        <img
          src={workshopClass.image}
          alt={workshopClass.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute bottom-0 left-0 bg-terracotta-500 text-white px-4 py-2">
          ${workshopClass.price}
        </div>
        <div className="absolute top-0 right-0 bg-studio-blue-700 text-white px-3 py-1 text-sm">
          {workshopClass.category === 'beginner'
            ? 'Beginner Friendly'
            : workshopClass.category === 'intermediate'
              ? 'Intermediate'
              : workshopClass.category === 'advanced'
                ? 'Advanced'
                : 'Special Workshop'}
        </div>
      </div>
      <div className="p-6">
        <h3 className="font-serif text-xl text-studio-blue-800 mb-2">
          {workshopClass.name}
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
    </>
  );

  if (variants) {
    return (
      <motion.div
        variants={variants}
        className="bg-clay-primary-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group"
      >
        {cardContent}
      </motion.div>
    );
  }

  return (
    <div className="bg-clay-primary-50 rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow group">
      {cardContent}
    </div>
  );
};

export default ClassCard;