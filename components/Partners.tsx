'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const partners = [
  { name: "Tickets99", role: "Ticketing Partner", logo: "/images/partners/tickets99.png" },
  { name: "Jute Earth", role: "Gifting Partner", logo: "/images/partners/jute-earth.png" },
  { name: "AAA Business Solution", role: "Signage Partner", logo: "/images/partners/aaa-business.png" },
  { name: "Chitrakarulu Studios", role: "Photography Partner", logo: "/images/partners/chitrakarulu.png" }
]

const Partners = () => {
  return (
    <section id="partners" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Event Partners
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center"
            >
              <Image src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-4" />
              <h3 className="text-xl font-semibold text-center mb-2">{partner.name}</h3>
              <p className="text-red-500 text-center">{partner.role}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Partners

