'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'

const speakers = [
  {
    name: "Ravi Teja Mahadasyam",
    role: "Storyteller and Actor",
    bio: "A storyteller and actor whose journey from short films to feature films like \"Two Souls\" and \"Sagileti Katha\" captures the essence of passion and perseverance in cinema.",
    image: "/images/speakers/ravi-teja.jpg"
  },
  {
    name: "Sai Rajesh",
    role: "Acclaimed Filmmaker",
    bio: "Acclaimed filmmaker behind \"Hrudaya Kaleyam,\" \"Color Photo,\" and more. Rajesh shares his creative process and insights into crafting narratives that evoke deep emotions.",
    image: "/images/speakers/sai-rajesh.jpg"
  },
  {
    name: "Aye Jude (Ajay Hanumanthu)",
    role: "Fashion Influencer",
    bio: "A fashion influencer and lifestyle guru who turned setbacks into stepping stones, inspiring millions through his digital content and personal brand.",
    image: "/images/speakers/aye-jude.jpg"
  },
  {
    name: "Naveen Chary",
    role: "Natural Fitness Advocate",
    bio: "A natural fitness advocate whose journey emphasizes achieving health through dedication, authenticity, and grit.",
    image: "/images/speakers/naveen-chary.jpg"
  },
  {
    name: "Satish Varma",
    role: "Founder of Melbourne MAMA",
    bio: "Founder of Melbourne MAMA, a platform supporting Indian students in Australia while bridging cultural and professional communities through storytelling.",
    image: "/images/speakers/satish-varma.jpg"
  },
  {
    name: "Farmer Nethra (Nethra Reddy)",
    role: "Organic Farming Visionary",
    bio: "An organic farming visionary and aviation graduate who combines sustainable agriculture with artistic pursuits, embodying versatility and passion.",
    image: "/images/speakers/farmer-nethra.jpg"
  },
  {
    name: "RJ Bhargavi",
    role: "Radio Personality",
    bio: "A dynamic radio personality and motivational speaker with a legacy of impactful storytelling and community engagement.",
    image: "/images/speakers/rj-bhargavi.jpg"
  }
]

export default function Speakers() {
  interface Speaker {
    name: string;
    role: string;
    bio: string;
    image: string;
  }
  
  const [selectedSpeaker, setSelectedSpeaker] = useState<Speaker | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Our Speakers
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {speakers.map((speaker, index) => (
          <motion.div
            key={speaker.name}
            className="bg-gray-800 rounded-lg overflow-hidden cursor-pointer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setSelectedSpeaker(speaker)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <Image src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover" />
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{speaker.name}</h2>
              <p className="text-red-500 mb-4">{speaker.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
      {selectedSpeaker && (
        <motion.div
          className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            className="bg-gray-900 rounded-lg p-8 max-w-2xl w-full"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
          >
            <Image src={selectedSpeaker.image} alt={selectedSpeaker.name} className="w-32 h-32 rounded-full mx-auto mb-6 object-cover" />
            <h2 className="text-3xl font-semibold mb-2 text-center">{selectedSpeaker.name}</h2>
            <p className="text-red-500 mb-4 text-center">{selectedSpeaker.role}</p>
            <p className="text-gray-300 mb-6">{selectedSpeaker.bio}</p>
            <button
              onClick={() => setSelectedSpeaker(null)}
              className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mx-auto block"
            >
              Close
            </button>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

