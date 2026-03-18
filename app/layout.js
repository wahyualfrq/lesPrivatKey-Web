import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#2563eb',
};

export const metadata = {
  title: 'Les Privat Ujanmas | Sahabat Pintar Key',
  description: 'Les privat SD SMP SMA di Ujanmas. Guru berpengalaman 10+ tahun. Maksimal 4 siswa. Daftar sekarang.',
  keywords: 'les privat Ujanmas, les matematika SMA, les calistung, les privat prabumulih, les privat palembang',
  authors: [{ name: 'Sahabat Pintar Key' }],
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://lesprivatkey.com',
  },
  openGraph: {
    title: 'Les Privat Ujanmas | Sahabat Pintar Key',
    description: 'Les privat SD SMP SMA di Ujanmas. Guru berpengalaman 10+ tahun. Daftar sekarang.',
    type: 'website',
    images: [{ url: '/image/poster.jpeg' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Les Privat Ujanmas | Sahabat Pintar Key',
    description: 'Les privat SD SMP SMA di Ujanmas. Guru berpengalaman 10+ tahun. Daftar sekarang.',
    images: ['/image/poster.jpeg'],
  },
  icons: {
    icon: '/image/logoKey.png',
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
