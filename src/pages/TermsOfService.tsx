import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import { motion } from 'framer-motion'

const TermsOfService = () => {
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
            Terms of Service
          </motion.h1>

          <div className="prose prose-lg max-w-none">
            <p className="text-charcoal/70 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

            <section className="mb-12">
              <h2 className="font-cormorant text-2xl text-charcoal mb-4">Agreement to Terms</h2>
              <p className="text-charcoal/70 mb-4">
                By accessing and using this website, you agree to be bound by these Terms of Service
                and all applicable laws and regulations.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="font-cormorant text-2xl text-charcoal mb-4">Intellectual Property</h2>
              <p className="text-charcoal/70 mb-4">
                All content on this website, including but not limited to artwork images, text, 
                and design elements, is the property of Sarah Chen and is protected by copyright 
                and other intellectual property laws.
              </p>
            </section>

            {/* Add more sections as needed */}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default TermsOfService 