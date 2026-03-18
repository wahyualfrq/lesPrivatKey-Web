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
    <section id="program" className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16 px-4">
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
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm"
          >
            Pilihan Program <span className="text-primary-600">Terbaik</span>
          </motion.h2>
          <motion.p 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            Setiap jenjang memiliki kurikulum yang diriset khusus sesuai tingkat perkembangan siswa untuk hasil belajar maksimal.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-4 sm:px-0">
          {programs.map((p, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className={`relative p-8 rounded-[2.5rem] bg-white border-2 ${p.color} hover:border-primary-300 hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full`}
            >
              <div className={`w-14 h-14 ${p.iconBg} rounded-2xl flex items-center justify-center ${p.iconColor} mb-8 shadow-sm group-hover:scale-110 transition-transform`}>
                <p.icon size={28} />
              </div>
              
              <div className="mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-slate-400 block mb-1">{p.level}</span>
                <h3 className="text-xl font-black text-slate-900 leading-tight">{p.title}</h3>
              </div>

              <ul className="space-y-4 mb-8 flex-grow">
                {p.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-slate-600 font-medium">
                    <div className="mt-1 flex-shrink-0">
                        <Star size={14} className="text-primary-500 fill-primary-500" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <a 
                href={`https://wa.me/6285267703438?text=Halo Kak, saya berminat daftar program ${p.level}`} 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full py-4 text-center rounded-2xl bg-slate-50 border border-slate-100 text-slate-900 font-black text-xs uppercase tracking-widest hover:bg-primary-600 hover:text-white hover:border-primary-600 transition-all active:scale-95"
              >
                Cek Detail
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
