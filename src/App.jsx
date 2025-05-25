
import { Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import ContactPage from './ContactPage'
import FAQPage from './FAQPage'
import PricingPage from './PricingPage'
import SignupPage from './SignupPage'
import Error404Page from './Error404Page'
import './index.css'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/contact" element={<ContactPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/faq" element={<FAQPage />} />
      <Route path="/signup" element={<SignupPage />} />
      {/* Catch-all route for 404 errors */}
      <Route path="*" element={<Error404Page />} />
    </Routes>
  )
}

export default App
