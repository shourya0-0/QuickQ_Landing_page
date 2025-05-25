"use client"

import { useState, useEffect, useRef } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function QuickQCarousel() {
  const [activeMode, setActiveMode] = useState("user")
  const [currentStep, setCurrentStep] = useState(0)
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

  const userSteps = [
    {
      title: "Step 1",
      description:
        "Download QuickQ and join the anti-queue revolution! Find nearby businesses that have already escaped the dark ages of traditional waiting. 📱",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Join a queue from your couch, your car, or that weird spot in the grocery store where you pretend to read ingredients. No more awkward line hovering! 🛋️",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Watch your queue position like it's the most exciting reality TV show ever. Spoiler alert: you always win in the end! 📺",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Get notified when it's showtime! Arrive fashionably on-time like the queue genius you've become. Zero waiting, maximum smugness. ✨",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const hostSteps = [
    {
      title: "Step 1",
      description:
        "Sign up and become a queue management wizard! Configure your settings like you're customizing your perfect coffee order—except this affects your entire business. ☕",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Set up your virtual queue with more options than a fancy restaurant menu. Different services, hours, staff allocation—you're basically conducting an orchestra! 🎼",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Monitor your empire from our dashboard that's so intuitive, even your least tech-savvy employee will feel like a digital native. Real-time everything, stress-free management! 🖥️",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Dive into analytics that make you look like a business genius at meetings. Make decisions so smart, your competition will wonder what your secret is! 📊",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const currentSteps = activeMode === "user" ? userSteps : hostSteps

  const nextStep = () => {
    setCurrentStep((prev) => (prev + 1) % currentSteps.length)
  }

  const prevStep = () => {
    setCurrentStep((prev) => (prev - 1 + currentSteps.length) % currentSteps.length)
  }

  const goToStep = (stepIndex) => {
    setCurrentStep(stepIndex)
  }

  return (
    <div ref={sectionRef} className={`mx-auto px-6 py-20 min-h-screen transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} style={{ backgroundColor: "#ffffff" }}>
      {/* Header */}
      <div className={`text-center mb-20 transition-all duration-1000 delay-200 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          How does
          <br />
          <span style={{ color: "#F97316" }}>
            QuickQ
          </span> work? 🤓
        </h1>

        {/* Mode Toggle */}
        <div className={`inline-flex bg-white rounded-full p-2 shadow-lg border border-gray-200 transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
        }`}>
          <button
            onClick={() => {
              setActiveMode("user")
              setCurrentStep(0)
            }}
            className={`px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeMode === "user" ? "text-white shadow-md" : "text-gray-600 hover:text-gray-900"
            }`}
            style={activeMode === "user" ? { backgroundColor: "#F97316" } : {}}
          >
            For Queue Escapees 🏃‍♂️
          </button>
          <button
            onClick={() => {
              setActiveMode("host")
              setCurrentStep(0)
            }}
            className={`px-10 py-4 rounded-full text-sm font-semibold transition-all duration-300 ${
              activeMode === "host" ? "text-white shadow-md" : "text-gray-600 hover:text-gray-900"
            }`}
            style={activeMode === "host" ? { backgroundColor: "#F97316" } : {}}
          >
            For Queue Masters 🎭
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className={`max-w-7xl mx-auto transition-all duration-1000 delay-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}>
        <div className="grid grid-cols-3 items-center">
          {/* Left Side - Phone Image */}
          <div className="flex justify-center">
            <div className="relative w-[400px] h-[450px]">
              {/* Background Ellipses - Simplified */}
              <div className="absolute inset-0 flex items-center justify-center">
                <img
                  src="/Ellipses.png"
                  alt=""
                  className="w-[450px] h-[450px] object-contain opacity-15"
                />
              </div>
              
              {/* Secondary background circle with primary color */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-[320px] h-[320px] rounded-full opacity-20" style={{ backgroundColor: "#F97316" }}></div>
              </div>
              
              {/* iPhone Image - Professional styling */}
              <div className="relative z-20 flex items-center justify-center h-full">
                <div className="relative">
                  <img
                    src="/iPhone.png"
                    alt="iPhone showing QuickQ app"
                    className="w-[220px] h-auto object-contain drop-shadow-xl"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Center - Progress Line and Dots */}
          <div className="flex justify-center">
            <div className="relative flex flex-col items-center justify-center h-[450px] w-16">
              {/* Enhanced Vertical Progress Line */}
              <div 
                className="absolute w-1 bg-orange-200 rounded-full left-1/2 transform -translate-x-1/2"
                style={{ 
                  top: "7.5%", 
                  height: "85%" 
                }}
              >
                <div 
                  className="w-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
                  style={{ 
                    height: `${(currentStep / (currentSteps.length - 1)) * 100}%` 
                  }}
                ></div>
              </div>

              {/* Professional Progress Dots with Color Progression */}
              <div className="absolute w-full h-full">
                {currentSteps.map((_, index) => {
                  let dotColor = "";
                  if (index < currentStep) {
                    dotColor = "bg-orange-600 border-orange-600 shadow-orange-200"; // Completed - darkest
                  } else if (index === currentStep) {
                    dotColor = "bg-orange-500 border-orange-500 shadow-orange-300 ring-4 ring-orange-200"; // Current - medium
                  } else {
                    dotColor = "bg-orange-200 border-orange-300"; // Future - lightest
                  }
                  
                  return (
                    <button
                      key={index}
                      onClick={() => goToStep(index)}
                      className={`absolute w-4 h-4 rounded-full border-2 left-1/2 transform -translate-x-1/2 transition-all duration-300 ${dotColor}`}
                      style={{ top: `${(index / (currentSteps.length - 1)) * 85 + 7.5}%` }}
                    />
                  );
                })}
              </div>
            </div>
          </div>

        {/* Right Side - Professional Content */}
        <div className="flex-1 pl-2 pr-20">
          <div className="py-4">
            {/* Professional Step Badge */}
            <div className="inline-flex items-center mb-6">
              <span className="px-4 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg">
                {currentSteps[currentStep].title}
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {activeMode === "user" ? "User Experience" : "Business Management"}
            </h2>
            
            <p className="text-gray-700 text-xl leading-relaxed mb-12 font-medium max-w-lg">
              {currentSteps[currentStep].description}
            </p>

            {/* Professional Navigation */}
            <div className="flex items-center justify-between max-w-lg">
              <button
                onClick={currentStep > 0 ? prevStep : undefined}
                disabled={currentStep === 0}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentStep === 0 
                    ? "bg-gray-200 cursor-not-allowed" 
                    : "bg-white border-2 border-orange-300 hover:bg-orange-50 hover:border-orange-400"
                }`}
                aria-label="Previous step"
              >
                <ChevronLeft className={`w-6 h-6 ${
                  currentStep === 0 ? "text-gray-400" : "text-orange-600"
                }`} />
              </button>
              
              {/* Clean Step Indicators */}
              <div className="flex gap-3">
                {currentSteps.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => goToStep(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentStep 
                        ? "bg-orange-600 w-8" 
                        : index < currentStep
                          ? "bg-orange-400"
                          : "bg-orange-200 hover:bg-orange-300"
                    }`}
                  />
                ))}
              </div>
              
              <button
                onClick={currentStep < currentSteps.length - 1 ? nextStep : undefined}
                disabled={currentStep === currentSteps.length - 1}
                className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-200 ${
                  currentStep === currentSteps.length - 1
                    ? "bg-gray-200 cursor-not-allowed"
                    : "bg-orange-600 hover:bg-orange-700 shadow-lg"
                }`}
                aria-label="Next step"
              >
                <ChevronRight className={`w-6 h-6 ${
                  currentStep === currentSteps.length - 1 ? "text-gray-400" : "text-white"
                }`} />
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}
