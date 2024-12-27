import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const collections = [
  {
    name: "Urban Reflections",
    year: "2023-2024",
    description: "A series exploring the interplay of light and architecture in NYC",
    pieces: [
      { title: "Urban Symphony No. 7", image: "/artwork1.jpg" },
      { title: "Midnight in Manhattan", image: "/artwork2.jpg" },
      { title: "Brooklyn Dawn", image: "/artwork3.jpg" },
      { title: "Concrete Dreams", image: "/artwork4.jpg" }
    ]
  },
  {
    name: "Abstract Emotions",
    year: "2022-2023",
    description: "Exploring human emotions through abstract forms and colors",
    pieces: [
      { title: "Joy in Motion", image: "/artwork5.jpg" },
      { title: "Melancholy Blues", image: "/artwork6.jpg" },
      { title: "Serenity", image: "/artwork7.jpg" }
    ]
  }
]

const Portfolio = () => {
  return (
    <div className="bg-cream min-h-screen">
      <Navbar />
      
      <main className="pt-32 pb-20">
        <div className="max-w-[1400px] mx-auto px-8">
          <motion.h1 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="font-cormorant text-5xl text-charcoal mb-16 text-center"
          >
            Collections
          </motion.h1>

          {collections.map((collection) => (
            <motion.section 
              key={collection.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5 }}
              className="mb-32 transform-gpu"
            >
              <div className="mb-12">
                <h2 className="font-cormorant text-3xl text-charcoal mb-4">{collection.name}</h2>
                <p className="text-sm tracking-[0.2em] text-gold mb-4">{collection.year}</p>
                <p className="text-charcoal/70">{collection.description}</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {collection.pieces.map((piece) => (
                  <motion.div 
                    key={piece.title}
                    whileHover={{ scale: 1.02 }}
                    className="group cursor-pointer transform-gpu"
                  >
                    <div className="will-change-transform aspect-[4/3] overflow-hidden mb-4">
                      <img 
                        loading="lazy"
                        decoding="async"
                        src={piece.image} 
                        alt={piece.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                      />
                    </div>
                    <h3 className="font-cormorant text-xl text-charcoal">{piece.title}</h3>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Portfolio 