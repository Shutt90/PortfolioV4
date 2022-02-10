import { motion } from 'framer-motion';
import Link from 'next/link';
import React from 'react';
import styles from '/styles/blogpost.module.css'

const blogVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 1,
    }
  }, whileHover: {
    scale: 1.2,
    x: -10000,
    transition: {
      x: { duration: 1000, ease: 'linear'}
    }
  },
}

function BlogPost({titleText, bodyText}) {
  return (
    <>
    <div>
      <motion.div
      variants={blogVariants}
      className={styles.row}
      initial="hidden"
      animate="visible"
      whileHover="whileHover"
      whileFocus="whileFocus"
      >
        <Link href="/">
          <a className={styles.text}>{titleText}, {bodyText}</a>
          </Link>    
      </motion.div>
    </div>
    </>
    );
}

export default BlogPost;
