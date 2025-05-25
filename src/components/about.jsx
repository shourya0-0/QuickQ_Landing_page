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
      title: "Step 1: Scan or Scram",
      description:
        "📍 Scan the QR at the shop (like a ninja) 🛰️ Or join virtually through the app (no pants required). Why stand in a line when you can outsmart it?",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2: Pick & Click",
      description:
        "Select the service you want. Want a haircut? A doctor's visit? A temple blessing? Pick your destiny like it's a Netflix show.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3: Chill & Track",
      description:
        "Sit back, sip chai, watch your queue position move like stocks (but in your favor). Notifications? You bet. We'll buzz you like a clingy ex when your turn's near.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4: Get Served, Like a Boss",
      description:
        "You show up just in time, get served, and leave legends behind. Oh, and drop a review if you're feeling poetic.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const hostSteps = [
    {
      title: "Step 1: Claim Your Throne",
      description:
        "Register your business, tell us what you do, and boom — you're part of the no-line revolution.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2: Set the Stage",
      description:
        "Define your services, timing, and hours like a boss. Then, generate your magical QR code — the portal to less chaos.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3: Rule the Queue",
      description:
        "Track visitors in real-time, call them when ready, and keep your floor looking Zen. No shouting, no \"who's next?\", just smooth digital flow.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4: Analytics & Applause",
      description:
        "Get nerdy with graphs — see peak hours, customer behavior, and where your time is going. Make data-driven decisions and look smart while doing it.",
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
      <style jsx>{`
        @keyframes scanLine {
          0% { transform: translateY(0); }
          50% { transform: translateY(80px); }
          100% { transform: translateY(0); }
        }
      `}</style>
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
              
              {/* iPhone Image - Professional styling with Interactive Screen */}
              <div className="relative z-20 flex items-center justify-center h-full">
                <div className="relative">
                  <img
                    src="/iPhone.png"
                    alt="iPhone showing QuickQ app"
                    className="w-[220px] h-auto object-contain drop-shadow-xl"
                  />
                  
                  {/* Interactive Screen Content */}
                  <div className="absolute top-[15%] left-[12%] w-[76%] h-[70%] overflow-hidden rounded-[25px] bg-gradient-to-b from-gray-50 to-white">
                    {/* User Steps Screen Content */}
                    {activeMode === "user" && (
                      <>
                        {/* Step 1: QR Scan Screen */}
                        {currentStep === 0 && (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4 relative">
                            <div className="absolute top-4 left-4 right-4 h-8 bg-white rounded-lg shadow-sm flex items-center justify-center">
                              <div className="w-2 h-2 bg-green-500 rounded-full mr-2"></div>
                              <span className="text-xs font-medium text-gray-700">QuickQ Scanner</span>
                            </div>
                            
                            {/* Interactive QR Code */}
                            <div className="mt-8 relative cursor-pointer group" onClick={() => setCurrentStep(1)}>
                              <div className="w-20 h-20 border-2 border-orange-500 rounded-lg grid grid-cols-8 gap-[1px] p-1 group-hover:border-orange-600 transition-colors">
                                {[...Array(64)].map((_, i) => (
                                  <div key={i} className={`w-1 h-1 ${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'} rounded-[0.5px]`}></div>
                                ))}
                              </div>
                              
                              {/* Scanning Animation */}
                              <div className="absolute inset-0 border-2 border-orange-500 rounded-lg group-hover:border-orange-600 transition-colors">
                                <div className="w-full h-0.5 bg-orange-500 group-hover:bg-orange-600 transition-colors" style={{
                                  animation: 'scanLine 2s ease-in-out infinite'
                                }}></div>
                              </div>
                              
                              {/* Hover Effect */}
                              <div className="absolute inset-0 bg-orange-500 bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-200"></div>
                            </div>
                            
                            <p className="text-xs text-gray-600 mt-3 text-center">Tap to scan QR code</p>
                            <div className="mt-2 px-3 py-1 bg-orange-100 rounded-full">
                              <span className="text-xs font-medium text-orange-600">Camera Ready!</span>
                            </div>
                            
                            {/* OR Divider */}
                            <div className="flex items-center w-full mt-4 mb-3">
                              <div className="flex-1 h-px bg-gray-300"></div>
                              <span className="px-2 text-xs text-gray-500 font-medium">OR</span>
                              <div className="flex-1 h-px bg-gray-300"></div>
                            </div>
                            
                            {/* Search Services Virtually Button */}
                            <button 
                              onClick={() => setCurrentStep(1)}
                              className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95 transform"
                            >
                              🔍 Search Services Virtually
                            </button>
                          </div>
                        )}

                        {/* Step 2: Service Selection */}
                        {currentStep === 1 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800 mb-2">Select Service</h3>
                            </div>
                            
                            {/* Service Options */}
                            <div className="space-y-2">
                              {['✂️ Haircut', '🩺 Doctor Visit', '🙏 Temple Visit'].map((service, i) => (
                                <button 
                                  key={i} 
                                  onClick={() => setCurrentStep(2)}
                                  className={`w-full p-3 rounded-lg border-2 transition-all duration-200 text-left ${
                                    i === 0 ? 'border-orange-500 bg-orange-50' : 'border-gray-200 bg-white hover:border-orange-300 hover:bg-orange-25'
                                  } active:scale-95 transform`}
                                >
                                  <div className="flex items-center justify-between">
                                    <span className="text-xs font-medium text-gray-700">{service}</span>
                                    {i === 0 && <div className="w-2 h-2 bg-orange-500 rounded-full"></div>}
                                  </div>
                                </button>
                              ))}
                            </div>
                            
                            <button 
                              onClick={() => setCurrentStep(2)}
                              className="mt-4 w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95 transform"
                            >
                              Join Queue
                            </button>
                          </div>
                        )}

                        {/* Step 3: Queue Tracking */}
                        {currentStep === 2 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800">Queue Status</h3>
                            </div>
                            
                            {/* Position Display */}
                            <div className="text-center mb-4">
                              <div className="text-2xl font-bold text-orange-500">3</div>
                              <p className="text-xs text-gray-600">People ahead</p>
                            </div>
                            
                            {/* Progress Bar */}
                            <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
                              <div className="bg-orange-500 h-2 rounded-full transition-all duration-1000" style={{width: '70%'}}></div>
                            </div>
                            
                            {/* Queue Visual */}
                            <div className="space-y-2">
                              {[1, 2, 3].map((pos, i) => (
                                <button
                                  key={i}
                                  onClick={() => i === 2 && setCurrentStep(3)}
                                  className={`w-full flex items-center p-2 rounded-lg transition-all duration-200 ${
                                    i === 2 ? 'bg-orange-100 border border-orange-300 cursor-pointer hover:bg-orange-150' : 'bg-gray-50'
                                  } ${i === 2 ? 'active:scale-95 transform' : ''}`}
                                >
                                  <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold ${
                                    i === 2 ? 'bg-orange-500 text-white' : 'bg-gray-300 text-gray-600'
                                  }`}>
                                    {pos}
                                  </div>
                                  <span className="ml-2 text-xs text-gray-600">
                                    {i === 2 ? 'You' : `Person ${pos}`}
                                  </span>
                                  {i === 2 && <span className="ml-auto text-xs text-orange-600 font-medium">Tap when ready</span>}
                                </button>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Step 4: Ready to Serve */}
                        {currentStep === 3 && (
                          <div className="w-full h-full flex flex-col items-center justify-center p-4">
                            <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mb-4">
                              <span className="text-2xl">✓</span>
                            </div>
                            
                            <h3 className="text-sm font-bold text-gray-800 mb-2">You're Ready!</h3>
                            <p className="text-xs text-gray-600 text-center mb-4">Please proceed to the counter</p>
                            
                            <div className="w-full bg-green-100 border border-green-300 rounded-lg p-3 mb-4">
                              <p className="text-xs text-green-700 text-center font-medium">Your turn is now!</p>
                            </div>
                            
                            <div className="flex space-x-2 w-full">
                              <button 
                                onClick={() => setCurrentStep(0)}
                                className="flex-1 px-3 py-2 bg-orange-500 hover:bg-orange-600 text-white text-xs rounded-lg transition-colors duration-200 active:scale-95 transform"
                              >
                                I'm Here
                              </button>
                              <button 
                                className="flex-1 px-3 py-2 bg-gray-200 hover:bg-gray-300 text-gray-700 text-xs rounded-lg transition-colors duration-200 active:scale-95 transform"
                              >
                                Need 2 min
                              </button>
                            </div>
                          </div>
                        )}
                      </>
                    )}

                    {/* Host Steps Screen Content */}
                    {activeMode === "host" && (
                      <>
                        {/* Step 1: Business Registration */}
                        {currentStep === 0 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800">Register Business</h3>
                            </div>
                            
                            <div className="space-y-3">
                              <div className="space-y-1">
                                <label className="text-xs text-gray-600">Business Name</label>
                                <button 
                                  onClick={() => setCurrentStep(1)}
                                  className="w-full bg-white border border-gray-300 rounded-lg p-2 text-left hover:border-orange-400 transition-colors duration-200 active:scale-95 transform"
                                >
                                  <span className="text-xs text-gray-500">Hair Studio Pro</span>
                                  <div className="w-1 h-3 bg-orange-500 animate-pulse inline-block ml-1"></div>
                                </button>
                              </div>
                              
                              <div className="space-y-1">
                                <label className="text-xs text-gray-600">Category</label>
                                <button 
                                  onClick={() => setCurrentStep(1)}
                                  className="w-full bg-orange-50 border border-orange-300 rounded-lg p-2 text-left hover:bg-orange-100 transition-colors duration-200 active:scale-95 transform"
                                >
                                  <span className="text-xs text-orange-700">Salon & Beauty</span>
                                </button>
                              </div>
                              
                              <button 
                                onClick={() => setCurrentStep(1)}
                                className="w-full bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-4 rounded-lg text-center transition-colors duration-200 active:scale-95 transform"
                              >
                                Join Revolution
                              </button>
                            </div>
                          </div>
                        )}

                        {/* Step 2: Setup Services */}
                        {currentStep === 1 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800">Setup Services</h3>
                            </div>
                            
                            <div className="space-y-2 mb-4">
                              {['Haircut - 30min', 'Hair Color - 120min', 'Styling - 45min'].map((service, i) => (
                                <button 
                                  key={i} 
                                  onClick={() => setCurrentStep(2)}
                                  className="w-full flex items-center justify-between p-2 bg-white border border-gray-200 rounded-lg hover:border-green-300 hover:bg-green-25 transition-all duration-200 active:scale-95 transform"
                                >
                                  <span className="text-xs text-gray-700">{service}</span>
                                  <div className="w-4 h-4 bg-green-500 rounded-full flex items-center justify-center group-hover:bg-green-600 transition-colors">
                                    <span className="text-xs text-white">✓</span>
                                  </div>
                                </button>
                              ))}
                            </div>
                            
                            {/* QR Code Generation */}
                            <button 
                              onClick={() => setCurrentStep(2)}
                              className="w-full bg-orange-50 border border-orange-200 rounded-lg p-3 text-center hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 active:scale-95 transform"
                            >
                              <div className="w-12 h-12 bg-white border-2 border-orange-300 rounded-lg mx-auto mb-2 grid grid-cols-6 gap-[1px] p-1">
                                {[...Array(36)].map((_, i) => (
                                  <div key={i} className={`w-full h-full ${Math.random() > 0.5 ? 'bg-gray-900' : 'bg-white'} rounded-[0.5px]`}></div>
                                ))}
                              </div>
                              <p className="text-xs text-orange-700 font-medium">QR Generated! Tap to continue</p>
                            </button>
                          </div>
                        )}

                        {/* Step 3: Dashboard Management */}
                        {currentStep === 2 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800">Live Dashboard</h3>
                            </div>
                            
                            {/* Stats */}
                            <div className="grid grid-cols-2 gap-2 mb-3">
                              <button 
                                onClick={() => setCurrentStep(3)}
                                className="bg-blue-50 border border-blue-200 rounded-lg p-2 text-center hover:bg-blue-100 hover:border-blue-300 transition-all duration-200 active:scale-95 transform"
                              >
                                <div className="text-lg font-bold text-blue-600">12</div>
                                <p className="text-xs text-blue-600">In Queue</p>
                              </button>
                              <button 
                                onClick={() => setCurrentStep(3)}
                                className="bg-green-50 border border-green-200 rounded-lg p-2 text-center hover:bg-green-100 hover:border-green-300 transition-all duration-200 active:scale-95 transform"
                              >
                                <div className="text-lg font-bold text-green-600">5</div>
                                <p className="text-xs text-green-600">Served</p>
                              </button>
                            </div>
                            
                            {/* Current Customer */}
                            <button 
                              onClick={() => setCurrentStep(3)}
                              className="w-full bg-orange-50 border border-orange-200 rounded-lg p-2 mb-2 hover:bg-orange-100 hover:border-orange-300 transition-all duration-200 active:scale-95 transform"
                            >
                              <div className="flex items-center justify-between">
                                <span className="text-xs font-medium text-orange-700">Now Serving: John D.</span>
                                <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                              </div>
                            </button>
                            
                            {/* Next in Line */}
                            <div className="space-y-1">
                              {['Sarah M.', 'Mike R.', 'Lisa K.'].map((name, i) => (
                                <button 
                                  key={i} 
                                  onClick={() => setCurrentStep(3)}
                                  className="w-full flex items-center justify-between p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-all duration-200 active:scale-95 transform"
                                >
                                  <span className="text-xs text-gray-600">{i + 2}. {name}</span>
                                  <div className="text-xs text-gray-500">~{(i + 1) * 15}min</div>
                                </button>
                              ))}
                            </div>
                            
                            {/* Call Next Button */}
                            <button 
                              onClick={() => setCurrentStep(3)}
                              className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95 transform"
                            >
                              📞 Call Next Customer
                            </button>
                          </div>
                        )}

                        {/* Step 4: Analytics */}
                        {currentStep === 3 && (
                          <div className="w-full h-full p-4">
                            <div className="bg-white rounded-lg shadow-sm p-3 mb-3">
                              <h3 className="text-sm font-bold text-gray-800">Analytics</h3>
                            </div>
                            
                            {/* Chart Visualization */}
                            <button 
                              onClick={() => setCurrentStep(0)}
                              className="w-full bg-white border border-gray-200 rounded-lg p-3 mb-3 hover:border-orange-300 hover:bg-orange-25 transition-all duration-200 active:scale-95 transform"
                            >
                              <p className="text-xs text-gray-600 mb-2">Today's Traffic (Tap to reset)</p>
                              <div className="flex items-end space-x-1 h-12">
                                {[40, 65, 30, 80, 55, 90, 45].map((height, i) => (
                                  <div 
                                    key={i} 
                                    className="flex-1 bg-orange-300 hover:bg-orange-400 rounded-t transition-colors duration-200" 
                                    style={{height: `${height}%`}}
                                  ></div>
                                ))}
                              </div>
                            </button>
                            
                            {/* Key Metrics */}
                            <div className="space-y-2">
                              <button 
                                onClick={() => setCurrentStep(0)}
                                className="w-full flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-green-50 hover:border-green-200 border border-transparent transition-all duration-200 active:scale-95 transform"
                              >
                                <span className="text-xs text-gray-600">Avg Wait Time</span>
                                <span className="text-xs font-bold text-green-600">8 min ↓</span>
                              </button>
                              <button 
                                onClick={() => setCurrentStep(0)}
                                className="w-full flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-orange-50 hover:border-orange-200 border border-transparent transition-all duration-200 active:scale-95 transform"
                              >
                                <span className="text-xs text-gray-600">Customer Satisfaction</span>
                                <span className="text-xs font-bold text-orange-600">4.8⭐ ↑</span>
                              </button>
                              <button 
                                onClick={() => setCurrentStep(0)}
                                className="w-full flex justify-between items-center p-2 bg-gray-50 rounded-lg hover:bg-blue-50 hover:border-blue-200 border border-transparent transition-all duration-200 active:scale-95 transform"
                              >
                                <span className="text-xs text-gray-600">Peak Hour</span>
                                <span className="text-xs font-bold text-blue-600">2-4 PM 📈</span>
                              </button>
                            </div>
                            
                            {/* Export/Share Button */}
                            <button 
                              onClick={() => setCurrentStep(0)}
                              className="w-full mt-3 bg-orange-500 hover:bg-orange-600 text-white text-xs font-medium py-2 px-4 rounded-lg transition-colors duration-200 active:scale-95 transform"
                            >
                              📊 Export Report
                            </button>
                          </div>
                        )}
                      </>
                    )}
                  </div>
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
                Step {currentStep + 1}
              </span>
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-6 leading-tight">
              {currentSteps[currentStep].title.split(': ')[1] || currentSteps[currentStep].title}
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
