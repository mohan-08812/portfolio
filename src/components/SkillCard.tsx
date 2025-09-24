import React from 'react';
import { motion } from 'framer-motion';

interface SkillCardProps {
  name: string;
  icon: React.ReactNode;
  color: string;
}

const SkillCard: React.FC<SkillCardProps> = ({ name, icon, color }) => {
  return (
    <motion.div
      className="bg-dark-light dark:bg-light/10 rounded-xl overflow-hidden"
      whileHover={{ 
        scale: 1.05,
        boxShadow: `0 0 20px ${color}40` 
      }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
    >
      <div className="p-6">
        <div className="flex items-center justify-center mb-4">
          <div 
            className="w-16 h-16 flex items-center justify-center rounded-full" 
            style={{ backgroundColor: `${color}20`, color: color }}
          >
            {icon}
          </div>
        </div>
        
        <h3 className="text-xl font-bold text-center mb-3 text-dark dark:text-light">{name}</h3>
      </div>
    </motion.div>
  );
};

export default SkillCard;