import React, { useState } from 'react';
import { Download, Building2, ArrowRight, Sparkles, Users, Clock } from 'lucide-react';

const CTASection = () => {
  const [hoveredButton, setHoveredButton] = useState(null);

  const FloatingElement = ({ children, delay = 0, className = "" }) => (
    <div 
      className={`animate-bounce ${className}`} 
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </div>
  );

  return (
    <section className="relative py-24 overflow-hidden" style={{ backgroundColor: "#e8d7c9" }}>
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-[#4A2828]/5"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#F97316]/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#4A2828]/10 rounded-full blur-3xl animate-pulse delay-700"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-[600px] h-[600px] bg-[#4A2828]/5 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Floating Elements */}
      <FloatingElement delay={0} className="absolute top-20 left-20">
        <div className="w-16 h-16 bg-[#4A2828] rounded-2xl opacity-10 rotate-12"></div>
      </FloatingElement>
      <FloatingElement delay={1} className="absolute top-32 right-32">
        <div className="w-12 h-12 bg-[#F97316] rounded-full opacity-10"></div>
      </FloatingElement>
      <FloatingElement delay={0.5} className="absolute bottom-32 left-32">
        <div className="w-20 h-20 bg-[#4A2828] rounded-3xl opacity-10 rotate-45"></div>
      </FloatingElement>

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        {/* Header */}
        <div className="mb-12">
          <div className="inline-flex items-center px-6 py-3 bg-[#4A2828]/10 backdrop-blur-sm rounded-full border border-[#4A2828]/20 mb-8">
            <Sparkles className="w-5 h-5 text-[#F97316] mr-2 animate-pulse" />
            <span className="text-[#4A2828] font-medium font-['Inter']">Ready to Transform Your Experience?</span>
          </div>
          
          <h2 className="text-6xl font-bold text-[#4A2828] mb-6 font-['Poppins'] leading-tight uppercase">
            Ready to Queue 
            <span className="bg-gradient-to-r from-[#F97316] to-[#F97316] bg-clip-text text-transparent"> Smarter</span>?
          </h2>
          
          <p className="text-xl text-[#4A2828]/80 max-w-3xl mx-auto leading-relaxed font-['Inter']">
            Join thousands of users who have already saved millions of hours. Transform your queuing experience today.
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {[
            { icon: <Users className="w-8 h-8" />, number: "500K+", label: "Active Users", color: "bg-[#4A2828]" },
            { icon: <Building2 className="w-8 h-8" />, number: "2K+", label: "Service Providers", color: "bg-[#4A2828]" },
            { icon: <Clock className="w-8 h-8" />, number: "2M+", label: "Hours Saved", color: "bg-[#4A2828]" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="p-6 bg-[#4A2828] backdrop-blur-lg rounded-2xl border border-[#4A2828]/20 hover:bg-[#5A3838] transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="inline-flex p-3 rounded-xl bg-white/10 mb-4">
                <div className="text-[#F97316]">
                  {stat.icon}
                </div>
              </div>
              <div className="text-3xl font-bold text-white mb-2 font-['Poppins']">
                {stat.number}
              </div>
              <div className="text-white/80 font-['Inter']">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
          {/* Download App Button */}
          <button
            className="group relative overflow-hidden px-8 py-4 bg-[#4A2828] text-white rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-[#4A2828]/25 font-['Inter']"
            onMouseEnter={() => setHoveredButton('download')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className="relative z-10 flex items-center">
              <Download className={`w-6 h-6 mr-3 transition-transform duration-300 ${hoveredButton === 'download' ? 'animate-bounce' : ''}`} />
              Download the App
              <ArrowRight className={`w-5 h-5 ml-3 transition-transform duration-300 ${hoveredButton === 'download' ? 'translate-x-2' : ''}`} />
            </div>
            <div className="absolute inset-0 bg-[#5A3838] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#F97316]/30 rounded-full opacity-0 group-hover:opacity-100 animate-ping"></div>
          </button>

          {/* Become Provider Button */}
          <button
            className="group relative overflow-hidden px-8 py-4 bg-transparent border-2 border-[#4A2828] text-[#4A2828] rounded-2xl font-semibold text-lg transition-all duration-300 hover:scale-105 hover:bg-[#4A2828]/10 hover:border-[#4A2828] backdrop-blur-sm font-['Inter']"
            onMouseEnter={() => setHoveredButton('provider')}
            onMouseLeave={() => setHoveredButton(null)}
          >
            <div className="relative z-10 flex items-center">
              <Building2 className={`w-6 h-6 mr-3 transition-transform duration-300 ${hoveredButton === 'provider' ? 'animate-bounce' : ''}`} />
              Become a Provider
              <ArrowRight className={`w-5 h-5 ml-3 transition-transform duration-300 ${hoveredButton === 'provider' ? 'translate-x-2' : ''}`} />
            </div>
            <div className="absolute inset-0 bg-[#4A2828]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>

        {/* Trust Indicators */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-[#4A2828] font-['Inter'] font-medium">
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2 animate-pulse"></div>
            <span>100% Free to Download</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2 animate-pulse"></div>
            <span>Available on iOS & Android</span>
          </div>
          <div className="flex items-center">
            <div className="w-2 h-2 bg-[#F97316] rounded-full mr-2 animate-pulse"></div>
            <span>Instant Setup</span>
          </div>
        </div>

        {/* Bottom Decoration */}
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-transparent via-[#4A2828]/20 to-transparent h-px"></div>
          <div className="flex items-center justify-center">
            <div className="w-16 h-16 bg-[#4A2828] rounded-2xl flex items-center justify-center transform rotate-12 opacity-20">
              <Sparkles className="w-8 h-8 text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;