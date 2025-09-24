import React from 'react';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import CertificateCard from '../components/CertificateCard';
import AnimatedText from '../components/AnimatedText';

const certifications = [
  {
    title: 'Web Development Fundamentals',
    issuer: 'Future Certification',
    date: 'Coming Soon',
  },
  {
    title: 'JavaScript Mastery',
    issuer: 'Future Certification',
    date: 'Coming Soon',
  },
  {
    title: 'React.js Development',
    issuer: 'Future Certification',
    date: 'Coming Soon',
  },
  {
    title: 'Full Stack Development',
    issuer: 'Future Certification',
    date: 'Coming Soon',
  },
];

const Certification: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Certifications</h2>
          <AnimatedText
            text="Future certifications I'm working towards"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            once
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {certifications.map((cert, index) => (
            <CertificateCard
              key={index}
              title={cert.title}
              issuer={cert.issuer}
              date={cert.date}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-20 bg-dark-light rounded-xl p-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Continuous Learning</h3>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            I'm committed to continuous learning and skill development. Currently working on several online courses to enhance my technical skills and earn certifications in various web development technologies.
          </p>
          
          <motion.div
            className="inline-block px-6 py-3 bg-primary/10 text-primary rounded-lg text-lg font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            More Coming Soon!
          </motion.div>
        </motion.div>
      </div>
    </SectionTransition>
  );
};

export default Certification;