import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  image,
  tags,
  liveUrl,
  githubUrl,
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-dark-light dark:bg-light/10 rounded-xl overflow-hidden relative group"
      whileHover={{ 
        scale: 1.02,
        boxShadow: "0 10px 30px -15px rgba(14, 165, 233, 0.3)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-light dark:from-light/10 to-transparent opacity-70" />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-dark dark:text-light">{title}</h3>
        
        <p className="text-dark/80 dark:text-light/80 mb-4">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="text-xs px-2 py-1 rounded-full bg-dark-lighter dark:bg-light/5 text-dark dark:text-light"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex space-x-3">
          {githubUrl && (
            <motion.a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-lighter dark:bg-light/5 text-dark dark:text-light hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Github size={20} />
            </motion.a>
          )}
          
          {liveUrl && (
            <motion.a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-dark-lighter dark:bg-light/5 text-dark dark:text-light hover:text-primary transition-colors"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <ExternalLink size={20} />
            </motion.a>
          )}
        </div>
      </div>
      
      <motion.div 
        className="absolute top-2 right-2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      >
        <div className="px-3 py-1 bg-primary rounded-full text-xs font-medium text-white">
          Project
        </div>
      </motion.div>
    </motion.div>
  );
};

export default ProjectCard;