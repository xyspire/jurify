"use client";

import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';

export default function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  const yBackground = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const yContent = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);

  return (
    <section ref={containerRef} className="relative w-full min-h-screen bg-darker-bg flex flex-col justify-end px-6 md:px-12 pb-16 md:pb-24 pt-32 overflow-hidden">
      {/* Parallax Background */}
      <motion.div 
        className="absolute inset-[-10%] top-0 z-0"
        style={{ y: yBackground }}
      >
        <Image 
          src="/bg.jpg"
          alt="Hero Background"
          fill
          className="object-cover opacity-80"
          priority
          referrerPolicy="no-referrer"
        />
        {/* Subtle blue-grey tint matching reference — sky/buildings clearly visible at top */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10" />
      </motion.div>

      <motion.div 
        style={{ y: yContent }}
        className="w-full max-w-[1400px] mx-auto flex flex-col md:flex-row md:items-end justify-between gap-12 relative z-10"
      >
        
        {/* Left Column */}
        <div className="max-w-3xl">
          <div className="flex items-center gap-4 mb-6 md:mb-8">
            <div className="w-12 md:w-16 h-[1px] bg-white/60"></div>
            <span className="text-white/90 font-medium text-sm md:text-base tracking-wide">Trusted Legal Guidance</span>
          </div>
          
          <h1 className="text-[2.2rem] sm:text-[2.8rem] md:text-[3.2rem] lg:text-[3.8rem] leading-[1.1] font-bold text-white mb-6 md:mb-8 tracking-tight">
            Legal Expertise with<br />Modern Solutions
          </h1>
          
          <p className="text-white/80 text-base md:text-lg lg:text-xl max-w-lg leading-relaxed">
            We provide thoughtful legal guidance for individuals and businesses across a range of practice areas.
          </p>
        </div>

        {/* Right Column */}
        <div className="flex flex-col-reverse md:flex-col gap-6 md:gap-8 items-start md:items-end shrink-0 pb-1">
          {/* Avatars */}
          <div className="flex items-center gap-4">
            <div className="flex -space-x-3">
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-darker-bg bg-gray-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/p1/100/100" alt="Client 1" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-darker-bg bg-gray-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/p2/100/100" alt="Client 2" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
              <div className="w-12 h-12 md:w-14 md:h-14 rounded-full border-2 border-darker-bg bg-gray-800 relative overflow-hidden">
                <Image src="https://picsum.photos/seed/p3/100/100" alt="Client 3" fill className="object-cover" referrerPolicy="no-referrer" />
              </div>
            </div>
            <div className="text-white text-sm md:text-base">
              <span className="block text-white/80 font-medium">Trusted by</span>
              <span className="block font-bold">2,500 +Clients</span>
            </div>
          </div>

          {/* CTA Button */}
          <button className="bg-white text-black px-6 py-4 md:px-8 md:py-5 font-semibold text-base md:text-lg flex items-center justify-center gap-3 hover:bg-gray-100 transition-colors w-full md:w-auto">
            Book A Consultation
            <ArrowUpRight className="w-5 h-5 md:w-6 md:h-6" />
          </button>
        </div>
      </motion.div>
    </section>
  );
}
