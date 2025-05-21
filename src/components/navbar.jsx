import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <header className="w-full py-4">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="text-[#FF7A30] text-2xl font-bold">
          QuickQ
        </Link>

        {/* Navigation Links */}
        <nav className="bg-white rounded-full px-6 py-2 shadow-md">
          <ul className="flex space-x-8">
            <li>
              <Link to="/" className="text-gray-800 font-medium">
                Home
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-gray-600">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/features" className="text-gray-600">
                Features
              </Link>
            </li>
            <li>
              <Link to="/pricing" className="text-gray-600">
                Pricing
              </Link>
            </li>
          </ul>
        </nav>

        {/* Login Button */}
        <Link to="/login" className="border border-[#FF7A30] text-[#FF7A30] rounded-full px-6 py-2 font-medium">
          Login
        </Link>
      </div>
    </header>
  )
}
