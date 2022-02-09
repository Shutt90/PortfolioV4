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
        <div className={styles.topright}>
          <h5 onClick={() => modalOpen ? close() : open() } className={styles.toprightTxt}>Login</h5>
          <AnimatePresence
          // Disable any initial animations on children that
          // are present when the component is first rendered
          initial={false}
          // Only render one component at a time.
          // The exiting component will finish its exit
          // animation before entering component is rendered
          exitBeforeEnter={true}
        // Fires when all exiting nodes have completed animating out
          onExitComplete={() => null}
      >
        {modalOpen && <Modal type={'login'} modalOpen={modalOpen} handleClose={close} />}
    </AnimatePresence>
        </div>
        <nav className="nav">
            <Link href={'/'}><a><Image src="/myLogo-transparent.png" width="360" height="120"/></a></Link>
            <div>
              <Link href={'/'}><a className={styles.link}>{'Home'}</a></Link>
              <Link href={'/projects'}><a className={styles.link}>{'Projects'}</a></Link>
              <Link href={'/blog'}><a className={styles.link}>{'Blog'}</a></Link>
              <Link href={'/contact'}><a className={styles.link}>{'Contact'}</a></Link>
            </div>
        </nav>
      </>
  )
}

export default Navbar;
