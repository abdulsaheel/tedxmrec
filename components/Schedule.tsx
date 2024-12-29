'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const scheduleData = [
  { time: "9:00 AM - 9:30 AM", event: "Check-in and Networking" },
  { time: "9:30 AM - 10:00 AM", event: "Opening Ceremony and Welcome Address" },
  { time: "10:00 AM - 12:00 PM", event: "Morning Speaker Sessions" },
  { time: "12:00 PM - 1:00 PM", event: "Lunch Break and Interactive Exhibits" },
  { time: "1:00 PM - 3:00 PM", event: "Afternoon Speaker Sessions" },
  { time: "3:00 PM - 4:00 PM", event: "Performances and Panel Discussions" },
  { time: "4:00 PM - 5:00 PM", event: "Closing Remarks and Networking Mixer" }
]

const Schedule = () => {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <section id="schedule" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold mb-12 text-center"
        >
          Event Schedule
        </motion.h2>
        <div className="max-w-3xl mx-auto">
          {scheduleData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 * index }}
              className="mb-4"
            >
              <div
                className="bg-gray-800 p-4 rounded-lg cursor-pointer"
                onClick={() => setExpandedItem(expandedItem === index ? null : index)}
              >
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">{item.time}</h3>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transform transition-transform ${expandedItem === index ? 'rotate-180' : ''}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
              <AnimatePresence>
                {expandedItem === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="bg-gray-700 p-4 rounded-b-lg mt-1"
                  >
                    <p>{item.event}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Schedule

