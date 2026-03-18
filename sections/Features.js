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
    title: 'Fokus Pembelajaran',
    desc: 'Kurikulum disesuaikan dengan kebutuhan & target nilai masing-masing siswa.',
    icon: Target,
    color: 'bg-lime-600',
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

        <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8 relative z-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.05 }}
              className="group p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-white border border-slate-100 shadow-sm hover:shadow-xl hover:shadow-emerald-500/10 transition-all duration-300 transform md:hover:-translate-y-2 flex flex-col items-center md:items-start text-center md:text-left"
            >
              <div className={`w-10 h-10 md:w-14 md:h-14 ${f.color} rounded-xl md:rounded-2xl flex items-center justify-center text-white mb-4 md:mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-emerald-500/10`}>
                <f.icon size={20} className="md:w-7 md:h-7" />
              </div>
              <h3 className="text-sm md:text-xl font-black text-slate-900 mb-2 md:mb-3 leading-tight">{f.title}</h3>
              <p className="hidden md:block text-slate-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              
              {/* Simplified micro-feature for mobile */}
              <div className="flex md:hidden items-center gap-1 mt-auto pt-2">
                <CheckCircle2 size={10} className="text-emerald-500" />
                <span className="text-[8px] font-black uppercase tracking-widest text-emerald-600/60">Terpercaya</span>
              </div>

              {/* Desktop only hover detail */}
              <div className="hidden md:flex mt-6 items-center gap-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Layanan Terjamin</span>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-5 md:p-8 rounded-3xl md:rounded-[2.5rem] bg-gradient-to-br from-emerald-600 to-emerald-800 text-white flex flex-col justify-center items-center text-center shadow-xl md:col-span-1 lg:col-span-1 border border-emerald-500/20"
          >
              <Sparkles size={32} className="md:w-12 md:h-12 mb-3 md:mb-4 text-emerald-300" />
              <h3 className="text-sm md:text-2xl font-black mb-1 md:mb-2 leading-tight text-white">Mulai Belajar</h3>
              <p className="hidden md:block text-emerald-100 text-sm mb-6 max-w-[200px] leading-snug">Dapatkan sesi percobaan dan konsultasi gratis.</p>
              <p className="md:hidden text-emerald-100 text-[9px] mb-3 leading-tight">Sesi percobaan gratis.</p>
              <a 
                href="https://wa.me/6285267703438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-emerald-700 py-2.5 md:py-3 rounded-xl font-bold hover:bg-emerald-50 transition-colors shadow-lg active:scale-95 text-[10px] md:text-sm"
              >
                Hubungi Kami
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
