import { motion } from 'framer-motion';
import Backdrop from './Backdrop';

function Modal({ handleClose, text }) {
  return (
    <Backdrop onClick={ handleClose } >
        <motion.div
        onClick={(e) => e.stopPropagation()}
        className="modal"
        varients={dropIn}>
            {text}

        </motion.div>
    </Backdrop>

)
}

export default Modal;
