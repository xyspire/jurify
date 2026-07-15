import Image from 'next/image';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="w-full bg-secondary-bg py-16 md:py-24 px-6 md:px-12">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-8 md:w-12 h-[1px] bg-slate-300"></div>
            <span className="text-dark-bg font-medium text-sm md:text-base tracking-wide">Client Perspectives</span>
            <div className="w-8 md:w-12 h-[1px] bg-slate-300"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-dark-bg tracking-tight max-w-2xl mx-auto">
            Trusted By Individuals And Businesses Alike
          </h2>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-auto lg:h-[600px]">
          
          {/* Column 1: Image Card */}
          <div className="relative w-full aspect-[4/5] lg:aspect-auto lg:h-full overflow-hidden bg-black flex flex-col justify-end">
            <video
              src="/testimonial.mp4"
              loop
              muted
              autoPlay
              playsInline
              className="absolute inset-0 w-full h-full object-cover"
            />
            {/* Same navy-blue gradient as hero */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10"></div>
            
            <div className="relative z-10 p-6 md:p-8 flex items-center gap-4">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden shrink-0">
                <Image 
                  src="/testimonial1.png" 
                  alt="Daniel K." 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col text-white">
                <span className="font-semibold text-lg md:text-xl">Daniel K.</span>
                <span className="text-white/80 text-sm md:text-base">Business Client</span>
              </div>
            </div>
          </div>

          {/* Column 2: Large Quote Card */}
          <div className="bg-white p-8 md:p-10 flex flex-col justify-between lg:h-full">
            <div className="flex flex-col gap-6">
              <Quote className="w-10 h-10 md:w-12 md:h-12 text-slate-400 rotate-180" strokeWidth={1} />
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Jurify approached our case with clarity, discipline, and genuine care. What stood out most was their ability to explain complex legal matters in a way that felt manageable and transparent. Every step was handled thoughtfully, and we always understood where we stood.
              </p>
            </div>
            
            <div className="flex items-center gap-4 mt-8 lg:mt-0">
              <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden shrink-0">
                <Image 
                  src="/testimonial2.jpg" 
                  alt="Michael Thompson" 
                  fill 
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-dark-bg font-semibold text-base md:text-lg">Michael Thompson</span>
                <span className="text-slate-500 text-sm md:text-base">Founder, Valeon Group</span>
              </div>
            </div>
          </div>

          {/* Column 3: Rating and Small Quote */}
          <div className="flex flex-col gap-6 lg:h-full">
            
            {/* Top Rating Card */}
            <div className="bg-darker-bg p-8 md:p-10 flex flex-col justify-between h-[200px] lg:h-[260px] shrink-0">
              <div className="flex justify-between items-start">
                <span className="text-5xl md:text-6xl font-medium text-white tracking-tight">4.9/5</span>
                <div className="flex gap-1 text-white">
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                  <Star className="w-4 h-4 md:w-5 md:h-5 fill-current" />
                </div>
              </div>
              <span className="text-white/80 text-sm md:text-base">Based on 658+ Reviews</span>
            </div>

            {/* Bottom Small Quote Card */}
            <div className="bg-white p-8 md:p-10 flex flex-col justify-between flex-1">
              <div className="flex flex-col gap-6">
                <Quote className="w-10 h-10 md:w-12 md:h-12 text-slate-400 rotate-180" strokeWidth={1} />
                <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                  Their strategic guidance helped us avoid costly mistakes and move forward with confidence.
                </p>
              </div>
              
              <div className="flex items-center gap-4 mt-8 lg:mt-0">
                <div className="relative w-12 h-12 md:w-14 md:h-14 overflow-hidden shrink-0">
                  <Image 
                    src="/testimonial3.png" 
                    alt="Sarah L." 
                    fill 
                    className="object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="flex flex-col">
                  <span className="text-dark-bg font-semibold text-base md:text-lg">Sarah L.</span>
                  <span className="text-slate-500 text-sm md:text-base">Family Law Client</span>
                </div>
              </div>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
}
