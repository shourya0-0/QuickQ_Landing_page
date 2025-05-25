import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import FAQComponent from './components/faq'

export default function FAQPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <FAQComponent />
      <Footer />
    </main>
  )
}
