import React, { useState, useEffect, useRef } from 'react'
import { 
  UserPlus, 
  Clock, 
  Bell, 
  LineChart, 
  Users, 
  BarChart3, 
  UserCog, 
  Settings
} from 'lucide-react'

export default function FeaturesSection() {
  const [activeTab, setActiveTab] = useState("users")
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
  
  const userFeatures = [
    {
      title: "Queue Remotely",
      description: "Join queues from your couch, coffee shop, or that awkward family dinner—skip the line, not the service",
      icon: <UserPlus size={24} className="text-[#F97316]" />,
      stat: "40%",
      statLabel: "Less awkward small talk"
    },
    {
      title: "Real-Time Tracking",
      description: "Watch your queue position like it's your favorite TV show finale (but less dramatic)",
      icon: <Clock size={24} className="text-[#F97316]" />,
      stat: "10",
      statLabel: "Minutes you can spend doing literally anything else"
    },
    {
      title: "Smart Notifications",
      description: "We'll ping you when it's time, because we're clingy like that (but in a helpful way)",
      icon: <Bell size={24} className="text-[#F97316]" />,
      stat: "95%",
      statLabel: "Chance you'll actually show up on time"
    },
    {
      title: "History & Insights",
      description: "Track your waiting patterns and become a queue optimization ninja 🥷",
      icon: <LineChart size={24} className="text-[#F97316]" />,
      stat: "15%",
      statLabel: "Increase in life satisfaction"
    }
  ]

  const providerFeatures = [
    {
      title: "Streamlined Operations",
      description: "Turn your chaotic queues into a well-oiled machine (oil not included, satisfaction guaranteed)",
      icon: <Users size={24} className="text-[#F97316]" />,
      stat: "85%",
      statLabel: "Reduction in 'Where's the line?' questions"
    },
    {
      title: "Customer Insights",
      description: "Get analytics so detailed, you'll know your customers' waiting habits better than their therapist",
      icon: <BarChart3 size={24} className="text-[#F97316]" />,
      stat: "60%",
      statLabel: "Better predictions than your horoscope"
    },
    {
      title: "Staff Optimization",
      description: "Deploy your team like a chess master, except the pieces are humans and the board is your business",
      icon: <UserCog size={24} className="text-[#F97316]" />,
      stat: "30%",
      statLabel: "Reduction in staff standing around"
    },
    {
      title: "Customizable Setup",
      description: "Configure everything to match your business like a perfectly tailored suit (but for queues)",
      icon: <Settings size={24} className="text-[#F97316]" />,
      stat: "3",
      statLabel: "Days to become a queue wizard"
    }
  ]

  return (
    <section ref={sectionRef} className={`w-full py-24 transition-all duration-1000 ${
      isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
    }`} style={{ backgroundColor: "#f6efe7" }}>
      <div className="container mx-auto px-4">
        <div className={`text-center mb-8 transition-all duration-1000 delay-200 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
        }`}>
          <p className="text-xl font-medium font-poppins text-[#F97316] uppercase tracking-wide mb-2 transition-all duration-300">
            THE QUEUE REVOLUTION (FINALLY!)
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-[#4A2828] mb-6 tracking-tight">
            WHY QUICKQ!? 🤔
          </h2>
        </div>

        {/* Feature Grid - inspired by the image layout */}
        <div className={`max-w-5xl mx-auto transition-all duration-1000 delay-400 ${
          isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'
        }`}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border-2 rounded-3xl shadow-xl transition-all duration-500" style={{ backgroundColor: "#4A2828", borderColor: "#e8d7c9" }}>
            {/* Left Column - Full Height */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center transition-all duration-500">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                {activeTab === "users" ? "QUEUE LIKE A GENIUS" : "SERVE LIKE A WIZARD"}
              </h3>
              <p className="text-base md:text-lg opacity-90">
                {activeTab === "users" 
                  ? "Life's too short to spend it staring at other people's backs. We give you superpowers—the ability to queue without actually queuing!"
                  : "Transform your business from a chaotic mess into a smooth operation. It's like having a personal assistant, but for queues."}
              </p>
            </div>

            {/* Center Column - Data Point */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center items-center transition-all duration-500">
              <p className="text-xl mb-6 font-medium">
                The Magic Numbers ✨
              </p>
              <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center mb-4 transition-all duration-300 hover:bg-[#F97316]/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-85">
                    {activeTab === "users" ? "Happiness boost:" : "Efficiency wizardry:"}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                    {activeTab === "users" ? "85%" : "70%"}
                  </span>
                </div>
              </div>
              <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center transition-all duration-300 hover:bg-[#F97316]/10">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-85">
                    {activeTab === "users" ? "Setup time (seriously):" : "Deployment speed:"}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                    2d
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Full Height */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center transition-all duration-500">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                EVERYDAY MAGIC
              </h3>
              <p className="text-base md:text-lg opacity-90">
                We've sprinkled some digital fairy dust on the ancient art of waiting in line. The result? You get your time back, businesses run smoother, and everyone's happier. It's basically a win-win-win situation! 🎭
              </p>
            </div>

            {/* Bottom Row - Center Span */}
            <div className="md:col-span-1 lg:col-span-3 bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col lg:flex-row justify-between items-center transition-all duration-300">
              <div className="text-center lg:text-left mb-6 lg:mb-0 lg:pr-6">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                  PLUG & PLAY PERFECTION
                </h3>
                <p className="text-base md:text-lg opacity-90 max-w-lg">
                  We slide into your existing systems smoother than a penguin on ice. Zero drama, zero downtime, zero "ugh, not another training session!" 🐧
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center hover:bg-[#F97316]/10 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-85">
                      Success rate (we're proud):
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                      97%
                    </span>
                  </div>
                </div>
                <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center hover:bg-[#F97316]/10 transition-colors duration-300">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-85">
                      Visible results in:
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                      14
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tab Controls */}
        <div className={`flex justify-center space-x-4 mt-10 transition-all duration-1000 delay-600 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
        }`}>
          <button
            onClick={() => setActiveTab("users")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
              activeTab === "users"
                ? "bg-[#4A2828] text-white shadow-lg"
                : "bg-white text-[#4A2828] hover:bg-gray-100 hover:shadow-md"
            }`}
          >
            For Users
          </button>
          <button
            onClick={() => setActiveTab("providers")}
            className={`px-8 py-3 rounded-full font-medium transition-all duration-500 ${
              activeTab === "providers"
                ? "bg-[#4A2828] text-white shadow-lg"
                : "bg-white text-[#4A2828] hover:bg-gray-100 hover:shadow-md"
            }`}
          >
            For Service Providers
          </button>
        </div>

        {/* Feature Details - Additional Cards */}
        <div className="mt-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(activeTab === "users" ? userFeatures : providerFeatures).map((feature) => (
              <div
                key={feature.title}
                className="bg-[#4A2828] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6 transition-all duration-500"
              >
                <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center transition-all duration-300 hover:bg-white/20">
                  {React.cloneElement(feature.icon, { className: "text-[#F97316]", size: 32 })}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80 mb-4">{feature.description}</p>
                  <div className="border border-[#F97316] rounded-full py-2 px-4 inline-flex justify-between min-w-[150px] transition-all duration-300 hover:bg-[#F97316]/10">
                    <span className="text-sm opacity-85">Impact:</span>
                    <span className="text-2xl font-bold text-[#F97316]">{feature.stat}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
