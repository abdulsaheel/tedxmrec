'use client'

import { motion } from 'framer-motion'

const partners = [
  { name: "Tickets99", role: "Ticketing Partner", logo: "/images/partners/tickets99.png" },
  { name: "Jute Earth", role: "Gifting Partner", logo: "/images/partners/jute-earth.png" },
  { name: "AAA Business Solution", role: "Signage Partner", logo: "/images/partners/aaa-business.png" },
  { name: "Chitrakarulu Studios", role: "Photography Partner", logo: "/images/partners/chitrakarulu.png" }
]

export default function Partners() {
  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Partners
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        {partners.map((partner, index) => (
          <motion.div
            key={partner.name}
            className="bg-gray-800 p-6 rounded-lg flex flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
          >
            <img src={partner.logo} alt={partner.name} className="w-32 h-32 object-contain mb-4" />
            <h2 className="text-xl font-semibold mb-2">{partner.name}</h2>
            <p className="text-red-500">{partner.role}</p>
          </motion.div>
        ))}
      </div>
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-2xl font-semibold mb-4">Become a Partner</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          Interested in becoming a partner for TEDxMREC? We're always looking for organizations that share our vision and want to support the spread of ideas. Contact us to learn more about partnership opportunities.
        </p>
        <a
          href="mailto:partnerships@tedxmrec.com"
          className="bg-red-600 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
        >
          Contact Us
        </a>
      </motion.div>
    </div>
  )
}

