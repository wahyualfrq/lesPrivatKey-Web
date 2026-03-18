'use client';

import { motion } from 'framer-motion';
import { Award, Briefcase, GraduationCap, Star } from 'lucide-react';
import Image from 'next/image';

export default function About() {
  return (
    <section id="tentang" className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 md:flex-row-reverse">
        {/* Content */}
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-6 space-y-4"
          >
            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 leading-tight">
              Mengenal Sosok <span className="text-primary-600 underline underline-offset-[12px] decoration-primary-200">Pengajar</span> Kami
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Guru berkualitas adalah kunci keberhasilan belajar. Berbekal latar belakang pendidikan formal dan pengalaman praktis bertahun-tahun.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <GraduationCap size={28} />
              </div>
              <div className="text-left">
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Pendidikan Formal</h4>
                <p className="text-slate-500 leading-relaxed text-sm mt-1">Lulusan S1 Pendidikan Matematika Universitas PGRI Palembang.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <Briefcase size={28} />
              </div>
              <div className="text-left">
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Pengalaman Karir</h4>
                <p className="text-slate-500 leading-relaxed text-sm mt-1">Mengajar lebih dari 10 tahun di Bimbel Duta Prima Prabumulih dan Sempoa Palembang.</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-6 bg-white rounded-3xl shadow-lg border border-slate-100 hover:shadow-2xl transition-all group">
              <div className="bg-primary-100 p-3 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300">
                <Award size={28} />
              </div>
              <div className="text-left">
                <h4 className="font-black text-slate-900 text-lg uppercase tracking-tight">Dedikasi</h4>
                <p className="text-slate-500 leading-relaxed text-sm mt-1">Founder Les Privat Sahabat Pintar Key dan mendedikasikan waktu penuh untuk mengajar selama 5 tahun.</p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Profile Card */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: -50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full max-w-sm relative"
        >
          <div className="relative z-10 p-8 rounded-[3rem] bg-white shadow-[0_40px_100px_-20px_rgba(37,99,235,0.15)] border-8 border-white group overflow-hidden">
            {/* Background Texture Placeholder */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-primary-50 -z-10 opacity-30 group-hover:opacity-100 transition-opacity"></div>
            
            {/* Teacher Profile Image */}
            <div className="aspect-[4/5] bg-slate-200 rounded-2xl overflow-hidden relative group-hover:scale-[1.02] transition-transform duration-500">
                <Image 
                  src="/image/profile.jpeg" 
                  alt="Wahyuni Soleha, S.Pd - Founder & Pengajar Utama" 
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white p-2 rounded-xl shadow-lg transform rotate-6 border-2 border-white scale-110 z-10">
                    <Star size={24} fill="white" />
                </div>
            </div>
            
            <div className="mt-8 text-center sm:text-left space-y-2">
              <h3 className="text-2xl font-black text-slate-900 leading-tight">Wahyuni Soleha, S.Pd</h3>
              <p className="inline-block text-xs font-bold bg-primary-600 text-white px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg shadow-primary-500/20">Founder & Pengajar Utama</p>
              <div className="h-1 w-12 bg-primary-600 rounded-full mt-4 mx-auto sm:mx-0"></div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary-100 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-emerald-100 rounded-full blur-2xl opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
}
