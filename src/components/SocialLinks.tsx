import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const socialLinks = [
  {
    name: 'LinkedIn',
    url: 'https://linkedin.com/',
    icon: <Linkedin size={24} />,
    color: '#0077B5',
  },
  {
    name: 'GitHub',
    url: 'https://github.com/',
    icon: <Github size={24} />,
    color: '#333',
  },
  {
    name: 'Email',
    url: 'mailto:mohan.vannemreddy@sasi.ac.in',
    icon: <Mail size={24} />,
    color: '#EA4335',
  },
];

const SocialLinks: React.FC = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };
  
  const item = {
    hidden: { scale: 0 },
    show: { scale: 1 },
  };

  return (
    <motion.div
      className="flex space-x-4"
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
    >
      {socialLinks.map((link) => (
        <motion.a
          key={link.name}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 flex items-center justify-center rounded-full bg-dark-lighter text-light hover:text-primary transition-colors"
          style={{ boxShadow: `0 0 10px ${link.color}40` }}
          variants={item}
          whileHover={{ 
            scale: 1.1, 
            boxShadow: `0 0 15px ${link.color}70`,
            color: link.color
          }}
          whileTap={{ scale: 0.9 }}
        >
          {link.icon}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default SocialLinks;