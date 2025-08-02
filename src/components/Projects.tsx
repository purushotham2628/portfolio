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
              Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400">Projects</span>
            </h2>
            <p className="text-xl text-gray-300">Some of my notable work</p>
          </motion.div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <motion.div
                key={project.title}
                variants={itemVariants}
                whileHover={{ scale: 1.02, y: -12 }}
                className="group glass rounded-2xl p-6 hover:border-white/30 transition-all duration-500 cursor-pointer shadow-xl hover:shadow-2xl hover:shadow-blue-500/20 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-purple-500/5 to-pink-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative z-10">
                <div className="mb-6">
                  <div className={`p-4 bg-gradient-to-r ${project.color} rounded-lg text-white w-fit mb-4 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-blue-400 transition-all duration-300">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
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
                        className="px-3 py-1 bg-gradient-to-r from-white/15 to-white/10 text-gray-200 rounded-full text-sm font-medium shadow-md group-hover:from-white/25 group-hover:to-white/20 group-hover:text-white transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex gap-4 pt-4 border-t border-white/10 group-hover:border-white/20 transition-colors duration-300">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 text-cyan-400 rounded-lg hover:from-blue-500/30 hover:to-cyan-500/30 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-blue-500/25"
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
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 text-pink-400 rounded-lg hover:from-purple-500/30 hover:to-pink-500/30 transition-all duration-300 shadow-md hover:shadow-lg hover:shadow-purple-500/25"
                    >
                      <ExternalLink size={16} />
                      <span className="text-sm font-medium">Demo</span>
                    </motion.a>
                  )}
                </div>
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
