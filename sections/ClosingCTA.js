'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';

export default function ClosingCTA() {
  const waLink = "https://wa.me/6285267703438";
  
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-12 md:p-24 rounded-[4rem] bg-gradient-to-br from-primary-600 via-primary-700 to-emerald-900 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(22,163,74,0.4)]"
        >
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/20 rounded-full blur-3xl -ml-40 -mb-40"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-1 bg-white/30 rounded-full mb-12"></div>
                
                <h2 className="text-4xl md:text-7xl font-black mb-8 leading-[1.1] tracking-tight">
                    Siap Mencapai <br/> <span className="text-emerald-200">Prestasi</span> Impian?
                </h2>
                
                <p className="text-xl text-emerald-100 max-w-2xl mx-auto mb-12 font-medium leading-relaxed">
                    Jangan lewatkan kesempatan belajar eksklusif dengan kuota terbatas. Daftar sekarang dan lihat perkembangan anak Anda dalam 30 hari.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-12">
                    <a 
                      href={waLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-primary-700 px-12 py-5 rounded-full font-black text-lg transition-all shadow-2xl hover:bg-emerald-50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group"
                    >
                        Hubungi WhatsApp
                        <WhatsAppIcon size={24} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 w-full max-w-4xl border-t border-white/10 pt-12">
                     <div className="flex flex-col items-center">
                        <Star size={24} fill="currentColor" className="text-yellow-400 mb-2" />
                        <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Guru Berpengalaman</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <Star size={24} fill="currentColor" className="text-yellow-400 mb-2" />
                        <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Kurikulum Lengkap</p>
                     </div>
                     <div className="flex flex-col items-center">
                        <Star size={24} fill="currentColor" className="text-yellow-400 mb-2" />
                        <p className="text-xs font-black uppercase tracking-widest text-emerald-200">Hasil Nyata</p>
                     </div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
