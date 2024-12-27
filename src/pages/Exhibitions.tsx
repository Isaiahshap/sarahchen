import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const exhibitions = {
  upcoming: [
    {
      title: "Urban Rhythms Solo Exhibition",
      date: "March 15 - April 30, 2024",
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
  ],
  past: [
    {
      title: "New York Contemporary",
      date: "Summer 2023",
      location: "Gagosian Gallery, NYC",
      description: "Group exhibition featuring emerging NYC artists",
      image: "/exhibition4.webp"
    }
  ]
}

const Exhibitions = () => {
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
            Exhibitions
          </motion.h1>

          {/* Upcoming Exhibitions */}
          <section className="mb-32">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm tracking-[0.3em] text-gold mb-16 text-center transform-gpu"
            >
              UPCOMING EXHIBITIONS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {exhibitions.upcoming.map((exhibition) => (
                <motion.div
                  key={exhibition.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="group transform-gpu"
                >
                  <div className="will-change-transform aspect-[3/2] overflow-hidden mb-8">
                    <img 
                      loading="lazy"
                      decoding="async"
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-cormorant text-2xl text-charcoal mb-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-sm tracking-[0.2em] text-gold mb-4">{exhibition.date}</p>
                  <p className="text-charcoal/70 mb-2">{exhibition.location}</p>
                  <p className="text-charcoal/70">{exhibition.description}</p>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Past Exhibitions */}
          <section>
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              className="text-sm tracking-[0.3em] text-gold mb-16 text-center transform-gpu"
            >
              PAST EXHIBITIONS
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
              {exhibitions.past.map((exhibition, index) => (
                <motion.div
                  key={exhibition.title}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.5 }}
                  className="group transform-gpu"
                >
                  <div className="will-change-transform aspect-[3/2] overflow-hidden mb-8 opacity-80">
                    <img 
                      loading="lazy"
                      decoding="async"
                      src={exhibition.image}
                      alt={exhibition.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-all duration-700"
                    />
                  </div>
                  <h3 className="font-cormorant text-2xl text-charcoal mb-2">
                    {exhibition.title}
                  </h3>
                  <p className="text-sm tracking-[0.2em] text-gold mb-4">{exhibition.date}</p>
                  <p className="text-charcoal/70 mb-2">{exhibition.location}</p>
                  <p className="text-charcoal/70">{exhibition.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default Exhibitions 