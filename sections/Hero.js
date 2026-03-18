'use client';

import { Sparkles, Users } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  const waLink = "https://wa.me/6285267703438";

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-50 to-white pt-24 pb-12 px-6">
      {/* Abstract Background Shapes */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-primary-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-12">
        {/* Text Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-primary-100 text-primary-700 px-4 py-2 rounded-full font-bold text-xs uppercase tracking-widest shadow-sm mb-6"
          >
            <Sparkles size={14} className="text-yellow-500 fill-yellow-500" />
            <span>Terpercaya di Ujanmas & Sekitarnya</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 mb-6 drop-shadow-sm"
          >
            Wujudkan Prestasi Belajar Bersama <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-800">Sahabat Pintar Key</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-lg text-slate-600 mb-8 max-w-xl md:max-w-none leading-relaxed"
          >
            Bimbingan belajar eksklusif dengan guru berpengalaman 10+ tahun. Fokus pada pemahaman anak dengan kuota terbatas hanya 4 siswa per sesi.
          </motion.p>
          
          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex flex-col sm:flex-row gap-4 mb-8 justify-center md:justify-start"
          >
            <a href={waLink} target="_blank" rel="noopener noreferrer" className="btn-primary group">
              Daftar Sekarang
              <WhatsAppIcon className="transition-transform group-hover:translate-x-1" size={20} />
            </a>
            
            <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm self-center sm:self-auto">
                <div className="bg-primary-50 p-2 rounded-lg">
                    <Users size={20} className="text-primary-600" />
                </div>
                <div className="text-left text-sm">
                    <p className="font-bold text-slate-900">Maksimal 4 Siswa</p>
                    <p className="text-slate-500 text-xs text-nowrap">Belajar Lebih Fokus</p>
                </div>
            </div>
          </motion.div>
        </div>

        {/* Visual Element Placeholder */}
        <motion.div
          initial={{ opacity: 0, x: 50, scale: 0.9 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex-1 relative"
        >
          <div className="relative w-full max-w-lg mx-auto aspect-square rounded-[2rem] sm:rounded-[3rem] bg-gradient-to-tr from-primary-500 to-primary-300 shadow-2xl overflow-hidden group">
            <div className="absolute inset-2 border-2 border-white/30 rounded-[1.5rem] sm:rounded-[2.5rem]"></div>
            
            {/* Hero Image */}
            <div className="relative w-full h-full">
                <Image 
                  src="/image/p1.png" 
                  alt="Belajar Seru dengan Sahabat Pintar Key" 
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  priority
                />
            </div>
            
            {/* Stats Overlays */}
            <div className="absolute bottom-6 left-6 block bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20 animate-bounce transition-all duration-1000">
                <p className="text-primary-600 font-black text-2xl uppercase">10+</p>
                <p className="text-slate-600 text-[10px] font-bold">Thn Pengalaman</p>
            </div>

            <div className="absolute top-6 right-6 block bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/20">
                <div className="flex gap-1 text-yellow-500">
                    {[1,2,3,4,5].map(i => <Sparkles key={i} size={12} fill="currentColor" />)}
                </div>
                <p className="text-slate-900 text-xs font-bold mt-1 leading-tight">Guru Profesional<br/>Bersertifikasi S.Pd</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
