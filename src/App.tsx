import { Routes, Route, useLocation } from 'react-router-dom'
import { Suspense } from 'react'
import ErrorBoundary from './components/ErrorBoundary'
import Loading from './components/Loading'
import Home from './pages/Home'
import Portfolio from './pages/Portfolio'
import Exhibitions from './pages/Exhibitions'
import About from './pages/About'
import Inquire from './pages/Inquire'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import NotFound from './pages/NotFound'
import { useScrollToTop } from './utils/scrollToTop'

function App() {
  const location = useLocation()
  useScrollToTop()

  return (
    <ErrorBoundary>
      <Suspense fallback={<Loading />}>
        <Routes location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/exhibitions" element={<Exhibitions />} />
          <Route path="/about" element={<About />} />
          <Route path="/inquire" element={<Inquire />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </ErrorBoundary>
  )
}

export default App
