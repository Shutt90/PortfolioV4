import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react'
import Modal from '../containers/Modal';
import styles from '/styles/navbar.module.css'

function Navbar() {
  const [modalOpen, setModalOpen] = useState(false);

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
        <nav className="nav">
            <Link href={'/'}><a><Image alt="ShuttJS Logo" src="/myLogo-transparent.png" width="360" height="120"/></a></Link>
            <div>
              <Link href={'/'}><a className={styles.link}>{'Home'}</a></Link>
              <Link href={'/about'}><a className={styles.link}>{'About'}</a></Link>
              <Link href={'/projects'}><a className={styles.link}>{'Projects'}</a></Link>
              <Link href={'/blog'}><a className={styles.link}>{'Blog'}</a></Link>
              <Link href={'/contact'}><a className={styles.link}>{'Contact'}</a></Link>
            </div>
        </nav>
      </div>
    </>
  )
}

export default Navbar;
