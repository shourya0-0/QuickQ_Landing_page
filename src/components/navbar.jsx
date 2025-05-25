import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const location = useLocation();
  const pathname = location.pathname;
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Handle scroll effect for navbar
  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className={`w-full py-5 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white/90 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="w-full px-4 md:px-6 lg:px-8">
        <div className="flex items-center justify-between w-full max-w-[1440px] mx-auto">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-[#F97316] text-3xl md:text-[48px] font-medium font-afacad transition-all duration-300 flex-shrink-0 z-50"
          >
            QuickQ
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex py-4 md:py-[8px] px-4 md:px-[10px] items-center gap-3 md:gap-[40px] rounded-[100px] bg-white shadow-[0px_4px_30px_0px_rgba(0,0,0,0.25)] transition-all duration-300">
            {[
              { path: '/', label: 'Home' },
              { path: '/contact', label: 'Contact Us' },
              { path: '/pricing', label: 'Pricing' },
              { path: '/faq', label: 'FAQ' }
            ].map((item) => (
              <Link 
                key={item.path}
                to={item.path} 
                className={`font-poppins px-6 py-2 rounded-[100px] transition-all duration-300 ease-in-out relative whitespace-nowrap
                  ${pathname === item.path 
                    ? 'text-gray-800 font-medium bg-[#EAEAEA] px-10 py-2' 
                    : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                  }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* Try for Free Button - Hidden on Mobile */}
          <Link 
            to="/signup" 
            className="hidden md:flex border border-[#F97316] text-[#F97316] rounded-[11px] px-5 py-2 font-medium font-poppins transition-all duration-300 hover:bg-[#F97316] hover:text-white hover:shadow-md text-center w-[180px] items-center justify-center whitespace-nowrap flex-shrink-0"
          >
            Try for Free
          </Link>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden z-50 p-2 text-[#F97316] focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X size={32} className="transition-all duration-300" />
            ) : (
              <Menu size={32} className="transition-all duration-300" />
            )}
          </button>

          {/* Mobile Menu */}
          <div className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} md:hidden`}>
            <div className="flex flex-col h-full justify-center items-center p-8">
              <nav className="flex flex-col items-center gap-6 mb-10">
                {[
                  { path: '/', label: 'Home' },
                  { path: '/contact', label: 'Contact Us' },
                  { path: '/pricing', label: 'Pricing' },
                  { path: '/faq', label: 'FAQ' }
                ].map((item) => (
                  <Link 
                    key={item.path}
                    to={item.path} 
                    className={`font-poppins text-xl px-6 py-3 rounded-[100px] transition-all duration-300 ease-in-out relative whitespace-nowrap w-full text-center
                      ${pathname === item.path 
                        ? 'text-gray-800 font-medium bg-[#EAEAEA]' 
                        : 'text-gray-600 hover:text-gray-800 hover:bg-gray-100'
                      }`}
                  >
                    {item.label}
                  </Link>
                ))}
              </nav>
              
              {/* Mobile Try for Free Button */}
              <Link 
                to="/signup" 
                className="border border-[#F97316] text-[#F97316] rounded-[11px] px-5 py-3 font-medium font-poppins transition-all duration-300 hover:bg-[#F97316] hover:text-white hover:shadow-md text-center w-[200px] flex items-center justify-center whitespace-nowrap"
              >
                Try for Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
