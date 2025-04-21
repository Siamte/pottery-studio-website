import React, { useEffect } from 'react';
import { motion } from 'framer-motion';

const AboutPage: React.FC = () => {
  useEffect(() => {
    document.title = 'About Us | Clay Collective';
    window.scrollTo(0, 0);
  }, []);

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 }
    }
  };

  const artists = [
    {
      name: 'Emma Watson',
      role: 'Studio Founder & Master Potter',
      bio: 'With over 15 years of ceramic experience, Emma founded Clay Collective to share her passion for pottery with the community. She specializes in functional stoneware and innovative glaze techniques.',
      image: 'https://images.pexels.com/photos/7355370/pexels-photo-7355370.jpeg'
    },
    {
      name: 'James Chen',
      role: 'Ceramicist & Workshop Instructor',
      bio: 'James brings his background in fine arts and design to create minimalist ceramic pieces with extraordinary attention to detail. He leads many of our intermediate and advanced classes.',
      image: 'https://images.pexels.com/photos/6942440/pexels-photo-6942440.jpeg'
    },
    {
      name: 'Sofia Martinez',
      role: 'Ceramic Artist & Designer',
      bio: 'Sofia\'s work combines traditional techniques with modern aesthetics. She is known for her unique decorative ceramics and is passionate about inspiring beginners in our introductory workshops.',
      image: 'https://images.pexels.com/photos/3979134/pexels-photo-3979134.jpeg'
    },
    {
      name: 'Michael Brown',
      role: 'Production Potter & Instructor',
      bio: 'Michael specializes in wheel-thrown pottery with a focus on tableware. His background in production ceramics brings efficiency and consistency to his teaching style in our wheel throwing classes.',
      image: 'https://images.pexels.com/photos/2896366/pexels-photo-2896366.jpeg'
    }
  ];

  return (
    <div className="pt-24 pb-16">
      <div className="container mx-auto px-4">
        {/* Hero section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl text-studio-blue-800 mb-4"
          >
            Our Story
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-studio-blue-600"
          >
            Discover the passionate artists and craftspeople behind Clay Collective
            and learn about our journey in the world of ceramics.
          </motion.p>
        </div>

        {/* History section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-lg overflow-hidden">
              <img
                src="https://images.pexels.com/photos/5695051/pexels-photo-5695051.jpeg"
                alt="Clay Collective Studio"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-2/3 h-full bg-terracotta-500/20 rounded-lg -z-10"></div>
          </motion.div>

          <motion.div
            variants={fadeIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <h2 className="font-serif text-3xl text-studio-blue-800 mb-6">
              From Small Workshop to Thriving Studio
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mb-6"></div>
            <p className="text-studio-blue-600 mb-4">
              Clay Collective began in 2015 as a small workshop in the garage of our founder, Emma Watson.
              With just two pottery wheels and a single kiln, Emma started teaching small classes to friends
              and neighbors who were curious about ceramics.
            </p>
            <p className="text-studio-blue-600 mb-4">
              As word spread about the quality of instruction and the warm, supportive environment,
              demand quickly outgrew the humble garage space. In 2017, Clay Collective moved to our
              current location in the arts district, expanding to a fully equipped studio with multiple
              wheels, kilns, and dedicated spaces for hand-building and glazing.
            </p>
            <p className="text-studio-blue-600">
              Today, we're proud to be a vibrant community hub for ceramic artists and enthusiasts of all
              skill levels. Our team has grown to include talented instructors with diverse specialties,
              and our shop features handcrafted works from all of our resident artists.
            </p>
          </motion.div>
        </div>

        {/* Our philosophy */}
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-clay-primary-50 rounded-lg p-8 mb-20"
        >
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl text-studio-blue-800 mb-6">
              Our Philosophy
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-studio-blue-600 mb-4">
              At Clay Collective, we believe that working with clay is more than just a craft—it's a
              connection to one of humanity's oldest art forms. Our hands touching clay creates a link
              to thousands of years of human creativity and ingenuity.
            </p>
            <p className="text-studio-blue-600">
              We're dedicated to preserving traditional techniques while embracing contemporary design,
              creating pieces that are both functional and beautiful. We're committed to sustainability
              in our practices, from responsibly sourced clay to energy-efficient firing techniques.
            </p>
          </div>
        </motion.div>

        {/* Meet our team */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-studio-blue-800 mb-4">
              Meet Our Artists
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-studio-blue-600 max-w-3xl mx-auto">
              Our team of skilled ceramicists brings diverse backgrounds and specialties to
              Clay Collective. Each artist contributes their unique perspective while sharing
              a common passion for quality craftsmanship.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {artists.map((artist, index) => (
              <motion.div
                key={artist.name}
                variants={fadeIn}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md"
              >
                <div className="h-64 overflow-hidden">
                  <img
                    src={artist.image}
                    alt={artist.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl text-studio-blue-800 mb-1">
                    {artist.name}
                  </h3>
                  <p className="text-terracotta-500 text-sm mb-3">{artist.role}</p>
                  <p className="text-studio-blue-600 text-sm">{artist.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Studio space */}
        <div>
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl text-studio-blue-800 mb-4">
              Our Studio Space
            </h2>
            <div className="w-16 h-1 bg-terracotta-500 mx-auto mb-6"></div>
            <p className="text-studio-blue-600 max-w-3xl mx-auto">
              Located in the heart of the arts district, our 2,500 square foot studio offers
              a bright, inviting space for creativity and learning.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/4207708/pexels-photo-4207708.jpeg"
                alt="Pottery wheels"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/5695059/pexels-photo-5695059.jpeg"
                alt="Handbuilding area"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              variants={fadeIn}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/4207790/pexels-photo-4207790.jpeg"
                alt="Finished pottery"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;