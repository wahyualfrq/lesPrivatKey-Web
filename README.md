# 🎓 Les Privat Sahabat Pintar Key - Landing Page

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)

Sebuah landing page modern, responsif, dan performant untuk layanan **Les Privat Sahabat Pintar Key**. Dibangun dengan fokus pada konversi pengguna (conversion-centric) dengan integrasi langsung ke WhatsApp.

## ✨ Fitur Utama

- 🚀 **Performa Tinggi**: Menggunakan Next.js App Router untuk loading yang cepat.
- 📱 **Mobile-First Design**: Dioptimalkan sepenuhnya untuk perangkat mobile dan desktop.
- 🎨 **Modern UI/UX**: Estetika premium dengan tema hijau yang segar, glassmorphism, dan animasi halus.
- 💬 **WhatsApp Integration**: Floating button dan CTA yang memudahkan calon pelanggan untuk mendaftar.
- 🔍 **SEO Optimized**: Struktur HTML semantik untuk visibilitas mesin pencari yang lebih baik.
- ⚡ **Framer Motion**: Animasi interaktif untuk pengalaman pengguna yang lebih hidup.

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Font**: [Inter](https://fonts.google.com/specimen/Inter)

## 📂 Struktur Proyek

```bash
├── app/              # Folder utama Next.js (App Router)
│   ├── layout.js     # Layout global dan metadata
│   ├── page.js       # Halaman utama (Landing Page)
│   └── globals.css   # Konfigurasi Tailwind & Style Global
├── components/       # Komponen UI yang reusable
│   ├── Navbar.js     # Navigasi responsif
│   ├── Icons.js      # Kumpulan icon SVG
│   └── ...           # Komponen pendukung lainnya
├── sections/         # Bagian-bagian besar dalam halaman
│   ├── Hero.js       # Bagian atas & header utama
│   ├── About.js      # Tentang Sahabat Pintar Key
│   ├── Programs.js   # Daftar program les (SD, SMP, SMA)
│   ├── Features.js   # Keunggulan layanan
│   └── ...           # Bagian lainnya (Testimonials, Area, dll)
└── public/           # Aset statis (Gambar, Logo, Favicon)
```

## 🚀 Cara Menjalankan Project

1. **Clone Repository**
   ```bash
   git clone https://github.com/wahyualfrq/lesPrivatKey-Web.git
   cd lesPrivatKey-Web
   ```

2. **Install Dependensi**
   ```bash
   npm install
   ```

3. **Jalankan Mode Development**
   ```bash
   npm run dev
   ```
   Buka [http://localhost:3000](http://localhost:3000) di browser Anda.

4. **Build untuk Produksi**
   ```bash
   npm run build
   npm start
   ```

## 📝 Konfigurasi

Untuk mengubah nomor WhatsApp tujuan, Anda dapat memperbarui link di komponen `WhatsAppFloating.js` atau bagian CTA di `ClosingCTA.js`.

---

Dibuat dengan ❤️ oleh [Wahyu Alfaruq](https://github.com/wahyualfrq)
