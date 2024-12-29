'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = ['About', 'Speakers', 'Schedule', 'Team', 'Partners']

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black bg-opacity-50 backdrop-blur-md">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <a href="#" className="text-2xl font-bold text-red-500">TEDxMREC</a>
        <nav className="hidden md:flex space-x-6">
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="text-white hover:text-red-500 transition duration-300">
              {item}
            </a>
          ))}
          <a href="#" className="bg-red-500 text-white px-4 py-2 rounded-full hover:bg-red-600 transition duration-300">
            Register Now
          </a>
        </nav>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-white">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden bg-black bg-opacity-95 py-4"
        >
          {navItems.map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="block text-center py-2 text-white hover:text-red-500 transition duration-300">
              {item}
            </a>
          ))}
          <a href="#" className="block text-center py-2 mt-2 bg-red-500 text-white hover:bg-red-600 transition duration-300">
            Register Now
          </a>
        </motion.div>
      )}
    </header>
  )
}

export default Header

