import { motion } from 'framer-motion';
import React from 'react';
import styles from '/styles/blogpost.module.css'

function BlogPost() {
  return (
    <motion.div
    className={styles.row}
    initial={{x: -100, opacity: 0}}
    animate={{x: 0, opacity: 100, duration: 2, stagger: 0.5}}
    >
        <h1>TESTING 1234</h1> 
    </motion.div>
    );
}

export default BlogPost;
