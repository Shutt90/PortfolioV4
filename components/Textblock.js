import Button from "./Button";
import styles from '../styles/textblock.module.css'
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Modal from "./Modal";

function Textblock({subtitle, paragraph}) {
  const [modalOpen, setModalOpen] = useState(false);

  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);

  return (
    
    <div className={styles.container}>
      <h3 className={styles.subtitle}>{subtitle}</h3>
      <p className={styles.paragraph}>{paragraph}</p>
      <p>{modalOpen ? 'open' : 'closed' }</p>
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
        {modalOpen && <Modal modalOpen={modalOpen} handleClose={close} />}
    </AnimatePresence>


    </div>
  )
}

export default Textblock;
