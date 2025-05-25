import React, { useState, useEffect, useRef } from 'react'
import Navbar from "./components/navbar"
import ContactForm from "./components/contact"
import Footer from "./components/footer"

export default function ContactPage() {
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
    <main 
      ref={pageRef}
      className={`min-h-screen transition-all duration-1000 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
    >
      <Navbar />
      <div className={`pt-24 transition-all duration-1000 delay-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      }`}>
        <ContactForm />
      </div>
      <Footer />
    </main>
  )
}
