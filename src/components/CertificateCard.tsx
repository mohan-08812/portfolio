import React from 'react';
import { motion } from 'framer-motion';
import { Award } from 'lucide-react';

interface CertificateCardProps {
  title: string;
  issuer: string;
  date?: string;
  credentialUrl?: string;
}

const CertificateCard: React.FC<CertificateCardProps> = ({
  title,
  issuer,
  date,
  credentialUrl,
}) => {
  return (
    <motion.div
      className="bg-dark-light dark:bg-light/10 rounded-xl overflow-hidden relative group"
      whileHover={{ 
        scale: 1.05,
        boxShadow: "0 0 20px rgba(14, 165, 233, 0.3)"
      }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <div className="absolute -right-10 -top-10 w-40 h-40 bg-primary/10 rounded-full" />
      
      <div className="p-6 relative z-10">
        <div className="flex items-center mb-4">
          <div className="w-12 h-12 flex items-center justify-center rounded-full bg-primary/20 text-primary mr-4">
            <Award size={24} />
          </div>
          
          <div>
            <h3 className="text-xl font-bold text-dark dark:text-light">{title}</h3>
            <p className="text-dark/80 dark:text-light/80">{issuer}</p>
          </div>
        </div>
        
        {date && <p className="text-dark/60 dark:text-light/60 mb-4">Issued: {date}</p>}
        
        {credentialUrl && (
          <motion.a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-lg text-sm font-medium hover:bg-primary/20 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            View Credential
          </motion.a>
        )}
      </div>
      
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-secondary"
        initial={{ scaleX: 0, originX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.3 }}
      />
    </motion.div>
  );
};

export default CertificateCard;