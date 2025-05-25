import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"
import QuickQCarousel from "./components/about"


export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <QuickQCarousel />
        <FeaturesSection />
        <CTASection />
      </div>
      <Footer />
    </main>
  )
}
