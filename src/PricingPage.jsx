import React, { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { Check, Star, Sparkles, Gift } from 'lucide-react'
import Navbar from './components/navbar'
import Footer from './components/footer'

export default function PricingPage() {
  const [isVisible, setIsVisible] = useState(false)
  const pageRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 }
    )

    if (pageRef.current) {
      observer.observe(pageRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div 
      ref={pageRef}
      className={`min-h-screen bg-gradient-to-br from-orange-50 to-white transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Navbar />
      
      {/* Hero Section */}
      <div className={`pt-24 pb-16 px-4 md:px-6 lg:px-8 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 bg-[#F97316]/10 rounded-full px-4 py-2 mb-6 transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <Gift className="text-[#F97316] w-5 h-5" />
            <span className="text-[#F97316] font-medium">Limited Time Offer</span>
          </div>
          
          <h1 className={`text-4xl md:text-6xl font-bold text-gray-900 mb-6 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            Our <span className="text-[#F97316]">Pricing</span> is...
          </h1>
          
          <p className={`text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            Well, this is awkward. We're literally giving away our soul here. 
            But hey, you can't put a price on dreams, right? 💭
          </p>
        </div>
      </div>

      {/* Pricing Card */}
      <div className={`px-4 md:px-6 lg:px-8 pb-20 transition-all duration-1000 delay-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="max-w-2xl mx-auto">
          <div className={`relative bg-white rounded-3xl shadow-2xl overflow-hidden border-4 border-[#F97316] transition-all duration-1000 delay-1200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`}>
            {/* Sparkle decoration */}
            <div className="absolute top-4 right-4">
              <Sparkles className="text-[#F97316] w-8 h-8 animate-pulse" />
            </div>
            
            {/* Popular badge */}
            {/* <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="bg-[#F97316] text-white px-6 py-2 rounded-full font-semibold text-sm">
                🔥 UNBELIEVABLY POPULAR 🔥
              </div>
            </div> */}
            
            <div className={`p-8 md:p-12 text-center transition-all duration-1000 delay-1400 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            }`}>
              {/* Plan name */}
              <h2 className={`text-3xl font-bold text-gray-900 mb-4 transition-all duration-1000 delay-1500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                The "We're Just Starting Out" Plan
              </h2>
              
              {/* Price */}
              <div className={`mb-8 transition-all duration-1000 delay-1600 ${
                isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
              }`}>
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-6xl md:text-7xl font-bold text-[#F97316]">FREE</span>
                  <div className="text-left">
                    <div className="text-2xl font-semibold text-gray-600 line-through">$99</div>
                    <div className="text-sm text-gray-500">per month</div>
                  </div>
                </div>
                <p className="text-lg text-gray-600">
                  That's right, ZERO dollars. We're not even asking for your firstborn! 👶
                </p>
              </div>
              
              {/* Features */}
              <div className={`space-y-4 mb-8 transition-all duration-1000 delay-1700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}>
                <h3 className="text-xl font-semibold text-gray-900 mb-6">
                  What you get (and it's honestly embarrassing how much):
                </h3>
                
                {[
                  "Access to our entire platform (yes, all of it)",
                  "Unlimited usage (we're probably losing money here)",
                  "24/7 support (our developers need something to do)",
                  "All future features (we're building them anyway)",
                  "Our eternal gratitude (priceless, really)",
                  "Zero ads (we haven't figured out ads yet)",
                  "Beta features first (you're basically our test subjects)",
                  "A warm fuzzy feeling (side effects may include happiness)"
                ].map((feature, index) => (
                  <div 
                    key={index} 
                    className={`flex items-start gap-3 transition-all duration-700 ${
                      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                    }`}
                    style={{ transitionDelay: `${1800 + index * 100}ms` }}
                  >
                    <Check className="text-[#F97316] w-6 h-6 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-left">{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA Button */}
              <Link
                to="/signup"
                className={`inline-flex items-center gap-2 bg-[#F97316] text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-orange-600 transition-all duration-300 hover:scale-105 shadow-lg ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
                style={{ transitionDelay: '2600ms' }}
              >
                <Star className="w-5 h-5" />
                Get This Ridiculous Deal
              </Link>
              
              <p className={`text-sm text-gray-500 mt-4 transition-all duration-1000 delay-[2700ms] ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'
              }`}>
                No credit card required. No hidden fees. No catch. 
                <br />
                (Seriously, we checked twice)
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="px-4 md:px-6 lg:px-8 pb-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Frequently Asked Questions
            <br />
            <span className="text-lg font-normal text-gray-600">(Mostly people asking "Are you serious?")</span>
          </h2>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                Is this actually free? 🤔
              </h3>
              <p className="text-gray-600">
                Yes! We're in our "please just use our product" phase. We're like that friend 
                who insists on paying for dinner because they're just happy you showed up.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                When will you start charging? 💰
              </h3>
              <p className="text-gray-600">
                When we figure out how to pay our bills. But don't worry, early users like you 
                will get grandfathered into whatever amazing deal we come up with.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                What's the catch? 🪤
              </h3>
              <p className="text-gray-600">
                The only catch is that you'll probably fall in love with our product and then 
                tell all your friends. We're basically using reverse psychology here.
              </p>
            </div>
            
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <h3 className="font-semibold text-lg text-gray-900 mb-3">
                How do you make money? 🤷‍♂️
              </h3>
              <p className="text-gray-600">
                Great question! We're still working on that part. Right now we're powered by 
                ramen noodles, determination, and the occasional energy drink.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
