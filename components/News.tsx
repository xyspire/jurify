import Image from 'next/image';
import { ArrowUpRight, ArrowRight } from 'lucide-react';

export default function News() {
  return (
    <section className="w-full bg-secondary-bg py-16 md:py-24 px-6 md:px-12">
      <div className="w-full max-w-[1400px] mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12 md:mb-16">
          <div className="lg:w-1/2">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-[1px] bg-slate-300"></div>
              <span className="text-dark-bg font-medium text-sm md:text-base tracking-wide">News & Insights</span>
            </div>
            <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-dark-bg tracking-tight">
              Legal Insights For Informed Decisions
            </h2>
          </div>
          
          <div className="lg:w-1/3 flex flex-col items-start gap-6 lg:pt-12">
            <p className="text-slate-600 text-base md:text-lg leading-relaxed">
              Our articles are designed to clarify complex legal topics and provide guidance for individuals and businesses alike.
            </p>
            <button className="bg-primary text-white px-6 py-3 md:px-8 md:py-4 font-semibold text-sm md:text-base flex items-center justify-center gap-3 hover:bg-primary-dark transition-colors">
              View All Insights
              <ArrowUpRight className="w-4 h-4 md:w-5 md:h-5" />
            </button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
          
          {/* Featured Post (Left) */}
          <div className="lg:col-span-7 relative aspect-[4/3] lg:aspect-auto lg:h-[600px] overflow-hidden group cursor-pointer">
            <Image 
              src="/news1.webp"
              alt="Jurify Expands Corporate Advisory Services"
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex flex-col gap-3">
              <div className="flex items-center gap-3 text-white/90 text-sm md:text-base font-medium mb-1">
                <span>News</span>
                <span className="w-[1px] h-3 bg-white/50"></span>
                <span>Mar 12, 2025</span>
              </div>
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-medium text-white tracking-tight leading-[1.2] max-w-2xl">
                Jurify Expands Corporate Advisory Services to Support Growing Businesses
              </h3>
              <div className="flex items-center gap-2 text-white font-medium mt-3 group-hover:gap-3 transition-all">
                Read More <ArrowRight className="w-4 h-4 md:w-5 md:h-5" />
              </div>
            </div>
          </div>

          {/* Standard Posts (Right) */}
          <div className="lg:col-span-5 flex flex-col gap-6 lg:gap-8 lg:h-[600px] justify-between">
            
            {/* Post 1 */}
            <div className="flex flex-col sm:flex-row overflow-hidden group cursor-pointer bg-white sm:bg-transparent flex-1">
              <div className="relative w-full sm:w-[45%] lg:w-2/5 aspect-video sm:aspect-auto overflow-hidden shrink-0">
                <Image 
                  src="/news2.webp"
                  alt="Successful Resolution in Complex Commercial Litigation"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full sm:w-[55%] lg:w-3/5 p-6 sm:p-0 sm:pl-6 lg:pl-8 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <span className="font-medium">News</span>
                  <span className="w-[1px] h-3 bg-slate-300"></span>
                  <span>Feb 4, 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-dark-bg leading-[1.2] tracking-tight">
                  Successful Resolution in Complex Commercial Litigation Case
                </h3>
                <p className="hidden sm:block text-slate-600 text-sm md:text-base line-clamp-3">
                  Jurify recently secured a favorable outcome in a multi-party commercial litigation matter involving complex cross-border transactions and regulatory compliance.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium mt-1 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>
            
            {/* Divider (Hidden on mobile where cards have white bg) */}
            <div className="hidden sm:block w-full h-[1px] bg-slate-200"></div>

            {/* Post 2 */}
            <div className="flex flex-col sm:flex-row overflow-hidden group cursor-pointer bg-white sm:bg-transparent flex-1">
              <div className="relative w-full sm:w-[45%] lg:w-2/5 aspect-video sm:aspect-auto overflow-hidden shrink-0">
                <Image 
                  src="/news3.webp"
                  alt="Jurify Announces New Office Location"
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="w-full sm:w-[55%] lg:w-3/5 p-6 sm:p-0 sm:pl-6 lg:pl-8 flex flex-col justify-center gap-3">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <span className="font-medium">News</span>
                  <span className="w-[1px] h-3 bg-slate-300"></span>
                  <span>Jan 17, 2025</span>
                </div>
                <h3 className="text-xl md:text-2xl font-medium text-dark-bg leading-[1.2] tracking-tight">
                  Jurify Announces New Office Location to Serve Expanding Client Base
                </h3>
                <p className="hidden sm:block text-slate-600 text-sm md:text-base line-clamp-3">
                  To better serve our growing client base, Jurify has opened a new office location in downtown Boston, featuring state-of-the-art facilities for confidential client consultations.
                </p>
                <div className="flex items-center gap-2 text-primary font-medium mt-1 group-hover:gap-3 transition-all">
                  Read More <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
