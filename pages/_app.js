import '../styles/globals.css'
import ScrollObserver from '../utils/scroll-observer'
import { useScroll, useSpring, motion } from 'framer-motion';
import SizeObserver from '../utils/size-observer';

function MyApp({ Component, pageProps }) {

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <SizeObserver>
      <ScrollObserver>
        <motion.div style={{
          scaleX,
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          height: '5px',
          background: '#FE824F',
          transformOrigin: '0%',
          zIndex: 100
        }} />
        <Component {...pageProps} />
      </ScrollObserver>
    </SizeObserver>
  )
}

export default MyApp
