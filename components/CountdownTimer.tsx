'use client'

import { useState, useEffect } from 'react'

const CountdownTimer = ({ targetDate }: { targetDate: string }) => {
  interface TimeLeft {
    days?: number;
    hours?: number;
    minutes?: number;
    seconds?: number;
  }

  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft: TimeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = Object.keys(timeLeft).map((interval) => {
    const key = interval as keyof TimeLeft;
    if (!timeLeft[key]) {
      return null;
    }

    return (
      <span className="text-2xl font-bold mx-2" key={interval}>
        {timeLeft[key]} {interval}{" "}
      </span>
    );
  });

  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-4">Event Starts In:</h2>
      {timerComponents.length ? timerComponents : <span className="text-2xl font-bold">Time's up!</span>}
    </div>
  )
}

export default CountdownTimer

