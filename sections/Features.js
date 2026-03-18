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
    <section className="bg-white py-20 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-extrabold mb-6 tracking-tight text-slate-900"
          >
            Mengapa Memilih <span className="text-primary-600">Sahabat Pintar Key</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto leading-relaxed text-lg"
          >
            Kami berkomitmen memberikan bimbingan yang tidak hanya membantu tugas sekolah, tapi mematangkan konsep dasar siswa.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {features.map((f, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group p-8 rounded-[2rem] bg-slate-50 border border-slate-100/50 hover:bg-white hover:shadow-2xl hover:shadow-primary-100 transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className={`w-14 h-14 ${f.color} rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform shadow-lg shadow-blue-500/10`}>
                <f.icon size={28} />
              </div>
              <h3 className="text-xl font-black text-slate-900 mb-3">{f.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium">{f.desc}</p>
              
              <div className="mt-6 flex items-center gap-2 text-primary-600 opacity-0 group-hover:opacity-100 transition-opacity">
                <CheckCircle2 size={16} />
                <span className="text-xs font-bold uppercase tracking-wider">Terjamin</span>
              </div>
            </motion.div>
          ))}
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="p-8 rounded-[2rem] bg-gradient-to-br from-primary-600 to-primary-800 text-white flex flex-col justify-center items-center text-center shadow-xl md:col-span-1 lg:col-span-1"
          >
              <Sparkles size={48} className="mb-4 text-yellow-300" />
              <h3 className="text-2xl font-black mb-2 leading-tight">Mulai Belajar Hari Ini</h3>
              <p className="text-green-100 text-sm mb-6 max-w-[200px] leading-snug">Dapatkan sesi percobaan dan konsultasi kurikulum gratis.</p>
              <a 
                href="https://wa.me/6285267703438" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full bg-white text-primary-700 py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors shadow-lg active:scale-95 text-sm"
              >
                Konsultasi Sekarang
              </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
