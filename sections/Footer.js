'use client';

import { MapPin, Phone, Facebook, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-24 pb-12 px-6 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row flex-wrap gap-12 lg:gap-24">
        {/* Brand Info */}
        <div className="flex-1 space-y-6">
          <div className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 bg-white p-2.5 rounded-2xl transition-colors duration-300 shadow-xl shadow-primary-500/10">
              <Image 
                src="/image/logoKey.png" 
                alt="Logo Sahabat Pintar Key" 
                fill
                className="object-contain p-2 transition-all"
              />
            </div>
            <h2 className="text-2xl text-white font-black tracking-tighter leading-none">Sahabat Pintar <span className="text-primary-400 block sm:inline">Key</span></h2>
          </div>
          <p className="text-slate-400 text-base leading-relaxed max-w-sm">
            Bimbingan belajar eksklusif yang menemani langkah anak Anda meraih impian dan masa depan cemerlang melalui pemahaman materi yang mendalam.
          </p>
          <div className="flex gap-4">
            <a href="https://wa.me/6285267703438" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-primary-600 transition-all border border-slate-700/50 hover:border-primary-500 active:scale-95 group">
                <WhatsAppIcon size={20} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/share/1HSmxtpmJf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-slate-800 rounded-xl flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-700/50 hover:border-blue-500 active:scale-95 group">
                <Facebook size={20} className="group-hover:scale-110 transition-transform" />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div className="flex-1 space-y-8 min-w-[200px]">
          <h4 className="text-lg font-black uppercase tracking-widest text-primary-400">Navigasi Cepat</h4>
          <ul className="space-y-4">
            <li>
                <a href="#tentang" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                    Tentang Pengajar
                </a>
            </li>
            <li>
                <a href="#program" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                    Program Belajar
                </a>
            </li>
            <li>
                <a href="#area" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group">
                    <ChevronRight size={14} className="text-primary-600 group-hover:translate-x-1 transition-transform" />
                    Lokasi Kami
                </a>
            </li>
          </ul>
        </div>

        {/* Contact info directly */}
        <div className="flex-1 space-y-8 min-w-[250px]">
          <h4 className="text-lg font-black uppercase tracking-widest text-primary-400">Hubungi Kami</h4>
          <ul className="space-y-6">
            <li className="flex gap-4 items-start group">
                <div className="bg-slate-800 p-3 rounded-2xl group-hover:bg-primary-600 transition-colors duration-300">
                    <Phone size={20} />
                </div>
                <div className="text-slate-400">
                    <p className="text-xs font-black uppercase tracking-widest mb-1 group-hover:text-primary-400 transition-colors">WhatsApp & Telepon</p>
                    <p className="text-white font-bold text-lg">0852-6770-3438</p>
                </div>
            </li>
            <li className="flex gap-4 items-start group">
                <div className="bg-slate-800 p-3 rounded-2xl group-hover:bg-primary-600 transition-colors duration-300">
                    <MapPin size={20} />
                </div>
                <div className="text-slate-400">
                    <p className="text-xs font-black uppercase tracking-widest mb-1 group-hover:text-primary-400 transition-colors">Workshop Site</p>
                    <p className="text-white font-bold text-lg leading-snug">Dusun 6 Desa Ujanmas Baru</p>
                </div>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-24 pt-8 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-sm font-medium">
          &copy; {currentYear} Sahabat Pintar Key.
        </p>
      </div>
    </footer>
  );
}
