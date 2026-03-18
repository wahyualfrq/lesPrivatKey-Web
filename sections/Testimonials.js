'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isAutoScrolling = useRef(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      isAutoScrolling.current = true;
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000); 

    return () => clearInterval(interval);
  }, []);

  // Sync scroll position with activeIndex
  useEffect(() => {
    if (scrollRef.current && isAutoScrolling.current) {
        const container = scrollRef.current;
        const targetElement = container.children[activeIndex];
        if (targetElement) {
            const scrollOffset = targetElement.offsetLeft - (container.offsetWidth - targetElement.offsetWidth) / 2;
            container.scrollTo({
                left: scrollOffset,
                behavior: 'smooth'
            });
        }
        setTimeout(() => {
            isAutoScrolling.current = false;
        }, 700);
    }
  }, [activeIndex]);

  // Handle manual scroll sync
  const handleScroll = (e) => {
    if (isAutoScrolling.current) return;
    
    const container = e.target;
    const scrollLeft = container.scrollLeft;
    const centerPoint = scrollLeft + container.offsetWidth / 2;

    let closestIndex = 0;
    let minDistance = Infinity;

    Array.from(container.children).forEach((child, index) => {
        const childCenter = child.offsetLeft + child.offsetWidth / 2;
        const distance = Math.abs(childCenter - centerPoint);
        if (distance < minDistance) {
            minDistance = distance;
            closestIndex = index;
        }
    });

    if (closestIndex !== activeIndex) {
        setActiveIndex(closestIndex);
    }
  };
  return (
    <section className="bg-white py-12 md:py-24 px-6 overflow-hidden">
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
            className="text-[26px] md:text-5xl font-black text-slate-900 mb-4 md:mb-6 drop-shadow-sm"
          >
            Apa Kata <span className="text-primary-600 underline underline-offset-8 decoration-primary-200">Mereka</span>?
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Keberhasilan siswa adalah prioritas utama kami. Berikut adalah pengalaman mereka yang telah bergabung.
          </motion.p>
        </div>

        {/* MOBILE ONLY: PREMIUM AUTO-LOOPING CAROUSEL */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-8 px-5 no-scrollbar scroll-smooth"
          >
            {testimonials.map((t, idx) => (
              <div
                key={idx}
                className="min-w-[85vw] snap-center snap-always relative p-7 bg-white rounded-[2.5rem] shadow-xl border border-slate-100 flex flex-col overflow-hidden"
              >
                {/* Decorative Quote Icon */}
                <Quote size={40} className="text-emerald-50 opacity-20 absolute -top-2 -right-2" />
                
                {/* Star Rating */}
                <div className="flex gap-1 mb-5 text-yellow-500">
                  {[1,2,3,4,5].map(i => <Star key={i} size={14} fill="currentColor" />)}
                </div>
                
                <p className="text-slate-600 italic text-base leading-relaxed mb-8 flex-grow">
                  "{t.text}"
                </p>
                
                <div className="flex items-center gap-4 mt-auto">
                  <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-xl border-4 border-white shadow-md">
                      {t.name.charAt(0)}
                  </div>
                  <div className="text-left">
                    <h4 className="font-black text-slate-900 text-sm tracking-tight leading-tight">{t.name}</h4>
                    <p className="text-slate-400 text-[9px] font-black uppercase tracking-widest mt-0.5">{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* PAGINATION DOTS */}
          <div className="flex items-center justify-center gap-2 mt-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                   isAutoScrolling.current = true;
                   setActiveIndex(i);
                }}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === activeIndex ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-200'
                }`}
              />
            ))}
          </div>
        </div>

        {/* DESKTOP ONLY: ORIGINAL GRID */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              className="p-6 md:p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 shadow-xl hover:shadow-2xl hover:shadow-primary-100/50 transition-all duration-300 transform hover:-translate-y-1 flex flex-col relative"
            >
              <div className="flex gap-1 mb-6 text-yellow-500">
                {[1,2,3,4,5].map(i => <Star key={i} size={16} fill="currentColor" />)}
              </div>
              <Quote size={48} className="text-emerald-100 absolute top-8 right-8" />
              <p className="text-slate-600 italic text-lg leading-relaxed mb-8 flex-grow">
                "{t.text}"
              </p>
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-12 h-12 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 font-black text-xl border-4 border-white shadow-md">
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
