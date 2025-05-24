"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

export default function QuickQCarousel() {
  const [activeMode, setActiveMode] = useState("user")
  const [currentStep, setCurrentStep] = useState(0)

  const userSteps = [
    {
      title: "Step 1",
      description:
        "Download the QuickQ app and create your account. Find nearby services and businesses that offer queue management with QuickQ.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Join a queue remotely from anywhere using your smartphone. No need to physically wait in line—simply select your service and reserve your spot.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Track your queue position in real-time and receive accurate wait time estimates. Go about your day knowing exactly when it's your turn.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Receive smart notifications when you're approaching the front of the line. Arrive just in time for your service with zero waiting time.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const hostSteps = [
    {
      title: "Step 1",
      description:
        "Sign up for a QuickQ service provider account and configure your queue settings to match your specific business needs.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Set up your virtual queue with customized options for different services, operating hours, and staff allocation based on demand.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Monitor and manage your queue in real-time with our intuitive dashboard. Adjust service times, send notifications, and track customer flow.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Access valuable analytics and insights to optimize your operations. Make data-driven decisions to improve service efficiency and customer satisfaction.",
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
    <div className="mx-auto px-6 py-20 min-h-screen" style={{ backgroundColor: "#f6efe7" }}>
      {/* Header */}
      <div className="text-center mb-20">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          How does
          <br />
          <span style={{ color: "#F97316" }}>
            QuickQ
          </span> work?
        </h1>

        {/* Mode Toggle */}
        <div className="inline-flex bg-white rounded-full p-2 shadow-lg border border-gray-200">
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
            For User
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
            For Host
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        {/* Left Side - Phone Image with Enhanced Design and More Space */}
        <div className="relative mx-auto lg:mx-0 flex justify-center lg:justify-end mb-16 lg:mb-0">
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
            
            {/* iPhone Image - Professional styling with more space */}
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

        {/* Right Side - Professional Content with Enhanced Progress */}
        <div className="relative pl-8">
          {/* Enhanced Vertical Progress Line */}
          <div className="absolute left-8 top-0 bottom-0 w-1 bg-orange-200 rounded-full">
            <div 
              className="w-full bg-orange-500 rounded-full transition-all duration-500 ease-out"
              style={{ height: `${((currentStep + 1) / currentSteps.length) * 100}%` }}
            ></div>
          </div>

          {/* Professional Progress Dots with Color Progression */}
          <div className="absolute left-8 top-0 bottom-0">
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
                  className={`absolute w-4 h-4 rounded-full border-2 transform -translate-x-1/2 transition-all duration-300 hover:scale-110 ${dotColor}`}
                  style={{ top: `${(index / (currentSteps.length - 1)) * 85}%` }}
                />
              );
            })}
          </div>

          {/* Clean Content Area - No Box */}
          <div className="pl-20">
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
                  onClick={prevStep}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-white border-2 border-gray-200 hover:border-orange-300 hover:bg-orange-50 transition-all duration-200 group"
                  aria-label="Previous step"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-orange-600" />
                  <span className="text-gray-700 font-medium group-hover:text-orange-600">Previous</span>
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
                  onClick={nextStep}
                  className="flex items-center gap-3 px-6 py-3 rounded-lg bg-orange-600 hover:bg-orange-700 text-white transition-all duration-200 group shadow-lg"
                  aria-label="Next step"
                >
                  <span className="font-medium">Next</span>
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
