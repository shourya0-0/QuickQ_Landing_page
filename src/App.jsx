
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import ContactPage from './ContactPage'
import FAQPage from './FAQPage'
import PricingPage from './PricingPage'
import SignupPage from './SignupPage'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/signup" element={<SignupPage />} />
    </Routes>
  )
}

export default App
