import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

const menuItems = [
  'PORTFOLIO',
  'EXHIBITIONS',
  'ABOUT'
]

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        staggerDirection: -1
      }
    },
    open: {
      opacity: 1,
      x: "0%",
      transition: {
        duration: 0.3,
        ease: [0.4, 0, 0.2, 1],
        staggerChildren: 0.1,
        when: "beforeChildren"
      }
    }
  }

  const itemVariants = {
    closed: { opacity: 0, x: 20 },
    open: { opacity: 1, x: 0 }
  }

  return (
    <nav className="fixed w-full z-50 bg-white/95 backdrop-blur-sm">
      <div className="max-w-[1400px] mx-auto px-8 py-6">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-xl tracking-[0.2em] text-charcoal font-cormorant z-50">
            SARAH CHEN
          </Link>
          
          {/* Menu Button */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setIsOpen(!isOpen)}
            className="z-50 w-10 h-10 flex flex-col justify-center items-center"
          >
            <div className="relative w-6 h-5">
              <motion.span
                animate={isOpen ? { 
                  rotate: 45,
                  y: 9,
                  scaleX: 1.1
                } : { 
                  rotate: 0,
                  y: 0,
                  scaleX: 1
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.6, 0.05, -0.01, 0.9]
                }}
                className={`absolute top-0 w-full h-[1px] origin-center transition-colors duration-300 ${isOpen ? 'bg-cream' : 'bg-charcoal'}`}
              />
              <motion.span
                animate={isOpen ? { 
                  opacity: 0,
                  x: -20,
                  filter: "blur(3px)"
                } : { 
                  opacity: 1,
                  x: 0,
                  filter: "blur(0px)"
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeInOut"
                }}
                className={`absolute top-1/2 -translate-y-1/2 w-full h-[1px] transition-colors duration-300 ${isOpen ? 'bg-cream' : 'bg-charcoal'}`}
              />
              <motion.span
                animate={isOpen ? { 
                  rotate: -45,
                  y: -9,
                  scaleX: 1.1
                } : { 
                  rotate: 0,
                  y: 0,
                  scaleX: 1
                }}
                transition={{
                  duration: 0.4,
                  ease: [0.6, 0.05, -0.01, 0.9]
                }}
                className={`absolute bottom-0 w-full h-[1px] origin-center transition-colors duration-300 ${isOpen ? 'bg-cream' : 'bg-charcoal'}`}
              />
            </div>
          </motion.button>
        </div>
      </div>

      {/* Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed top-0 right-0 w-[300px] h-auto bg-charcoal shadow-xl pt-24 pb-8 px-8"
          >
            <motion.div className="space-y-6">
              {menuItems.map((item) => (
                <motion.div
                  key={item}
                  variants={itemVariants}
                >
                  <Link
                    to={`/${item.toLowerCase()}`}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-cormorant text-cream hover:text-gold transition-colors duration-300 block"
                  >
                    {item}
                  </Link>
                </motion.div>
              ))}
              <motion.div variants={itemVariants}>
                <Link
                  to="/inquire"
                  onClick={() => setIsOpen(false)}
                  className="inline-block mt-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-6 py-2 border border-gold text-gold hover:bg-gold hover:text-charcoal transition-all duration-300 text-sm tracking-[0.15em]"
                  >
                    INQUIRE
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}

export default Navbar
