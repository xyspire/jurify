import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';
import { NumberTicker } from '@/components/ui/number-ticker';

export default function About() {
  return (
    <section id="about" className="relative w-full bg-secondary-bg py-16 md:py-24 px-6 md:px-12">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-12 lg:gap-24">
        
        {/* Left Column */}
        <div className="w-full lg:w-1/2 flex flex-col justify-start">
          <div className="hidden lg:flex items-center gap-4 mb-12">
            <div className="w-12 h-[1px] bg-slate-300"></div>
            <span className="text-dark-bg font-medium text-sm tracking-wide">About Us</span>
          </div>
          
          <div className="relative aspect-video w-full overflow-hidden bg-black">
            <video
              src="/aboutus.mp4"
              autoPlay
              loop
              muted

              className="object-cover" 
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/2 flex flex-col items-start pt-2 lg:pt-0">
          <div className="lg:hidden flex items-center gap-4 mb-6 mt-6">
            <div className="w-12 h-[1px] bg-slate-300"></div>
            <span className="text-dark-bg font-medium text-sm tracking-wide">About Us</span>
          </div>
          
          <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-dark-bg mb-6 tracking-tight">
            Modern Legal Practice<br className="hidden md:block" /> Grounded In Clarity & Trust
          </h2>
          
          <p className="text-slate-600 text-base md:text-lg leading-relaxed mb-8 md:mb-10 max-w-xl">
            At Jurify, we provide clear, thoughtful legal guidance grounded in real understanding, working closely with individuals and businesses to navigate complex legal matters with confidence. We take the time to listen, explain options clearly, and offer practical direction tailored to each situation.
          </p>
          
          <button className="bg-primary text-white px-8 py-4 font-semibold text-base flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors mb-12 lg:mb-20">
            Learn More
            <ArrowUpRight className="w-5 h-5" />
          </button>
          
          {/* Stats Grid */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 w-full pt-4">
            {/* Stat 1 */}
            <div className="flex flex-col gap-2 pl-0">
              <div className="text-4xl lg:text-5xl font-medium tracking-tighter flex items-baseline">
                <NumberTicker value={15} className="text-[#2c4694]" />
                <span className="text-[#2c4694]">+</span>
              </div>
              <span className="text-sm text-slate-700 font-medium tracking-wide">Years of Experience</span>
            </div>

            {/* Stat 2 */}
            <div className="flex flex-col gap-2 lg:border-l border-slate-300 pl-0 lg:pl-6">
              <div className="text-4xl lg:text-5xl font-medium tracking-tighter flex items-baseline">
                <NumberTicker value={567} className="text-[#2c4694]" />
                <span className="text-[#2c4694]">+</span>
              </div>
              <span className="text-sm text-slate-700 font-medium tracking-wide">Solved Cases</span>
            </div>

            {/* Stat 3 */}
            <div className="flex flex-col gap-2 lg:border-l border-slate-300 pl-0 lg:pl-6">
              <div className="text-4xl lg:text-5xl font-medium tracking-tighter flex items-baseline">
                <NumberTicker value={86} className="text-[#2c4694]" />
                <span className="text-[#2c4694]">+</span>
              </div>
              <span className="text-sm text-slate-700 font-medium tracking-wide">Client Worldwide</span>
            </div>

            {/* Stat 4 */}
            <div className="flex flex-col gap-2 lg:border-l border-slate-300 pl-0 lg:pl-6">
              <div className="text-4xl lg:text-5xl font-medium tracking-tighter flex items-baseline">
                <NumberTicker value={18} className="text-[#2c4694]" />
                <span className="text-[#2c4694]">+</span>
              </div>
              <span className="text-sm text-slate-700 font-medium tracking-wide">Attorneys</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
