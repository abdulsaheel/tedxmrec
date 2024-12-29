'use client'

import { motion } from 'framer-motion'
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

const Speakers = () => {
  return (
    <section id="speakers" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Speakers Lineup
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {speakers.map((speaker, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900 rounded-lg overflow-hidden"
            >
              <Image src={speaker.image} alt={speaker.name} className="w-full h-64 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{speaker.name}</h3>
                <p className="text-red-500 mb-4">{speaker.role}</p>
                <p className="text-gray-400">{speaker.bio}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Speakers

