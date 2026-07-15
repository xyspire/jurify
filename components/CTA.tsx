import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

export default function CTA() {
  return (
    <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 z-0 h-full w-full pointer-events-none">
        <div className="sticky top-0 h-screen w-full">
          <video
            src="/legalteam.mp4"

           loop 
           muted 
           autoPlay
     
            className="object-cover opacity-50"
         
          />
          <div className="absolute inset-0 bg-[#060b17]/80"></div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-4xl mx-auto px-6 md:px-12 flex flex-col items-center text-center gap-6 md:gap-8 py-24">
        
        <div className="flex items-center gap-4">
          <div className="w-8 md:w-12 h-[1px] bg-white/40"></div>
          <span className="text-white font-medium text-sm md:text-base tracking-wide">Your Next Step Starts Here</span>
          <div className="w-8 md:w-12 h-[1px] bg-white/40"></div>
        </div>
        
        <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium text-white tracking-tight leading-[1.15]">
          Legal Guidance Built On Clarity, Experience, And Trust
        </h2>
        
        <p className="text-white/80 text-base md:text-lg lg:text-xl leading-relaxed max-w-2xl">
          We take the time to understand your situation and provide clear, thoughtful legal guidance tailored to your needs.
        </p>

        <button className="mt-4 md:mt-8 bg-white text-[#0f172a] px-6 py-4 md:px-8 font-semibold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-slate-100 transition-colors">
          Request A Consultation
          <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
        </button>
        
      </div>
    </section>
  );
}
