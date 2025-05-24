
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Landing from './Landing'
import ContactPage from './ContactPage'
import './index.css'

function App() {
  return (

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/contact" element={<ContactPage />} />
        {/* Add more routes as needed */}
        <Route path="/features" element={<Landing />} />
        <Route path="/pricing" element={<Landing />} />
        <Route path="/signup" element={<Landing />} />
      </Routes>

  )
}

export default App
