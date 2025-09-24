import React from 'react';
import { motion } from 'framer-motion';
import { Code, Database, Globe, Server, Cpu, FileCode } from 'lucide-react';
import SectionTransition from '../components/SectionTransition';
import SkillCard from '../components/SkillCard';
import AnimatedText from '../components/AnimatedText';

const skills = [
  {
    name: 'HTML',
    icon: <Globe size={32} />,
    level: 90,
    color: '#E34F26',
  },
  {
    name: 'CSS',
    icon: <FileCode size={32} />,
    level: 85,
    color: '#1572B6',
  },
  {
    name: 'JavaScript',
    icon: <Code size={32} />,
    level: 80,
    color: '#F7DF1E',
  },
  {
    name: 'React',
    icon: <Code size={32} />,
    level: 75,
    color: '#61DAFB',
  },
  {
    name: 'Python',
    icon: <FileCode size={32} />,
    level: 70,
    color: '#3776AB',
  },
  {
    name: 'MongoDB',
    icon: <Database size={32} />,
    level: 60,
    color: '#47A248',
  },
  {
    name: 'SQL',
    icon: <Database size={32} />,
    level: 65,
    color: '#4479A1',
  },
  {
    name: 'Node.js',
    icon: <Server size={32} />,
    level: 50,
    color: '#339933',
  },
];

const Skills: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">My Skills</h2>
          <AnimatedText
            text="Here are the technologies I've been working with"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            once
          />
        </motion.div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
              level={skill.level}
              color={skill.color}
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
          <h3 className="text-2xl font-bold mb-4 text-primary">Additional Skills</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-xl font-semibold mb-3">Technical Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Problem Solving</span>
                </li>
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Responsive Web Design</span>
                </li>
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Version Control (Git)</span>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-3">Soft Skills</h4>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Team Collaboration</span>
                </li>
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Time Management</span>
                </li>
                <li className="flex items-center">
                  <Cpu size={18} className="text-primary mr-2" />
                  <span>Adaptability</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  );
};

export default Skills;