import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface ContactModalProps {
  isOpen: boolean
  onClose: () => void
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      >
        <motion.div
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0.95, opacity: 0 }}
          onClick={(e) => e.stopPropagation()}
          className="bg-cream max-w-2xl w-full p-8 md:p-12"
        >
          <h2 className="font-cormorant text-4xl text-charcoal mb-8">Get in Touch</h2>
          
          <form className="space-y-6">
            <div className="space-y-2">
              <label className="block text-sm tracking-[0.2em] text-charcoal/70">NAME</label>
              <input
                type="text"
                className="w-full p-3 bg-white/50 border border-gold/20 focus:border-gold outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm tracking-[0.2em] text-charcoal/70">EMAIL</label>
              <input
                type="email"
                className="w-full p-3 bg-white/50 border border-gold/20 focus:border-gold outline-none transition-colors"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm tracking-[0.2em] text-charcoal/70">SUBJECT</label>
              <select className="w-full p-3 bg-white/50 border border-gold/20 focus:border-gold outline-none transition-colors">
                <option value="artwork">Artwork Inquiry</option>
                <option value="commission">Commission Request</option>
                <option value="exhibition">Exhibition Opportunity</option>
                <option value="press">Press Inquiry</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <label className="block text-sm tracking-[0.2em] text-charcoal/70">MESSAGE</label>
              <textarea
                rows={4}
                className="w-full p-3 bg-white/50 border border-gold/20 focus:border-gold outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex justify-end space-x-4 pt-4">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={onClose}
                className="px-6 py-2 text-charcoal/70 hover:text-charcoal transition-colors text-sm tracking-[0.15em]"
              >
                CANCEL
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="px-8 py-2 bg-gold text-cream hover:bg-gold/90 transition-colors text-sm tracking-[0.15em]"
              >
                SEND MESSAGE
              </motion.button>
            </div>
          </form>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default ContactModal 