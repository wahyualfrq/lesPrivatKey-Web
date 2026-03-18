'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { WhatsAppIcon } from './Icons';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Home', href: '#' },
    { name: 'Program', href: '#program' },
    { name: 'Tentang', href: '#tentang' },
    { name: 'Prestasi', href: '#prestasi' },
    { name: 'Area', href: '#area' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 py-4 ${isScrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-primary-100 py-3' : 'bg-transparent py-5'}`}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-12 h-12 md:w-10 md:h-10 group-hover:scale-110 transition-transform">
            <Image 
              src="/image/logoKey.png" 
              alt="Logo Sahabat Pintar Key" 
              fill
              sizes="48px"
              className="object-contain"
            />
          </div>
          <span className={`text-lg md:text-xl font-black tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-slate-900'} drop-shadow-sm whitespace-nowrap`}>
            Sahabat <span className="text-primary-600">Pintar Key</span>
          </span>
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-10">
          {menuItems.map((item) => (
            <a 
              key={item.name} 
              href={item.href} 
              className="text-sm font-black uppercase tracking-widest text-slate-600 hover:text-primary-600 transition-colors relative group py-2"
            >
              {item.name}
              <span className="absolute bottom-0 left-0 w-0 h-1 bg-primary-600 rounded-full transition-all duration-500 group-hover:w-full"></span>
            </a>
          ))}
          <a 
            href="https://wa.me/6285267703438?text=Halo%20Bu%2C%20saya%20mau%20tanya%20untuk%20daftar%20les%20privat%20anak%20saya.%20Bisa%20dibantu%20info%20jadwal%20dan%20biayanya%3F" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="bg-primary-600 text-white px-6 py-3 rounded-full font-black text-xs uppercase tracking-widest hover:bg-primary-700 transition-all shadow-xl shadow-primary-500/20 hover:scale-105 active:scale-95 flex items-center gap-2 group border-2 border-primary-600"
          >
            Daftar Sekarang
            <WhatsAppIcon size={16} className="group-hover:rotate-12 transition-transform" />
          </a>
        </div>

        {/* Mobile Toggle */}
        <button 
          className={`md:hidden p-2 rounded-xl transition-colors ${isScrolled ? 'bg-primary-50 text-primary-600' : 'bg-white/50 text-slate-900 shadow-xl'}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="absolute top-full left-6 right-6 mt-4 p-8 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-2xl border border-primary-50 md:hidden flex flex-col gap-6 items-center"
          >
            {menuItems.map((item) => (
              <a 
                key={item.name} 
                href={item.href} 
                className="text-lg font-black uppercase tracking-widest text-slate-900 hover:text-primary-600 transition-colors py-2 border-b-2 border-transparent hover:border-primary-100 w-full text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <a 
              href="https://wa.me/6285267703438?text=Halo%20Bu%2C%20saya%20mau%20tanya%20untuk%20daftar%20les%20privat%20anak%20saya.%20Bisa%20dibantu%20info%20jadwal%20dan%20biayanya%3F" 
              className="w-full bg-primary-600 text-white py-5 rounded-3xl font-black uppercase tracking-widest text-center shadow-2xl shadow-primary-500/20 flex items-center justify-center gap-3 group"
              onClick={() => setMobileMenuOpen(false)}
            >
              Hubungi Kami
              <WhatsAppIcon size={20} className="group-hover:rotate-12 transition-transform" />
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
