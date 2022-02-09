import { motion } from 'framer-motion';
import Backdrop from '/containers/Backdrop';
import LoginForm from '/containers/LoginForm'
import styles from '/styles/modal.module.css'

const dropIn = {
    hidden: {
        y: "-100vh",
        opacity: 0,
    },
    visible: {
        y: "0",
        opacity: 1,
        transition: {
        duration: 0.1,
        type: "spring",
        damping: 25,
        stiffness: 500,
        zIndex: 101,
        },
    },
    exit: {
        y: "100vh",
        opacity: 0,
    },
};

const Modal = ({ handleClose, text, type , title, content}) => {

    return (
        type === 'login' ? 
        <Backdrop onClick={handleClose}>
            <motion.div
            onClick={(e) => e.stopPropagation()}  
            className={styles.container}
            variants={dropIn}
            initial="hidden"
            animate="visible"
            exit="exit"
            >
                <LoginForm />
            </motion.div>
        </Backdrop>
        :
        <Backdrop onClick={handleClose}>
        <motion.div
        onClick={(e) => e.stopPropagation()}  
        className={styles.container}
        variants={dropIn}
        initial="hidden"
        animate="visible"
        exit="exit"
        >
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.content}>{content}</p>
        </motion.div>
    </Backdrop>

    );
};


export async function getServerSideProps() {
    const projects = await prisma.projects.findOne(id);
    return {
      props: {
        projects: projects,
      },
    };
  }

export default Modal;
