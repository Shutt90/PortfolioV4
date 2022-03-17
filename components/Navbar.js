import { AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import Modal from '../containers/Modal';
import styles from '/styles/navbar.module.css'
import {motion} from 'framer-motion';
import NavItem from './NavItem';
import { useState, useEffect } from 'react';


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
      </div>
      <Link href={'/'}><a><Image alt="ShuttJS Logo" src="/myLogo-transparent.png" width="360" height="120"/></a></Link>
      <nav className={styles.nav}>
        <NavItem image='/static/home.svg' alt="Home Icon" text="Home" link='/'/>
        <NavItem image='/static/about.svg' alt="About Icon" text="About" link='/about'/>        
        <NavItem image='/static/projects.svg' alt="Projects Icon" text="Projects" link='/projects'/>        
        <NavItem image='/static/blog.svg' alt="Blog Icon" text="Blog" link='/blog'/>        
        <NavItem image='/static/contact.svg' alt="Contact Icon" text="Contact" link='/contact'/>        
      </nav>
     </>
  )
}

export default Navbar;
