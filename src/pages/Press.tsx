import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const pressItems = [
  {
    title: "The New York Times: Rising Stars in Abstract Art",
    date: "January 2024",
    excerpt: "Sarah Chen's work bridges the gap between traditional abstract expressionism and contemporary urban influences...",
    link: "#",
    image: "/press1.jpg"
  },
  {
    title: "ArtForum: New Perspectives in Contemporary Art",
    date: "December 2023",
    excerpt: "Chen's latest exhibition at Chelsea Modern Gallery showcases her masterful understanding of color and form...",
    link: "#",
    image: "/press2.jpg"
  }
]

const Press = () => {
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
            Press
          </motion.h1>

          <div className="grid grid-cols-1 gap-16">
            {pressItems.map((item, index) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.5 }}
                className="group grid md:grid-cols-2 gap-8 items-center transform-gpu"
              >
                <div className="will-change-transform aspect-[16/9] overflow-hidden">
                  <img 
                    loading="lazy"
                    decoding="async"
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                  />
                </div>
                
                <div className="space-y-4">
                  <p className="text-sm tracking-[0.2em] text-gold">{item.date}</p>
                  <h2 className="font-cormorant text-3xl text-charcoal">{item.title}</h2>
                  <p className="text-charcoal/70">{item.excerpt}</p>
                  <a 
                    href={item.link}
                    className="inline-block text-gold hover:text-charcoal transition-colors duration-300"
                  >
                    Read More →
                  </a>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Press 