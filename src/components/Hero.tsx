import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen overflow-hidden bg-cream">
      <motion.div 
        initial={{ scale: 1.2 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src="/hero.webp"
          className="w-full h-full object-cover"
          alt="Sarah Chen's signature artwork - Urban Reflections series"
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col justify-center items-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-center w-full max-w-4xl mx-auto"
        >
          <h1 className="font-cormorant text-4xl sm:text-6xl md:text-7xl lg:text-9xl text-cream mb-4 sm:mb-6 tracking-wider px-2">
            SARAH CHEN
          </h1>
          
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ delay: 1, duration: 1 }}
            className="h-[1px] bg-gold/60 max-w-[200px] mx-auto mb-6 sm:mb-8"
          />

          <p className="text-base sm:text-lg md:text-xl text-cream/90 mb-8 sm:mb-12 tracking-[0.2em] font-light max-w-2xl mx-auto px-4">
            CONTEMPORARY ABSTRACT EXPRESSIONIST
          </p>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="flex justify-center px-4"
          >
            <Link to="/portfolio" className="w-full sm:w-auto">
              <button className="w-full px-8 sm:px-12 py-3 sm:py-4 border border-cream text-cream hover:bg-cream hover:text-charcoal transition-all duration-500 tracking-[0.2em] text-sm">
                VIEW PORTFOLIO
              </button>
            </Link>
          </motion.div>
        </motion.div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-8 sm:bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <div className="flex flex-col items-center">
          <span className="text-cream/80 text-xs tracking-[0.3em] mb-4">EXPLORE</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-[1px] h-8 sm:h-12 bg-cream/40"
          />
        </div>
      </motion.div>
    </section>
  )
}

export default Hero
