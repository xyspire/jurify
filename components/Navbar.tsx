'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowUpRight, Scale } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'auto';
    return () => { document.body.style.overflow = 'auto'; };
  }, [isMenuOpen]);

  const navLinks = [
    { href: '#about', label: 'About' },
    { href: '#expertise', label: 'Expertise' },
    { href: '#team', label: 'Our Team' },
    { href: '#news', label: 'News & Insights' },
  ];

  return (
    <>
      <nav className={`flex items-center justify-between py-4 md:py-6 px-6 md:px-12 w-full fixed top-0 z-50 transition-all duration-300 ${
        isScrolled && !isMenuOpen ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        {/* Logo */}
        <div className={`flex items-center gap-3 transition-colors relative z-50 ${
          isMenuOpen ? 'text-white' : isScrolled ? 'text-dark-bg' : 'text-white'
        }`}>
          <Scale className="w-8 h-8" />
          <span className="text-xl md:text-2xl font-bold tracking-widest uppercase">Jurify</span>
        </div>
        
        {/* Desktop Nav Links */}
        <div className={`hidden md:flex items-center gap-8 text-sm md:text-base font-medium transition-colors ${
          isScrolled ? 'text-slate-600' : 'text-white/90'
        }`}>
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              className={`transition-colors ${isScrolled ? 'hover:text-dark-bg' : 'hover:text-white'}`}
            >
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex">
          <Link
            href="#contact"
            className={`${
              isScrolled
                ? 'bg-primary text-white hover:bg-primary-dark'
                : 'bg-white text-black hover:bg-gray-100'
            } px-6 py-3 font-semibold text-sm flex items-center gap-2 transition-colors`}
          >
            Contact Us
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`md:hidden relative z-50 transition-colors ${
            isMenuOpen ? 'text-white' : isScrolled ? 'text-dark-bg' : 'text-white'
          }`}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
        </button>
      </nav>

      {/* Mobile Menu Overlay — dark navy matching the reference */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-40 bg-darker-bg flex flex-col justify-start pt-24 px-8 pb-12 md:hidden"
          >
            {/* Nav Links — left-aligned, large text like reference */}
            <div className="flex flex-col gap-0 flex-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block text-white text-3xl font-medium py-5 border-b border-white/10 hover:text-white/70 transition-colors"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA at bottom */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="mt-8"
            >
              <Link
                href="#contact"
                onClick={() => setIsMenuOpen(false)}
                className="bg-white text-dark-bg px-8 py-4 font-semibold text-base flex items-center gap-2 hover:bg-gray-100 transition-colors w-full justify-center"
              >
                Contact Us
                <ArrowUpRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
