import React from 'react';
import { CONTACT_INFO } from '../constants';
import { Section } from './ui/Section';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

export const Contact: React.FC = () => {
  return (
    <Section id="contact" className="bg-black text-white">
      <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
        <h2 className="font-sans text-5xl md:text-6xl font-semibold tracking-tighter mb-6">
          Let's work together.
        </h2>
        <p className="text-gray-400 text-xl font-medium mb-12 leading-relaxed">
          Ready to transform your interior design business?
        </p>

        <div className="space-y-6 w-full flex flex-col items-center">
           <a 
             href={`tel:${CONTACT_INFO.phone}`}
             className="text-2xl md:text-3xl font-sans font-medium hover:text-gray-300 transition-colors tracking-tight"
           >
             {CONTACT_INFO.phone}
           </a>

           <a 
             href={`mailto:${CONTACT_INFO.email}`}
             className="text-xl md:text-2xl font-sans text-gray-400 hover:text-white transition-colors tracking-tight"
           >
             {CONTACT_INFO.email}
           </a>

           <motion.a 
             href={`mailto:${CONTACT_INFO.email}`}
             whileHover={{ scale: 1.05 }}
             whileTap={{ scale: 0.95 }}
             className="mt-8 inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-base font-medium transition-colors"
           >
             Start Your Campaign
             <ArrowRight className="ml-2 w-4 h-4" />
           </motion.a>
        </div>
      </div>
    </Section>
  );
};