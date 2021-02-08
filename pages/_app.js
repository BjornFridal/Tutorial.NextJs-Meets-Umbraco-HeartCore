import { motion } from 'framer-motion';
import '../styles/globals.css';
import 'tailwindcss/tailwind.css';

function MyApp({ Component, pageProps, router }) {
  return (
    <motion.div
      key={router.pathname}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.1 }}
    >
      <Component {...pageProps} />
    </motion.div>
  );
}

export default MyApp;
