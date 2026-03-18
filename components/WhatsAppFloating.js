'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import { WhatsAppIcon } from './Icons';

export default function WhatsAppFloating() {
  const waLink = "https://wa.me/6285267703438";
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show only after scrolling down (about the size of hero section)
      setIsVisible(window.scrollY > 500);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group transition-opacity"
        >
          {/* Pulsing Ripple Effect */}
          <div className="relative">
            <motion.div 
                animate={{ scale: [1, 1.8], opacity: [0.6, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut" }}
                className="absolute inset-0 rounded-full bg-emerald-400"
            />
            <motion.div 
                animate={{ scale: [1, 1.4], opacity: [0.4, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeOut", delay: 0.5 }}
                className="absolute inset-0 rounded-full bg-emerald-300"
            />
            
            <motion.a
                href={waLink}
                target="_blank"
                rel="noopener noreferrer"
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="relative z-10 bg-emerald-500 text-white w-14 h-14 rounded-full shadow-[0_10px_30px_rgba(16,185,129,0.4)] hover:shadow-emerald-500/50 transition-all flex items-center justify-center border-2 border-white/80 active:scale-90"
            >
                <WhatsAppIcon size={26} className="fill-white drop-shadow-sm" />
            </motion.a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
