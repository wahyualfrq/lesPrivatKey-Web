'use client';

import { motion } from 'framer-motion';
import { BookOpen, Calculator, Pencil, Star, School } from 'lucide-react';

const programs = [
  {
    level: 'TK (Taman Kanak-Kanak)',
    title: 'Program Calistung',
    items: ['Membaca (Phonics)', 'Menulis Huruf & Angka', 'Berhitung Dasar'],
    icon: Pencil,
    color: 'border-green-100',
    iconBg: 'bg-green-100',
    iconColor: 'text-green-600',
  },
  {
    level: 'SD (Sekolah Dasar)',
    title: 'Kelas 1–6 (Semua Pelajaran)',
    items: ['Bimbingan PR & Tugas', 'Persiapan Ujian Sekolah', 'Pemantapan Materi Dasar'],
    icon: BookOpen,
    color: 'border-emerald-100',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
  {
    level: 'SMP (Sekolah Menengah Pertama)',
    title: 'Kelas 7–9 (Semua Pelajaran)',
    items: ['Fokus IPA & Matematika', 'Strategi Belajar Efektif', 'Persiapan Masuk SMA'],
    icon: School,
    color: 'border-teal-100',
    iconBg: 'bg-teal-100',
    iconColor: 'text-teal-600',
  },
  {
    level: 'SMA (Sekolah Menengah Atas)',
    title: 'Fokus Matematika',
    items: ['Aljabar & Kalkulus', 'Trigonometri & Statistik', 'Pemantapan Materi SMA'],
    icon: Calculator,
    color: 'border-lime-100',
    iconBg: 'bg-lime-100',
    iconColor: 'text-lime-600',
  },
];

export default function Programs() {
  return (
    <section id="program" className="bg-white py-10 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16 px-4">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-primary-100 text-primary-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm mb-6"
          >
            Kurikulum Terstruktur
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] md:text-5xl font-black text-slate-900 mb-4 md:mb-6 drop-shadow-sm"
          >
            Pilihan Program <span className="text-primary-600">Terbaik</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Setiap jenjang memiliki kurikulum yang diriset khusus sesuai tingkat perkembangan siswa untuk hasil belajar maksimal.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-8 px-4 sm:px-0 relative z-10">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05, duration: 0.5 }}
              className={`relative p-4 md:p-8 rounded-[1.75rem] md:rounded-[2.5rem] bg-white border-2 ${p.color} hover:border-emerald-300 hover:shadow-2xl hover:shadow-emerald-100/50 transition-all duration-300 transform md:hover:-translate-y-2 flex flex-col h-full items-center md:items-start text-center md:text-left shadow-sm`}
            >
              {/* Icon Container - Smaller on Mobile */}
              <div className={`w-10 h-10 md:w-14 md:h-14 ${p.iconBg} rounded-xl md:rounded-2xl flex items-center justify-center ${p.iconColor} mb-4 md:mb-8 shadow-inner group-hover:scale-110 transition-transform`}>
                <p.icon size={20} className="md:w-7 md:h-7" />
              </div>
              
              <div className="mb-3 md:mb-5">
                <span className="text-[10px] md:text-xs font-black uppercase tracking-[0.15em] text-slate-900 block mb-2">{p.level}</span>
                <h3 className="text-sm md:text-xl font-extrabold text-slate-800 leading-tight h-auto md:h-[3rem] line-clamp-2">{p.title}</h3>
              </div>

              {/* List Items - Hidden on Mobile to save space */}
              <ul className="hidden md:block space-y-4 mb-8 flex-grow">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                    <div className="mt-1 flex-shrink-0">
                        <Star size={14} className="text-emerald-500 fill-emerald-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              {/* Micro feature for mobile complexity */}
              <div className="flex md:hidden items-center gap-1 mb-3 text-[8px] font-black text-emerald-600/80 uppercase tracking-widest bg-emerald-50 px-2 py-0.5 rounded-full">
                <Star size={8} fill="currentColor" />
                <span>Terbaik</span>
              </div>

              <a 
                href={`https://wa.me/6285267703438?text=Halo Kak, saya berminat daftar program ${p.level}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-2.5 md:py-4 text-center rounded-xl md:rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 font-black text-[9px] md:text-xs uppercase tracking-widest hover:bg-emerald-600 hover:text-white hover:border-emerald-600 transition-all active:scale-95 mt-auto"
              >
                Detail
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
