'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { ArrowRight, Star } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';

export default function ClosingCTA() {
  const waLink = "https://wa.me/6285267703438?text=Halo%20Bu%2C%20saya%20mau%20tanya%20untuk%20daftar%20les%20privat%20anak%20saya.%20Bisa%20dibantu%20info%20jadwal%20dan%20biayanya%3F";
  
  return (
    <section className="bg-white py-10 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-6 md:p-24 rounded-[2.5rem] md:rounded-[4rem] bg-slate-900 text-white text-center relative overflow-hidden shadow-[0_50px_100px_-30px_rgba(22,163,74,0.4)]"
        >
            {/* Premium Background with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image 
                  src="/image/p1.png" 
                  alt="Background decor" 
                  fill 
                  sizes="100vw"
                  className="object-cover opacity-20 filter grayscale"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/90 via-primary-700/95 to-slate-950/95"></div>
            </div>

            {/* Background animated elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -mr-48 -mt-48"></div>
            
            <div className="relative z-10 flex flex-col items-center">
                <div className="w-16 h-1 bg-white/20 rounded-full mb-8 md:mb-12"></div>
                
                <h2 className="text-[26px] md:text-7xl font-black mb-6 md:mb-8 leading-[1.2] tracking-tight">
                    Siap Mencapai <br/> <span className="text-emerald-200">Prestasi</span> Impian?
                </h2>
                
                <p className="text-sm md:text-xl text-emerald-100 max-w-2xl mx-auto mb-8 md:mb-12 font-medium leading-relaxed px-4">
                    Jangan lewatkan kesempatan belajar eksklusif dengan kuota terbatas. Daftar sekarang dan lihat perkembangan anak Anda dalam 30 hari.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-6 mb-10 md:mb-16">
                    <a 
                      href={waLink} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="bg-white text-primary-700 px-10 py-4 md:px-12 md:py-5 rounded-2xl md:rounded-full font-black text-base md:text-lg transition-all shadow-2xl hover:bg-emerald-50 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-3 group"
                    >
                        Hubungi WhatsApp
                        <WhatsAppIcon size={22} className="group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
                
                {/* COMPACTED FEATURES FOR MOBILE */}
                <div className="grid grid-cols-3 gap-2 md:gap-8 w-full max-w-4xl border-t border-white/10 pt-8 md:pt-12 px-2">
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/5"
                     >
                        <div className="flex gap-0.5 mb-1.5 text-yellow-500">
                          {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="text-yellow-400" />)}
                        </div>
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-emerald-100 leading-tight">Guru <br className="md:hidden" /> Profesional</p>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/5"
                     >
                        <div className="flex gap-0.5 mb-1.5 text-yellow-500">
                          {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="text-yellow-400" />)}
                        </div>
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-emerald-100 leading-tight">Kurikulum <br className="md:hidden" /> Lengkap</p>
                     </motion.div>
                     <motion.div 
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col items-center bg-white/5 p-3 rounded-2xl border border-white/5"
                     >
                        <div className="flex gap-0.5 mb-1.5 text-yellow-500">
                          {[1,2,3,4,5].map(i => <Star key={i} size={10} fill="currentColor" className="text-yellow-400" />)}
                        </div>
                        <p className="text-[10px] md:text-xs font-black uppercase tracking-[0.1em] text-emerald-100 leading-tight">Hasil <br className="md:hidden" /> Nyata</p>
                     </motion.div>
                </div>
            </div>
        </motion.div>
      </div>
    </section>
  );
}
