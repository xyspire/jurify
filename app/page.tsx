import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Expertise from '@/components/Expertise';
import Process from '@/components/Process';
import Team from '@/components/Team';
import CTA from '@/components/CTA';
import Testimonials from '@/components/Testimonials';
import News from '@/components/News';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f8fafe]">
      <Navbar />
      <Hero />
      <About />
      <Expertise />
      <Process />
      <Team />
      <CTA />
      <Testimonials />
      <News />
      <Footer />
    </main>
  );
}
