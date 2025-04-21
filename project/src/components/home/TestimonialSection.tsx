import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Pottery Enthusiast",
    comment: "The intro workshop was incredible! As a complete beginner, I never expected to create something I'd actually want to display in my home on the first try. The instructor was patient and so helpful.",
    stars: 5,
    image: "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg",
  },
  {
    id: 2,
    name: "Mark Davis",
    role: "Interior Designer",
    comment: "I've purchased multiple pieces from Clay Collective for my clients. The quality is outstanding and each piece has such character. Definitely my go-to for unique ceramic accents.",
    stars: 5,
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    role: "Regular Workshop Attendee",
    comment: "I've taken several classes here and each one has been amazing. The studio is beautiful, the instructors are knowledgeable, and the community they've built is so supportive.",
    stars: 5,
    image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg",
  }
];

const TestimonialSection: React.FC = () => {
  return (
    <section className="py-16 md:py-24 bg-clay-primary-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-studio-blue-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-studio-blue-600 max-w-2xl mx-auto">
            We're proud to have fostered a community of pottery enthusiasts and creators.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.id}
              testimonial={testimonial}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface TestimonialCardProps {
  testimonial: {
    id: number;
    name: string;
    role: string;
    comment: string;
    stars: number;
    image: string;
  };
  delay: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ testimonial, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="bg-white p-8 rounded-lg shadow-md"
    >
      <div className="flex items-center mb-4 space-x-1">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={18}
            className={i < testimonial.stars ? "fill-terracotta-500 text-terracotta-500" : "text-gray-300"}
          />
        ))}
      </div>
      <p className="text-studio-blue-600 mb-6 text-lg italic">
        "{testimonial.comment}"
      </p>
      <div className="flex items-center">
        <img
          src={testimonial.image}
          alt={testimonial.name}
          className="w-12 h-12 rounded-full object-cover mr-4"
        />
        <div>
          <h4 className="font-medium text-studio-blue-800">{testimonial.name}</h4>
          <p className="text-studio-blue-500 text-sm">{testimonial.role}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialSection;