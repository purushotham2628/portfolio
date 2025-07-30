import React from 'react';
import { motion } from 'framer-motion';
import { Code, Globe, Database, Brain, Settings, Wrench } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      icon: <Code size={32} />,
      title: 'Languages',
      skills: ['Java', 'Python', 'C', 'JavaScript', 'Go'],
      color: 'from-blue-500 to-blue-600',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      skills: ['HTML', 'CSS', 'Node.js', 'Express.js', 'React.js', 'Next.js'],
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
      skills: ['Jenkins', 'Git Bash', 'Azure DevOps'],
      color: 'from-orange-500 to-orange-600',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Data',
      skills: ['Git', 'VS Code', 'GitHub', 'Eclipse', 'Jupyter Notebook', 'Excel', 'Tableau', 'Power BI'],
      color: 'from-teal-500 to-teal-600',
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
              Technical <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Skills</span>
            </h2>
            <p className="text-xl text-gray-400">Technologies I work with</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={category.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 bg-gradient-to-r ${category.color} rounded-lg text-white`}>
                    {category.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white">{category.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <motion.span
                      key={skill}
                      whileHover={{ scale: 1.1 }}
                      className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium hover:bg-white/20 transition-colors duration-200 cursor-default"
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