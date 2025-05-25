import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, User, Users } from 'lucide-react'
import bgImage from '../assets/hbg.png'
import heroImage from '../assets/hm.png'

export default function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section 
      ref={sectionRef}
      className={`w-full pt-16 pb-24 bg-no-repeat bg-cover bg-center relative transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* User/Host Option Boxes - positioned relative to section */}
      <div className="hidden md:block">
        {/* For Users Box (Left Side) */}
        <div className={`absolute left-0 top-1/3 w-[180px] md:w-[280px] p-6 px-8 text-center rounded-[30px] border border-dashed border-black bg-white bg-opacity-86 shadow-[0px_0px_46.4px_0px_rgba(9,16,87,0.18)] transition-all duration-1000 delay-300 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
        }`} style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
          <div className="flex justify-center mb-4">
            <User size={32} className="text-[#0a0a5e]" />
          </div>
          <h3 className="text-[#0a0a5e] font-medium font-poppins text-lg mb-2">For Users</h3>
          <p className="text-gray-600 text-sm font-light font-poppins">
            Because standing around looking awkward isn't a hobby
          </p>
        </div>

        {/* For Hosts Box (Right Side) */}
        <div className={`absolute right-0 top-1/3 w-[180px] md:w-[280px] p-6 px-8 text-center rounded-[30px] border border-dashed border-black bg-white bg-opacity-86 shadow-[0px_0px_46.4px_0px_rgba(9,16,87,0.18)] transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
        }`} style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}>
          <div className="flex justify-center mb-4">
            <Users size={32} className="text-[#0a0a5e]" />
          </div>
          <h3 className="text-[#0a0a5e] font-medium font-poppins text-lg mb-2">For Hosts</h3>
          <p className="text-gray-600 text-sm font-light font-poppins">
            Turn chaos into choreography (minus the tutus)
          </p>
        </div>
      </div>
      
      <div className="container mx-auto px-4 text-center">
        {/* Small text */}
        <div className={`inline-flex items-center bg-white rounded-[20px] px-1 py-1 border border-gray-300 mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <div className="bg-[#EEEEEE] rounded-[20px] px-6 py-1 mr-4 ">
            <span className="text-gray-700 font-light font-poppins">PSA!</span>
          </div>
          <span className="text-gray-700 font-light font-poppins pr-6">Queues are officially outdated ⚰️</span>
        </div>

        {/* Main heading */}
        <h1 className={`text-5xl md:text-6xl font-medium font-poppins text-[#0a0a5e] mb-4 max-w-3xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`} style={{ lineHeight: '117%' }}>
          Why Stand When You Can <span className="font-poltawski italic">Smartly Plan?</span>
        </h1>

        {/* Subheading */}
        <p className={`text-lg font-normal font-poppins text-gray-700 mb-10 max-w-2xl mx-auto transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          The world's first queue management system that actually makes sense. 
          We've turned waiting from a necessary evil into an unnecessary evil! 🎉
        </p>

        {/* Placeholder for spacing where the boxes used to be */}
        <div className="hidden md:block mb-12"></div>

        {/* CTA Button */}
        <Link
          to="/signup"
          className={`inline-flex items-center gap-2 bg-[#F97316] text-white px-6 py-3 rounded-md font-medium hover:bg-[#e86a1c] transition-all duration-1000 delay-700 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}
        >
          Try QuickQ (It's embarrassingly free) <ArrowRight size={18} />
        </Link>

        {/* Hero Image */}
        <div className={`mt-16 max-w-2xl mx-auto transition-all duration-1200 delay-800 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
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
