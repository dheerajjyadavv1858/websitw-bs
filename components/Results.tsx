import React from 'react';
import { STATS } from '../constants';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const Results: React.FC = () => {
  return (
    <Section id="results" className="bg-white text-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-24">
          <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-tight mb-2">
            Proven Results.
          </h2>
          <p className="font-sans text-gray-400 text-sm font-medium tracking-wide uppercase mt-4">
            Client Case Study: Tanu Interior
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-0 items-center">
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className={`flex flex-col items-center text-center ${index !== STATS.length - 1 ? 'md:border-r md:border-gray-100' : ''}`}
            >
              <span className="font-sans text-5xl md:text-6xl font-bold tracking-tighter mb-2 bg-clip-text text-transparent bg-gradient-to-b from-black to-gray-600">
                {stat.value}
              </span>
              <span className="font-sans text-gray-500 text-xs font-semibold tracking-wider uppercase">
                {stat.label}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};