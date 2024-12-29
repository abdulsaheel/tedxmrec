'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const InteractiveMap = () => {
  const [showInfo, setShowInfo] = useState(false)

  return (
    <div className="relative w-full h-96 bg-gray-800 rounded-lg overflow-hidden">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3805.3631641890803!2d78.58026631487756!3d17.49916088801612!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9c7e0000000f%3A0x2a8bef8a5f11f0b0!2sMalla%20Reddy%20Engineering%20College!5e0!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
      ></iframe>
      <motion.div
        className="absolute bottom-4 right-4 bg-white text-black p-2 rounded-full cursor-pointer"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setShowInfo(!showInfo)}
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      </motion.div>
      {showInfo && (
        <motion.div
          className="absolute bottom-16 right-4 bg-white text-black p-4 rounded-lg shadow-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
        >
          <h3 className="font-bold mb-2">Event Location</h3>
          <p>Malla Reddy Engineering College</p>
          <p>Maisammaguda, Dhulapally</p>
          <p>Secunderabad, Telangana 500100</p>
        </motion.div>
      )}
    </div>
  )
}

export default InteractiveMap

