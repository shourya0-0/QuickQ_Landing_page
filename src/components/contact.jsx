import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    source: "",
  })
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSourceChange = (value) => {
    setFormData((prev) => ({ ...prev, source: value }))
    setIsDropdownOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your form submission logic here
  }

  return (
    <section className="w-full py-20" style={{ backgroundColor: "#f6efe7" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-20 lg:gap-28">
          {/* Left Side - Contact Form */}
          <div className="space-y-8">
            <div>
              <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Get in{" "}
                <span style={{ color: "#F97316" }}>
                  Touch
                </span>
              </h1>
              <p className="mt-6 text-xl text-gray-700 leading-relaxed">
                Ready to revolutionize your queue experience? Contact our team to learn more about QuickQ 
                and how we can help transform your business operations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  id="name"
                  name="name"
                  placeholder="Full Name *"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-lg bg-white transition-all duration-200"
                  style={{ 
                    focusRingColor: "#F97316",
                    ':focus': { borderColor: "#F97316" }
                  }}
                  onFocus={(e) => e.target.style.borderColor = "#F97316"}
                  onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                />
              </div>

              <div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Email Address *"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-lg bg-white transition-all duration-200"
                  onFocus={(e) => e.target.style.borderColor = "#F97316"}
                  onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                />
              </div>

              <div>
                <input
                  id="phone"
                  name="phone"
                  placeholder="Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:border-transparent text-lg bg-white transition-all duration-200"
                  onFocus={(e) => e.target.style.borderColor = "#F97316"}
                  onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                />
              </div>

              <div className="relative">
                <button
                  type="button"
                  className="w-full px-6 py-4 text-left border-2 border-gray-200 rounded-xl bg-white flex justify-between items-center focus:outline-none focus:ring-2 focus:border-transparent text-lg transition-all duration-200"
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  onFocus={(e) => e.target.style.borderColor = "#F97316"}
                  onBlur={(e) => e.target.style.borderColor = "#d1d5db"}
                >
                  <span className={formData.source ? "text-gray-900" : "text-gray-500"}>
                    {formData.source || "How did you find us?"}
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 text-gray-400 transition-transform duration-200 ${
                      isDropdownOpen ? "transform rotate-180" : ""
                    }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>

                {isDropdownOpen && (
                  <div className="absolute z-10 w-full mt-2 border border-gray-200 rounded-xl shadow-xl bg-white">
                    <ul className="py-2">
                      {[
                        "Search Engine (Google, Bing, etc.)",
                        "Social Media",
                        "Friend/Colleague Referral",
                        "Online Advertisement",
                        "Industry Event/Conference",
                        "Other"
                      ].map((option) => (
                        <li
                          key={option}
                          className="px-6 py-3 hover:bg-orange-50 cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-150"
                          onClick={() => handleSourceChange(option)}
                          style={{ ':hover': { backgroundColor: "#F97316", opacity: 0.1 } }}
                        >
                          {option}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="w-full text-white py-4 rounded-xl transition-all duration-200 font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                style={{ 
                  backgroundColor: "#F97316",
                  ':hover': { backgroundColor: "#e06010" }
                }}
                onMouseEnter={(e) => e.target.style.backgroundColor = "#e06010"}
                onMouseLeave={(e) => e.target.style.backgroundColor = "#F97316"}
              >
                SEND MESSAGE
              </button>
            </form>

            {/* Contact Information */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
              <div className="flex items-center gap-4">
                <div className="rounded-full border-2 border-gray-300 p-3 bg-white shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-gray-700"
                  >
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600">PHONE</div>
                  <div className="text-lg font-semibold" style={{ color: "#F97316" }}>
                    +1 (555) 123-4567
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full border-2 border-gray-300 p-3 bg-white shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-gray-700"
                  >
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600">EMAIL</div>
                  <a 
                    href="mailto:contact@quickq.com" 
                    className="text-lg font-semibold hover:underline transition-colors duration-200"
                    style={{ color: "#F97316" }}
                  >
                    contact@quickq.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="rounded-full border-2 border-gray-300 p-3 bg-white shadow-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="h-6 w-6 text-gray-700"
                  >
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                </div>
                <div>
                  <div className="text-sm font-bold uppercase tracking-wide text-gray-600">OFFICE</div>
                  <div className="text-lg font-semibold text-gray-700">
                    San Francisco, CA
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Map */}
          <div className="h-full min-h-[500px] md:min-h-[700px] rounded-2xl overflow-hidden shadow-xl border-4" style={{ borderColor: "#F97316" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019284165487!2d-122.41941988468171!3d37.77492927975852!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808dc07d6c45%3A0x70e4cf3e23b67b01!2sSan%20Francisco%2C%20CA!5e0!3m2!1sen!2sus!4v1703123456789!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QuickQ Office Location"
              className="w-full h-full"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  )
}
