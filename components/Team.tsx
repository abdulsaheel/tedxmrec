'use client'

import { motion } from 'framer-motion'

const teamMembers = [
  { name: "Abdul Saheel", role: "Licensed TEDx Organizer", description: "A cinema enthusiast with a passion for tech trends." },
  { name: "Mittapalli Ashiesh", role: "Co-organizer", description: "Entrepreneurial logistics expert." },
  { name: "Nancheri Sowmya (Joy)", role: "Design Lead", description: "Bringing ideas to life with stunning visuals." },
  { name: "Anirudh Gummadi", role: "Creative Director", description: "Infusing the event with energy and innovation." },
  { name: "Chakshitha Reddy", role: "PR Expert", description: "Crafting enthusiast ensuring strong community ties." },
  { name: "Dasari Vashist Kumar", role: "Photography and Video Lead", description: "Capturing every moment with expertise." }
]

const Team = () => {
  return (
    <section id="team" className="py-20 bg-black">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Organizing Team
        </motion.h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="bg-gray-900 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-2">{member.name}</h3>
              <p className="text-red-500 mb-4">{member.role}</p>
              <p className="text-gray-400">{member.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team

