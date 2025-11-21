import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
  tag?: React.ElementType;
  delay?: number;
}

export const AnimatedText: React.FC<AnimatedTextProps> = ({ 
  text, 
  className = '', 
  tag: Tag = 'h2',
  delay = 0 
}) => {
  return (
    <Tag className={`${className} overflow-hidden`}>
      <motion.span
        initial={{ y: '100%' }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
        className="block"
      >
        {text}
      </motion.span>
    </Tag>
  );
};