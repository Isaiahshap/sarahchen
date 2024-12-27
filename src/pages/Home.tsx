import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Footer from '../components/Footer'
import { motion, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8, ease: "easeOut" }
}

const exhibitions = [
  {
    title: "Urban Rhythms Solo Exhibition",
    date: "March 15 - April 30, 2025",
    location: "Chelsea Modern Gallery, NYC",
    description: "A comprehensive showcase of recent works exploring urban landscapes",
    image: "/exhibition1.webp"
  },
  {
    title: "Abstract Narratives Group Show",
    date: "May 10 - June 20, 2025",
    location: "MoMA PS1, Queens",
    description: "Featured artist in contemporary abstract expressionism exhibition",
    image: "/exhibition2.webp"
  },
  {
    title: "Summer Contemporary Festival",
    date: "July 1 - August 15, 2025",
    location: "Brooklyn Art Center",
    description: "Group exhibition featuring emerging NYC artists",
    image: "/exhibition3.webp"
  }
]

const artworks = [
  {
    title: "Urban Symphony No. 7",
    year: "2024",
    medium: "Oil on Canvas",
    size: "60\" x 48\"",
    image: "/artwork1.jpg"
  },
  {
    title: "Midnight in Manhattan",
    year: "2023",
    medium: "Mixed Media",
    size: "72\" x 60\"",
    image: "/artwork2.jpg"
  },
  {
    title: "Brooklyn Dawn",
    year: "2023",
    medium: "Acrylic and Gold Leaf",
    size: "48\" x 48\"",
    image: "/artwork3.jpg"
  }
]

const Home: React.FC = () => {
  const { scrollYProgress } = useScroll()
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      <Hero />
      
      {/* Artist Statement */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="pt-32 pb-20 px-8 transform-gpu"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm tracking-[0.3em] text-gold mb-24 text-center"
          >
            ARTIST STATEMENT
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="space-y-6 md:space-y-8 transform-gpu"
            >
              <h3 className="font-cormorant text-4xl md:text-5xl text-charcoal">Creating Visual Poetry</h3>
              <p className="text-charcoal/70 leading-relaxed">
                My work explores the intersection of urban architecture and human emotion, 
                capturing the pulse of New York City through abstract expressionism. Each piece 
                is a meditation on the city's rhythm, translating concrete and steel into fluid 
                movements of color and light.
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="flex gap-6 justify-center pt-2"
              >
                <Link to="/about">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    className="px-8 py-3 border border-gold text-gold hover:bg-gold hover:text-cream transition-all duration-500"
                  >
                    READ MORE
                  </motion.button>
                </Link>
              </motion.div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="will-change-transform aspect-[4/5] overflow-hidden mt-8 md:mt-0"
            >
              <img
                loading="lazy"
                decoding="async"
                src="/sarah.webp"
                alt="Sarah Chen in her studio"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Recent Works */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-32 px-8 bg-white transform-gpu"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-sm tracking-[0.3em] text-gold mb-24 text-center"
          >
            RECENT WORKS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {artworks.map((artwork, index) => (
              <motion.div 
                key={artwork.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/5] overflow-hidden mb-8">
                  <img
                    src={artwork.image}
                    alt={artwork.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="font-cormorant text-2xl text-charcoal mb-2">
                  {artwork.title}
                </h3>
                <p className="text-sm text-charcoal/70">{artwork.year} - {artwork.medium}</p>
                <p className="text-sm tracking-[0.2em] text-gold mt-2">{artwork.size}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Upcoming Exhibitions */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-32 px-8 bg-cream transform-gpu"
      >
        <div className="max-w-[1400px] mx-auto">
          <motion.h2 
            {...fadeInUp}
            className="text-sm tracking-[0.3em] text-gold mb-24 text-center"
          >
            UPCOMING EXHIBITIONS
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {exhibitions.map((exhibition, index) => (
              <motion.div 
                key={exhibition.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[3/2] overflow-hidden mb-8">
                  <img
                    src={exhibition.image}
                    alt={exhibition.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                <h3 className="font-cormorant text-2xl text-charcoal mb-2">
                  {exhibition.title}
                </h3>
                <p className="text-sm tracking-[0.2em] text-gold mb-2">{exhibition.date}</p>
                <p className="text-sm text-charcoal/70">{exhibition.location}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Newsletter/Contact Section */}
      <motion.section 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        className="py-32 px-8 bg-white transform-gpu"
      >
        <div className="max-w-[800px] mx-auto text-center">
          <motion.h2 
            {...fadeInUp}
            className="text-sm tracking-[0.3em] text-gold mb-8"
          >
            STAY CONNECTED
          </motion.h2>
          
          <h3 className="font-cormorant text-4xl text-charcoal mb-6">
            Join My Creative Journey
          </h3>
          
          <p className="text-charcoal/70 mb-12">
            Subscribe to receive updates about new works, exhibitions, and exclusive events.
          </p>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-charcoal/70 mb-12"
            >
              <p className="text-2xl font-cormorant text-gold mb-4">Thank you for subscribing!</p>
              <p>Welcome to my creative journey. You'll receive updates soon.</p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-4 justify-center">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="px-6 py-3 border border-charcoal/20 focus:border-gold outline-none w-full md:w-[400px]"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-3 bg-gold text-cream hover:bg-charcoal transition-all duration-500"
              >
                SUBSCRIBE
              </motion.button>
            </form>
          )}
        </div>
      </motion.section>

      <Footer />
    </div>
  )
}

export default Home
