import React from 'react'
import { motion } from 'framer-motion'

const Loading: React.FC = () => {
  return (
    <div className="min-h-screen bg-cream flex items-center justify-center">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-center"
      >
        <div className="mb-8">
          <motion.div
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="w-16 h-16 border-2 border-gold/30 border-t-gold rounded-full animate-spin"
          />
        </div>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-sm tracking-[0.2em] text-charcoal/70"
        >
          LOADING
        </motion.p>
      </motion.div>
    </div>
  )
}

export default Loading 