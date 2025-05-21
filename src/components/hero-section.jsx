import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import bgImage from '../assets/hbg.png'
import heroImage from '../assets/hm.png'

export default function HeroSection() {
  return (
    <section 
      className="w-full pt-16 pb-24 bg-no-repeat bg-cover bg-center" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="container mx-auto px-4 text-center">
        {/* Small text */}
        <div className="flex justify-center gap-8 mb-4">
          <span className="text-gray-700 font-medium">Hey!</span>
          <span className="text-gray-700 font-medium">Tired of queues!</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-bold text-[#0a0a5e] mb-4 max-w-4xl mx-auto">
          Say Goodbye to <span className="italic">Long Waiting</span> Times!
        </h1>

        {/* Subheading */}
        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">
          World's first comprehensive queue management solution for businesses and customers
        </p>

        {/* CTA Button */}
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-[#FF7A30] text-white px-6 py-3 rounded-full font-medium hover:bg-[#e86c25] transition-colors"
        >
          Try QuickQ for free <ArrowRight size={18} />
        </Link>

        {/* Hero Image */}
        <div className="mt-16 max-w-2xl mx-auto">
          <img 
            src={heroImage} 
            alt="QuickQ Queue Management Solution" 
            className="w-full h-auto rounded-lg"
          />
        </div>
      </div>
    </section>
  )
}
