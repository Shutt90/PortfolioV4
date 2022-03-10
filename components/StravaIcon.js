import { motion } from 'framer-motion'
import React from 'react'

function LinkedinIcon({className}) {
  return (
    <motion.svg whileHover={{fill: '#0077b5'}} className={className} viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg" >
      <path d="M41.03 47.852l-5.572-10.976h-8.172L41.03 64l13.736-27.124h-8.18" fill="#f9b797"/><path d="M27.898 21.944l7.564 14.928h11.124L27.898 0 9.234 36.876H20.35" fill="#f05222"/>
    </motion.svg>
    )
}

export default LinkedinIcon