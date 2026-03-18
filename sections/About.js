'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="tentang" className="bg-slate-50 py-10 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Headline - At Top for both Mobile & Desktop */}
        <div className="text-center md:text-left mb-8 md:mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <h2 className="text-[26px] md:text-5xl font-extrabold text-slate-900 leading-tight">
              Mengenal Sosok <span className="text-primary-600 underline underline-offset-[12px] decoration-primary-200">Pengajar</span> Kami
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium max-w-2xl md:max-w-none mx-auto md:mx-0">
              Guru berkualitas adalah kunci keberhasilan belajar. Berbekal latar belakang pendidikan formal dan pengalaman praktis bertahun-tahun.
            </p>
          </motion.div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          {/* Content (Cards) - Second on Mobile, Right on Desktop */}
          <div className="flex-1 w-full order-2 md:order-1">
            {/* MOBILE ONLY: PREMIUM ALTERNATING TIMELINE */}
            <div className="md:hidden relative py-12">
              {/* Central Vertical Line */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-[2px] bg-emerald-100 rounded-full"></div>

              <div className="space-y-10">
                {/* Pendidikan Formal (Kiri) */}
                <div className="relative flex justify-start w-full group">
                  <div className="w-[44%] text-right pr-5">
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-2 leading-tight">Pendidikan Formal</h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-medium">Lulusan S1 Pendidikan Matematika Universitas PGRI Palembang.</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-emerald-600 border-[3px] border-white shadow-md z-10"></div>
                </div>
                {/* Pengalaman Karir (Kanan) */}
                <div className="relative flex justify-end w-full group">
                  <div className="w-[44%] text-left pl-5">
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-2 leading-tight">Pengalaman Karir</h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-medium">Mengajar 10+ tahun di Bimbel Duta Prima & Sempoa Palembang.</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-emerald-600 border-[3px] border-white shadow-md z-10"></div>
                </div>
                {/* Dedikasi (Kiri) */}
                <div className="relative flex justify-start w-full group">
                  <div className="w-[44%] text-right pr-5">
                    <h4 className="font-black text-slate-900 text-xs uppercase tracking-wider mb-2 leading-tight">Dedikasi</h4>
                    <p className="text-slate-600 text-[11px] leading-relaxed font-medium">Founder & Pengajar Utama Les Privat Sahabat Pintar Key (5+ thn).</p>
                  </div>
                  <div className="absolute left-1/2 -translate-x-1/2 top-1 w-4 h-4 rounded-full bg-emerald-600 border-[3px] border-white shadow-md z-10"></div>
                </div>
              </div>
            </div>

            {/* DESKTOP ONLY: ORIGINAL CARDS */}
            <div className="hidden md:block transition-all space-y-8">
              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <GraduationCap size={28} />
                </div>
                <div className="text-left">
                  <h4 className="font-black text-slate-900 text-base md:text-lg uppercase tracking-tight">Pendidikan Formal</h4>
                  <p className="text-slate-500 leading-relaxed text-sm mt-1">Lulusan S1 Pendidikan Matematika Universitas PGRI Palembang.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Briefcase size={28} />
                </div>
                <div className="text-left">
                  <h4 className="font-black text-slate-900 text-base md:text-lg uppercase tracking-tight">Pengalaman Karir</h4>
                  <p className="text-slate-500 leading-relaxed text-sm mt-1">Mengajar lebih dari 10 tahun di Bimbel Duta Prima Prabumulih dan Sempoa Palembang.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 md:p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
                <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                  <Award size={28} />
                </div>
                <div className="text-left">
                  <h4 className="font-black text-slate-900 text-base md:text-lg uppercase tracking-tight">Dedikasi</h4>
                  <p className="text-slate-500 leading-relaxed text-sm mt-1">Founder Les Privat Sahabat Pintar Key dan mendedikasikan waktu penuh untuk mengajar selama 5 tahun.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Card (Image) - First on Mobile, Left on Desktop */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, x: -50 }}
            whileInView={{ opacity: 1, scale: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex-1 w-full max-w-sm relative order-1 md:order-2"
          >
            <div className="relative z-10 p-6 md:p-8 rounded-[2.5rem] md:rounded-[3rem] bg-white shadow-[0_40px_100px_-20px_rgba(37,99,235,0.15)] border-4 md:border-8 border-white group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-primary-50 -z-10 opacity-30 group-hover:opacity-100 transition-opacity"></div>
              
              <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                  <Image 
                    src="/image/profile.jpeg" 
                    alt="Wahyuni Soleha, S.Pd - Founder & Pengajar Utama" 
                    fill
                    sizes="(max-width: 768px) 100vw, 400px"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-yellow-400 text-white p-2 rounded-xl shadow-lg transform rotate-6 border-2 border-white scale-110 z-10">
                      <Star size={24} fill="white" />
                  </div>
              </div>
              
              <div className="mt-8 text-center md:text-left space-y-2">
                <h3 className="text-2xl font-black text-slate-900 leading-tight">Wahyuni Soleha, S.Pd</h3>
                <p className="inline-block text-xs font-bold bg-primary-600 text-white px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg shadow-primary-500/20">Founder & Pengajar Utama</p>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
