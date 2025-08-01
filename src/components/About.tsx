import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Target, Award } from 'lucide-react';

const About = () => {
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="about" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Me</span>
            </h2>
            <p className="text-xl text-gray-300">Get to know me better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl shadow-blue-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-blue-500/30 to-cyan-500/30 rounded-lg shadow-lg">
                    <GraduationCap className="text-cyan-300" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Bachelor of Engineering</h4>
                    <p className="text-cyan-400 font-medium">Information Science & Engineering</p>
                    <p className="text-gray-300">CMR Institute of Technology (CMRIT)</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="text-amber-400" size={16} />
                      <span className="text-amber-400 font-medium">CGPA: 8.09</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/20 shadow-xl shadow-purple-500/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-r from-purple-500/30 to-pink-500/30 rounded-lg shadow-lg">
                    <Target className="text-pink-300" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Career Objective</h3>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  To leverage my strong foundation in full-stack development, machine learning, 
                  and problem-solving skills to contribute to innovative projects while continuously 
                  learning and growing in a dynamic technology environment. I aim to create impactful 
                  solutions that bridge the gap between cutting-edge technology and real-world applications.
                </p>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="relative">
              <div className="bg-gradient-to-br from-indigo-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-xl shadow-indigo-500/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Professional Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-blue-400/50"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Full Stack Development</h4>
                      <p className="text-gray-300">
                        Experienced in building end-to-end web applications using modern technologies 
                        like React.js, Node.js, and various databases.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-purple-400/50"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Problem Solving</h4>
                      <p className="text-gray-300">
                        Solved 100+ problems on LeetCode, demonstrating strong algorithmic 
                        thinking and data structure knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-gradient-to-r from-orange-400 to-red-400 rounded-full mt-2 flex-shrink-0 shadow-lg shadow-orange-400/50"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Innovation</h4>
                      <p className="text-gray-300">
                        Patent contributor with a focus on developing innovative solutions 
                        for real-world challenges.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;