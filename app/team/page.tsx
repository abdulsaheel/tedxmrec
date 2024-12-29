'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

const teamMembers = [
  {
    name: 'Abdul Saheel',
    role: 'Licensed TEDx Organizer',
    description: 'The licensed TEDx organizer with a love for cinema and tech trends.',
    imgSrc: '/images/abdul-saheel.png',
  },
  {
    name: 'Mittapalli Ashiesh',
    role: 'Co-organizer & Logistics Expert',
    description: 'Co-organizer and entrepreneurial logistics expert.',
    imgSrc: '/images/ashiesh.jpg',
  },
  {
    name: 'Nancheri Sowmya (Joy)',
    role: 'Design Lead',
    description: 'Design lead bringing ideas to life with stunning visuals.',
    imgSrc: '/images/sowmya.jpg',
  },
  {
    name: 'Anirudh Gummadi',
    role: 'Creative Director',
    description: 'Creative director infusing the event with energy and innovation.',
    imgSrc: '/images/anirudh.jpg',
  },
  {
    name: 'Chakshitha Reddy',
    role: 'PR Expert & Crafter',
    description: 'PR expert and crafting enthusiast ensuring strong community ties.',
    imgSrc: '/images/chakshitha.jpg',
  },
  {
    name: 'Dasari Vashist Kumar',
    role: 'Photography & Video Maestro',
    description: 'Photography and video maestro capturing every moment.',
    imgSrc: '/images/vashist.jpg',
  },
]

const OrganizingTeam = () => {
  const styles = {
    container: {
      backgroundColor: 'hsl(0, 0%, 10%)', // Dark background
      paddingTop: '5rem',
      paddingBottom: '5rem',
      paddingLeft: '3rem',
      paddingRight: '3rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    heading: {
      textAlign: 'center' as React.CSSProperties['textAlign'],
      fontSize: '3rem',
      fontWeight: '800',
      color: 'hsl(0, 0%, 100%)', // Light color for headings
      marginBottom: '4rem',
    },
    gridContainer: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', // Flexible grid
      gap: '2rem',
      maxWidth: '1200px',
    },
    card: {
      position: 'relative',
      overflow: 'hidden',
      borderRadius: '1.5rem',
      cursor: 'pointer',
      height: '450px', // Portrait aspect ratio
      border: '2px solid rgba(255, 255, 255, 0.1)', // Light border to separate the cards
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.3)', // Subtle shadow for a more elevated effect
    },
    image: {
      width: '100%',
      height: '100%',
      objectFit: 'cover',
      transition: 'transform 0.5s ease',
    },
    info: {
      position: 'absolute',
      bottom: '0',
      left: '0',
      right: '0',
      padding: '2rem',
      backgroundColor: 'rgba(0, 0, 0, 0.6)', // Dark overlay
      color: 'white',
      opacity: 0,
      transition: 'opacity 0.3s ease',
      borderRadius: '0 0 1.5rem 1.5rem',
      textAlign: 'center',
    },
    cardHovered: {
      transform: 'scale(1.1)', // Slight zoom effect on hover
    },
    infoHovered: {
      opacity: 1, // Show info on hover
    },
    name: {
      fontSize: '1.75rem', // Larger name font size
      fontWeight: '700',
      marginBottom: '1rem',
    },
    role: {
      fontSize: '1.25rem', // Slightly larger role text
      fontWeight: '600',
      marginBottom: '1.5rem',
    },
    description: {
      fontSize: '1rem',
      fontWeight: '400',
    },
  }

  return (
    <div style={styles.container as React.CSSProperties}>
      <h2 style={styles.heading}>Organizing Team Highlights</h2>
      <div style={styles.gridContainer}>
        {teamMembers.map((member, index) => (
          <motion.div
            key={index}
            style={styles.card as React.CSSProperties}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <Image
              src={member.imgSrc}
              alt={member.name}
              style={styles.image as React.CSSProperties}
            />
            <motion.div
              style={{ ...styles.info, opacity: 0 } as React.CSSProperties}
              whileHover={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            >
              <h3 style={styles.name}>{member.name}</h3>
              <p style={styles.role}>{member.role}</p>
              <p style={styles.description}>{member.description}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default OrganizingTeam
