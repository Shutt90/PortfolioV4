import Layout from '../containers/Layout';
import '../styles/globals.css';
import { AnimatePresence, motion, LayoutGroup} from 'framer-motion';
import { useEffect, useState} from 'react';

function MyApp({ Component, pageProps, router }) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    loading
    ? document.querySelector("body").classList.add("loading")
    : document.querySelector("body").classList.remove("loading")
  }, [loading])

  return (
      <Layout>
          <AnimatePresence exitBeforeEnter>
            <motion.div key={router.route}
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
              x: 0,
              transition: {
                type: 'tween',
                ease: 'easeOut',
                duration: 0.5
              },
            }}
            exit={{
              opacity: 0,
              duration: 0.5,
              ease: 'easeOut'
            }}
            onAnimationComplete={(e) => setLoading(false)}
            > 
              <Component {...pageProps} />
            </motion.div>

          </AnimatePresence>
      </Layout>
  );
}

export default MyApp

