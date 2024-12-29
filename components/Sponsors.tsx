'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const sponsors = [
  { name: 'Sponsor 1', logo: '/sponsors/sponsor1.png' },
  { name: 'Sponsor 2', logo: '/sponsors/sponsor2.png' },
  { name: 'Sponsor 3', logo: '/sponsors/sponsor3.png' },
  { name: 'Sponsor 4', logo: '/sponsors/sponsor4.png' },
]

const Sponsors = ({ scrollY }: { scrollY: number }) => {
  return (
    <section id="sponsors" className="py-20 px-4 md:px-0">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">Our Sponsors</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {sponsors.map((sponsor, index) => (
            <motion.div
              key={sponsor.name}
              className="bg-white bg-opacity-10 p-6 rounded-lg flex items-center justify-center"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05 }}
            >
              <Image src={sponsor.logo} alt={sponsor.name} className="max-w-full max-h-24" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Sponsors

