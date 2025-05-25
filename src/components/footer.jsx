import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false)
  const footerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (footerRef.current) {
      observer.observe(footerRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <footer ref={footerRef} className={`w-full bg-gradient-to-br from-gray-50 to-gray-100 text-gray-800 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`}>
      {/* Main Footer Content */}
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          {/* Logo & About */}
          <div className={`lg:col-span-1 transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <div className="mb-6">
              <h3 className="text-3xl font-bold font-poppins text-orange-600 mb-3">QuickQ</h3>
              <div className="w-12 h-1 bg-orange-600 rounded-full mb-4"></div>
            </div>
            <p className="text-gray-700 leading-relaxed text-sm max-w-xs">
              Revolutionizing queue management with smart technology. Making waiting a thing of the past.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className={`transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-gray-900">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm font-medium">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm font-medium">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm font-medium">
                  Pricing
                </Link>
              </li>
              <li>
                <Link to="/faq" className="text-gray-600 hover:text-orange-600 transition-colors duration-200 text-sm font-medium">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className={`transition-all duration-1000 delay-500 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-gray-900">Follow Us</h4>
            <div className="flex space-x-3">
              <a 
                href="https://www.linkedin.com/company/thequickq/about/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:border-orange-200 transition-colors duration-200"
              >
                <Linkedin size={18} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white border border-gray-200 rounded-lg flex items-center justify-center text-gray-600 hover:text-orange-600 hover:border-orange-200 transition-colors duration-200"
              >
                <Twitter size={18} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className={`transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            <h4 className="text-lg font-semibold font-poppins mb-6 text-gray-900">Get in Touch</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Mail size={14} className="text-orange-600" />
                </div>
                <span className="text-gray-700 text-sm break-all">shourya.gupta.quickq@gmail.com</span>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-5 h-5 bg-orange-100 rounded flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Phone size={14} className="text-orange-600" />
                </div>
                <span className="text-gray-700 text-sm">+91 8770453255</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bottom Bar */}
      <div className="border-t border-gray-200 bg-white/50">
        <div className={`container mx-auto px-6 lg:px-8 py-6 transition-all duration-1000 delay-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 text-sm">
              © {new Date().getFullYear()} QuickQ. All rights reserved.
            </p>
            <div className="flex space-x-6 text-xs text-gray-500">
              <span>Privacy Policy</span>
              <span>•</span>
              <span>Terms of Service</span>
              <span>•</span>
              <span>Cookie Policy</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
