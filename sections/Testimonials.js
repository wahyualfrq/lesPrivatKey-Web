'use client';

import { motion } from 'framer-motion';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Penderizal, S.Pd, MM',
    role: 'Kepala Sekolah SMAN 1 Ujanmas & Wali Murid',
    text: 'Metode pembelajarannya sangat efektif. Sebagai pendidik, saya melihat progres yang signifikan pada anak saya dalam memahami konsep materi secara mendalam.',
    rating: 5,
  },
  {
    name: 'Aiptu Lukman',
    role: 'Anggota Polri & Wali Murid',
    text: 'Sangat terbantu dengan adanya les privat ini. Disiplin belajarnya bagus dan guru sangat komunikatif dalam melaporkan perkembangan anak kami.',
    rating: 5,
  },
  {
    name: 'Ibu Widya',
    role: 'Wali Murid',
    text: 'Anak saya sekarang jauh lebih percaya diri saat menghadapi ujian. Materinya disampaikan dengan cara yang sangat menyenangkan dan mudah diserap.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="bg-white py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="inline-block bg-yellow-100 text-yellow-700 px-4 py-1.5 rounded-full text-xs font-black uppercase tracking-widest shadow-sm mb-6"
          >
            Kisah Sukses Siswa
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-black text-slate-900 mb-6 drop-shadow-sm"
          >
            Apa Kata <span className="text-primary-600 underline underline-offset-8 decoration-primary-200">Mereka</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-lg leading-relaxed font-medium"
          >
            Keberhasilan siswa adalah prioritas utama kami. Berikut adalah pengalaman mereka yang telah bergabung.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative"
            >
              {/* Star Rating */}
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              
              <Quote size={48} className="text-primary-100 absolute top-8 right-8" />
              
              <p className="text-slate-600 italic text-lg leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>
              
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center text-primary-600 font-black text-xl border-4 border-white shadow-md">
                    {t.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-black text-slate-900 tracking-tight">{t.name}</h4>
                  <p className="text-slate-400 text-[10px] font-black uppercase tracking-widest">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
