'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { Award, Star, Sparkles, ChevronDown, ChevronUp } from 'lucide-react';

const successImages = [
  '/image/t2.jpeg',
  '/image/t3.jpeg',
  '/image/t4.jpeg',
  '/image/t5.jpeg',
  '/image/t6.jpeg',
  '/image/t7.jpeg',
  '/image/t8.jpeg',
  '/image/t9.jpeg',
];

export default function HallOfFame() {
  const [showAll, setShowAll] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Check initial width
    setIsDesktop(window.innerWidth >= 768);
    
    // Listen for resize
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Use 4 images as default for server-render to match mobile first
  const displayedImages = isDesktop ? successImages : (showAll ? successImages : successImages.slice(0, 4));

  return (
    <section id="prestasi" className="bg-slate-50 py-12 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm mb-4 md:mb-6"
          >
            <Award size={14} className="fill-yellow-600" />
            <span>Prestasi Siswa Kami</span>
            <Sparkles size={14} className="text-yellow-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-6xl font-black text-slate-900 mb-4 md:mb-6 drop-shadow-sm leading-tight"
          >
            Bangga Atas <span className="text-primary-600 underline underline-offset-[16px] decoration-primary-100">Pencapaian</span> Mereka
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-slate-600 max-w-3xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Berikut adalah bukti nyata semangat belajar dan keberhasilan siswa-siswi Sahabat Pintar Key yang berhasil meraih Juara Kelas dan prestasi membanggakan lainnya.
          </motion.p>
        </div>

        {/* Dynamic Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          <AnimatePresence>
            {displayedImages.map((src, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: (idx % 4) * 0.05, 
                  duration: 0.5,
                  type: "spring",
                  stiffness: 100 
                }}
                className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-lg border border-slate-100 hover:shadow-2xl hover:shadow-primary-100 transition-all duration-500 transform md:hover:-translate-y-2"
              >
                <Image 
                  src={src} 
                  alt={`Testimoni Juara Kelas ${idx + 2}`} 
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Overlay Decor */}
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
                   <div className="flex items-center gap-2 text-white">
                      <Star size={18} fill="currentColor" className="text-yellow-400" />
                      <span className="font-bold text-sm">Juara Kelas</span>
                   </div>
                </div>
                
                {/* Floating Badge */}
                <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-md rounded-xl flex items-center justify-center text-primary-600 shadow-lg transform rotate-6 border border-primary-50">
                   <Award size={20} />
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* MOBILE SHOW MORE/LESS LINK */}
        <div className="md:hidden mt-8 text-center px-6">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group flex flex-col items-center gap-2 mx-auto"
          >
            <span className="text-xs font-black uppercase tracking-[0.2em] text-slate-500 group-hover:text-emerald-600 transition-colors">
              {showAll ? 'Tampilkan Lebih Sedikit' : 'Lihat Selengkapnya'}
            </span>
            <div className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-slate-400 group-hover:text-emerald-600 group-hover:shadow-emerald-100 transition-all active:scale-90">
              {showAll ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
            </div>
          </button>
        </div>
        
        {/* Footer Note */}
        <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
        >
            <div className="inline-flex items-center gap-3 bg-white px-8 py-4 rounded-3xl shadow-xl border border-slate-100 text-slate-500 font-bold text-sm">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Gabung Sekarang & Jadilah Juara Berikutnya!
            </div>
        </motion.div>
      </div>
    </section>
  );
}
