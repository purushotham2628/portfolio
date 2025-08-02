import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Code2, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/purush2628/',
      label: 'LinkedIn',
    },
    {
      icon: <Github size={20} />,
      href: 'https://github.com/purushotham2628',
      label: 'GitHub',
    },
    {
      icon: <Code2 size={20} />,
      href: 'https://leetcode.com/u/Purushotham2628/',
      label: 'LeetCode',
    },
  ];

  return (
    <footer className="py-12 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 mb-2">Purushotham E</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
            viewport={{ once: true }}
            className="flex gap-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -3, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 glass text-gray-400 hover:text-white hover:bg-white/20 rounded-full transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25"
                aria-label={link.label}
              >
                {link.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2 hover:text-gray-300 transition-colors duration-300">
            © {new Date().getFullYear()} Purushotham E. Made with
            <motion.span
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
            >
              <Heart size={16} className="text-red-400" />
            </motion.span>
            and lots of code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
