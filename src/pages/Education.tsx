import React from 'react';
import { motion } from 'framer-motion';
import SectionTransition from '../components/SectionTransition';
import TimelineItem from '../components/TimelineItem';
import AnimatedText from '../components/AnimatedText';

const educationData = [
  {
    year: '2021 - Present',
    title: 'Bachelor of Technology',
    institution: 'Sasi Institute of Technology and Engineering, Tadepalligudem',
    description: 'Currently pursuing B.Tech with a focus on Computer Science and Engineering.',
  },
  {
    year: '2018 - 2021',
    title: 'Diploma in Computer Engineering',
    institution: 'SIR CR Reddy Polytechnic, Eluru',
    description: 'Completed diploma with distinction, focusing on computer fundamentals and programming.',
  },
  {
    year: '2017 - 2018',
    title: '10th Class',
    institution: 'LBC, Eluru',
    description: 'Completed secondary education with excellent academic performance.',
  },
];

const Education: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Education</h2>
          <AnimatedText
            text="My academic journey and qualifications"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            once
          />
        </motion.div>
        
        <div className="relative py-10">
          {educationData.map((item, index) => (
            <TimelineItem
              key={index}
              year={item.year}
              title={item.title}
              institution={item.institution}
              description={item.description}
              index={index}
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
          <h3 className="text-2xl font-bold mb-4 text-primary">Academic Achievements</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-dark-lighter p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Consistent Academic Performance</h4>
              <p className="text-gray-300">Maintained above 8.5 CGPA throughout my academic journey.</p>
            </div>
            
            <div className="bg-dark-lighter p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Technical Competitions</h4>
              <p className="text-gray-300">Participated in various coding competitions and hackathons at college level.</p>
            </div>
            
            <div className="bg-dark-lighter p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Project Excellence</h4>
              <p className="text-gray-300">Received recognition for academic projects demonstrating technical skills.</p>
            </div>
            
            <div className="bg-dark-lighter p-4 rounded-lg">
              <h4 className="text-lg font-semibold mb-2">Active Participation</h4>
              <p className="text-gray-300">Actively participated in technical workshops and seminars.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionTransition>
  );
};

export default Education;