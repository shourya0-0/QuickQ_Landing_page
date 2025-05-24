import React from 'react'
import { Link } from 'react-router-dom'
import { Linkedin, Twitter, Mail, Phone } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="w-full py-12 bg-white text-gray-800 border-t border-gray-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & About */}
          <div className="col-span-1">
            <h3 className="text-2xl font-bold font-poppins mb-4 text-orange-600">QuickQ</h3>
            <p className="text-gray-600 text-sm">
              The comprehensive queue management solution for businesses and customers.
            </p>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-xl font-medium font-poppins mb-4 text-gray-800">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-600 hover:text-orange-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-600 hover:text-orange-600 transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Social Media */}
          <div className="col-span-1">
            <h4 className="text-xl font-medium font-poppins mb-4 text-gray-800">Connect With Us</h4>
            <div className="flex space-x-4">
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-700 transition-all"
              >
                <Linkedin size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-gray-100 p-2 rounded-full hover:bg-gray-200 text-gray-700 transition-all"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div className="col-span-1">
            <h4 className="text-xl font-medium font-poppins mb-4 text-gray-800">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail size={18} className="text-orange-500" />
                <span className="text-gray-600">info@quickq.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={18} className="text-orange-500" />
                <span className="text-gray-600">+1 (555) 123-4567</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} QuickQ. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
