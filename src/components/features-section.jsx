import React, { useState } from 'react'
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
  
  const userFeatures = [
    {
      title: "Queue Remotely",
      description: "Join lines from anywhere without physically waiting",
      icon: <UserPlus size={24} className="text-[#F97316]" />,
      stat: "40%",
      statLabel: "Reduction in wait times"
    },
    {
      title: "Real-Time Tracking",
      description: "See your live queue position and estimated wait time",
      icon: <Clock size={24} className="text-[#F97316]" />,
      stat: "10",
      statLabel: "Minutes saved per visit"
    },
    {
      title: "Smart Notifications",
      description: "Receive alerts when you're near your turn in the queue",
      icon: <Bell size={24} className="text-[#F97316]" />,
      stat: "95%",
      statLabel: "Users report less stress"
    },
    {
      title: "History & Analytics",
      description: "Optimize your future experiences based on past visits",
      icon: <LineChart size={24} className="text-[#F97316]" />,
      stat: "15",
      statLabel: "Days of data retention"
    }
  ]

  const providerFeatures = [
    {
      title: "Streamlined Flow",
      description: "Take digital control over customer flow management",
      icon: <Users size={24} className="text-[#F97316]" />,
      stat: "85%",
      statLabel: "Increase in efficiency"
    },
    {
      title: "Customer Insights",
      description: "Access analytics on wait times and peak hours",
      icon: <BarChart3 size={24} className="text-[#F97316]" />,
      stat: "60%",
      statLabel: "More accurate predictions"
    },
    {
      title: "Staff Optimization",
      description: "Assign teams dynamically based on real-time demand",
      icon: <UserCog size={24} className="text-[#F97316]" />,
      stat: "30%",
      statLabel: "Labor cost reduction"
    },
    {
      title: "Custom Setup",
      description: "Tailor queue types and service flow to your needs",
      icon: <Settings size={24} className="text-[#F97316]" />,
      stat: "3",
      statLabel: "Weeks to full integration"
    }
  ]

  return (
    <section className="w-full py-24" style={{ backgroundColor: "#e8d7c9" }}>
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <p className="text-xl font-medium font-poppins text-[#F97316] uppercase tracking-wide mb-2">
            THE QUEUE REVOLUTIONIZED
          </p>
          <h2 className="text-5xl md:text-6xl font-bold font-poppins text-[#4A2828] mb-6">
            ELEVATE EFFICIENCY
          </h2>
        </div>

        {/* Feature Grid - inspired by the image layout */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4 border-2 rounded-3xl" style={{ backgroundColor: "#4A2828", borderColor: "#e8d7c9" }}>
            {/* Left Column - Full Height */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                {activeTab === "users" ? "QUEUE SMARTER" : "SERVE BETTER"}
              </h3>
              <p className="text-base md:text-lg opacity-90">
                {activeTab === "users" 
                  ? "QuickQ is all about subtlety. It's you, but with a better experience, with a focus on reducing wait time frustration."
                  : "Consistency drives results; QuickQ supports long-term growth with a customer-focused approach."}
              </p>
            </div>

            {/* Center Column - Data Point */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center items-center">
              <p className="text-xl mb-6">
                Feel the Shift
              </p>
              <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center mb-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-85">
                    {activeTab === "users" ? "Increase in satisfaction" : "Operational efficiency"}
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                    {activeTab === "users" ? "85%" : "70%"}
                  </span>
                </div>
              </div>
              <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center">
                <div className="flex justify-between items-center">
                  <span className="text-sm opacity-85">
                    Implementation time:
                  </span>
                  <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                    2
                  </span>
                </div>
              </div>
            </div>

            {/* Right Column - Full Height */}
            <div className="bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col justify-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                EVERYDAY EASE
              </h3>
              <p className="text-base md:text-lg opacity-90">
                QuickQ helps create new queuing pathways, leading to lasting efficiency in your daily operations over time.
              </p>
            </div>

            {/* Bottom Row - Center Span */}
            <div className="md:col-span-1 lg:col-span-3 bg-[#4A2828] text-white rounded-2xl p-8 flex flex-col lg:flex-row justify-between items-center">
              <div className="text-center lg:text-left mb-6 lg:mb-0">
                <h3 className="text-3xl md:text-4xl font-bold mb-4 uppercase">
                  NON-DISRUPTIVE INTEGRATION
                </h3>
                <p className="text-base md:text-lg opacity-90">
                  Seamlessly integrate with your existing systems without interrupting your current workflow.
                </p>
              </div>

              <div className="flex flex-col space-y-4">
                <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-85">
                      Completion rate:
                    </span>
                    <span className="text-3xl md:text-4xl font-bold text-[#F97316]">
                      97%
                    </span>
                  </div>
                </div>
                <div className="border border-[#F97316] rounded-full w-full max-w-xs py-3 px-5 text-center">
                  <div className="flex justify-between items-center">
                    <span className="text-sm opacity-85">
                      Noticeable shifts in days:
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
        <div className="flex justify-center space-x-4 mt-10">
          <button
            onClick={() => setActiveTab("users")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "users"
                ? "bg-[#4A2828] text-white shadow-md"
                : "bg-white text-[#4A2828] hover:bg-gray-100"
            }`}
          >
            For Users
          </button>
          <button
            onClick={() => setActiveTab("providers")}
            className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
              activeTab === "providers"
                ? "bg-[#4A2828] text-white shadow-md"
                : "bg-white text-[#4A2828] hover:bg-gray-100"
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
                className="bg-[#4A2828] text-white rounded-2xl p-6 flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="bg-white/10 rounded-full p-4 w-16 h-16 flex items-center justify-center">
                  {React.cloneElement(feature.icon, { className: "text-[#F97316]", size: 32 })}
                </div>
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-white/80 mb-4">{feature.description}</p>
                  <div className="border border-[#F97316] rounded-full py-2 px-4 inline-flex justify-between min-w-[150px]">
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
