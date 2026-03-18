'use client';

import { 
  Users, 
  GraduationCap, 
  Target, 
  Layers, 
  Clock, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Pengalaman 10+ Tahun',
    desc: 'Mengajar ribuan siswa di berbagai jenjang sejak 2014.',
    icon: Clock,
    color: 'bg-emerald-500',
  },
  {
    title: 'Lulusan Pendidikan Matematika',
    desc: 'Bukan sekadar mengajar, tapi mendidik dengan metode tepat.',
    icon: GraduationCap,
    color: 'bg-green-500',
  },
  {
    title: 'Maksimal 4 Siswa',
    desc: 'Satu kelas terbatas untuk menjamin fokus dan pemahaman materi.',
    icon: Users,
    color: 'bg-teal-500',
  },
  {
    title: 'Semua Jenjang Tersedia',
    desc: 'Program lengkap mulai dari Calistung TK hingga Matematika SMA.',
    icon: Layers,
    color: 'bg-green-600',
  },
];

export default function Features() {
  return (
    <section className="bg-white py-10 md:py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-8 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] md:text-5xl font-extrabold mb-4 md:mb-6 tracking-tight text-slate-900"
          >
            Mengapa Memilih <span className="text-primary-600">Sahabat Pintar Key</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-base md:text-lg"
          >
            Kami berkomitmen memberikan bimbingan yang tidak hanya membantu tugas sekolah, tapi mematangkan konsep dasar siswa.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 relative z-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group relative p-5 md:p-10 rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-2xl hover:shadow-emerald-500/10 transition-all duration-500 transform lg:hover:-translate-y-3 flex flex-col items-center lg:items-start text-center lg:text-left overflow-hidden"
            >
              {/* Decorative Background Accent */}
              <div className={`absolute -top-10 -right-10 w-32 h-32 ${f.color} opacity-[0.03] rounded-full group-hover:scale-150 transition-transform duration-700 animate-pulse`}></div>
              <div className={`absolute -bottom-10 -left-10 w-24 h-24 ${f.color} opacity-[0.02] rounded-full group-hover:scale-125 transition-transform duration-700`}></div>

              {/* Number Badge (Desktop Only) */}
              <div className="hidden lg:block absolute top-8 right-8 text-4xl font-black text-slate-50 opacity-[0.05] group-hover:opacity-10 transition-opacity">
                0{idx + 1}
              </div>

              {/* Icon Container with Translucent Effect */}
              <div className="relative mb-6 md:mb-8">
                <div className={`absolute inset-0 ${f.color} blur-xl opacity-20 group-hover:opacity-40 transition-opacity`}></div>
                <div className={`relative w-12 h-12 md:w-16 md:h-16 ${f.color} rounded-2xl flex items-center justify-center text-white shadow-lg shadow-emerald-500/10 group-hover:rotate-6 transition-transform`}>
                  <f.icon size={28} className="md:w-8 md:h-8" />
                </div>
              </div>

              <h3 className="text-sm md:text-xl font-black text-slate-900 mb-3 md:mb-4 leading-tight group-hover:text-emerald-700 transition-colors">{f.title}</h3>
              <p className="hidden lg:block text-slate-500 leading-relaxed text-sm font-medium mb-6">{f.desc}</p>
              
              {/* Simplified micro-feature for mobile */}
              <div className="flex md:hidden lg:hidden items-center gap-1 mt-auto pt-2">
                <CheckCircle2 size={10} className="text-emerald-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600/60">Terpercaya</span>
              </div>

              {/* Desktop Details */}
              <div className="hidden lg:flex mt-auto items-center gap-2 py-1 px-3 bg-emerald-50 rounded-full text-emerald-600 opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0">
                <CheckCircle2 size={14} />
                <span className="text-[10px] font-black uppercase tracking-widest">Keunggulan Inti</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
