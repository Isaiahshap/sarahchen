import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

interface Props {
  children: React.ReactNode
}

interface State {
  hasError: boolean
  error?: Error
}

class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    // You can log the error to an error reporting service here
    console.error('Error caught by boundary:', error, errorInfo)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-cream flex items-center justify-center px-4">
          <div className="max-w-[600px] text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h1 className="font-cormorant text-5xl text-charcoal mb-4">
                Something Went Wrong
              </h1>
              <p className="text-charcoal/70 mb-8">
                We apologize for the inconvenience. Please try refreshing the page or return home.
              </p>
              <div className="flex justify-center gap-6">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => window.location.reload()}
                  className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-300"
                >
                  REFRESH PAGE
                </motion.button>
                <Link to="/">
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-8 py-3 bg-gold text-cream hover:bg-gold/90 transition-all duration-300"
                  >
                    RETURN HOME
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export default ErrorBoundary 