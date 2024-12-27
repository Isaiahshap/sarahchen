import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const PrivacyPolicy = () => {
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
            Privacy Policy
          </motion.h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-12">
              <h2 className="font-cormorant text-2xl text-charcoal mb-4">Information Collection</h2>
              <p className="text-charcoal/70 mb-4">
                We collect information you provide directly to us when you:
              </p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2 mb-4">
                <li>Submit inquiries about artworks</li>
                <li>Sign up for our newsletter</li>
                <li>Contact us for any reason</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="font-cormorant text-2xl text-charcoal mb-4">Use of Information</h2>
              <p className="text-charcoal/70 mb-4">
                We use the information we collect to:
              </p>
              <ul className="list-disc pl-6 text-charcoal/70 space-y-2">
                <li>Respond to your inquiries</li>
                <li>Send updates about exhibitions and new works</li>
                <li>Improve our website and services</li>
              </ul>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default PrivacyPolicy 