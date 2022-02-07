import { AnimatePresence } from 'framer-motion';
import Modal from '../components/Modal';
import '../styles/globals.css'


function MyApp({ Component, pageProps }) {
  return (
    <>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
