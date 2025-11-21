import React from 'react';
import { SERVICES } from '../constants';
import { Section } from './ui/Section';
import { motion } from 'framer-motion';

export const Services: React.FC = () => {
  return (
    <Section id="services" className="bg-[#f5f5f7] text-black">
      <div className="text-center mb-20">
        <h2 className="font-sans text-4xl md:text-5xl font-semibold tracking-tight mb-4 text-gray-900">
          What We Do.
        </h2>
        <p className="text-gray-500 text-lg font-medium">Precision campaigns for modern interiors.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {SERVICES.map((service, index) => (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="bg-white p-10 rounded-[30px] shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full"
          >
            <div className="mb-auto">
              <div className="w-12 h-12 bg-black rounded-full flex items-center justify-center mb-8 text-white">
                <service.icon className="w-5 h-5" />
              </div>
              <h3 className="font-sans text-xl font-semibold mb-3 tracking-tight">
                {service.title}
              </h3>
              <p className="font-sans text-gray-500 leading-relaxed text-sm font-medium">
                {service.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
};