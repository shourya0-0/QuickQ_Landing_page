import { Link } from 'react-router-dom'
import { Home, ArrowLeft, Search, Coffee } from 'lucide-react'

function Error404Page() {
  const funnyMessages = [
    "Oops! This page is playing hide and seek... and it's winning! 🫣",
    "404: Page not found. But hey, you found this awesome error page! 🎉",
    "Looks like you've discovered our secret invisible page! ✨",
    "This page went to get some coffee and never came back ☕",
    "Houston, we have a problem... but at least we have humor! 🚀"
  ]

  const randomMessage = funnyMessages[Math.floor(Math.random() * funnyMessages.length)]

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-orange-100 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Large 404 */}
        <div className="relative mb-8">
          <h1 className="text-[150px] md:text-[200px] font-bold text-orange-200 select-none">
            404
          </h1>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-6xl animate-bounce">
              🤔
            </div>
          </div>
        </div>

        {/* Humorous message */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
          {randomMessage}
        </h2>

        <p className="text-lg text-gray-600 mb-8 max-w-md mx-auto">
          Don't worry, even the best explorers get lost sometimes. Let's get you back to familiar territory!
        </p>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Link
            to="/"
            className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <Home size={20} />
            Take Me Home
          </Link>
          
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 border-2 border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
          >
            <ArrowLeft size={20} />
            Go Back
          </button>
        </div>

        {/* Fun suggestions */}
        <div className="bg-white rounded-xl p-6 shadow-lg border border-orange-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 flex items-center justify-center gap-2">
            <Coffee size={24} className="text-orange-500" />
            While you're here, why not...
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <span className="text-orange-500">🎯</span>
              <span>Check out our features</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">💰</span>
              <span>View pricing plans</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-orange-500">❓</span>
              <span>Read our FAQ</span>
            </div>
          </div>

          <div className="mt-6 flex flex-wrap justify-center gap-3">
            <Link
              to="/pricing"
              className="text-orange-500 hover:text-orange-600 underline text-sm"
            >
              Pricing
            </Link>
            <Link
              to="/faq"
              className="text-orange-500 hover:text-orange-600 underline text-sm"
            >
              FAQ
            </Link>
            <Link
              to="/contact"
              className="text-orange-500 hover:text-orange-600 underline text-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Easter egg */}
        <div className="mt-8 text-xs text-gray-400">
          <p>Error Code: OOPS_WRONG_TURN_BUDDY 🗺️</p>
          <p className="mt-1">If you keep seeing this page, maybe try turning it off and on again? 😄</p>
        </div>
      </div>
    </div>
  )
}

export default Error404Page
