'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const TweetWall = () => {
  interface Tweet {
    id: number;
    user: string;
    content: string;
  }
  
  const [tweets, setTweets] = useState<Tweet[]>([])

  useEffect(() => {
    // In a real application, you would fetch tweets from an API
    const mockTweets = [
      { id: 1, user: '@user1', content: 'Excited for #TEDxMREC! Can\'t wait to hear all the amazing speakers.' },
      { id: 2, user: '@user2', content: 'Just registered for #TEDxMREC. See you all there!' },
      { id: 3, user: '@user3', content: 'The "Seeds of Social Chain" theme sounds intriguing. #TEDxMREC' },
    ]
    setTweets(mockTweets)
  }, [])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {tweets.map((tweet) => (
        <motion.div
          key={tweet.id}
          className="bg-gray-800 p-4 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="font-bold mb-2">{tweet.user}</p>
          <p>{tweet.content}</p>
        </motion.div>
      ))}
    </div>
  )
}

export default TweetWall

