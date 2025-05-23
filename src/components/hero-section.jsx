import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Users } from 'lucide-react'
import bgImage from '../assets/hbg.png'
import heroImage from '../assets/hm.png'

export default function HeroSection() {
  return (
    <section 
      className="w-full pt-16 pb-24 bg-no-repeat bg-cover bg-center relative" 
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* User/Host Option Boxes - positioned relative to section */}
      <div className="hidden md:block">
        {/* For Users Box (Left Side) */}
        <div className="absolute left-0 top-1/3 w-[180px] md:w-[280px] p-6 px-8 text-center rounded-[30px] border border-dashed border-black bg-white bg-opacity-86 shadow-[0px_0px_46.4px_0px_rgba(9,16,87,0.18)]" style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
          <div className="flex justify-center mb-4">
            <User size={32} className="text-[#0a0a5e]" />
          </div>
          <h3 className="text-[#0a0a5e] font-medium font-poppins text-lg mb-2">For Users</h3>
          <p className="text-gray-600 text-sm font-light font-poppins">
            Let's get in a queue in a smarter way
          </p>
        </div>

        {/* For Hosts Box (Right Side) */}
        <div className="absolute right-0 top-1/3 w-[180px] md:w-[280px] p-6 px-8 text-center rounded-[30px] border border-dashed border-black bg-white bg-opacity-86 shadow-[0px_0px_46.4px_0px_rgba(9,16,87,0.18)]" style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <div className="flex justify-center mb-4">
            <Users size={32} className="text-[#0a0a5e]" />
          </div>
          <h3 className="text-[#0a0a5e] font-medium font-poppins text-lg mb-2">For Hosts</h3>
          <p className="text-gray-600 text-sm font-light font-poppins">
            Let's manage queue in a smarter way
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        {/* Small text */}
        <div className="inline-flex items-center bg-white rounded-[20px] px-1 py-1 border border-gray-300 mb-8">
          <div className="bg-[#EEEEEE] rounded-[20px] px-6 py-1 mr-4 ">
            <span className="text-gray-700 font-light font-poppins">Hey!</span>
          </div>
          <span className="text-gray-700 font-light font-poppins pr-6">Tired of queues!</span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl md:text-6xl font-medium font-poppins text-[#0a0a5e] mb-4 max-w-3xl mx-auto" style={{ lineHeight: '117%' }}>
          Say Goodbye to <span className="font-poltawski italic">Long Waiting</span> Times!
        </h1>

        {/* Subheading */}
        <p className="text-lg font-normal font-poppins text-gray-700 mb-10 max-w-2xl mx-auto">
          World's first comprehensive queue management solution for businesses and customers
        </p>

        {/* Placeholder for spacing where the boxes used to be */}
        <div className="hidden md:block mb-12"></div>

        {/* CTA Button */}
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e86a1c] transition-colors"
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
