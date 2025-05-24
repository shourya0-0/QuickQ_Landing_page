import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"
import FeaturesSection from "./components/features-section"
import CTASection from "./components/cta-section"
import Footer from "./components/footer"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
        <FeaturesSection />
        {/* <CTASection /> */}
      </div>
      <Footer />
    </main>
  )
}
