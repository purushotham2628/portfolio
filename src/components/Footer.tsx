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
            viewport={{ once: true }}
            className="mb-6 md:mb-0"
          >
            <h3 className="text-2xl font-bold text-white mb-2">Purushotham E</h3>
            <p className="text-gray-400">Full Stack Developer</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex gap-6 mb-6 md:mb-0"
          >
            {socialLinks.map((link) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="p-3 bg-white/10 text-gray-400 hover:text-white hover:bg-white/20 rounded-full transition-all duration-200"
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
          viewport={{ once: true }}
          className="pt-8 border-t border-white/10 text-center"
        >
          <p className="text-gray-400 flex items-center justify-center gap-2">
            © {new Date().getFullYear()} Purushotham E. Made with
            <Heart size={16} className="text-red-400" />
            and lots of code.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
