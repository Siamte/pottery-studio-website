import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  User,
  CheckCircle,
  Info
} from 'lucide-react';
import { getClassById, ClassSession } from '../data/classes';
import { useCart } from '../context/CartContext';

const ClassDetailPage: React.FC = () => {
  const { classId } = useParams<{ classId: string }>();
  const [workshopClass, setWorkshopClass] = useState<any>(undefined);
  const [selectedSession, setSelectedSession] = useState<ClassSession | null>(null);
  const navigate = useNavigate();
  const { addToCart } = useCart();

  useEffect(() => {
    if (classId) {
      const foundClass = getClassById(classId);
      if (foundClass) {
        setWorkshopClass(foundClass);
        document.title = `${foundClass.name} | Clay Collective`;
      } else {
        navigate('/classes');
      }
    }
  }, [classId, navigate]);

  const handleBookClass = () => {
    if (workshopClass && selectedSession) {
      addToCart({
        id: `${workshopClass.id}-${selectedSession.id}`,
        type: 'class',
        name: workshopClass.name,
        price: workshopClass.price,
        image: workshopClass.image,
        date: `${selectedSession.date} ${selectedSession.time}`
      });
      navigate('/cart');
    }
  };

  if (!workshopClass) {
    return (
      <div className="pt-24 pb-16 min-h-screen flex items-center justify-center">
        <p>Loading class details...</p>
      </div>
    );
  }

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Back link */}
        <Link
          to="/classes"
          className="inline-flex items-center text-studio-blue-600 hover:text-terracotta-500 mb-8"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Classes
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Class image and info */}
          <div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="rounded-lg overflow-hidden mb-6"
            >
              <img
                src={workshopClass.image}
                alt={workshopClass.name}
                className="w-full h-auto"
              />
            </motion.div>

            <div className="bg-clay-primary-50 rounded-lg p-6">
              <h3 className="font-serif text-xl text-studio-blue-800 mb-4">Class Details</h3>

              <div className="space-y-4">
                <div className="flex items-start">
                  <Clock size={20} className="mr-3 text-terracotta-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-studio-blue-700">Duration</h4>
                    <p className="text-studio-blue-600">{workshopClass.duration}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <User size={20} className="mr-3 text-terracotta-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-studio-blue-700">Instructor</h4>
                    <p className="text-studio-blue-600">{workshopClass.instructor}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Info size={20} className="mr-3 text-terracotta-500 mt-1" />
                  <div>
                    <h4 className="font-medium text-studio-blue-700">Level</h4>
                    <p className="text-studio-blue-600 capitalize">{workshopClass.category}</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-clay-primary-200">
                <h4 className="font-medium text-studio-blue-700 mb-2">Materials Included:</h4>
                <ul className="space-y-1">
                  {workshopClass.materials.map((material: string, index: number) => (
                    <li key={index} className="flex items-center text-studio-blue-600">
                      <CheckCircle size={16} className="mr-2 text-terracotta-500" />
                      {material}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Class description and booking */}
          <div>
            <h1 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-2">
              {workshopClass.name}
            </h1>

            <div className="text-2xl text-terracotta-600 font-medium mb-6">
              ${workshopClass.price} per person
            </div>

            <div className="prose prose-slate mb-8">
              <p className="text-studio-blue-600">
                {workshopClass.description}
              </p>
            </div>

            {/* Session selection */}
            <div className="mb-8">
              <h3 className="font-serif text-xl text-studio-blue-800 mb-4">Select a Session</h3>

              <div className="space-y-3">
                {workshopClass.upcoming.map((session: ClassSession) => (
                  <button
                    key={session.id}
                    onClick={() => setSelectedSession(session)}
                    disabled={session.availableSpots === 0}
                    className={`w-full p-4 rounded-md border transition flex justify-between items-center ${selectedSession?.id === session.id
                        ? 'border-terracotta-500 bg-terracotta-50'
                        : 'border-gray-200 hover:border-terracotta-300'
                      } ${session.availableSpots === 0
                        ? 'opacity-50 cursor-not-allowed'
                        : ''
                      }`}
                  >
                    <div className="flex items-center">
                      <Calendar size={20} className="mr-3 text-terracotta-500" />
                      <div className="text-left">
                        <div className="font-medium text-studio-blue-700">{session.date}</div>
                        <div className="text-sm text-studio-blue-600">{session.time}</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-sm ${session.availableSpots === 0
                          ? 'text-red-600'
                          : session.availableSpots <= 2
                            ? 'text-amber-600'
                            : 'text-green-600'
                        }`}>
                        {session.availableSpots === 0
                          ? 'Sold Out'
                          : `${session.availableSpots} spots left`
                        }
                      </div>
                      <div className="text-xs text-studio-blue-500">
                        {session.totalSpots} total spots
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Booking button */}
            <button
              onClick={handleBookClass}
              disabled={!selectedSession}
              className={`w-full py-3 rounded-md text-white font-medium ${selectedSession
                  ? 'bg-terracotta-500 hover:bg-terracotta-600'
                  : 'bg-gray-300 cursor-not-allowed'
                }`}
            >
              {selectedSession
                ? 'Book This Class'
                : 'Select a Session'
              }
            </button>

            {/* Additional info */}
            <div className="mt-8 p-4 bg-clay-primary-50 rounded-md text-sm text-studio-blue-600">
              <p className="mb-2">
                <strong>Cancellation Policy:</strong> Full refunds available up to 48 hours before the class.
                Cancellations within 48 hours may be rescheduled but are non-refundable.
              </p>
              <p>
                <strong>What to Wear:</strong> Comfortable clothes that you don't mind getting dirty.
                Aprons will be provided, but clay has a way of getting everywhere!
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClassDetailPage;