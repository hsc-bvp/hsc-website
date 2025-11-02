'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      <Navbar />

      {/* Background Image & Overlay */}
      {/* This main background is now *only* for the right side and general page fallback.
          The left side's masked text will get its background directly. */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg1.png"
          alt="Background of students in a library"
          fill
          className="object-cover"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      {/* Content Layer */}
      <div className="relative z-10 flex h-screen w-full">
        {/* Left Half: Content Area */}
        <div className="flex w-full flex-col justify-center bg-[#F5EFE7] px-8 md:w-1/2 md:px-16 lg:px-24">

          {/* Headline */}
          {/* CHANGES:
              1. Increased font sizes further: `text-9xl` for mobile, `lg:text-[12rem]` for large screens.
              2. Modified `backgroundImage` to directly include the black filter effect via `filter: brightness(0.6)`
                 This ensures the image shown through the text is also darkened, matching the right side.
              3. Removed `bg-fixed` as it's no longer necessary with the direct background image on the text itself.
                 The background position is handled by `background-position: center`.
          */}
          <h1
            className="font-oswald animate-fade-in-up bg-cover bg-clip-text text-right text-[5rem] font-black uppercase tracking-tight text-transparent leading-[0.9] xs:text-7xl sm:text-8xl md:text-8xl lg:text-8xl xl:text-[10rem]"
            style={{
              backgroundImage: 'url(/hero-bg1.png)',
              backgroundPosition: 'center', // Center the background image within the text
              filter: 'brightness(0.6)', // Apply the darkening filter directly to the text background
              animationDelay: '0.2s',
            }}
          >
            Higher <br /> Study <br /> Cell
          </h1>

          {/* Subtitle */}
          <p 
            className="font-inter animate-fade-in-up self-end mt-8 max-w-2xl text-right text-xl font-normal text-slate-700 md:text-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            Bharati Vidyapeeth&apos;s College of Engineering, New Delhi
          </p>
          
          {/* Call-to-Action (CTA) Button */}
          <div 
            className="animate-fade-in-up mt-10 flex justify-end"
            style={{ animationDelay: '0.6s' }}
          >
            <button 
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({
                    top: window.innerHeight * 0.9,
                    behavior: 'smooth'
                  });
                }
              }}
              className="group flex items-center gap-2 rounded-full bg-[#f57d3b] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#e66a22] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#f57d3b]/50"
            >
              Explore
              <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Half (Visual space on larger screens) */}
        <div className="hidden w-1/2 md:block" />
      </div>
    </div>
  );
}