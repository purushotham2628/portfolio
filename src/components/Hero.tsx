import React from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Github, Linkedin, Code2, Sparkles } from 'lucide-react';

const Hero = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.1, 0.25, 1],
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Floating elements */}
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-20 left-10 text-cyan-400/30"
        style={{ animationDelay: '0s' }}
      >
        <Code2 size={40} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute top-40 right-20 text-purple-400/30"
        style={{ animationDelay: '2s' }}
      >
        <Sparkles size={35} />
      </motion.div>
      <motion.div
        variants={floatingVariants}
        animate="animate"
        className="absolute bottom-40 left-20 text-pink-400/30"
        style={{ animationDelay: '4s' }}
      >
        <Github size={45} />
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-8"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5, type: "spring", stiffness: 100 }}
              className="inline-block"
            >
              <div className="relative">
                <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 p-1 animate-pulse-glow">
                  <div className="w-full h-full rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
                    <span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400">
                      PE
                    </span>
                  </div>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute -inset-2 rounded-full border-2 border-dashed border-cyan-400/30"
                />
              </div>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-7xl font-bold text-white leading-tight"
            >
              Hi, I'm{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 animate-gradient">
                Purushotham E
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="space-y-2">
              <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-light">
                Full Stack Developer
              </p>
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-1 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mx-auto max-w-md rounded-full"
              />
            </motion.div>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Passionate about creating innovative web solutions with modern technologies. 
            Specializing in full-stack development, machine learning, and building scalable applications 
            that make a difference.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <motion.a
              href="/Purushotham_Resume.pdf"
              download
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 text-white font-semibold rounded-full hover:from-cyan-600 hover:via-blue-600 hover:to-purple-600 transition-all duration-300 shadow-xl shadow-blue-500/25 hover:shadow-2xl hover:shadow-blue-500/40"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              Download Resume
              <div className="absolute inset-0 rounded-full bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-shimmer" />
            </motion.a>

            <div className="flex gap-4">
              {[
                { icon: <Github size={24} />, href: 'https://github.com/purushotham2628', label: 'GitHub' },
                { icon: <Linkedin size={24} />, href: 'https://www.linkedin.com/in/purush2628/', label: 'LinkedIn' },
                { icon: <Code2 size={24} />, href: 'https://leetcode.com/u/Purushotham2628/', label: 'LeetCode' },
              ].map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  className="p-4 glass text-gray-300 hover:text-white rounded-full transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/25"
                  aria-label={social.label}
                >
                  <div className="group-hover:animate-pulse">
                    {social.icon}
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="pt-12"
          >
            <motion.button
              onClick={scrollToAbout}
              whileHover={{ y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group flex flex-col items-center gap-2 text-gray-400 hover:text-cyan-400 transition-all duration-300"
              aria-label="Scroll to about section"
            >
              <span className="text-sm font-medium">Discover More</span>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="p-2 rounded-full border-2 border-gray-400 group-hover:border-cyan-400 transition-colors duration-300"
              >
                <ArrowDown size={20} />
              </motion.div>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;