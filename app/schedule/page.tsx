'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const scheduleData = [
  { time: "9:00 AM - 9:30 AM", event: "Check-in and Networking", description: "Arrive early to check in, collect your badge, and start networking with fellow attendees." },
  { time: "9:30 AM - 10:00 AM", event: "Opening Ceremony and Welcome Address", description: "Our host will kick off the event with an inspiring welcome address, setting the tone for the day." },
  { time: "10:00 AM - 12:00 PM", event: "Morning Speaker Sessions", description: "Engage with our first set of speakers as they share their groundbreaking ideas and experiences." },
  { time: "12:00 PM - 1:00 PM", event: "Lunch Break and Interactive Exhibits", description: "Enjoy a delicious lunch while exploring our interactive exhibits and connecting with other attendees." },
  { time: "1:00 PM - 3:00 PM", event: "Afternoon Speaker Sessions", description: "Our second set of speakers takes the stage, offering more thought-provoking talks and discussions." },
  { time: "3:00 PM - 4:00 PM", event: "Performances and Panel Discussions", description: "Experience captivating performances and engage in stimulating panel discussions on various topics." },
  { time: "4:00 PM - 5:00 PM", event: "Closing Remarks and Networking Mixer", description: "Wrap up the day with closing remarks and a final opportunity to network and reflect on the ideas shared." }
]

export default function Schedule() {
  const [expandedItem, setExpandedItem] = useState<number | null>(null)

  return (
    <div className="min-h-screen pt-24 pb-12 px-4">
      <motion.h1
        className="text-4xl md:text-6xl font-bold mb-12 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Event Schedule
      </motion.h1>
      <div className="max-w-3xl mx-auto">
        {scheduleData.map((item, index) => (
          <motion.div
            key={index}
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
          >
            <motion.div
              className="bg-gray-800 p-6 rounded-lg cursor-pointer"
              whileHover={{ scale: 1.02 }}
              onClick={() => setExpandedItem(expandedItem === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">{item.time}</h2>
                <motion.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  animate={{ rotate: expandedItem === index ? 180 : 0 }}
                >
                  <polyline points="6 9 12 15 18 9"></polyline>
                </motion.svg>
              </div>
              <p className="text-red-500 mt-2">{item.event}</p>
            </motion.div>
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{
                height: expandedItem === index ? 'auto' : 0,
                opacity: expandedItem === index ? 1 : 0,
              }}
              transition={{ duration: 0.3 }}
              className="bg-gray-700 p-6 rounded-b-lg overflow-hidden"
            >
              <p className="text-gray-300">{item.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

