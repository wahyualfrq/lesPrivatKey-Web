"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Users, Clock, CheckCircle2 } from "lucide-react";

const Hero = () => {
  const waLink = "https://wa.me/6285267703438";

  return (
    <section className="relative min-h-[95vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-emerald-50 via-white to-white pt-24 pb-14 px-5 sm:px-10">
      
      {/* Background Blur */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-100/50 rounded-full blur-3xl -mr-32 -mt-32"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-100/50 rounded-full blur-3xl -ml-40 -mb-40"></div>

      <div className="max-w-7xl mx-auto w-full relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-16 text-center md:text-left">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1.03 }}
          transition={{ duration: 0.8 }}
          className="flex-1 w-full order-1 md:order-2"
        >
          <div className="relative w-full aspect-[3/2] sm:aspect-square md:aspect-square max-w-lg md:max-w-2xl mx-auto rounded-3xl md:rounded-[2.5rem] overflow-hidden shadow-2xl">

            <Image
              src="/image/p3.png"
              alt="Aktivitas belajar les privat"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover scale-105"
              priority
            />

            {/* Glass Badge */}
            <div className="absolute bottom-3 right-3 backdrop-blur-md bg-white/70 border border-white/40 shadow-md rounded-xl px-3 py-2 flex items-center gap-2">
              <Users size={14} className="text-emerald-600" />
              <p className="text-xs font-semibold text-gray-800">
                Maksimal 4 Siswa
              </p>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-3 right-5 w-10 h-10 bg-emerald-200 rounded-full blur-md opacity-70"></div>
            <div className="absolute bottom-6 -left-2 w-8 h-8 bg-blue-200 rounded-full blur-md opacity-60"></div>

            {/* Mini Badge */}
            <div className="absolute top-3 left-3 backdrop-blur-md bg-white/60 border border-white/30 rounded-full px-3 py-1 text-[10px] font-semibold text-gray-700 shadow-sm">
              10+ Tahun
            </div>
          </div>
        </motion.div>

        {/* TEXT */}
        <div className="flex-1 order-2">

          {/* BADGES */}
          <div className="flex flex-wrap justify-center md:justify-start gap-3 mb-6">
            <span className="flex items-center gap-2 bg-emerald-600 text-white px-3 py-1.5 rounded-full text-[11px] font-semibold shadow-sm">
              <Clock size={14} />
              10+ Tahun Pengalaman
            </span>
            <span className="flex items-center gap-2 bg-emerald-100 text-emerald-700 px-3 py-1.5 rounded-full text-[11px] font-semibold border border-emerald-200">
              <Users size={14} />
              Belajar Lebih Fokus
            </span>
          </div>

          {/* HEADLINE */}
          <h1 className="text-[1.6rem] md:text-5xl font-bold leading-tight text-slate-900 mb-4">
            Les Privat SD–SMA di Ujanmas <br />
            <span className="text-emerald-600">
              Belajar Lebih Fokus dan Terarah
            </span>
          </h1>

          {/* SUBTEXT */}
          <p className="text-[15px] md:text-lg text-gray-600 mb-8 leading-relaxed max-w-xl mx-auto md:mx-0">
            Dibimbing guru berpengalaman 10+ tahun dengan metode belajar personal dalam kelompok kecil.
          </p>

          {/* CTA */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <a
              href={waLink}
              target="_blank"
              className="w-full md:w-auto text-lg py-5 px-10 bg-gradient-to-r from-emerald-600 to-emerald-500 text-white font-bold rounded-2xl shadow-lg flex items-center justify-center gap-3 hover:scale-[1.03] active:scale-95 transition-all duration-300"
            >
              Daftar Sekarang
              <svg 
                width="22" 
                height="22" 
                viewBox="0 0 24 24" 
                fill="currentColor" 
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.395-4.417 9.826-9.78 9.83"/>
              </svg>
            </a>

            <p className="text-emerald-700/70 text-xs font-semibold flex items-center gap-2">
              <CheckCircle2 size={14} className="text-emerald-500" />
              Respon cepat via WhatsApp
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;