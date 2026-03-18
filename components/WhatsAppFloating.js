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
            className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2 group"
        >
          {/* Tooltip on hover */}
          <span className="bg-white px-3 py-1.5 rounded-xl border border-slate-100 shadow-xl text-sm font-semibold text-slate-700 opacity-0 group-hover:opacity-100 transition-opacity mb-2">
            Hubungi Kami Sekarang
          </span>
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all transform hover:scale-110 active:scale-95 flex items-center justify-center border-4 border-white/50"
          >
            <WhatsAppIcon size={32} />
          </a>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
