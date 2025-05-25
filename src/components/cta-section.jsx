import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle, Users, Clock, Bell } from 'lucide-react'

export default function CTASection() {
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

  const benefits = [
    {
      icon: <Users className="w-5 h-5" />,
      text: "Join 10,000+ people who've escaped queue purgatory"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "Reclaim 15+ minutes per visit (that's a coffee break!)"
    },
    {
      icon: <Bell className="w-5 h-5" />,
      text: "Smart notifications (we're basically your personal queue butler)"
    }
  ]

  return (
    <section 
      ref={sectionRef}
      className={`relative w-full py-16 md:py-20 overflow-hidden transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ backgroundColor: "#f8fafc" }}
    >
      {/* Simplified Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-20 w-24 h-24 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
        <div className="absolute bottom-20 right-20 w-32 h-32 rounded-full bg-gradient-to-br from-orange-500 to-orange-700"></div>
        <div className="absolute top-1/2 left-10 w-16 h-16 rounded-full bg-gradient-to-br from-orange-400 to-orange-600"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 max-w-4xl">
        <div className="w-full">
          {/* Main CTA Card */}
          <div className={`bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            
            {/* Orange Header Bar */}
            <div className="h-4 bg-gradient-to-r from-orange-500 to-orange-600" style={{ backgroundColor: "#F97316" }}></div>
            
            <div className="p-8 md:p-12 lg:p-16 text-center">
              {/* Content Container */}
              <div className="max-w-2xl mx-auto space-y-8">
                
                {/* Main Heading */}
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 leading-[1.15] font-poppins tracking-tight">
                  Ready to Ditch
                  <br className="hidden sm:block" />
                  <span style={{ color: "#F97316" }}>the Wait?</span>
                </h2>
                
                <p className="text-lg md:text-xl text-gray-600 font-poppins leading-relaxed max-w-xl mx-auto">
                  Join the rebellion against unnecessary waiting! Thousands have already made the switch from "standing around looking confused" to "living their best life." 🚀
                </p>

                {/* Benefits List */}
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div 
                      key={index}
                      className={`flex items-center justify-center gap-4 transition-all duration-700 ${
                        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                      }`}
                      style={{ transitionDelay: `${400 + index * 150}ms` }}
                    >
                      <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-white shadow-lg" style={{ backgroundColor: "#F97316" }}>
                        {benefit.icon}
                      </div>
                      <span className="text-base text-gray-700 font-medium font-poppins">{benefit.text}</span>
                    </div>
                  ))}
                </div>

                {/* CTA Buttons */}
                <div className={`flex flex-col sm:flex-row justify-center gap-4 transition-all duration-1000 delay-600 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <Link
                    to="/signup"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 text-white font-semibold rounded-xl transition-all duration-300 hover:shadow-lg group font-poppins"
                    style={{ backgroundColor: "#F97316" }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = "#e86a1c"}
                    onMouseLeave={(e) => e.target.style.backgroundColor = "#F97316"}
                  >
                    Start Your Queue Revolution
                    <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>
                  
                  <Link
                    to="/contact"
                    className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-900 font-semibold rounded-xl border-2 border-gray-200 transition-all duration-300 hover:border-orange-300 hover:bg-orange-50 hover:shadow-lg font-poppins"
                  >
                    Let's Chat (We're Friendly!)
                  </Link>
                </div>

                {/* Trust Indicators */}
                <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 text-sm text-gray-500 transition-all duration-1000 delay-800 ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-poppins font-medium">Free forever (seriously)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="font-poppins font-medium">No credit card, no strings attached</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Stats */}
          {/* <div className={`mt-12 grid grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-1000 delay-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            {[
              { number: "10K+", label: "Active Users" },
              { number: "500+", label: "Partner Businesses" },
              { number: "95%", label: "Customer Satisfaction" },
              { number: "15min", label: "Average Time Saved" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-gray-900 font-poppins transition-colors duration-300 group-hover:text-orange-500" style={{ color: "#F97316" }}>
                  {stat.number}
                </div>
                <div className="text-sm text-gray-600 font-poppins mt-1">{stat.label}</div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </section>
  )
}