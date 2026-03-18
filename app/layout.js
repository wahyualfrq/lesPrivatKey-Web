import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata = {
  title: 'Les Privat Ujanmas | Sahabat Pintar Key',
  description: 'Les privat SD SMP SMA di Ujanmas. Guru berpengalaman 10+ tahun. Maksimal 4 siswa. Daftar sekarang.',
  keywords: 'les privat Ujanmas, les matematika SMA, les calistung, les privat prabumulih, les privat palembang',
  viewport: 'width=device-width, initial-scale=1, maximum-scale=5',
  themeColor: '#2563eb',
  openGraph: {
    title: 'Les Privat Ujanmas | Sahabat Pintar Key',
    description: 'Les privat SD SMP SMA di Ujanmas. Guru berpengalaman 10+ tahun. Daftar sekarang.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className="scroll-smooth">
      <body className={`${inter.variable} font-sans bg-slate-50 text-slate-900 antialiased overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
