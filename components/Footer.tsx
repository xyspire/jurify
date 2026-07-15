import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Facebook, Instagram, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative w-full overflow-hidden bg-[#071330] pt-16 md:pt-24 pb-0 px-6 md:px-12 text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <Image
          src="/bg.jpg"
          alt="Office Building"
          fill
          className="object-cover opacity-10"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#071330]/90 via-[#071330]/80 to-[#071330]/95"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-20">
        
        {/* Top Section */}
        <div className="flex flex-col lg:flex-row justify-between gap-12 lg:gap-20">
          
          {/* Left: Call to Action */}
          <div className="flex flex-col gap-8 max-w-lg">
            <h2 className="text-3xl md:text-4xl lg:text-[2.8rem] font-medium tracking-tight leading-[1.15]">
              Your legal peace of mind starts with a conversation.
            </h2>
            <button className="self-start border border-white/30 text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-white/10 transition-colors">
              Schedule A Consultation
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>

          {/* Right: Links */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:gap-12 lg:w-3/5">
            
            {/* Quick Links */}
            <div className="flex flex-col gap-5 md:gap-6">
              <h3 className="font-medium text-lg">Quick Links</h3>
              <ul className="flex flex-col gap-3 text-white/80 text-sm md:text-base">
                <li><Link href="#" className="hover:text-white transition-colors">Home</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">About Us</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Our Team</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">News & Insights</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Contact Us</Link></li>
              </ul>
            </div>

            {/* Practice Areas */}
            <div className="flex flex-col gap-5 md:gap-6">
              <h3 className="font-medium text-lg">Practice Areas</h3>
              <ul className="flex flex-col gap-3 text-white/80 text-sm md:text-base">
                <li><Link href="#" className="hover:text-white transition-colors">Corporate Law</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Family Law</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Criminal Defense</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Real Estate Law</Link></li>
                <li><Link href="#" className="hover:text-white transition-colors">Civil Litigation</Link></li>
              </ul>
            </div>

            {/* Legal & Socials */}
            <div className="flex flex-col gap-8 md:gap-10 col-span-2 md:col-span-1">
              
              <div className="flex flex-col gap-5 md:gap-6">
                <h3 className="font-medium text-lg">Legal</h3>
                <ul className="flex flex-col gap-3 text-white/80 text-sm md:text-base">
                  <li><Link href="#" className="hover:text-white transition-colors">Terms & Conditions</Link></li>
                  <li><Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link></li>
                </ul>
              </div>

              <div className="flex flex-col gap-5 md:gap-6">
                <h3 className="font-medium text-lg">Social Links</h3>
                <div className="flex items-center gap-3">
                  <a href="#" className="w-10 h-10 bg-white text-[#071330] flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <Facebook className="w-5 h-5 fill-current" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-[#071330] flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a href="#" className="w-10 h-10 bg-white text-[#071330] flex items-center justify-center hover:bg-slate-200 transition-colors">
                    <Linkedin className="w-5 h-5 fill-current" />
                  </a>
                </div>
              </div>

            </div>

          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-8 pt-8 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-white/60 text-sm">
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span>© 2026 Jurify. All rights reservedx</span>
            </div>
            <div className="flex flex-col md:flex-row gap-1 md:gap-2">
              <span>Crafted with care ✦</span>
              <span>by <a href="https://xyspire.co.uk" target="_blank" rel="noopener noreferrer" className="text-white hover:underline">Xyspire</a></span>
            </div>
          </div>

          <div className="w-full flex justify-center mt-2 md:mt-8 overflow-hidden h-[100px] md:h-[180px] lg:h-[260px]">
             <span className="text-[120px] md:text-[220px] lg:text-[340px] font-bold tracking-tighter leading-[0.8] text-white/[0.03] select-none uppercase">
               Jurify
             </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
