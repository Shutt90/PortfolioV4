import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Modal from '../containers/Modal';
import styles from '/styles/navbar.module.css'
import {motion} from 'framer-motion';

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  //Refactor later
  const [homeWidth, setHomeWidth] = useState(0)
  const [aboutWidth, setAboutWidth] = useState(0)
  const [projectsWidth, setProjectsWidth] = useState(0)
  const [blogWidth, setBlogWidth] = useState(0)
  const [contactWidth, setContactWidth] = useState(0)

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (

    <>
      <div>
        <div className={styles.topright}>
          <h5 onClick={() => modalOpen ? close() : open() } className={styles.toprightTxt}>Login</h5>
          <AnimatePresence
          initial={false}
          exitBeforeEnter={true}
          onExitComplete={() => null}
          >
            {modalOpen && <Modal type={'login'} modalOpen={modalOpen} handleClose={close} />}
          </AnimatePresence>
        </div>
      </div>
      <Link href={'/'}><a><Image alt="ShuttJS Logo" src="/myLogo-transparent.png" width="360" height="120"/></a></Link>
      <nav className={styles.nav}>
        <Link href='/'>
          <motion.a className={styles.link} whileHover={() => setHomeWidth(75)} onHoverEnd={e => setHomeWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: homeWidth + 'px'}} className={styles.navText}>
              Home
            </motion.p>
            <Image alt="Home Icon" width="30" height="30" className={styles.navImage} src="/static/home.svg"/>
          </motion.a>
        </Link>
        <Link href='/about'>
          <motion.a className={styles.link} whileHover={() => setAboutWidth(75)} onHoverEnd={e => setAboutWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: aboutWidth + 'px'}} className={styles.navText}>
              About
            </motion.p>
            <Image alt="Home Icon" width="30" height="30" className={styles.navImage} src="/static/about.svg"/>
          </motion.a>
        </Link>
        <Link href='/projects'>
          <motion.a className={styles.link} whileHover={() => setProjectsWidth(75)} onHoverEnd={e => setProjectsWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: projectsWidth + 'px'}} className={styles.navText}>
              Projects
            </motion.p>
            <Image alt="Home Icon" fill="#fff" width="30" height="30" className={styles.navImage} src="/static/projects.svg"/>
          </motion.a>
        </Link>
        <Link href='/blog'>
          <motion.a className={styles.link} whileHover={() => setBlogWidth(75)} onHoverEnd={e => setBlogWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: blogWidth + 'px'}} className={styles.navText}>
              Blog
            </motion.p>
            <Image alt="Home Icon" width="30" height="30" className={styles.navImage} src="/static/blog.svg"/>
          </motion.a>
        </Link>
        <Link href='/contact'>
          <motion.a className={styles.link} whileHover={() => setContactWidth(75)} onHoverEnd={e => setContactWidth(0)}>
            <motion.p initial={{width: 0}} animate={{width: contactWidth + 'px'}} className={styles.navText}>
              Contact
            </motion.p>
            <Image alt="Home Icon" width="30" height="30" className={styles.navImage} src="/static/contact.svg"/>
          </motion.a>
        </Link>
      </nav>
     </>
  )
}

export default Navbar;
