
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import ContactPage from './ContactPage'
import FAQPage from './FAQPage'
import PricingPage from './PricingPage'
import './index.css'

function App() {
  return (

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/faq" element={<FAQPage />} />
        {/* Add more routes as needed */}
        <Route path="/signup" element={<Landing />} />
      </Routes>

  )
}

export default App
