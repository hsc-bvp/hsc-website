'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHash, setActiveHash] = useState('');
  const pathname = usePathname();
  
  // Handle hash changes and close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    
    // This will only run on the client side
    const handleHashChange = () => {
      setActiveHash(window.location.hash);
    };
    
    // Set initial hash
    handleHashChange();
    
    // Add event listener for hash changes
    window.addEventListener('hashchange', handleHashChange);
    
    // Cleanup
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, [pathname]);
  
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  
  const isActive = (path: string) => {
    return pathname === path 
      ? 'text-white bg-[#f57d3b] px-4 py-2 rounded-full' 
      : 'text-gray-700 hover:text-[#f57d3b] transition-colors';
  };
  
  const isTeamActive = pathname === '/' && activeHash === '#faculty' 
    ? 'text-white bg-[#f57d3b] px-4 py-2 rounded-full' 
    : 'text-gray-700 hover:text-[#f57d3b] transition-colors';

  const isHomePage = pathname === '/';

  return (
    <nav className={`fixed top-1 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-6xl mx-auto ${isHomePage ? 'backdrop-blur-xl' : 'backdrop-blur-md'}`}>
      <div className={`${isHomePage ? 'bg-white/80' : 'bg-white/90'} rounded-xl shadow-lg px-3 sm:px-5 py-1.5 flex justify-between items-center border border-orange-100`}>
        {/* Logo */}
        <div className="relative h-12 w-24 sm:w-32">
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
        
        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-gray-700 hover:text-[#f57d3b] p-1.5 rounded-md focus:outline-none focus:ring-2 focus:ring-[#f57d3b]"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-2 lg:space-x-4">
          <NavLink href="/" isActive={isActive('/')}>
            Home
          </NavLink>
          <NavLink href="/#faculty" isActive={isTeamActive}>
            Team
          </NavLink>
          <NavLink href="/events" isActive={isActive('/events')}>
            Events
          </NavLink>
          <NavLink href="/alumni" isActive={isActive('/alumni')}>
            Alumni
          </NavLink>
          <NavLink href="/resources" isActive={isActive('/resources')}>
            Resources
          </NavLink>
          <NavLink href="/archive" isActive={isActive('/archive')}>
            Archive
          </NavLink>
          <a 
            href="https://www.bvcoend.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 bg-[#f57d3b] hover:bg-[#e66a22] text-white text-sm font-semibold pl-4 pr-3 py-2 rounded-full transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
          >
            College Website
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </div>
      
      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? 'block' : 'hidden'} ${isHomePage ? 'bg-white/80' : 'bg-white/90'} rounded-b-2xl shadow-lg mt-1 border border-t-0 border-orange-100`}>
        <div className="px-4 py-2 space-y-1">
          <MobileNavLink href="/" isActive={isActive('/')}>
            Home
          </MobileNavLink>
          <MobileNavLink 
            href="/#faculty" 
            isActive={pathname === '/' && activeHash === '#faculty' ? 'bg-gray-100 text-[#f57d3b]' : 'text-gray-700 hover:bg-gray-100 hover:text-[#f57d3b]'}
          >
            Team
          </MobileNavLink>
          <MobileNavLink href="/events" isActive={isActive('/events')}>
            Events
          </MobileNavLink>
          <MobileNavLink href="/alumni" isActive={isActive('/alumni')}>
            Alumni
          </MobileNavLink>
          <MobileNavLink href="/resources" isActive={isActive('/resources')}>
            Resources
          </MobileNavLink>
          <MobileNavLink href="/archive" isActive={isActive('/archive')}>
            Archive
          </MobileNavLink>
          <a 
            href="https://www.bvcoend.ac.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1.5 bg-[#f57d3b] hover:bg-[#e66a22] text-white text-sm font-semibold px-4 py-2.5 rounded-lg transition-colors duration-200 w-full mt-2 mb-2"
          >
            College Website
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </nav>
  );
};

// NavLink Component
const NavLink = ({ href, isActive, children }: { href: string, isActive: string, children: React.ReactNode }) => (
  <Link href={href} className={`${isActive} text-sm font-medium px-2 py-2 sm:px-3`}>
    {children}
  </Link>
);

// MobileNavLink Component
const MobileNavLink = ({ href, isActive, children }: { href: string, isActive: string, children: React.ReactNode }) => (
  <Link href={href} className={`${isActive} block px-4 py-2.5 text-sm font-medium rounded-lg hover:bg-orange-50`}>
    {children}
  </Link>
);

export default Navbar;