import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10 mt-24">
      <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8 md:gap-0">
        <div className="flex flex-col items-center md:items-start space-y-4">
          <p className="font-serif text-2xl font-bold tracking-tight">Brand Spark.</p>
          <div className="flex space-x-6">
            <a 
              href="https://www.linkedin.com/in/priyasharma14" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} strokeWidth={1.5} />
            </a>
            <a 
              href="https://twitter.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Twitter"
            >
              <Twitter size={20} strokeWidth={1.5} />
            </a>
          </div>
        </div>
        
        <div className="text-gray-500 text-sm text-center md:text-right">
          <p>&copy; {new Date().getFullYear()} Brand Spark Agency. All rights reserved.</p>
          <p className="mt-1">Performance Marketing for Interior Designers.</p>
        </div>
      </div>
    </footer>
  );
};