import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Exhibitions from './pages/Exhibitions'
import Press from './pages/Press'
import About from './pages/About'
import Inquire from './pages/Inquire'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/portfolio" element={<Portfolio />} />
      <Route path="/exhibitions" element={<Exhibitions />} />
      <Route path="/press" element={<Press />} />
      <Route path="/about" element={<About />} />
      <Route path="/inquire" element={<Inquire />} />
      <Route path="/privacy-policy" element={<PrivacyPolicy />} />
      <Route path="/terms-of-service" element={<TermsOfService />} />
    </Routes>
  )
}

export default App
