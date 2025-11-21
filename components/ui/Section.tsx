import React, { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  fullWidth?: boolean;
}

export const Section: React.FC<SectionProps> = ({ 
  children, 
  className = '', 
  id = '', 
  fullWidth = false 
}) => {
  return (
    <section id={id} className={`py-32 md:py-40 ${className}`}>
      <div className={`mx-auto px-6 md:px-12 ${fullWidth ? 'w-full' : 'max-w-[1000px]'}`}>
        {children}
      </div>
    </section>
  );
};