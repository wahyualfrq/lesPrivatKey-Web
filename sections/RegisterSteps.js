'use client';

import { useState, useEffect, useRef } from 'react';
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
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef(null);
  const isAutoScrolling = useRef(false);

  // Auto-slide logic
  useEffect(() => {
    const interval = setInterval(() => {
      isAutoScrolling.current = true;
      setActiveIndex((prev) => (prev + 1) % steps.length);
    }, 4500); 

    return () => clearInterval(interval);
  }, []);

  // Effect to move the scroll position when activeIndex changes (auto or dots tap)
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
        // After a delay, re-enable manual scroll tracking
        setTimeout(() => {
            isAutoScrolling.current = false;
        }, 700);
    }
  }, [activeIndex]);

  // Handle manual scroll sync (swipe)
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
        <div className="text-center mb-12 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[26px] md:text-5xl font-black text-slate-900 mb-4 md:mb-6 drop-shadow-sm"
          >
            4 Langkah Mudah <span className="text-primary-600 underline underline-offset-8 decoration-primary-200">Bergabung</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-slate-600 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-medium"
          >
            Proses pendaftaran cepat dan tidak ribet. Kurang dari 5 menit untuk memulai perubahan positif.
          </motion.p>
        </div>

        {/* MOBILE ONLY: AUTOMATIC LOOPING CAROUSEL */}
        <div className="md:hidden">
          <div 
            ref={scrollRef}
            onScroll={handleScroll}
            className="flex gap-4 overflow-x-auto snap-x snap-mandatory pb-6 px-5 no-scrollbar scroll-smooth"
          >
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="min-w-[80vw] snap-center snap-always relative p-6 bg-white rounded-2xl shadow-sm border border-slate-100 flex flex-col items-center text-center overflow-hidden"
              >
                {/* Step Number Badge */}
                <div className="absolute top-3 right-3 w-7 h-7 bg-slate-900/5 text-slate-400 rounded-lg flex items-center justify-center font-black text-[10px] z-20">
                  0{idx + 1}
                </div>

                <div className={`w-12 h-12 ${step.bg} rounded-xl flex items-center justify-center ${step.color} mb-4 shadow-sm border-2 border-white`}>
                  <step.icon size={22} />
                </div>
                
                <h3 className="text-sm font-bold text-slate-900 mb-2 leading-tight">{step.title}</h3>
                <p className="text-slate-500 text-[11px] leading-relaxed font-medium line-clamp-2">{step.desc}</p>
              </div>
            ))}
          </div>
          
          {/* PAGINATION DOTS */}
          <div className="flex items-center justify-center gap-2 mt-4">
            {steps.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-1.5 transition-all duration-300 rounded-full ${
                  i === activeIndex ? 'w-6 bg-emerald-600' : 'w-1.5 bg-slate-300'
                }`}
              />
            ))}
          </div>

          {/* Scroll Hint */}
          <div className="flex items-center justify-center gap-2 mt-4 opacity-40">
            <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest">Geser untuk melihat detail</p>
          </div>
        </div>

        {/* DESKTOP ONLY: ORIGINAL GRID */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-12 relative z-10">
          {/* Connector Line */}
          <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-emerald-200/50 via-emerald-100/50 to-emerald-200/50 -translate-y-1/2 hidden lg:block z-0"></div>
          
          {steps.map((step, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative z-10 flex flex-col items-center text-center group"
            >
              <div className={`w-20 h-20 ${step.bg} rounded-[2rem] flex items-center justify-center ${step.color} mb-8 shadow-xl border-4 border-white group-hover:scale-110 group-hover:bg-white transition-all transform group-hover:rotate-3`}>
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
