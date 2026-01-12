'use client';

import Image from 'next/image';
import Navbar from './Navbar';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      {/* Background Image & Overlay */}
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

      {/* Beige overlay — full width on mobile, 50% on desktop */}
      <div className="absolute left-0 top-0 h-full w-full md:w-[50.2%] md:-translate-x-[0.1%] bg-[#F5EFE7] z-[1]" />

      {/* Content Layer */}
      <div className="relative z-10 flex min-h-screen w-full flex-col justify-center md:justify-start md:flex-row max-w-[1600px] mx-auto overflow-hidden">
        
        {/* Left Half: Content Area */}
        <div className="flex w-full md:w-1/2 flex-col justify-center px-8 sm:px-12 md:px-16 lg:px-24 
                        py-12 sm:py-16 md:py-0 items-center md:items-end text-center md:text-right">

          {/* Headline */}
          <h1
            className="font-oswald animate-fade-in-up bg-cover bg-clip-text text-transparent font-black uppercase tracking-tight leading-[1]"
            style={{
              backgroundImage: 'url(/hero-bg1.png)',
              backgroundPosition: 'center',
              filter: 'brightness(0.6)',
              animationDelay: '0.2s',
              fontSize: 'clamp(4.5rem, 12vw, 7rem)',
              lineHeight: '1.1',
              margin: '1.5rem 0 0.75rem 0',
            }}
          >
            Higher <br /> Study <br /> Cell
          </h1>

          {/* Subtitle */}
          <p
            className="font-inter animate-fade-in-up mt-4 text-base sm:text-lg md:text-xl text-slate-700 max-w-2xl"
            style={{ animationDelay: '0.4s' }}
          >
            Bharati Vidyapeeth&apos;s College of Engineering, New Delhi
          </p>

          {/* CTA Button */}
          <div
            className="animate-fade-in-up mt-8 flex justify-center md:justify-end"
            style={{ animationDelay: '0.6s' }}
          >
            <button
              onClick={() => {
                if (typeof window !== 'undefined') {
                  window.scrollTo({
                    top: window.innerHeight * 0.9,
                    behavior: 'smooth',
                  });
                }
              }}
              className="group flex items-center gap-2 rounded-full bg-[#f57d3b] px-6 py-3 text-base font-semibold text-white shadow-lg transition-all duration-300 hover:bg-[#e66a22] hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-[#f57d3b]/50"
            >
              Explore
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </div>
        </div>

        {/* Right Half: Image space on desktop */}
        <div className="hidden md:block w-1/2" />
      </div>
    </div>
  );
}
