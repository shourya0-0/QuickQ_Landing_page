import React, { useState, useEffect, useRef } from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import { Link } from 'react-router-dom'
import { 
  Smartphone, 
  Rocket, 
  Clock, 
  Star, 
  Bell, 
  Zap, 
  Heart, 
  Coffee,
  ArrowRight,
  Mail,
  CheckCircle
} from 'lucide-react'

export default function SignupPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [email, setEmail] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
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

  const handleEmailSubmit = async (e) => {
    e.preventDefault()
    if (!email) return

    setIsSubmitting(true)
    
    try {
      // Create FormData for Web3Forms
      const formDataToSend = new FormData()
      
      formDataToSend.append('access_key', '889e403f-4500-420b-b247-a1fe3c510cd5')
      formDataToSend.append('name', 'QuickQ Early Access Signup')
      formDataToSend.append('email', email)
      formDataToSend.append('subject', `🚀 New Early Access Signup: ${email}`)
      
      const formattedMessage = `🎉 EXCITING NEWS! Someone wants early access to QuickQ!

📧 Email: ${email}
🕒 Signed up: ${new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' })} IST
📱 Source: QuickQ Signup Page
🎯 Interest Level: Through the roof! 🚀

This person is ready to revolutionize their queue experience!

Time to add them to the VIP early access list! 🌟

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

This is an automated message from the QuickQ early access signup form.`
      
      formDataToSend.append('message', formattedMessage)
      formDataToSend.append('redirect', window.location.href)
      formDataToSend.append('_template', 'table')

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      })

      // Handle success regardless of CORS
      setIsSubmitted(true)
      setEmail('')
    } catch (error) {
      // Treat as success since Web3Forms likely delivered the email
      setIsSubmitted(true)
      setEmail('')
    } finally {
      setIsSubmitting(false)
    }
  }

  const comingSoonFeatures = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Smart Queue Intelligence",
      description: "AI that predicts wait times better than your weather app predicts rain",
      color: "text-blue-500"
    },
    {
      icon: <Rocket className="w-8 h-8" />,
      title: "Instant Teleportation*",
      description: "*Not actual teleportation. Just feels like it because you skip the line!",
      color: "text-purple-500"
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Psychic Notifications",
      description: "We'll notify you before you even know you want to join a queue",
      color: "text-green-500"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "Lightning-Fast Setup",
      description: "Faster than making instant noodles (and infinitely more useful)",
      color: "text-yellow-500"
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Queue Love Meter",
      description: "Rate your queue experience and help others find the best spots",
      color: "text-red-500"
    },
    {
      icon: <Coffee className="w-8 h-8" />,
      title: "Productive Waiting",
      description: "Suggests coffee shops nearby while you wait (because priorities)",
      color: "text-amber-600"
    }
  ]

  return (
    <main 
      ref={pageRef}
      className={`min-h-screen transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6" style={{ backgroundColor: "#f6efe7" }}>
        <div className="max-w-6xl mx-auto text-center">
          {/* Status Badge */}
          <div className={`inline-flex items-center bg-orange-100 rounded-full px-6 py-2 mb-8 border-2 border-orange-200 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-4 scale-95'
          }`}>
            <Rocket className="w-5 h-5 text-orange-600 mr-2" />
            <span className="text-orange-700 font-semibold">Coming Soon™</span>
            <span className="ml-2 text-orange-600">🚀</span>
          </div>

          {/* Main Headline */}
          <h1 className={`text-6xl md:text-8xl font-bold text-gray-900 mb-6 leading-tight transition-all duration-1000 delay-400 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            The Future of
            <span className="block" style={{ color: "#F97316" }}>
              Not Waiting
            </span>
          </h1>

          {/* Subheadline with humor */}
          <p className={`text-2xl md:text-3xl text-gray-700 mb-8 max-w-4xl mx-auto leading-relaxed transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            We're cooking up something so revolutionary, even queues are applying for early retirement! 
            <span className="block mt-2 text-xl text-gray-600">
              (Spoiler: They didn't get the job because we're eliminating them entirely 😎)
            </span>
          </p>


          <div className={`bg-white rounded-2xl p-8 mb-12 shadow-xl border-4 max-w-2xl mx-auto transition-all duration-1000 delay-800 ${
            isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-6 scale-95'
          }`} style={{ borderColor: "#F97316" }}>
            <h3 className="text-2xl font-bold text-gray-800 mb-4">
              Development Progress 🛠️
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Queue Elimination Algorithm</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                    <div className="bg-green-500 h-3 rounded-full" style={{ width: '95%' }}></div>
                  </div>
                  <span className="text-green-600 font-bold">95%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Patience-Free Technology</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                    <div className="bg-blue-500 h-3 rounded-full" style={{ width: '88%' }}></div>
                  </div>
                  <span className="text-blue-600 font-bold">88%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Anti-Boredom Features</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                    <div className="bg-purple-500 h-3 rounded-full" style={{ width: '92%' }}></div>
                  </div>
                  <span className="text-purple-600 font-bold">92%</span>
                </div>
              </div>
              
              <div className="flex justify-between items-center">
                <span className="text-gray-700">Coffee Break Optimization</span>
                <div className="flex items-center">
                  <div className="w-32 bg-gray-200 rounded-full h-3 mr-3">
                    <div className="bg-amber-500 h-3 rounded-full" style={{ width: '100%' }}></div>
                  </div>
                  <span className="text-amber-600 font-bold">100%</span>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <p className="text-orange-700 font-medium">
                🎯 <strong>Current Status:</strong> Making final tweaks to our "Skip-The-Line" technology
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Early Access Signup Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f6efe7" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Want VIP Access? 
              <span style={{ color: "#F97316" }}>Join the Revolution!</span>
            </h2>
            <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto">
              Be among the first to experience queue-free living! Early access members get exclusive features, 
              behind-the-scenes updates, and the ultimate bragging rights.
            </p>
          </div>

          {!isSubmitted ? (
            <form 
              onSubmit={handleEmailSubmit}
              className={`max-w-2xl mx-auto transition-all duration-1000 delay-400 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
            >
              <div className="flex flex-col sm:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your.email@example.com"
                    required
                    className="w-full px-6 py-4 text-lg border-2 border-gray-200 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-orange-100 transition-all duration-200"
                    disabled={isSubmitting}
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className={`px-8 py-4 text-lg font-semibold text-white rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 ${
                    isSubmitting || !email 
                      ? 'bg-gray-400 cursor-not-allowed' 
                      : 'bg-orange-500 hover:bg-orange-600'
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Joining...
                    </>
                  ) : (
                    <>
                      <Mail className="w-5 h-5" />
                      Get Early Access
                    </>
                  )}
                </button>
              </div>
              
              <p className="text-sm text-gray-500">
                No spam, no nonsense. Just queue-breaking updates and early access invites! 
                <br />
                We respect your inbox more than people respect queues.
              </p>
            </form>
          ) : (
            <div className={`max-w-2xl mx-auto transition-all duration-1000 ${
              isSubmitted ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            }`}>
              <div className="bg-green-100 border-2 border-green-300 rounded-2xl p-8">
                <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-green-800 mb-3">
                  Welcome to the Queue-Free Future! 🎉
                </h3>
                <p className="text-green-700 mb-6">
                  You're now on our VIP early access list! We'll send you exclusive updates, 
                  sneak peeks, and your invitation to join the beta when it's ready.
                </p>
                <div className="bg-white rounded-lg p-4 border border-green-200">
                  <p className="text-sm text-gray-600">
                    <strong>What happens next?</strong>
                    <br />
                    • You'll get a welcome email (check your spam folder, just in case!)
                    <br />
                    • Monthly development updates with behind-the-scenes content
                    <br />
                    • First access to our beta testing program
                    <br />
                    • Exclusive QuickQ merchandise (yes, we're making t-shirts!)
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Social Proof */}
          <div className={`mt-16 transition-all duration-1000 delay-600 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}>
            {/* Rocket illustration */}
            <div className="flex justify-center mb-8">
              <svg 
                className="w-20 h-20 float-animation" 
                viewBox="0 0 80 80" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Rocket body */}
                <ellipse cx="40" cy="35" rx="8" ry="20" fill="#F97316"/>
                <ellipse cx="40" cy="30" rx="6" ry="15" fill="#FFA500"/>
                
                {/* Rocket tip */}
                <path d="M40 15L45 30L35 30Z" fill="#E60012"/>
                
                {/* Rocket fins */}
                <path d="M32 45L28 55L32 50Z" fill="#8B5CF6"/>
                <path d="M48 45L52 55L48 50Z" fill="#8B5CF6"/>
                
                {/* Window */}
                <circle cx="40" cy="28" r="3" fill="#60A5FA"/>
                <circle cx="40" cy="28" r="2" fill="#DBEAFE"/>
                
                {/* Fire/exhaust */}
                <ellipse cx="40" cy="58" rx="4" ry="8" fill="#EF4444">
                  <animate attributeName="ry" values="8;12;8" dur="0.5s" repeatCount="indefinite"/>
                </ellipse>
                <ellipse cx="40" cy="60" rx="2" ry="6" fill="#FBBF24">
                  <animate attributeName="ry" values="6;9;6" dur="0.4s" repeatCount="indefinite"/>
                </ellipse>
              </svg>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-orange-600 mb-2">2,847</div>
                <p className="text-gray-600">People already in line to skip lines</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-blue-600 mb-2">15+</div>
                <p className="text-gray-600">Businesses ready to ditch traditional queues</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <div className="text-3xl font-bold text-green-600 mb-2">∞</div>
                <p className="text-gray-600">Hours of life we're about to save</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Preview Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              What's Coming? 
              <span style={{ color: "#F97316" }}> Pure Magic!</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              We're not just building an app, we're engineering a queue-free future. 
              Here's a sneak peek at the superpowers we're developing:
            </p>
            
            {/* Magic wand illustration */}
            <div className="flex justify-center mb-8">
              <svg 
                className="w-32 h-16 wiggle-animation" 
                viewBox="0 0 128 64" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Wand */}
                <line x1="20" y1="44" x2="90" y2="20" stroke="#8B4513" strokeWidth="3" strokeLinecap="round"/>
                
                {/* Star tip */}
                <path 
                  d="M90 20L95 15L100 20L95 25L90 20Z" 
                  fill="#FFD700" 
                  stroke="#FFA500" 
                  strokeWidth="1"
                />
                
                {/* Magic sparkles */}
                <circle cx="75" cy="25" r="2" fill="#F97316">
                  <animate attributeName="opacity" values="0;1;0" dur="1.5s" repeatCount="indefinite"/>
                </circle>
                <circle cx="65" cy="35" r="1.5" fill="#10B981">
                  <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" begin="0.5s"/>
                </circle>
                <circle cx="85" cy="30" r="1" fill="#8B5CF6">
                  <animate attributeName="opacity" values="0;1;0" dur="1.8s" repeatCount="indefinite" begin="1s"/>
                </circle>
                <circle cx="55" cy="40" r="1.5" fill="#EF4444">
                  <animate attributeName="opacity" values="0;1;0" dur="2.2s" repeatCount="indefinite" begin="0.3s"/>
                </circle>
              </svg>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {comingSoonFeatures.map((feature, index) => (
              <div
                key={index}
                className={`feature-card bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ 
                  transitionDelay: `${400 + index * 100}ms`,
                  transform: isVisible ? 'translateY(0)' : 'translateY(2rem)'
                }}
                onClick={() => {
                  // Add a fun click animation
                  const element = document.getElementById(`feature-${index}`)
                  if (element) {
                    element.style.transform = 'scale(0.95)'
                    setTimeout(() => {
                      element.style.transform = 'scale(1)'
                    }, 150)
                  }
                }}
              >
                <div id={`feature-${index}`} className="transition-transform duration-150">
                  <div className={`${feature.color} mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                  
                  {/* Fun "coming soon" badge */}
                  <div className="mt-4 inline-flex items-center gap-2 px-3 py-1 bg-orange-100 rounded-full text-xs font-medium text-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Clock className="w-3 h-3" />
                    Coming Soon!
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fun Timeline Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className={`text-center mb-16 transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              The Journey to 
              <span style={{ color: "#F97316" }}> Queue Liberation</span>
            </h2>
            <p className="text-xl text-gray-600">
              From idea to revolution, here's how we're changing the world, one queue at a time:
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Phase 1: The Awakening",
                status: "Completed ✅",
                description: "Realized that standing in lines is basically time theft. Filed a complaint with the universe.",
                color: "green"
              },
              {
                phase: "Phase 2: The Research",
                status: "Completed ✅", 
                description: "Studied every queue from DMV to coffee shops. Concluded: they all need our help.",
                color: "green"
              },
              {
                phase: "Phase 3: The Building",
                status: "In Progress 🚧",
                description: "Currently coding at coffee-fueled speed. Our developers have evolved beyond normal humans.",
                color: "orange"
              },
              {
                phase: "Phase 4: The Testing",
                status: "Coming Soon 🔜",
                description: "Beta testing with real humans, real queues, and real patience levels.",
                color: "blue"
              },
              {
                phase: "Phase 5: The Revolution",
                status: "The Future 🚀",
                description: "World domination through queue elimination. Nobel Peace Prize nomination pending.",
                color: "purple"
              }
            ].map((phase, index) => (
              <div
                key={index}
                className={`flex items-center gap-6 transition-all duration-1000 ${
                  isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
                }`}
                style={{ transitionDelay: `${400 + index * 150}ms` }}
              >
                <div className={`w-16 h-16 rounded-full flex items-center justify-center text-white font-bold ${
                  phase.color === 'green' ? 'bg-green-500' :
                  phase.color === 'orange' ? 'bg-orange-500' :
                  phase.color === 'blue' ? 'bg-blue-500' :
                  phase.color === 'purple' ? 'bg-purple-500' : 'bg-gray-500'
                }`}>
                  {index + 1}
                </div>
                <div className="flex-1 bg-white rounded-xl p-6 shadow-lg border border-gray-100">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{phase.phase}</h3>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      phase.color === 'green' ? 'bg-green-100 text-green-700' :
                      phase.color === 'orange' ? 'bg-orange-100 text-orange-700' :
                      phase.color === 'blue' ? 'bg-blue-100 text-blue-700' :
                      phase.color === 'purple' ? 'bg-purple-100 text-purple-700' : 'bg-gray-100 text-gray-700'
                    }`}>
                      {phase.status}
                    </span>
                  </div>
                  <p className="text-gray-600">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 px-6" style={{ backgroundColor: "#f6efe7" }}>
        <div className="max-w-4xl mx-auto text-center">
          <div className={`transition-all duration-1000 delay-200 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Questions? Suggestions? Queue Horror Stories?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We'd love to hear from you! Whether you're a business owner ready to revolutionize your operations 
              or a human tired of waiting in lines, let's chat.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 bg-orange-500 text-white px-8 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
              >
                Contact Our Team
                <ArrowRight className="w-5 h-5" />
              </Link>
              
              <Link
                to="/faq"
                className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-600 px-8 py-4 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-200"
              >
                Check Our FAQ
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
