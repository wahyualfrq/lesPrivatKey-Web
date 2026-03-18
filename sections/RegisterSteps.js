'use client';

import { motion } from 'framer-motion';
import { CalendarCheck, Wallet, Rocket } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';

const steps = [
  {
    title: 'Klik Tombol WhatsApp',
    desc: 'Tekan tombol daftar di website untuk langsung terhubung dengan pengajar.',
    icon: WhatsAppIcon,
    color: 'text-green-500',
    bg: 'bg-green-50',
  },
  {
    title: 'Konsultasi Kurikulum',
    desc: 'Diskusikan kebutuhan belajar anak, jadwal les, and target yang ingin dicapai.',
    icon: CalendarCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
  },
  {
    title: 'Konfirmasi Jadwal',
    desc: 'Lakukan konfirmasi jadwal bimbingan sesuai kesepakatan sesi belajar.',
    icon: Wallet,
    color: 'text-teal-500',
    bg: 'bg-teal-50',
  },
  {
    title: 'Mulai Belajar!',
    desc: 'Siswa mulai belajar secara eksklusif dan fokus meraih prestasi terbaik.',
    icon: Rocket,
    color: 'text-lime-600',
    bg: 'bg-lime-50',
  },
];

export default function RegisterSteps() {
  return (
    <section className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm"
          >
            4 Langkah Mudah <span className="text-primary-600 underline underline-offset-8 decoration-primary-200">Bergabung</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            Proses pendaftaran cepat dan tidak ribet. Kurang dari 5 menit untuk memulai perubahan positif.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 relative">
          {/* Connector Line (visible on desktop) */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-primary-200/50 via-emerald-200/50 to-primary-200/50 -translate-y-1/2 hidden lg:block z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 ${step.bg} rounded-[2rem] flex items-center justify-center ${step.color} mb-8 shadow-xl border-4 border-white group-hover:scale-110 group-hover:bg-white group-hover:text-primary-600 transition-all duration-300 transform group-hover:rotate-3`}>
                <step.icon size={36} />
                
                <div className="absolute -top-4 -right-4 w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-black text-lg border-4 border-white shadow-lg">
                    {idx + 1}
                </div>
              </div>
              
              <h3 className="text-xl font-black text-slate-900 mb-4">{step.title}</h3>
              <p className="text-slate-500 leading-relaxed text-sm font-medium px-4">{step.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
