import { motion } from 'framer-motion'
import {useState} from 'react';
import React from 'react'
import Image from 'next/image';
import styles from '/styles/navitem.module.css';
import Link from 'next/link';

export default function NavItem({text, image, alt, link}) {
const [width, setWidth] = useState(0)

  return (
      <Link passHref={true} href={link}>
        <motion.a className={styles.link} whileHover={() => setWidth(75)} onHoverEnd={e => setWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: width + 'px'}} className={styles.navText}>
            {text}
            </motion.p>
            <Image alt={alt} width="30" height="30" className={styles.navImage} src={image}/>
        </motion.a>
      </Link>
  )
}
