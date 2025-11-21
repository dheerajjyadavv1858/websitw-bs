import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${scrolled ? 'bg-white/80 backdrop-blur-md border-gray-200 py-3' : 'bg-transparent border-transparent py-6'}`}>
        <div className="max-w-[1000px] mx-auto px-6 md:px-12 flex justify-between items-center">
          <div className={`font-sans text-xl font-semibold tracking-tight transition-colors ${scrolled ? 'text-black' : 'text-white'}`}>
            Brand Spark.
          </div>
          
          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {NAV_LINKS.map((link) => (
              <a 
                key={link.label} 
                href={link.href}
                className={`text-[13px] font-medium transition-colors tracking-wide ${scrolled ? 'text-gray-600 hover:text-black' : 'text-gray-300 hover:text-white'}`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Toggle */}
          <button 
            onClick={() => setMobileOpen(true)} 
            className={`md:hidden ${scrolled ? 'text-black' : 'text-white'}`}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setMobileOpen(false)}
              className="absolute top-6 right-6 text-white"
            >
              <X size={24} />
            </button>
            <div className="flex flex-col space-y-8 text-center">
              {NAV_LINKS.map((link) => (
                <a 
                  key={link.label} 
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-sans font-medium text-white hover:text-gray-400 transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};