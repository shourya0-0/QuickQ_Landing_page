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
        "Revolutionizing logistics with smart, efficient, and eco-friendly fleet management solutions. Revolutionizing logistics with smart, efficient, and eco-friendly fleet management solutions",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Connect with verified hosts in your area and browse available parking spaces with real-time availability updates and instant booking confirmation.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Secure your booking with our integrated payment system and receive detailed directions to your reserved parking spot with GPS navigation.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Arrive at your destination, park with confidence, and enjoy seamless check-in and check-out processes with our mobile app.",
      image: "/placeholder.svg?height=400&width=300",
    },
  ]

  const hostSteps = [
    {
      title: "Step 1",
      description:
        "List your available parking spaces with detailed descriptions, photos, and flexible pricing options to maximize your earning potential.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 2",
      description:
        "Manage bookings through our intuitive dashboard with real-time notifications and automated scheduling to streamline your hosting experience.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 3",
      description:
        "Communicate with guests through our secure messaging system and provide support throughout their parking experience.",
      image: "/placeholder.svg?height=400&width=300",
    },
    {
      title: "Step 4",
      description:
        "Receive payments automatically through our secure platform and track your earnings with detailed analytics and reporting tools.",
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
    <div className=" mx-auto px-4 py-12 bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          How does
          <br />
          <span className="text-blue-900">QuickQ work?</span>
        </h1>

        {/* Mode Toggle */}
        <div className="inline-flex bg-gray-200 rounded-full p-1">
          <button
            onClick={() => {
              setActiveMode("user")
              setCurrentStep(0)
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeMode === "user" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            For User
          </button>
          <button
            onClick={() => {
              setActiveMode("host")
              setCurrentStep(0)
            }}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeMode === "host" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            For Host
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Side - Image */}
        <div className="relative">
          <div className="relative bg-white rounded-3xl p-8 shadow-lg">
            <img
              src={currentSteps[currentStep].image || "/placeholder.svg"}
              alt={`${currentSteps[currentStep].title} illustration`}
              className="w-full h-80 object-cover rounded-2xl"
            />
            {/* Decorative dots */}
            <div className="absolute -top-4 -left-4 w-3 h-3 bg-yellow-400 rounded-full"></div>
            <div className="absolute top-12 -right-6 w-2 h-2 bg-red-400 rounded-full"></div>
            <div className="absolute -bottom-6 left-8 w-4 h-4 bg-blue-400 rounded-full"></div>
            <div className="absolute bottom-16 -right-4 w-2 h-2 bg-green-400 rounded-full"></div>
          </div>
        </div>

        {/* Right Side - Content with Progress */}
        <div className="relative">
          {/* Vertical Progress Line */}
          <div className="absolute left-0 top-0 bottom-0 w-px bg-gray-300"></div>

          {/* Progress Dots */}
          <div className="absolute left-0 top-0 bottom-0">
            {currentSteps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToStep(index)}
                className={`absolute w-3 h-3 rounded-full border-2 transform -translate-x-1/2 transition-all duration-200 hover:scale-110 ${
                  index === currentStep
                    ? "bg-blue-600 border-blue-600"
                    : index < currentStep
                      ? "bg-gray-400 border-gray-400"
                      : "bg-white border-gray-300"
                }`}
                style={{ top: `${(index / (currentSteps.length - 1)) * 100}%` }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="pl-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">{currentSteps[currentStep].title}</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-8">{currentSteps[currentStep].description}</p>

            {/* Navigation Arrows */}
            <div className="flex gap-4">
              <button
                onClick={prevStep}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-5 h-5 text-gray-600" />
              </button>
              <button
                onClick={nextStep}
                className="p-2 rounded-full border border-gray-300 hover:bg-gray-50 transition-colors duration-200"
                aria-label="Next step"
              >
                <ChevronRight className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Step Indicator */}
      <div className="flex justify-center mt-12 gap-2">
        {currentSteps.map((_, index) => (
          <button
            key={index}
            onClick={() => goToStep(index)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              index === currentStep ? "bg-blue-600" : "bg-gray-300"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
