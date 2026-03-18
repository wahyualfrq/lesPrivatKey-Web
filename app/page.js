import Navbar from '@/components/Navbar';
import Hero from '@/sections/Hero';
import Features from '@/sections/Features';
import About from '@/sections/About';
import Programs from '@/sections/Programs';
import RegisterSteps from '@/sections/RegisterSteps';
import Testimonials from '@/sections/Testimonials';
import HallOfFame from '@/sections/HallOfFame';
import Area from '@/sections/Area';
import ClosingCTA from '@/sections/ClosingCTA';
import Footer from '@/sections/Footer';
import WhatsAppFloating from '@/components/WhatsAppFloating';

export default function Home() {
  return (
    <main className="min-h-screen relative bg-slate-50 selection:bg-primary-100 selection:text-primary-700">
      <Navbar />
      
      {/* Sections Wrapper for spacing control */}
      <div className="flex flex-col">
        <Hero />
        <Features />
        <About />
        <Programs />
        <RegisterSteps />
        <Testimonials />
        <HallOfFame />
        <Area />
        <ClosingCTA />
      </div>

      <Footer />
      
      {/* Interactive Elements */}
      <WhatsAppFloating />
    </main>
  );
}
