import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const About = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-cormorant text-5xl text-charcoal mb-16 text-center transform-gpu"
          >
            About Sarah Chen
          </motion.h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-32">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="space-y-6 transform-gpu"
            >
              <p className="text-charcoal/70 leading-relaxed">
                Born and raised in New York City, Sarah Chen's artistic journey is deeply intertwined 
                with the urban landscape that surrounds her. Her work explores the intersection of 
                architectural forms and human emotion, translating the city's energy into abstract 
                expressions on canvas.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                After graduating from the School of Visual Arts in 2018, Chen quickly established 
                herself in the contemporary art scene with her distinctive style that bridges 
                traditional abstract expressionism with modern urban influences.
              </p>
              <p className="text-charcoal/70 leading-relaxed">
                Her studio in Brooklyn serves as both workspace and inspiration, where the 
                industrial architecture and changing light inform her creative process.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="will-change-transform aspect-[3/4] overflow-hidden transform-gpu"
            >
              <img 
                loading="lazy"
                decoding="async"
                src="/sarah2.webp"
                alt="Sarah Chen in her Brooklyn studio"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          </div>

          {/* Contact Section */}
          <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            className="text-center max-w-2xl mx-auto transform-gpu"
          >
            <h2 className="text-sm tracking-[0.3em] text-gold mb-8">CONTACT</h2>
            <p className="text-charcoal/70 mb-8">
              For inquiries about artworks, exhibitions, or press opportunities, 
              please contact:
            </p>
            <div className="space-y-2">
              <p className="text-charcoal">Studio Visits by Appointment</p>
              <p className="text-gold">contact@sarahchen.art</p>
              <p className="text-charcoal">Brooklyn, New York</p>
            </div>
          </motion.section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default About 