import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Brain, Settings, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'Node.js', 'Express.js', 'React.js', 'REST APIs'],
      color: 'from-green-500 to-green-600',
    },
    {
      icon: <Database size={32} />,
      title: 'Databases',
      skills: ['MongoDB', 'MySQL', 'SQLite'],
      color: 'from-purple-500 to-purple-600',
    },
    {
      icon: <Brain size={32} />,
      title: 'Machine Learning',
      skills: ['scikit-learn (basic)'],
      color: 'from-pink-500 to-pink-600',
    },
    {
      icon: <Settings size={32} />,
      title: 'DevOps',
      skills: ['Jenkins', 'Git Bash'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Data',
      skills: ['Git', 'VS Code', 'GitHub', 'Eclipse', 'Jupyter Notebook', 'Excel', 'Tableau', 'Power BI'],
      color: 'from-teal-500 to-teal-600',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Cloud (Basic)',
      skills: ['AWS EC2', 'AWS S3'],
      color: 'from-yellow-500 to-yellow-600',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
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
    <section id="skills" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-300">Technologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -8 }}
                className="glass rounded-2xl p-6 hover:border-white/30 transition-all duration-500 shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 group"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white shadow-lg group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-3 py-2 bg-gradient-to-r from-white/15 to-white/10 text-gray-200 rounded-full text-sm font-medium hover:from-white/25 hover:to-white/20 hover:text-white transition-all duration-300 cursor-default shadow-md hover:shadow-lg hover:shadow-blue-500/25"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
