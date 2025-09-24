import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import SectionTransition from '../components/SectionTransition';
import AnimatedText from '../components/AnimatedText';
import SocialLinks from '../components/SocialLinks';

const Home: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container flex flex-col items-center justify-center min-h-[calc(100vh-80px)]">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="gradient-text">Hello, I'm</span>
            <br />
            <span className="text-light dark:text-light">V Mohan Balaji</span>
          </motion.h1>
          
          <AnimatedText
            text="A passionate 3rd-year B.Tech student at Sasi Institute, Tadepalligudem, aspiring to be a Full Stack Developer."
            className="text-xl md:text-2xl text-gray-300 mb-8"
            once
          />
          
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <Link to="/contact">
              <motion.button
                className="btn-primary flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span>Get in Touch</span>
                <ArrowRight size={18} />
              </motion.button>
            </Link>
            
            <Link to="/experience">
              <motion.button
                className="btn-outline"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Projects
              </motion.button>
            </Link>
          </motion.div>
          
          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <SocialLinks />
          </motion.div>
        </motion.div>
        
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.div
            className="w-8 h-12 border-2 border-primary rounded-full flex justify-center items-start p-1"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <motion.div className="w-1 h-2 bg-primary rounded-full" />
          </motion.div>
          <p className="text-center text-sm mt-2 text-gray-400">Scroll Down</p>
        </motion.div>
      </div>
    </SectionTransition>
  );
};

export default Home;