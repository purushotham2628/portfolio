import React from 'react';
import { motion } from 'framer-motion';
import { Award, Code2, BookOpen, Trophy } from 'lucide-react';

const Achievements = () => {
  const achievements = [
    {
      icon: <Award size={32} />,
      title: 'Patent Contribution',
      description: 'Contributing to innovative solutions with patent applications in 2024',
      year: '2024',
      color: 'from-yellow-500 to-orange-500',
    },
    {
      icon: <Code2 size={32} />,
      title: '100+ LeetCode Problems',
      description: 'Solved over 100 coding problems demonstrating strong algorithmic skills',
      year: 'Ongoing',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: <BookOpen size={32} />,
      title: '8+ Certifications',
      description: 'Completed multiple technical certifications in various domains',
      year: '2023-2024',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: <Trophy size={32} />,
      title: 'State-level Kabaddi Player',
      description: 'Represented at state level showcasing teamwork and leadership skills',
      year: 'Athletic',
      color: 'from-purple-500 to-pink-500',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1], // Replaced 'easeOut' string with easing array
      },
    },
  };

  return (
    <section id="achievements" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Key{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">
                Achievements
              </span>
            </h2>
            <p className="text-xl text-gray-300">Milestones and recognitions</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement) => (
              <motion.div
                key={achievement.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:border-white/30 transition-all duration-300 text-center group shadow-xl hover:shadow-2xl hover:shadow-blue-500/20"
              >
                <div
                  className={`p-4 bg-gradient-to-r ${achievement.color} rounded-lg text-white w-fit mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
                >
                  {achievement.icon}
                </div>

                <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300">
                  {achievement.title}
                </h3>

                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {achievement.description}
                </p>

                <div className="inline-block px-3 py-1 bg-gradient-to-r from-white/15 to-white/10 text-gray-200 rounded-full text-xs font-medium shadow-md">
                  {achievement.year}
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-16 text-center">
            <div className="bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl shadow-purple-500/10">
              <h3 className="text-2xl font-semibold text-white mb-4">
                Continuous Learning & Growth
              </h3>
              <p className="text-gray-300 max-w-3xl mx-auto leading-relaxed">
                I believe in continuous improvement and staying updated with the latest technologies.
                These achievements represent my commitment to excellence, innovation, and personal
                growth across technical and non-technical domains.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
