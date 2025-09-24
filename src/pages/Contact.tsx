import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin } from 'lucide-react';
import SectionTransition from '../components/SectionTransition';
import ContactForm from '../components/ContactForm';
import SocialLinks from '../components/SocialLinks';
import AnimatedText from '../components/AnimatedText';

const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: 'Email',
    value: 'mohan.vannemreddy@sasi.ac.in',
    link: 'mailto:mohan.vannemreddy@sasi.ac.in',
  },
  {
    icon: <Phone size={24} />,
    title: 'Phone',
    value: '+91 9876543210',
    link: 'tel:+919876543210',
  },
  {
    icon: <MapPin size={24} />,
    title: 'Location',
    value: 'Tadepalligudem, Andhra Pradesh, India',
    link: 'https://maps.google.com/?q=Tadepalligudem,Andhra+Pradesh,India',
  },
];

const Contact: React.FC = () => {
  return (
    <SectionTransition className="min-h-screen pt-20">
      <div className="section-container">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="section-title">Get In Touch</h2>
          <AnimatedText
            text="Feel free to contact me for any questions or opportunities"
            className="text-xl text-gray-300 max-w-2xl mx-auto"
            once
          />
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          <div>
            <motion.div
              className="bg-dark-light rounded-xl p-6 md:p-8 mb-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Contact Information</h3>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-start space-x-4 p-4 rounded-lg bg-dark-lighter hover:bg-dark-lighter/80 transition-colors"
                    whileHover={{ scale: 1.02, x: 5 }}
                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  >
                    <div className="w-10 h-10 flex items-center justify-center rounded-full bg-primary/20 text-primary flex-shrink-0">
                      {info.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-300">{info.title}</h4>
                      <p className="text-primary">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>
            
            <motion.div
              className="bg-dark-light rounded-xl p-6 md:p-8"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-primary">Connect With Me</h3>
              <SocialLinks />
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6 text-primary">Send Me a Message</h3>
            <ContactForm />
          </motion.div>
        </div>
      </div>
    </SectionTransition>
  );
};

export default Contact;