import Image from 'next/image';

const steps = [
  {
    number: '01',
    title: 'Initial Consultation',
    description: 'We begin by listening carefully to your concerns, reviewing the details of your case, and identifying your objectives.'
  },
  {
    number: '02',
    title: 'Case Evaluation',
    description: 'Our team conducts a thorough assessment of the facts, applicable laws, and potential outcomes to build a strong foundation.'
  },
  {
    number: '03',
    title: 'Strategic Planning',
    description: 'We develop a tailored legal strategy aligned with your goals, keeping you informed at every stage.'
  },
  {
    number: '04',
    title: 'Representation & Resolution',
    description: 'Whether through negotiation or litigation, we advocate on your behalf with clarity, focus, and professionalism.'
  }
];

export default function Process() {
  return (
    <section className="relative w-full bg-black">
      {/* Background Image - Sticky container handles the parallax effect */}
      <div className="absolute inset-0 z-0 h-full w-full">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <Image
            src="/processbg.png"
            alt="Lawyer at desk"
            fill
            className="object-cover opacity-60 md:opacity-70"
            referrerPolicy="no-referrer"
          />
          {/* Hero navy-blue gradient, horizontal direction to match left-side text */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#0d1b3e]/85 via-[#0d1b3e]/40 to-[#0d1b3e]/10"></div>
        </div>
      </div>

      {/* Content Container */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 md:px-12 flex flex-col md:flex-row items-start">
        
        {/* Left Column - Sticky on Desktop */}
        <div className="w-full md:w-1/2 md:sticky md:top-0 md:h-screen flex flex-col justify-center py-16 md:py-0 pr-0 md:pr-12">
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-[1px] bg-white/60"></div>
            <span className="text-white/90 font-medium text-sm tracking-wide">Our Process</span>
          </div>
          
          <h2 className="text-[2.2rem] md:text-5xl lg:text-[3.2rem] leading-[1.15] font-medium text-white mb-6 tracking-tight">
            From Consultation To<br />Resolution – Handled<br />With Clarity
          </h2>
          
          <p className="text-white/80 text-base md:text-lg leading-relaxed max-w-md">
            We follow a thoughtful process designed to understand your situation, define a strategy, and guide you toward the best possible outcome.
          </p>
        </div>

        {/* Right Column - Scrolling Cards */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-end gap-6 md:gap-8 pb-16 md:pt-[25vh] md:pb-[30vh]">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="w-full max-w-xl bg-[#f4f7fb] p-8 md:p-12 flex flex-col gap-4 md:gap-6 shadow-2xl"
            >
              <span className="text-3xl md:text-4xl font-medium text-[#2c4694]">
                {step.number}
              </span>
              <h3 className="text-2xl md:text-3xl font-medium text-dark-bg tracking-tight">
                {step.title}
              </h3>
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
}
