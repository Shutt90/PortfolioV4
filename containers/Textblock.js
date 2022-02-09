import Button from "/components/Button";
import styles from '../styles/textblock.module.css'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";

function Textblock({title, content}) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    
    <div className={styles.container}>
      <h3 className={styles.title}>{title}</h3>
      <p className={styles.content}>{content}</p>
      <Button
      onClick={() => modalOpen ? close() : open() }
      text={'See More'}
      href={'/projects'}/>
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
        {modalOpen && <Modal title={title} content={content} modalOpen={modalOpen} handleClose={close} />}
    </AnimatePresence>


    </div>
  )
}

export default Textblock;
