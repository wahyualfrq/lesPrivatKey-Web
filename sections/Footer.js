'use client';

import { MapPin, Phone, Facebook, ChevronRight } from 'lucide-react';
import { WhatsAppIcon } from '@/components/Icons';
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-slate-900 pt-16 pb-12 md:pt-24 md:pb-12 px-6 text-white overflow-hidden relative">
      {/* Decorative Circles */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-primary-600/10 rounded-full blur-3xl -mr-40 -mt-40"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-600/10 rounded-full blur-3xl -ml-32 -mb-32"></div>

      <div className="max-w-7xl mx-auto relative z-10 flex flex-col md:flex-row flex-wrap gap-12 lg:gap-24">
        {/* Brand Info */}
        <div className="flex-1 space-y-6 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center gap-4 group">
            <div className="relative w-20 h-20 transition-all duration-500 group-hover:rotate-6">
              <Image 
                src="/image/logoKey.png" 
                alt="Logo Sahabat Pintar Key" 
                fill
                sizes="80px"
                className="object-contain"
              />
            </div>
            <div className="space-y-1">
              <h2 className="text-2xl text-white font-black tracking-tighter leading-none">Sahabat Pintar <span className="text-emerald-400">Key</span></h2>
            </div>
          </div>
          <p className="text-slate-400 text-sm md:text-base leading-relaxed max-w-sm mx-auto md:mx-0">
            Bimbingan belajar eksklusif yang menemani langkah anak Anda meraih impian dan masa depan cemerlang melalui pemahaman materi mendalam.
          </p>
          <div className="flex justify-center md:justify-start gap-4">
            <a href="https://wa.me/6285267703438" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-emerald-600 transition-all border border-slate-700/50 hover:border-emerald-500 active:scale-95 group">
                <WhatsAppIcon size={22} className="group-hover:scale-110 transition-transform" />
            </a>
            <a href="https://www.facebook.com/share/1HSmxtpmJf/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-slate-800/50 backdrop-blur-sm rounded-2xl flex items-center justify-center hover:bg-blue-600 transition-all border border-slate-700/50 hover:border-blue-500 active:scale-95 group">
                <Facebook size={22} className="group-hover:scale-110 transition-transform text-white" />
            </a>
          </div>
        </div>

        {/* COMBINED GRID FOR MOBILE (Quick Links + Contact) */}
        <div className="flex-[2] grid grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-10 md:gap-16">
          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400 border-b border-emerald-400/20 pb-4">Navigasi</h4>
            <ul className="space-y-4">
              <li>
                  <a href="#program" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-emerald-600 group-hover:w-3 transition-all"></div>
                      Program
                  </a>
              </li>
              <li>
                  <a href="#tentang" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-emerald-600 group-hover:w-3 transition-all"></div>
                      Tentang
                  </a>
              </li>
              <li>
                  <a href="#prestasi" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-emerald-600 group-hover:w-3 transition-all"></div>
                      Prestasi
                  </a>
              </li>
              <li>
                  <a href="#area" className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors group text-sm font-medium">
                      <div className="w-1 h-1 rounded-full bg-emerald-600 group-hover:w-3 transition-all"></div>
                      Area
                  </a>
              </li>
            </ul>
          </div>

          {/* Contact info directly */}
          <div className="space-y-6">
            <h4 className="text-sm font-black uppercase tracking-[0.2em] text-emerald-400 border-b border-emerald-400/20 pb-4">Hubungi Kami</h4>
            <ul className="space-y-6">
              <li className="flex flex-col gap-2 group">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-emerald-600 transition-all text-white">
                        <Phone size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">WhatsApp</span>
                  </div>
                  <p className="text-white font-bold text-sm group-hover:text-emerald-400 transition-colors">0852-6770-3438</p>
              </li>
              <li className="flex flex-col gap-2 group">
                  <div className="flex items-center gap-3">
                    <div className="bg-slate-800 p-2 rounded-lg group-hover:bg-emerald-600 transition-all text-white">
                        <MapPin size={14} />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest text-slate-500">Lokasi</span>
                  </div>
                  <p className="text-white font-bold text-sm leading-snug group-hover:text-emerald-400 transition-colors">Ujanmas Baru, Sumsel</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800/50 flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-widest">
          &copy; {currentYear} Sahabat Pintar Key.
        </p>
      </div>
    </footer>
  );
}
