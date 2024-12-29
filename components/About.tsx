'use client'

import { motion } from 'framer-motion'

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-8 text-center"
        >
          About the Event
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-center"
        >
          Welcome to TEDxMREC, an independently organized TED event hosted at Malla Reddy Engineering College. This year's theme, "Seeds of Social Chain," celebrates the interconnectedness of humanity, diversity, and the profound impact of unity.
        </motion.p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { title: "Explore Inspiring Ideas", description: "Engage with thought-provoking talks across diverse themes." },
            { title: "Discover Insights", description: "Learn about groundbreaking innovations and stories that matter." },
            { title: "Forge Connections", description: "Network with experts, visionaries, and like-minded individuals." },
            { title: "Experience Unique Entertainment", description: "Immerse yourself in a blend of captivating performances and enlightening narratives." },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 * index }}
              className="bg-gray-800 p-6 rounded-lg"
            >
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p>{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default About

