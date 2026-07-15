import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

const practiceAreas = [
  {
    title: 'Corporate & Business Law',
    description: 'Providing clear, strategic legal guidance to help businesses operate confidently,...',
    image: '/expertise1.webp',
  },
  {
    title: 'Family & Divorce',
    description: 'Providing thoughtful and balanced legal guidance through sensitive personal...',
    image: '/expertise2.webp',
  },
  {
    title: 'Property & Real Estate',
    description: 'Supporting property transactions and real estate matters through careful leg...',
    image: '/expertise3.webp',
  }
];

export default function Expertise() {
  return (
    <section id="expertise" className="w-full py-16 md:py-24 px-6 md:px-12 bg-[#f8fafe]">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <span className="text-[#0f172a] font-medium text-sm tracking-wide">Our Legal Expertise</span>
            </div>
            
            <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-[#0f172a] tracking-tight">
              Legal Support Across Key Areas Of Practice
            </h2>
          </div>
          
          <div className="max-w-md flex flex-col items-start lg:items-end gap-6 lg:gap-8">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed lg:text-left">
              We provide clear, practical legal guidance tailored to individuals, families, and businesses across a range of legal matters.
            </p>
            <button className="hidden md:flex bg-[#112a75] text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-sm md:text-base items-center justify-center gap-3 hover:bg-[#0c1f56] transition-colors">
              View All Practice Areas
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="flex md:grid overflow-x-auto snap-x snap-mandatory md:overflow-x-visible md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar">
          {practiceAreas.map((area, index) => (
            <div key={index} className="flex-none w-[85vw] sm:w-[60vw] md:w-auto snap-center group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-black flex flex-col justify-end p-6 md:p-8 cursor-pointer">
              <Image 
                src={area.image} 
                alt={area.title} 
                fill 
                className="object-cover opacity-70 group-hover:opacity-50 transition-opacity duration-500"
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
              
              <div className="relative z-10 flex flex-col gap-3">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">{area.title}</h3>
                <p className="text-white/80 text-sm md:text-base leading-relaxed line-clamp-2">{area.description}</p>
                <div className="flex items-center gap-2 text-white font-medium text-sm mt-2 md:mt-4 group-hover:gap-4 transition-all duration-300">
                  Learn More 
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}

          {/* Mobile View All Button Card */}
          <div className="flex-none w-[85vw] sm:w-[60vw] md:hidden snap-center flex items-center justify-center p-6 bg-slate-200">
             <button className="bg-[#112a75] text-white px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-[#0c1f56] transition-colors w-full">
              View All Practice Areas
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
