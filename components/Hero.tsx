import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen bg-black text-white flex flex-col justify-center items-center overflow-hidden">
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="font-sans font-semibold text-6xl md:text-8xl lg:text-[100px] leading-[1.05] tracking-tighter mb-6 text-transparent bg-clip-text bg-gradient-to-b from-white to-white/70">
            Brand Spark.
          </h1>
          
          <p className="font-sans text-gray-400 text-xl md:text-2xl font-medium leading-relaxed mb-10 max-w-2xl mx-auto tracking-tight">
            Performance marketing tailored for interior designers.<br className="hidden md:block"/> 
            Scale your business with creative excellence.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex justify-center"
          >
            <a
              href="#contact"
              className="group inline-flex items-center bg-white text-black px-8 py-4 rounded-full text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]"
            >
              Get Free Consultation
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal fade at bottom */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent pointer-events-none" />
    </section>
  );
};