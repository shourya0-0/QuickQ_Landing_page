import Navbar from "./components/navbar"
import HeroSection from "./components/hero-section"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24">
        <HeroSection />
      </div>
    </main>
  )
}
