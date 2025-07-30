import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Calendar, Users, BarChart3 } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      icon: <Calendar size={32} />,
      title: 'Salon Appointment Booking System',
      description: 'A full-stack salon appointment system with admin dashboard, real-time validations, SQLite backend, and email confirmations.',
      techStack: ['HTML', 'CSS', 'JavaScript', 'Node.js', 'Express.js', 'SQLite', 'Nodemailer'],
      color: 'from-pink-500 to-rose-500',
      github: 'https://github.com/purushotham2628/salon-appointment-system',
      demo: 'https://salon-appointment-system-purush.onrender.com/',
    },
    {
      icon: <Users size={32} />,
      title: 'Smart Queue Management System',
      description: 'A real-time queue tracking app built with React and Node.js, allowing users to generate and monitor tokens through a live dashboard.',
      techStack: ['React.js', 'Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'MySQL'],
      color: 'from-blue-500 to-cyan-500',
      github: 'https://github.com/purushotham2628/smart-queue-management',
      demo: '', // Add demo link here if deployed
    },
    {
      icon: <BarChart3 size={32} />,
      title: 'Air Quality Monitoring Dashboard',
      description: 'Real-time dashboard for Bengaluru’s air quality with weather tracking and health recommendations. Powered by OpenWeatherMap API.',
      techStack: ['Node.js', 'Express.js', 'JavaScript', 'HTML', 'CSS', 'Chart.js'],
      color: 'from-green-500 to-emerald-500',
      github: 'https://github.com/purushotham2628/air-quality',
      demo: 'https://air-quality-bengaluru.onrender.com/',
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
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <motion.div variants={itemVariants} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-400">Some of my notable work</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="group bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300 cursor-pointer"
              >
                <div className="mb-6">
                  <div className={`p-4 bg-gradient-to-r ${project.color} rounded-lg text-white w-fit mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed mb-6">
                    {project.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h4 className="text-sm font-medium text-gray-300 mb-3 uppercase tracking-wide">
                    Tech Stack
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-white/10 text-gray-300 rounded-full text-sm font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg hover:bg-blue-500/30 transition-colors duration-200"
                    >
                      <Github size={16} />
                      <span className="text-sm font-medium">Code</span>
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-teal-500/20 text-teal-400 rounded-lg hover:bg-teal-500/30 transition-colors duration-200"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
