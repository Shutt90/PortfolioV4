import { motion } from 'framer-motion'
import React, {useState} from 'react'

function LinkedinIcon({className}) {

  const [topColor, setTopColor] = useState('#000')
  const [bottomColor, setBottomColor] = useState('#000')

  function setStrava(state) {
    if(state === 'blank') {
      setTopColor('#F35001')
      setBottomColor('#F3A682')
    } else {
      setTopColor('#000')
      setBottomColor('#000')
    }
  }

  return (
    <a href="https://www.strava.com/athletes/68916308">
      <motion.svg className={className}
      onHoverStart={(e) => setStrava('blank')}
      onHoverEnd={(e) => setStrava()}
      viewBox="0 0 63 63"
      xmlns="http://www.w3.org/2000/svg" >
        <motion.path d="M41.03 47.852l-5.572-10.976h-8.172L41.03 64l13.736-27.124h-8.18" fill={topColor} />
        <motion.path d="M27.898 21.944l7.564 14.928h11.124L27.898 0 9.234 36.876H20.35" fill={bottomColor}/>
      </motion.svg>
    </a>
    )
}

export default LinkedinIcon