"use client";

import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { useInView } from 'react-intersection-observer';

const practiceAreas = [
  {
    title: 'Corporate & Business Law',
    description: 'Providing clear, strategic legal guidance to help businesses operate confidently and grow sustainably.',
    image: '/expertise1.webp',
  },
  {
    title: 'Family & Divorce',
    description: 'Providing thoughtful and balanced legal guidance through sensitive personal and family matters.',
    image: '/expertise2.webp',
  },
  {
    title: 'Property & Real Estate',
    description: 'Supporting property transactions and real estate matters through careful legal counsel.',
    image: '/expertise3.webp',
  }
];

function ExpertiseCard({ area, index }: { area: typeof practiceAreas[0], index: number }) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ y: -50, opacity: 0 }}
      animate={inView ? { y: 0, opacity: 1 } : { y: -50, opacity: 0 }}
      transition={{ duration: 0.65, delay: index * 0.12, ease: [0.16, 1, 0.3, 1] }}
      className="flex-none w-[85vw] sm:w-[60vw] md:w-auto snap-start group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 cursor-pointer"
    >
      <Image 
        src={area.image} 
        alt={area.title} 
        fill 
        className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
        referrerPolicy="no-referrer" 
      />
      {/* Same navy-blue gradient as hero — bottom to top */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10"></div>
      
      <div className="relative z-10 flex flex-col gap-3">
        <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">{area.title}</h3>
        <p className="text-white/75 text-sm md:text-base leading-relaxed line-clamp-2">{area.description}</p>
        <div className="flex items-center gap-2 text-white font-medium text-sm mt-2 md:mt-3 group-hover:gap-4 transition-all duration-300">
          Learn More 
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="w-full py-16 md:py-24 px-6 md:px-12 bg-light-bg">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <span className="text-dark-bg font-medium text-sm tracking-wide">Our Legal Expertise</span>
            </div>
            
            <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-dark-bg tracking-tight">
              Legal Support Across Key Areas Of Practice
            </h2>
          </div>
          
          <div className="max-w-md flex flex-col items-start lg:items-end gap-6 lg:gap-8">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed lg:text-left">
              We provide clear, practical legal guidance tailored to individuals, families, and businesses across a range of legal matters.
            </p>
            <button className="hidden md:flex bg-primary text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-sm md:text-base items-center justify-center gap-3 hover:bg-primary-dark transition-colors">
              View All Practice Areas
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Grid / Carousel Section */}
        <div className="flex md:grid overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 scroll-pl-6 md:scroll-pl-0 hide-scrollbar">
          {practiceAreas.map((area, index) => (
            <ExpertiseCard key={index} area={area} index={index} />
          ))}

          {/* Mobile View All Button Card */}
          <div className="flex-none w-[85vw] sm:w-[60vw] md:hidden snap-start flex items-center justify-center p-6 bg-slate-200 aspect-[3/4]">
            <button className="bg-primary text-white px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors w-full">
              View All Practice Areas
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
