import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    
    setIsSubmitting(true);
    
    try {
      await emailjs.sendForm(
        'service_kxybeg9', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        form.current,
        'KONiFsV5UnzfEKctd' // Replace with your EmailJS public key
      );
      
      setSubmitStatus('success');
      form.current.reset();
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }
  };
  
  return (
    <motion.form
      ref={form}
      onSubmit={handleSubmit}
      className="bg-dark-light dark:bg-light/10 rounded-xl p-6 md:p-8"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="relative">
          <input
            type="text"
            name="user_name"
            className="input-field peer pt-5 text-dark dark:text-light"
            placeholder=" "
            required
          />
          <label className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary">
            Your Name
          </label>
        </div>
        
        <div className="relative">
          <input
            type="email"
            name="user_email"
            className="input-field peer pt-5 text-dark dark:text-light"
            placeholder=" "
            required
          />
          <label className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary">
            Your Email
          </label>
        </div>
      </div>
      
      <div className="relative mb-6">
        <input
          type="text"
          name="subject"
          className="input-field peer pt-5 text-dark dark:text-light"
          placeholder=" "
          required
        />
        <label className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary">
          Subject
        </label>
      </div>
      
      <div className="relative mb-6">
        <textarea
          name="message"
          rows={5}
          className="input-field peer pt-5 resize-none text-dark dark:text-light"
          placeholder=" "
          required
        />
        <label className="absolute text-gray-400 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-primary">
          Your Message
        </label>
      </div>
      
      <div className="flex justify-end">
        <motion.button
          type="submit"
          className={`btn-primary flex items-center space-x-2 ${
            isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
          }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          disabled={isSubmitting}
        >
          <span>Send Message</span>
          <motion.span
            animate={{ x: isSubmitting ? 5 : 0 }}
            transition={{ repeat: isSubmitting ? Infinity : 0, duration: 0.3 }}
          >
            <Send size={18} />
          </motion.span>
        </motion.button>
      </div>
      
      {submitStatus === 'success' && (
        <motion.div
          className="mt-4 p-3 bg-green-500/20 text-green-500 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Message sent successfully! I'll get back to you soon.
        </motion.div>
      )}
      
      {submitStatus === 'error' && (
        <motion.div
          className="mt-4 p-3 bg-red-500/20 text-red-500 rounded-lg"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
        >
          Something went wrong. Please try again later.
        </motion.div>
      )}
    </motion.form>
  );
};

export default ContactForm;