import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Modal from '../containers/Modal';
import styles from '/styles/navbar.module.css'

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

  const [width, setWidth] = useState(0)

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
        <Link href='/'><a className={styles.link}><p className={styles.navText}>Home</p><Image alt="Home Icon" width="50" height="50" src="/static/home.svg"></Image></a></Link>
        <Link href='/about'><a className={styles.link}><p className={styles.navText}>About</p><Image alt="Home Icon" width="50" height="50" src="/static/about.svg"></Image></a></Link>
        <Link href='/projects'><a className={styles.link}><p className={styles.navText}>Projects</p><Image alt="Home Icon" width="50" height="50" src="/static/projects.svg"></Image></a></Link>
        <Link href='/blog'><a className={styles.link}><p className={styles.navText}>Blog</p><Image alt="Home Icon" width="50" height="50" src="/static/blog.svg"></Image></a></Link>
        <Link href='/contact'><a className={styles.link}><p className={styles.navText}>Contact</p><Image alt="Home Icon" width="50" height="50" src="/static/contact.svg"></Image></a></Link>
      </nav>
     </>
  )
}

export default Navbar;
