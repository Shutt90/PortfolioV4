import Image from 'next/image'
import React from 'react'
import styles from '/styles/searchbar.module.css'
import { motion } from 'framer-motion'

function SearchBar() {
  return (
    <motion.div
    className={styles.container}>
        <motion.input 
        initial={{x: 180}}
        whileHover={{x: 0}} 
        whileFocus={{x: 0}}
        type="text" placeholder="Search Projects" className={styles.search}></motion.input>
    </motion.div>
  )
}

export default SearchBar