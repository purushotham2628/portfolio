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
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Me</span>
            </h2>
            <p className="text-xl text-gray-400">Get to know me better</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-blue-500/20 rounded-lg">
                    <GraduationCap className="text-blue-400" size={28} />
                  </div>
                  <h3 className="text-2xl font-semibold text-white">Education</h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-medium text-white">Bachelor of Engineering</h4>
                    <p className="text-blue-400 font-medium">Information Science & Engineering</p>
                    <p className="text-gray-400">CMR Institute of Technology (CMRIT)</p>
                    <div className="flex items-center gap-2 mt-2">
                      <Award className="text-yellow-400" size={16} />
                      <span className="text-yellow-400 font-medium">CGPA: 8.09</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-teal-500/20 rounded-lg">
                    <Target className="text-teal-400" size={28} />
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
              <div className="bg-gradient-to-br from-blue-500/20 to-teal-500/20 rounded-2xl p-8 backdrop-blur-sm border border-white/10">
                <h3 className="text-2xl font-semibold text-white mb-6">Professional Journey</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-blue-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Full Stack Development</h4>
                      <p className="text-gray-400">
                        Experienced in building end-to-end web applications using modern technologies 
                        like React.js, Node.js, and various databases.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-teal-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Problem Solving</h4>
                      <p className="text-gray-400">
                        Solved 100+ problems on LeetCode, demonstrating strong algorithmic 
                        thinking and data structure knowledge.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-3 h-3 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                    <div>
                      <h4 className="text-lg font-medium text-white">Innovation</h4>
                      <p className="text-gray-400">
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