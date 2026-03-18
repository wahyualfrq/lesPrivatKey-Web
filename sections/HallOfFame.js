'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Award, Star, Sparkles } from 'lucide-react';

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
  return (
    <section id="prestasi" className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-yellow-100 text-yellow-700 px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest shadow-sm mb-6"
          >
            <Award size={14} className="fill-yellow-600" />
            <span>Hall of Fame - Prestasi Siswa</span>
            <Sparkles size={14} className="text-yellow-500" />
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-6xl font-black text-slate-900 mb-6 drop-shadow-sm leading-tight"
          >
            Bangga Atas <span className="text-primary-600 underline underline-offset-[16px] decoration-primary-100">Pencapaian</span> Mereka
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed font-medium"
          >
            Berikut adalah bukti nyata semangat belajar dan keberhasilan siswa-siswi Sahabat Pintar Key yang berhasil meraih Juara Kelas dan prestasi membanggakan lainnya.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {successImages.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                delay: idx * 0.1, 
                duration: 0.6,
                type: "spring",
                stiffness: 100 
              }}
              className="group relative aspect-[3/4] rounded-3xl overflow-hidden bg-white shadow-lg border-4 border-white hover:shadow-2xl hover:shadow-primary-200 transition-all duration-500 transform hover:-translate-y-2"
            >
              <Image 
                src={src} 
                alt={`Testimoni Juara Kelas ${idx + 2}`} 
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
              />
              
              {/* Overlay Decor */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-6">
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
