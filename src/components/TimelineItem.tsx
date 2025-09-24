import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface TimelineItemProps {
  year: string;
  title: string;
  institution: string;
  description?: string;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = ({
  year,
  title,
  institution,
  description,
  index,
}) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const variants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      ref={ref}
      className={`flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col md:gap-10 gap-6 relative`}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      transition={{ duration: 0.5, delay: index * 0.2 }}
    >
      {/* Line */}
      <div className="absolute left-[7px] md:left-1/2 md:-ml-[1px] top-0 bottom-0 w-[2px] bg-primary/30 z-0" />
      
      {/* Dot */}
      <motion.div 
        className="absolute left-0 md:left-1/2 md:-ml-[8px] top-[6px] w-4 h-4 rounded-full bg-primary z-10"
        initial={{ scale: 0 }}
        animate={inView ? { scale: 1 } : { scale: 0 }}
        transition={{ duration: 0.5, delay: index * 0.2 + 0.2, type: "spring" }}
      />
      
      {/* Year */}
      <div className={`md:w-1/2 pl-10 md:pl-0 ${index % 2 === 0 ? 'md:text-right md:pr-10' : 'md:pl-10'}`}>
        <motion.span 
          className="inline-block px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
          whileHover={{ scale: 1.05 }}
        >
          {year}
        </motion.span>
      </div>
      
      {/* Content */}
      <div className={`md:w-1/2 pl-10 ${index % 2 === 0 ? 'md:pl-10' : 'md:pr-10 md:pl-0'}`}>
        <div className="bg-dark-light dark:bg-light/10 p-5 rounded-lg">
          <h3 className="text-xl font-bold text-dark dark:text-light mb-1">{title}</h3>
          <h4 className="text-lg font-medium text-dark/90 dark:text-light/90 mb-2">{institution}</h4>
          {description && <p className="text-dark/80 dark:text-light/80">{description}</p>}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;