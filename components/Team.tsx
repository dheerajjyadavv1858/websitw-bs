import React from 'react';
import { TEAM } from '../constants';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const Team: React.FC = () => {
  const member = TEAM[0];

  return (
    <Section id="team" className="bg-white text-center py-32">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center justify-center max-w-2xl mx-auto"
      >
        <h2 className="font-sans text-4xl font-semibold tracking-tight mb-16 text-black">Meet the Founder.</h2>
        
        <div className="relative group">
          <div className="relative overflow-hidden rounded-[32px] shadow-xl w-[300px] h-[380px] md:w-[340px] md:h-[420px] mb-10 bg-white">
            <img 
              src={member.image} 
              alt={member.name} 
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=800";
              }}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Subtle inner border for clean edge definition */}
            <div className="absolute inset-0 rounded-[32px] border border-black/5 pointer-events-none" />
          </div>
        </div>

        <div className="flex flex-col items-center space-y-2">
          <h3 className="font-sans text-3xl font-semibold tracking-tight text-black">
            {member.name}
          </h3>
          <p className="font-sans text-lg text-gray-500 font-medium tracking-wide">
            {member.role}
          </p>
        </div>
      </motion.div>
    </Section>
  );
};