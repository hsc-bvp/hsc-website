'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';

const Navbar = () => {
  const pathname = usePathname();
  
  const isActive = (path: string) => {
    return pathname === path 
      ? 'text-white bg-[#f57d3b] px-4 py-2 rounded-full' 
      : 'text-gray-700 hover:text-[#f57d3b] transition-colors';
  };

  const isHomePage = pathname === '/';

  return (
    <nav className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl mx-auto ${isHomePage ? 'backdrop-blur-xl' : 'backdrop-blur-md'}`}>
      <div className={`${isHomePage ? 'bg-white/80' : 'bg-white/90'} rounded-2xl shadow-lg px-6 py-2 flex justify-between items-center border border-orange-100`}>
        {/* Logo */}
        <div className="relative h-14 w-36">
          <Link href="/">
            <Image 
              src="/logo_light-removebg.png" 
              alt="Higher Study Cell Logo" 
              fill 
              className="object-contain"
              priority
            />
          </Link>
        </div>
        
        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          <Link href="/" className={`${isActive('/')} text-sm font-medium px-3 py-2`}>
            Home
          </Link>
          <Link href="/events" className={`${isActive('/events')} text-sm font-medium px-3 py-2`}>
            Events
          </Link>
          <Link href="/alumni" className={`${isActive('/alumni')} text-sm font-medium px-3 py-2`}>
            Alumni
          </Link>
          <Link href="/resources" className={`${isActive('/resources')} text-sm font-medium px-3 py-2`}>
            Resources
          </Link>
          <Link href="/archive" className={`${isActive('/archive')} text-sm font-medium px-3 py-2`}>
            Archive
          </Link>
          <a 
            href="https://www.bvcoend.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 bg-[#f57d3b] hover:bg-[#e66a22] text-white text-sm font-semibold pl-5 pr-4 py-2.5 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            College Website
            <ArrowUpRight className="h-4 w-4 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;