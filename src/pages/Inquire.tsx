import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion, AnimatePresence } from 'framer-motion'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const Inquire: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: 'artwork',
    message: ''
  })
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email'
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) return

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500))
      setSubmitStatus('success')
      setFormData({ name: '', email: '', subject: 'artwork', message: '' })
    } catch (error) {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[800px] mx-auto px-8">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-cormorant text-5xl text-charcoal mb-16 text-center"
          >
            Get in Touch
          </motion.h1>

          <AnimatePresence mode="wait">
            {submitStatus === 'success' ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-green-50 p-8 text-center"
              >
                <h2 className="font-cormorant text-2xl text-green-800 mb-4">Message Sent Successfully</h2>
                <p className="text-green-700 mb-6">Thank you for reaching out. I'll get back to you soon.</p>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSubmitStatus('idle')}
                  className="px-6 py-2 border border-green-600 text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 text-sm tracking-[0.15em]"
                >
                  SEND ANOTHER MESSAGE
                </motion.button>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white/50 p-8 md:p-12"
              >
                {submitStatus === 'error' && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="mb-8 p-4 bg-red-50 text-red-700 text-center"
                  >
                    An error occurred. Please try again.
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="space-y-2">
                    <label className="block text-sm tracking-[0.2em] text-charcoal/70">NAME</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white border ${errors.name ? 'border-red-400' : 'border-gold/20'} focus:border-gold outline-none transition-colors`}
                    />
                    {errors.name && (
                      <span className="text-sm text-red-500">{errors.name}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm tracking-[0.2em] text-charcoal/70">EMAIL</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className={`w-full p-3 bg-white border ${errors.email ? 'border-red-400' : 'border-gold/20'} focus:border-gold outline-none transition-colors`}
                    />
                    {errors.email && (
                      <span className="text-sm text-red-500">{errors.email}</span>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm tracking-[0.2em] text-charcoal/70">SUBJECT</label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="w-full p-3 bg-white border border-gold/20 focus:border-gold outline-none transition-colors"
                    >
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
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className={`w-full p-3 bg-white border ${errors.message ? 'border-red-400' : 'border-gold/20'} focus:border-gold outline-none transition-colors resize-none`}
                    />
                    {errors.message && (
                      <span className="text-sm text-red-500">{errors.message}</span>
                    )}
                  </div>

                  <div className="pt-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      type="submit"
                      disabled={isSubmitting}
                      className={`w-full py-4 bg-gold text-cream transition-all duration-300 text-sm tracking-[0.15em] ${isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:bg-gold/90'}`}
                    >
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            )}
          </AnimatePresence>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="mt-16 text-center space-y-4"
          >
            <p className="text-charcoal/70">You can also reach me directly at:</p>
            <p className="text-gold tracking-[0.15em]">contact@sarahchen.art</p>
          </motion.div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Inquire 