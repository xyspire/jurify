'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, ArrowUpRight, Scale } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    // Call once to set initial state
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`flex items-center justify-between py-4 md:py-6 px-6 md:px-12 w-full fixed top-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className={`flex items-center gap-3 ${isScrolled ? 'text-[#0f172a]' : 'text-white'}`}>
        <Scale className="w-8 h-8" />
        <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">Jurify</span>
      </div>
      
      <div className={`hidden md:flex items-center gap-8 text-sm md:text-base font-medium transition-colors ${
        isScrolled ? 'text-slate-600' : 'text-white/90'
      }`}>
        <Link href="#about" className={`transition-colors ${isScrolled ? 'hover:text-[#0f172a]' : 'hover:text-white'}`}>About</Link>
        <Link href="#expertise" className={`transition-colors ${isScrolled ? 'hover:text-[#0f172a]' : 'hover:text-white'}`}>Expertise</Link>
        <Link href="#team" className={`transition-colors ${isScrolled ? 'hover:text-[#0f172a]' : 'hover:text-white'}`}>Our Team</Link>
        <Link href="#news" className={`transition-colors ${isScrolled ? 'hover:text-[#0f172a]' : 'hover:text-white'}`}>News & Insights</Link>
      </div>

      <div className="hidden md:flex">
        <Link href="#contact" className={`${
          isScrolled 
            ? 'bg-[#112a75] text-white hover:bg-[#0c1f56]' 
            : 'bg-white text-black hover:bg-gray-100'
        } px-6 py-3 rounded-sm font-semibold text-sm flex items-center gap-2 transition-colors`}>
          Contact Us
          <ArrowUpRight className="w-4 h-4" />
        </Link>
      </div>

      <button className={`md:hidden transition-opacity ${isScrolled ? 'text-[#0f172a] hover:opacity-80' : 'text-white hover:opacity-80'}`}>
        <Menu className="w-7 h-7" />
      </button>
    </nav>
  );
}
