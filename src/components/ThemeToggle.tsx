import React from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface ThemeToggleProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({ theme, toggleTheme }) => {
  return (
    <motion.button
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full bg-dark-light dark:bg-light shadow-lg"
      onClick={toggleTheme}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      aria-label="Toggle theme"
    >
      <motion.div
        initial={false}
        animate={{ rotate: theme === 'dark' ? 0 : 180 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 200 }}
      >
        {theme === 'dark' ? (
          <Sun size={24} className="text-light" />
        ) : (
          <Moon size={24} className="text-dark" />
        )}
      </motion.div>
    </motion.button>
  );
};

export default ThemeToggle;