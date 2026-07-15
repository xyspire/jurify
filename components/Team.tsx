'use client';

import { useRef } from 'react';
import Image from 'next/image';
import { ArrowUpRight, Plus, ChevronLeft, ChevronRight } from 'lucide-react';

const teamMembers = [
  {
    name: 'Daniel Everett',
    role: 'Managing Partner',
    image: '/team1.png',
  },
  {
    name: 'Naomi Fernandez',
    role: 'Partner',
    image: '/team2.png',
  },
  {
    name: 'Michael Grant',
    role: 'Senior Associate',
    image: '/team3.png',
  },
];

export default function Team() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (carouselRef.current) {
      carouselRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="w-full py-16 md:py-24 px-6 md:px-12 bg-white">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col gap-12 md:gap-16">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <span className="text-dark-bg font-medium text-sm tracking-wide">Our Team</span>
            </div>
            
            <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-dark-bg tracking-tight">
              Experienced Attorneys.<br className="hidden md:block" /> Strategic Guidance.
            </h2>
          </div>
          
          <div className="max-w-md flex flex-col items-start lg:items-end gap-6 lg:gap-8">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed lg:text-left">
              A collaborative team committed to clear advice and dependable representation.
            </p>
            <div className="flex items-center gap-4">
              <div className="hidden md:flex gap-2">
                <button 
                  onClick={scrollLeft}
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition-colors group"
                  aria-label="Scroll left"
                >
                  <ChevronLeft className="w-5 h-5 text-dark-bg group-hover:-translate-x-0.5 transition-transform" />
                </button>
                <button 
                  onClick={scrollRight}
                  className="w-12 h-12 flex items-center justify-center border border-slate-200 hover:bg-slate-50 transition-colors group"
                  aria-label="Scroll right"
                >
                  <ChevronRight className="w-5 h-5 text-dark-bg group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
              <button className="hidden md:flex bg-primary text-white px-6 py-3 md:px-8 md:h-12 font-semibold text-sm md:text-base items-center justify-center gap-3 hover:bg-primary-dark transition-colors">
                View All Members
                <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
              </button>
            </div>
          </div>
        </div>

        {/* Carousel Section */}
        <div 
          ref={carouselRef}
          className="flex overflow-x-auto snap-x snap-mandatory gap-6 md:gap-8 pb-4 md:pb-0 -mx-6 px-6 md:mx-0 md:px-0 hide-scrollbar"
        >
          {teamMembers.map((member, index) => (
            <div key={index} className="flex-none w-[85vw] sm:w-[60vw] md:w-[40vw] lg:w-[30vw] snap-center group relative aspect-[3/4] md:aspect-[4/5] overflow-hidden bg-black flex flex-col justify-end cursor-pointer">
              <Image 
                src={member.image} 
                alt={member.name} 
                fill 
                className="object-cover opacity-80 group-hover:opacity-60 transition-opacity duration-500"
                referrerPolicy="no-referrer" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10"></div>
              
              <div className="absolute top-4 right-4 md:top-6 md:right-6 w-8 h-8 md:w-10 md:h-10 bg-white flex items-center justify-center z-20">
                <Plus className="w-5 h-5 md:w-6 md:h-6 text-primary" />
              </div>

              <div className="relative z-10 flex flex-col gap-1 md:gap-2 p-6 md:p-8">
                <h3 className="text-2xl md:text-3xl font-medium text-white tracking-tight">{member.name}</h3>
                <p className="text-white/90 text-sm md:text-base">{member.role}</p>
              </div>
            </div>
          ))}

          {/* Mobile View All Button Card */}
          <div className="flex-none w-[85vw] sm:w-[60vw] md:hidden snap-center flex items-center justify-center p-6 bg-slate-100">
             <button className="bg-primary text-white px-6 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors w-full">
              View All Members
              <ArrowUpRight className="w-5 h-5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
