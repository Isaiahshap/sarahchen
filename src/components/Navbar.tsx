import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Navbar: React.FC = () => {
  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl tracking-[0.2em] text-charcoal font-cormorant">
            SARAH CHEN
          </Link>
          
          <div className="hidden md:flex items-center space-x-12">
            {[
              'PORTFOLIO',
              'EXHIBITIONS',
              'PRESS',
              'ABOUT'
            ].map((item) => (
              <Link
                key={item}
                to={`/${item.toLowerCase()}`}
                className="text-sm tracking-[0.15em] text-charcoal hover:text-gold/80 transition-colors duration-300"
              >
                {item}
              </Link>
            ))}
            <Link to="/inquire">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-300 text-sm tracking-[0.15em]"
              >
                INQUIRE
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
