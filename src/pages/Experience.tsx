import React from 'react';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import ProjectCard from '../components/ProjectCard';
import AnimatedText from '../components/AnimatedText';

const projects = [
  {
    title: 'Personal Portfolio',
    description: 'A responsive portfolio website built with React and Tailwind CSS.',
    image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['React', 'Tailwind CSS', 'Framer Motion'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    title: 'E-commerce UI',
    description: 'Frontend for an e-commerce website with product listings and cart functionality.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2089&q=80',
    tags: ['HTML', 'CSS', 'JavaScript'],
    githubUrl: 'https://github.com/',
  },
  {
    title: 'Weather App',
    description: 'A simple weather application that fetches data from a weather API.',
    image: 'https://images.unsplash.com/photo-1592210454359-9043f067919b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    tags: ['JavaScript', 'API', 'CSS'],
    githubUrl: 'https://github.com/',
    liveUrl: '#',
  },
  {
    title: 'Task Manager',
    description: 'A task management application with CRUD operations.',
    image: 'https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2072&q=80',
    tags: ['React', 'LocalStorage', 'CSS'],
    githubUrl: 'https://github.com/',
  },
];

const Experience: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Experience & Projects</h2>
          <AnimatedText
            text="No professional experience yet, but I've worked on multiple front-end projects."
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            once
          />
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              image={project.image}
              tags={project.tags}
              githubUrl={project.githubUrl}
              liveUrl={project.liveUrl}
            />
          ))}
        </div>
        
        <motion.div
          className="mt-20 bg-dark-light rounded-xl p-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-4 text-primary">Looking for Opportunities</h3>
          <p className="text-gray-300 mb-4">
            I'm currently looking for internship opportunities to gain professional experience and apply my skills in a real-world setting. If you have any opportunities or would like to collaborate on a project, please feel free to contact me.
          </p>
          <motion.a
            href="/contact"
            className="inline-block btn-primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </SectionTransition>
  );
};

export default Experience;