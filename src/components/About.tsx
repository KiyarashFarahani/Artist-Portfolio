'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const About = () => {
  const skills = [
    'Digital Art',
    'Traditional Painting',
    'Photography',
    '3D Modeling',
    'Graphic Design',
    'Animation'
  ];

  const achievements = [
    { number: '50+', label: 'Artworks Created' },
    { number: '3', label: 'Years Experience' },
    { number: '15+', label: 'Exhibitions' },
    { number: '100%', label: 'Client Satisfaction' }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=750&fit=crop&crop=face"
                alt="Artist Portrait"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full opacity-20"></div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-gradient-to-tr from-pink-400 to-yellow-400 rounded-full opacity-20"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl sm:text-5xl font-playfair font-bold text-gray-900 mb-6">
              About the Artist
            </h2>
            
            <div className="space-y-6 text-gray-600 leading-relaxed">
              <p className="text-lg">
                Welcome to my creative world! I'm a passionate artist who believes in the power of visual storytelling 
                to connect, inspire, and transform perspectives.
              </p>
              
              <p>
                With over 3 years of experience in digital and traditional art, I specialize in creating 
                immersive visual experiences that blend contemporary techniques with timeless artistic principles. 
                My work spans across multiple mediums, from digital illustrations to traditional paintings.
              </p>
              
              <p>
                Each piece I create is a journey of exploration, where I combine technical skill with emotional 
                depth to produce art that resonates with viewers on a personal level. I'm constantly pushing 
                boundaries and experimenting with new techniques to evolve my artistic voice.
              </p>
            </div>

            {/* Skills */}
            <div className="mt-8">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Skills & Expertise</h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="px-4 py-2 bg-white rounded-full text-sm font-medium text-gray-700 shadow-sm border border-gray-200"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 font-medium">
                {achievement.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
