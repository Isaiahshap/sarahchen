import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-white border-t border-gold/10">
      <div className="max-w-[1400px] mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link to="/" className="block font-cormorant text-2xl text-charcoal">
              SARAH CHEN
            </Link>
            <p className="text-sm text-charcoal/70 leading-relaxed">
              Contemporary abstract expressionist based in New York City, exploring urban landscapes through emotion and color.
            </p>
          </div>

          {/* Navigation Column */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.2em] text-gold mb-6">EXPLORE</h3>
            <div className="flex flex-col space-y-3">
              {[
                { name: 'Portfolio', path: '/portfolio' },
                { name: 'Exhibitions', path: '/exhibitions' },
                { name: 'About', path: '/about' },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-sm text-charcoal/70 hover:text-gold transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Column */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.2em] text-gold mb-6">CONTACT</h3>
            <div className="space-y-3 text-sm text-charcoal/70">
              <p>Studio Visits by Appointment</p>
              <p>Brooklyn, New York</p>
              <motion.a 
                href="mailto:contact@sarahchen.art"
                whileHover={{ color: '#9E8A78' }}
                className="block hover:text-gold transition-colors duration-300"
              >
                contact@sarahchen.art
              </motion.a>
            </div>
          </div>

          {/* Social Column */}
          <div className="space-y-4">
            <h3 className="text-sm tracking-[0.2em] text-gold mb-6">CONNECT</h3>
            <div className="flex space-x-4">
              {[
                { name: 'Instagram', icon: '📷', url: '#' },
                { name: 'LinkedIn', icon: '💼', url: '#' },
                { name: 'Twitter', icon: '🐦', url: '#' }
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  className="w-10 h-10 flex items-center justify-center border border-gold/20 hover:border-gold transition-colors duration-300"
                  aria-label={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright with additional links */}
        <div className="pt-8 border-t border-gold/10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-charcoal/50">
              © {currentYear} Sarah Chen. All rights reserved.
            </p>
            <div className="flex gap-8">
              <Link 
                to="/privacy-policy"
                className="text-sm text-charcoal/50 hover:text-gold transition-colors duration-300"
              >
                Privacy Policy
              </Link>
              <Link 
                to="/terms-of-service"
                className="text-sm text-charcoal/50 hover:text-gold transition-colors duration-300"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>

        <div className="text-center text-charcoal/50 text-sm">
          <p>Demo site by{' '}
            <a 
              href="https://yeshaya.dev" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gold hover:text-gold/80 transition-colors"
            >
              yeshaya.dev
            </a>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
