import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, ChevronDown, Download } from 'lucide-react';

const Hero = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const socialLinks = [
    {
      icon: <Linkedin size={24} />,
      href: 'https://www.linkedin.com/in/purush2628/',
      label: 'LinkedIn',
      color: 'hover:bg-blue-600',
    },
    {
      icon: <Github size={24} />,
      href: 'https://github.com/purushotham2628',
      label: 'GitHub',
      color: 'hover:bg-gray-700',
    },
    {
      icon: <Code2 size={24} />,
      href: 'https://leetcode.com/u/Purushotham2628/',
      label: 'LeetCode',
      color: 'hover:bg-orange-600',
    },
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-900/30 via-purple-900/30 to-pink-900/30" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-r from-blue-400/20 to-cyan-400/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-delayed" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="text-center"
        >
          <motion.div variants={itemVariants} className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-teal-400">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                Purushotham E
              </span>
            </h1>
            <p className="text-2xl md:text-3xl text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-400 font-light">
              Full Stack Developer
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-12 max-w-3xl mx-auto">
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
              Passionate about creating innovative solutions through modern web technologies,
              machine learning, and scalable applications. Committed to delivering high-quality,
              user-centric digital experiences that drive business growth and technological advancement.
            </p>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm text-white rounded-full border border-white/30 transition-all duration-300 hover:border-white/50 hover:shadow-lg hover:shadow-blue-500/25 ${link.color}`}
              >
                {link.icon}
                <span className="font-medium">{link.label}</span>
              </motion.a>
            ))}
          </motion.div>

          {/* Resume Download Button */}
          <motion.div variants={itemVariants} className="mb-12">
            <motion.a
              href="/Purushotham_Resume.pdf"
              download="Purushotham_E_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 text-sm bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-full shadow-xl shadow-blue-500/25 border border-white/30 hover:shadow-2xl hover:shadow-blue-500/40 transition-all duration-300 hover:scale-105"
            >
              <Download size={18} />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Scroll Down Icon */}
          <motion.div
            variants={itemVariants}
            className="absolute bottom-6 left-1/2 transform -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-white/60 cursor-pointer"
              onClick={() => {
                document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <ChevronDown size={32} />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
