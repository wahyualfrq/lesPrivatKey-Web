'use client';

import { motion } from 'framer-motion';
import { MapPin, Navigation, Info } from 'lucide-react';

export default function Area() {
  return (
    <section id="area" className="bg-slate-50 py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center gap-16 md:flex-row">
        {/* Contact Info */}
        <div className="flex-1 text-center md:text-left">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mb-10 space-y-6"
          >
            <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
              Kunjungi Tempat <span className="text-primary-600 underline underline-offset-8 decoration-primary-200">Belajar</span> Kami
            </h2>
            <p className="text-lg text-slate-600 leading-relaxed font-medium">
              Lokasi strategis dan nyaman untuk mendukung proses belajar mengajar yang kondusif.
            </p>
          </motion.div>

          <motion.div 
            className="mt-12 space-y-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <div className="flex items-start gap-4 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100/50 hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary-100 rounded-bl-[5rem] -mr-8 -mt-8 opacity-20 -z-0"></div>
              
              <div className="bg-primary-100 p-4 rounded-2xl group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 z-10">
                <MapPin size={32} />
              </div>
              <div className="text-left z-10">
                <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Alamat Lengkap</h4>
                <p className="text-slate-500 leading-relaxed text-base mt-2 font-medium">Dusun 6 Desa Ujanmas Baru</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-8 bg-white rounded-[2.5rem] shadow-xl border border-slate-100/50 hover:shadow-2xl transition-all group overflow-hidden relative">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-100 rounded-bl-[5rem] -mr-8 -mt-8 opacity-20 -z-0"></div>
              
              <div className="bg-emerald-100 p-4 rounded-2xl group-hover:bg-emerald-600 group-hover:text-white transition-colors duration-300 z-10">
                <Navigation size={32} />
              </div>
              <div className="text-left z-10">
                <h4 className="font-extrabold text-slate-900 text-xl tracking-tight">Cakupan Area</h4>
                <p className="text-slate-500 leading-relaxed text-base mt-2 font-medium">Melayani area Ujanmas dan sekitarnya.</p>
              </div>
            </div>
            

          </motion.div>
        </div>

        {/* Map Placeholder */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, x: 50 }}
          whileInView={{ opacity: 1, scale: 1, x: 0 }}
          viewport={{ once: true }}
          className="flex-1 w-full relative"
        >
          <div className="relative z-10 aspect-[16/10] sm:aspect-square rounded-[3rem] bg-slate-200 shadow-2xl overflow-hidden group border-8 border-white group-hover:shadow-[0_40px_100px_-20px_rgba(22,163,74,0.2)] transition-all">
            <iframe 
              src="https://maps.google.com/maps?q=-3.525389,103.780417&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              className="grayscale-[0.2] transition-all duration-500 hover:grayscale-0"
            ></iframe>
          </div>
          
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary-200/40 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-10 -left-10 w-48 h-48 bg-emerald-200/40 rounded-full blur-3xl opacity-60"></div>
        </motion.div>
      </div>
    </section>
  );
}
